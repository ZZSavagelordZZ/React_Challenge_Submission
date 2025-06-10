import React from 'react';
import { Skip } from '@/types/skip';

interface SelectedSkipBarProps {
  selectedSkip: Skip | null;
  onContinue: () => void;
  onBack: () => void;
}

const SelectedSkipBar: React.FC<SelectedSkipBarProps> = ({ selectedSkip, onContinue, onBack }) => {
  if (!selectedSkip) return null;

  const totalPrice = selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <p className="text-[1.5vw] sm:text-[0.8vw] text-gray-500 text-center truncate">
            Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-[3.5vw] sm:text-[1.5vw] font-semibold text-gray-900">{selectedSkip.size} Yard Skip</h3>
              <p className="text-[2.5vw] sm:text-[1.2vw] text-gray-500">{selectedSkip.hire_period_days} days hire</p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-200" />
            <div>
              <p className="text-[4vw] sm:text-[2vw] font-bold text-emerald-600">£{totalPrice.toFixed(2)}</p>
              <p className="text-[2.5vw] sm:text-[1.2vw] text-gray-500">Inc. VAT</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-[2.5vw] sm:text-[1.2vw] font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[3vw] w-[3vw] sm:h-[1.2vw] sm:w-[1.2vw] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back
            </button>
            <button
              onClick={onContinue}
              className="inline-flex items-center px-4 py-2 border border-transparent text-[2.5vw] sm:text-[1.2vw] font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            >
              Continue
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[3vw] w-[3vw] sm:h-[1.2vw] sm:w-[1.2vw] ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedSkipBar; 