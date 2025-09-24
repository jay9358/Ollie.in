import React from 'react';
import { useFadeIn } from '../hooks/UseFadeIn';

const heroListItems = [
  'The right message',
  'The right product',
  'The right incentive',
  'The right channels',
  'The right timing',
  'The right frequency',
];

const HeroListItem = ({ text, isVisible }) => (
  <li
    className={`flex items-center space-x-3 transition-opacity duration-700 ease-in-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <svg
      className="flex-shrink-0 w-5 h-5 text-[#8ca34f]"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="text-xl text-stone-600">{text}</span>
  </li>
);

const HeroSection = () => {
  const visibleItems = useFadeIn(heroListItems.length, 250);

  return (
    <section className="container mx-auto px-6 py-[3rem]  ">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-16 items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl lg:text-5xl  tracking-tighter leading-tight ">
            Ollie brings every Marketer’s dream to life.
          </h1>

<ul className="grid grid-cols-1 gap-x-8 gap-y-4">
  {heroListItems.map((item, index) => (
    <HeroListItem
      key={item}
      text={item}
      isVisible={visibleItems[index]}
    />
  ))}
</ul>

          <div>
            <p className="text-2xl font-medium text-[#8ca34f]">
              ...for every customer
            </p>
            <p className="text-lg text-[#B4B39F] mt-1">
              (based on all your first-party data)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
