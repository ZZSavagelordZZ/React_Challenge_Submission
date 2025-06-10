import React, { useEffect, useState } from 'react';
import { Skip } from '@/types/skip';
import SkipCard from './SkipCard';
import SelectedSkipBar from './SelectedSkipBar';

const SkipList = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        if (!response.ok) {
          throw new Error('Failed to fetch skips');
        }
        const data = await response.json();
        setSkips(data);
      } catch (err) {
        setError('Failed to load skip data. Please try again later.');
        console.error('Error fetching skips:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSkipSelect = (skipId: number) => {
    setSelectedSkipId(selectedSkipId === skipId ? null : skipId);
  };

  const handleContinue = () => {
    // This will be implemented later to handle the next step
    console.log('Continuing with skip:', selectedSkipId);
  };

  const handleBack = () => {
    setSelectedSkipId(null);
  };

  const selectedSkip = skips.find(skip => skip.id === selectedSkipId);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-red-50 p-4 rounded-lg">
        <p className="text-red-600 text-center">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 pb-24">
        {skips
          .sort((a, b) => a.size - b.size)
          .map(skip => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={skip.id === selectedSkipId}
              onSelect={() => handleSkipSelect(skip.id)}
            />
          ))}
      </div>
      <SelectedSkipBar
        selectedSkip={selectedSkip || null}
        onContinue={handleContinue}
        onBack={handleBack}
      />
    </>
  );
};

export default SkipList; 