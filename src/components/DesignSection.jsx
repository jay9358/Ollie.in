import React from "react";
import CardSwap, { Card } from "./CardSwap";

const cardData = [
  {
    id: 1,
    title: "AI-Powered Insights",
    description:
      "Uncover deep customer trends and predict future behavior with our intelligent analytics engine.",
  },
  {
    id: 2,
    title: "Personalized Journeys",
    description:
      "Automate unique, multi-channel experiences for every single customer at scale.",
  },
  {
    id: 3,
    title: "Maximized ROI",
    description:
      "Optimize spend by focusing on the highest-impact activities, proven by real-time results.",
  },
];

const DesignSection = () => {
  return (
    <section className="w-full px-6 py-24 overflow-hidden border-t border-b border-gray-200">
      {/* Container */}
      <div className="relative bg-white w-full px-8 lg:px-16 py-16 flex flex-col lg:flex-row items-center justify-around gap-12">
        
        {/* Left side text */}
        <div className="flex-1 max-w-lg space-y-8 text-center lg:text-left">
          {/* Badge */}

          {/* Heading */}
          <h1 className="text-[2rem] lg:text-5xl  leading-tight">
            <span className="text-foreground">
            Growth teams can finally make decisions
            </span>
            <br />
            <span className="text-[#99bc43] italic bg-clip-text ">for individuals,</span>
            <div className="text-[#99bc43] bg-clip-text relative"> not segments.
            </div>
          </h1>

          {/* Paragraph */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
          AI decisioning orchestrates 1:1 journeys on top of your existing stack
          </p>

          {/* Buttons */}
        </div>

        {/* Right side CardSwap */}
        <div className="relative mt-10 lg:mt-0 w-[300px] sm:w-[350px] lg:w-[400px] h-[300px] sm:h-[350px] lg:h-[400px] top-[-60px]">
          <CardSwap
            width={384}
            height={384}
            cardDistance={30}
            verticalDistance={30}
            delay={4000}
            skewAmount={6}
            easing="elastic"
          >
            {cardData.map((card) => (
              <Card
                key={card.id}
                className="bg-gradient-to-br from-[#e0f8a5] to-[#d9f19e] rounded-3xl shadow-2xl p-8 flex flex-col justify-end cursor-pointer"
              >
                <h3 className="text-2xl font-bold tracking-tight text-[#4a5c21]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[#5a7029] leading-relaxed">
                  {card.description}
                </p>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
 