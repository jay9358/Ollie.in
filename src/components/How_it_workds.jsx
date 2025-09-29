import React, { useState } from 'react';

// Active color scheme
const activeColors = {
  bg: 'bg-[#8ca34f]',
  iconBg: 'bg-white',
  iconText: 'text-[#8ca34f]',
  text: 'text-white',
  descriptionText: 'text-stone-100',
};

const steps = [
  {
    title: 'Define your business goal',
    description:
      'Protect margins or lift revenue — Ollie optimizes toward your critical KPI (ARPU, attach rate, conversion, retention) under your guardrails.',
    image: '/assets/graph1.jpeg', // replace with your image path
  },
  {
    title: 'Load your lever library',
    description:
      'Discounts, upsells, bundles, loyalty boosts, reassurance messages. Ollie connects to your CRM, CMS, and promo systems so every lever is on the table.',
    image: '/assets/graph2.png', // replace with your image path
  },
  {
    title: 'Real-time arbitration',
    description:
      'Every user, every session, every trigger: Ollie decides which lever to fire — or hold back — balancing uplift vs. margin risk.',
    image: '/assets/graph3.png', // replace with your image path
  },
  {
    title: 'Continuous learning',
    description:
      'No static journeys. Ollie updates policies as user behavior, inventory, and market conditions shift. You get audit trails and alerts when baselines change.',
    image: '/assets/graph4.png', // replace with your image path
  },
];

const inactiveColors = {
  bg: 'bg-white border border-stone-200',
  iconText: 'text-white',
  text: 'text-stone-900',
  descriptionText: 'text-stone-600',
};

const iconInactiveBgs = ['bg-[#000000]', 'bg-[#000000]', 'bg-[#000000]'];

const HowItWorksSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-stone-900">
            How AI decisioning works
          </h2>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="block lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const inactiveStyle = {
                ...inactiveColors,
                iconBg: iconInactiveBgs[index],
              };
              const styles = isActive ? activeColors : inactiveStyle;

              return (
                <div key={index}>
                  {/* Step Card */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(e) =>
                      (e.key === 'Enter' || e.key === ' ') &&
                      setActiveIndex(index)
                    }
                    className={`p-4 sm:p-6 rounded-2xl flex items-start space-x-4 sm:space-x-5 transition-all duration-300 ease-in-out cursor-pointer ${styles.bg} ${
                      isActive
                        ? 'shadow-lg scale-[1.02]'
                        : 'hover:shadow-md hover:scale-[1.01]'
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-colors duration-300 ${styles.iconBg}`}
                    >
                      <span className={styles.iconText}>{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg sm:text-xl transition-colors duration-300 ${styles.text}`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`mt-1 text-sm sm:text-base transition-colors duration-300 ${styles.descriptionText}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Image below active step */}
                  {isActive && (
                    <div className="mt-4 mb-6 animate-fade-in">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-2">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const inactiveStyle = {
                ...inactiveColors,
                iconBg: iconInactiveBgs[index],
              };
              const styles = isActive ? activeColors : inactiveStyle;

              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) =>
                    (e.key === 'Enter' || e.key === ' ') &&
                    setActiveIndex(index)
                  }
                  className={`p-6 rounded-2xl flex items-start space-x-5 transition-all duration-300 ease-in-out cursor-pointer ${styles.bg} ${
                    isActive
                      ? 'shadow-lg scale-105'
                      : 'hover:shadow-md hover:scale-[1.02]'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${styles.iconBg}`}
                  >
                    <span className={styles.iconText}>{index + 1}</span>
                  </div>
                  <div>
                    <h3
                      className={`text-xl transition-colors duration-300 ${styles.text}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-1 transition-colors duration-300 ${styles.descriptionText}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image preview */}
          <div className="relative p-6 xl:p-8 from-stone-50 to-stone-100 rounded-3xl min-h-[400px] xl:min-h-[500px] flex items-center justify-center transition-all duration-500 ease-in-out">
            <div key={activeIndex} className="w-full max-w-full animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
                <img
                  src={steps[activeIndex].image}
                  alt={steps[activeIndex].title}
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
