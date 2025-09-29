import React, { useEffect } from "react";

import Typed from "typed.js";


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




const HeroSection = () => {
  

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
    <section className="container mx-auto px-10 py-[9.5rem] leading-tight">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-20 items-center">
        <div className="flex flex-col space-y-[2rem]">
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
