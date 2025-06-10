import React, { JSX } from 'react';

interface Step {
  id: number;
  name: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    id: 1,
    name: 'Postcode',
    status: 'completed',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Waste Type',
    status: 'completed',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Select Skip',
    status: 'current',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Permit Check',
    status: 'upcoming',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Choose Date',
    status: 'upcoming',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 6,
    name: 'Payment',
    status: 'upcoming',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  }
];

const ProgressBar = () => {
  return (
    <div className="w-full py-[2vw] sm:py-[1vw] px-[1vw] sm:px-[0.5vw] bg-white rounded-lg shadow-md">
      <nav aria-label="Progress">
        <ol className="flex items-center justify-between w-full">
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative flex flex-col items-center" style={{ width: `${100 / steps.length}%` }}>
              <div className="flex flex-col items-center">
                {/* Icon */}
                <span 
                  className={`
                    w-[8vw] h-[8vw] sm:w-[3.5vw] sm:h-[3.5vw] lg:w-[3vw] lg:h-[3vw] flex items-center justify-center rounded-full
                    transition-all duration-200 relative z-10
                    ${step.status === 'completed' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                    ${step.status === 'current' ? 'bg-emerald-500 ring-[0.3vw] ring-emerald-100' : ''}
                    ${step.status === 'upcoming' ? 'bg-gray-100' : ''}
                    ${step.status !== 'upcoming' ? 'text-white' : 'text-gray-400'}
                  `}
                  aria-current={step.status === 'current' ? 'step' : undefined}
                >
                  {step.status === 'completed' ? (
                    <svg className="w-[4vw] h-[4vw] sm:w-[1.8vw] sm:h-[1.8vw] lg:w-[1.5vw] lg:h-[1.5vw]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <div className="w-[4vw] h-[4vw] sm:w-[1.8vw] sm:h-[1.8vw] lg:w-[1.5vw] lg:h-[1.5vw] flex items-center justify-center">{step.icon}</div>
                  )}
                </span>

                {/* Step name */}
                <span
                  className={`
                    mt-[1vw] text-[2.2vw] sm:text-[1.4vw] lg:text-[0.9vw] font-medium text-center w-full px-[0.5vw] whitespace-nowrap
                    ${step.status === 'completed' ? 'text-emerald-600' : ''}
                    ${step.status === 'current' ? 'text-emerald-500' : ''}
                    ${step.status === 'upcoming' ? 'text-gray-500' : ''}
                  `}
                >
                  {step.name}
                </span>
              </div>

              {/* Connector line */}
              {stepIdx < steps.length - 1 && (
                <div 
                  className="absolute top-[4vw] sm:top-[1.75vw] lg:top-[1.5vw] left-[50%] w-[50%]"
                  aria-hidden="true"
                >
                  <div className="h-[0.3vw] sm:h-[0.2vw] relative w-full">
                    <div className="w-full h-full bg-gray-200"/>
                    <div
                      className={`
                        absolute inset-0 bg-emerald-500 transition-all duration-500
                        ${step.status === 'completed' ? 'w-full' : 'w-0'}
                      `}
                    />
                  </div>
                </div>
              )}
              {stepIdx > 0 && (
                <div 
                  className="absolute top-[4vw] sm:top-[1.75vw] lg:top-[1.5vw] right-[50%] w-[50%]"
                  aria-hidden="true"
                >
                  <div className="h-[0.3vw] sm:h-[0.2vw] relative w-full">
                    <div className="w-full h-full bg-gray-200"/>
                    <div
                      className={`
                        absolute inset-0 bg-emerald-500 transition-all duration-500
                        ${steps[stepIdx - 1].status === 'completed' ? 'w-full' : 'w-0'}
                      `}
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default ProgressBar; 