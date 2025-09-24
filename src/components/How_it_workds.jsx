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
    title: 'Choose a success metric',
    description:
      'The AI decisioning agent will optimize your most critical business KPI.',
    image: '/assets/graph1.png', // replace with your image path
  },
  {
    title: 'Choose the actions the AI decisioning agent can take',
    description:
      'Agents choose channels, messages, offers, products, times and days to send, and frequencies of communication.',
    image: '/assets/graph2.png', // replace with your image path
  },
  {
    title: 'The AI decisioning agent finds the best actions for each individual',
    description:
      'The agent autonomously experiments and continuously learns from customer behavior.',
    image: '/assets/graph3.png', // replace with your image path
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
    <section id="how-it-works" className="py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl  tracking-tighter text-stone-900">
            How AI decisioning works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                      className={`text-xl font-bold transition-colors duration-300 ${styles.text}`}
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
          <div className=" p-4 sm:p-6 rounded-2xl min-h-[300px] lg:min-h-[400px] flex items-center justify-center transition-all duration-500 ease-in-out">
            <div key={activeIndex} className="w-full animate-fade-in shadow-2xl ">
              <img
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                className="w-full h-auto rounded-xl shadow-2xl "
              />
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
