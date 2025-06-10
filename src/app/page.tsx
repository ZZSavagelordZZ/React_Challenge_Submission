'use client';

import ProgressBar from '@/components/ProgressBar';
import SkipList from '@/components/SkipList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200">
      <div className="max-w-[90%] mx-6">
        <div className="py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-[4vw] sm:text-[2.5vw] font-bold text-emerald-600">WeWantWaste.co.uk</h2>
            <h1 className="text-[5vw] sm:text-[3vw] font-bold text-slate-800">Skip Hire</h1>
          </div>
          <ProgressBar />
          <div className="mt-8">
            <h2 className="text-[4vw] sm:text-[2vw] font-semibold text-slate-800 mb-4">Select Your Skip Size</h2>
            <p className="text-[3.5vw] sm:text-[1.5vw] text-slate-600 mb-6">
              Choose the skip size that best suits your needs. All prices include VAT and delivery.
            </p>
            <SkipList />
          </div>
        </div>
      </div>
    </main>
  );
}
