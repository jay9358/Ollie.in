import React, { useEffect } from "react";
import { useFadeIn } from "../hooks/UseFadeIn";
import Typed from "typed.js";

const heroListItems = [
  "The right message",
  "The right product",
  "The right incentive",
  "The right channels",
  "The right timing",
  "The right frequency",
];

const industryContent = {
  travel: {
    title: "The right trigger for every traveler",
    subtitle:
      "Ollie chooses the lever that converts",
    typedStrings: [
      "Discounts",
      "Add-ons",
      "Vouchers vs Miles",
      "Loyalty Programs",
      "Reassurance Messages",
    ],
  },
  hospitality: {
    title: "The right trigger for every guest",
    subtitle: "Ollie chooses the lever that converts",
    typedStrings: [
      "Room Upgrades",
      "Loyalty Perks",
      "Discounts",
      "Exclusive Deals",
      "Guest Rewards",
    ],
  },
  retail: {
    title: "The right trigger for every shopper",
    subtitle:
      "Ollie chooses the lever that converts",
    typedStrings: [
      "SKU Picks",
      "Product Bundles",
      "Targeted Discounts",
      "Free Shipping",
      "Loyalty Credits",
      "Fit & Returns Reassurance",
    ],
  },
  gaming: {
    title: "The right move for every player",
    subtitle:
      "Ollie is your LiveOps brain",
    typedStrings: [
      "Picking the best pack",
      "Rewards",
      "Boosts",
      "Season Passes",
      "Events",
      "Retention Strategies",
    ],
  },
  apps: {
    title: "Consumer Apps supercharged by Ollie.",
    subtitle: "Deliver experiences that users can’t resist.",
    typedStrings: [
      "User Journeys",
      "Push Notifications",
      "Personalized Recommendations",
      "Smart User Retention",
    ],
  },
};


const HeroListItem = ({ text, isVisible }) => (
  <li
    className={`flex items-center space-x-3 transition-opacity duration-700 ease-in-out ${
      isVisible ? "opacity-100" : "opacity-0"
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
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
           12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="text-xl text-stone-600">{text}</span>
  </li>
);

const HeroSection = () => {
  const visibleItems = useFadeIn(heroListItems.length, 250);

  // ✅ get industry param directly from URL
  const params = new URLSearchParams(window.location.search);
  const industry = params.get("industry") || "retail"; // fallback to retail
  const { title, subtitle, typedStrings } = industryContent[industry];

  // ✅ setup Typed.js
  useEffect(() => {
    const typed = new Typed("#typed2", {
      strings: typedStrings,
      typeSpeed: 50,
      backSpeed: 30,
      fadeOut: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [typedStrings]);

  return (
    <section className="container mx-auto px-6 py-[6rem] leading-tight">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-16 items-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl lg:text-5xl tracking-tighter leading-tight">
            {title}
          </h1>

          <p className="text-2xl  my-10 text-[#878787]">{subtitle}</p>




          {/* Typed.js text */}
          <div className="mt-6 text-2xl text-stone-700">
            <span id="typed2"></span>
          </div>
          <div > <p className="text-2xl font-medium text-[#8ca34f]"> across every platform </p> <p className="text-lg text-[#B4B39F] mt-1"> (based on all your first-party data) </p> </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
