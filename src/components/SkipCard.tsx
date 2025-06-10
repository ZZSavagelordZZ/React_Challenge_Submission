import React, { useState, useRef } from 'react';
import { Skip } from '@/types/skip';
import Image from 'next/image';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skipId: number) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(skip.id);
  };

  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div 
      ref={cardRef}
      className={`
        relative bg-white rounded-lg overflow-hidden
        transition-all duration-300 ease-in-out
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        ${isExpanded ? 'shadow-lg' : 'shadow-md'}
      `}
    >
      <div 
        className={`
          absolute inset-0 bg-yellow-200 transition-all duration-900
          ${isSelected ? 'opacity-100' : 'opacity-0'}
        `}
      />
      
      <div className="relative" onClick={() => setIsExpanded(!isExpanded)}>
        {/* Existing card content */}
        <div className="p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
          <div className="relative w-[15vw] h-[15vw] sm:w-[10vw] sm:h-[10vw] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size >= 4 && skip.size <= 16 ? '10' : skip.size}-yarder-skip.jpg`}
              alt={`${skip.size} Yard Skip`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[4vw] sm:text-[2vw] font-semibold text-gray-900">{skip.size} Yard Skip</h3>
            <div className="mt-2 flex items-center gap-4">
              <p className="text-[3.5vw] sm:text-[1.8vw] font-medium text-gray-900">
                £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}
              </p>
              <span className="text-[2.5vw] sm:text-[1.2vw] text-gray-500">inc. VAT</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <svg 
                  className={`w-[4vw] h-[4vw] sm:w-[1.5vw] sm:h-[1.5vw] ${skip.allowed_on_road ? 'text-emerald-600' : 'text-gray-400'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-[2.5vw] sm:text-[1.2vw] text-gray-500">Road</span>
              </div>
              <div className="flex items-center gap-1">
                <svg 
                  className={`w-[4vw] h-[4vw] sm:w-[1.5vw] sm:h-[1.5vw] ${skip.allows_heavy_waste ? 'text-emerald-600' : 'text-gray-400'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-[2.5vw] sm:text-[1.2vw] text-gray-500">Heavy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded content */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out bg-gray-50
            ${isExpanded ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'}
          `}
        >
          <div className="p-3 sm:p-6 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="text-[3.5vw] sm:text-[1.5vw] font-medium text-gray-900">Skip Details</h4>
                <ul className="mt-3 space-y-2 text-[2.5vw] sm:text-[1.2vw] text-gray-600">
                  <li>• Size: {skip.size} cubic yards</li>
                  <li>• Hire Period: {skip.hire_period_days} days</li>
                  <li>• Road Placement: {skip.allowed_on_road ? 'Allowed' : 'Not allowed'}</li>
                  <li>• Heavy Waste: {skip.allows_heavy_waste ? 'Accepted' : 'Not accepted'}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[3.5vw] sm:text-[1.5vw] font-medium text-gray-900">Price Breakdown</h4>
                <ul className="mt-2 space-y-1 sm:space-y-2 text-[2.5vw] sm:text-[1.2vw] text-gray-600">
                  <li>• Base Price: £{skip.price_before_vat.toFixed(2)}</li>
                  <li>• VAT ({skip.vat}%): £{(skip.price_before_vat * (skip.vat / 100)).toFixed(2)}</li>
                  {skip.transport_cost && <li>• Transport Cost: £{skip.transport_cost.toFixed(2)}</li>}
                  {skip.per_tonne_cost && <li>• Per Tonne Cost: £{skip.per_tonne_cost.toFixed(2)}</li>}
                  <li className="font-medium">• Total: £{totalPrice.toFixed(2)}</li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col items-center space-y-4">
                <div className="relative w-full h-[30vw] sm:h-[15vw] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size >= 4 && skip.size <= 16 ? '10' : skip.size}-yarder-skip.jpg`}
                    alt={`${skip.size} Yard Skip`}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={handleSelect}
                  className={`
                    w-full sm:w-auto px-8 py-2 text-[2.5vw] sm:text-[1.2vw] font-medium rounded-md
                    transition-all duration-200
                    ${isSelected 
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-yellow-900' 
                      : 'bg-gray-500 text-white hover:bg-yellow-500'}
                  `}
                >
                  {isSelected ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipCard; 