import React from "react";

const HighlightSection = ({ text = "" }) => {
  return (
    <section className="relative w-full py-[4rem] bg-[#e0f8a5] overflow-hidden flex items-center justify-center">
      {/* Optional: background shapes */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M50 200 L150 100 L250 200"
          stroke="#cde39e"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M100 300 L200 200 L300 300"
          stroke="#cde39e"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M200 100 L200 200 L300 300"
          stroke="#cde39e"
          strokeWidth="2"
          strokeLinecap="round"
        />
                <path
          d="M300 500 L300 240 L300 300"
          stroke="#cde39e"
          strokeWidth="2"
          strokeLinecap="round"
        />
             <path
          d="M500 200 L300 340 L300 300"
          stroke="#cde39e"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="L350 200 M50 300 L200 300"
          stroke="#cde39e"
          strokeWidth="2"
          strokeLinecap="round"
        />
                        <path
          d="M400 100 L300 240 L300 300"
          stroke="#cde39e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Centered text */}
      <div className="relative text-center max-w-xl px-6">
        <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black leading-snug">
          {text.split("*").map((part, i) =>
            i % 2 === 1 ? (
              <em key={i} className="italic">
                {part}
              </em>
            ) : (
              part
            )
          )}
        </p>
        <div className="mt-4 text-4xl animate-bounce" aria-hidden="true">
          ↓
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
