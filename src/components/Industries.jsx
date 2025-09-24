import React, { useState, useEffect, useMemo } from 'react';
import { industryData } from '../Constants';

const personaPositions = [
    { top: 0, left: '10%', rotation: -3, zIndex: 20 },
    { top: 220, left: '35%', rotation: 2, zIndex: 30 },
    { top: 440, left: '20%', rotation: -1, zIndex: 20 },
];

// An estimated height for a persona card to calculate required container space
const CARD_ESTIMATED_HEIGHT = 350; // px

const IndustrySection= () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndustry = industryData[activeIndex];

    // State to track viewport width for responsive logic
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate the required container height dynamically for the desktop floating layout
    const personaContainerHeight = useMemo(() => {
        if (!isDesktop || activeIndustry.personas.length === 0) {
            return undefined;
        }
        const lastPersonaIndex = Math.min(activeIndustry.personas.length - 1, personaPositions.length - 1);
        const lastPersonaTop = personaPositions[lastPersonaIndex].top;
        
        return lastPersonaTop + CARD_ESTIMATED_HEIGHT;
    }, [activeIndustry.personas.length, isDesktop]);

    return (
        <section id="industries" className="bg-stone-100 py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl tracking-tighter text-stone-900">
                        Ollie finds the optimal action
                        <div><span className='text-[#99bc43]'>for every customer,</span> <span className='italic'>in every industry.</span> </div>
                    </h2>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {industryData.map((industry, index) => (
                        <button
                            key={industry.name}
                            onClick={() => setActiveIndex(index)}
                            className={`px-6 py-3 font-semibold rounded-full text-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ca34f] ${
                                activeIndex === index
                                ? 'bg-[#8ca34f] text-white shadow-md'
                                : 'bg-white text-stone-700 hover:bg-stone-200'
                            }`}
                        >
                            {industry.name}
                        </button>
                    ))}
                </div>

                <div key={activeIndex} className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-xl animate-fade-in">

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-16">
                        
                        <div className="lg:col-span-3">
                                   <div 
                                className="relative min-h-[500px] lg:min-h-0"
                                style={{ minHeight: personaContainerHeight ? `${personaContainerHeight}px` : undefined }}
                            >
                                {/* Decorative Shapes */}
                                <>
                                    <div className="hidden lg:block absolute top-[-20px] left-[5%] w-24 h-40 border-l-[16px] border-b-[16px] border-purple-400 rounded-bl-3xl opacity-80 z-10" style={{ transform: 'rotate(-15deg)' }}></div>
                                    <div className="hidden lg:block absolute top-[25%] right-[-5%] w-48 h-48 bg-green-200/80 rounded-tl-full rounded-bl-full rounded-br-full z-0" style={{ transform: 'rotate(20deg)' }}></div>
                                    <div className="hidden lg:block absolute bottom-[5%] left-[30%] w-28 h-28 bg-orange-300/90 rounded-full z-0"></div>
                                </>

                                {activeIndustry.personas.map((persona, index) => {
                                    const position = personaPositions[index % personaPositions.length];

                                    return (
                                        <div 
                                            key={persona.name}
                                            className="mb-6 lg:absolute lg:mb-0 transition-all duration-500"
                                            style={{
                                                top: isDesktop ? `${position.top}px` : 'auto',
                                                left: isDesktop ? position.left : 'auto',
                                                transform: isDesktop ? `rotate(${position.rotation}deg)`: 'none',
                                                zIndex: position.zIndex,
                                            }}
                                        >
                                            <div className="bg-white rounded-2xl shadow-xl p-5 flex items-start gap-5 w-full max-w-md lg:w-max transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl hover:!z-50">
                                                <img src={persona.image} alt={persona.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover flex-shrink-0" />
                                                <div className="flex-grow">
                                                    <p className="font-bold text-stone-900">{persona.name}</p>
                                                    <p className="text-xs text-stone-500 mb-3">{persona.role}</p>
                                                    <div className="grid grid-cols-[max-content,1fr] gap-x-4 gap-y-2 items-center text-sm">
                                                        {persona.details.map(detail => (
                                                            <React.Fragment key={detail.label}>
                                                                <span className="font-semibold text-stone-500 text-right">{detail.label}:</span>
                                                                <div>
                                                                    {detail.label.toLowerCase().includes('days') ? (
                                                                        <div className="flex flex-wrap gap-1.5 items-center">
                                                                            {detail.value.split(' · ').map(day => (
                                                                                <span key={day} className="text-xs px-2.5 py-1 border border-purple-300 rounded-full text-purple-800 font-medium bg-purple-50">{day}</span>
                                                                            ))}
                                                                        </div>
                                                                    ) : detail.label === 'Frequency' ? (
                                                                        <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold">{detail.value}</span>
                                                                    ) : (
                                                                        <span className="text-stone-700">{detail.value}</span>
                                                                    )}
                                                                </div>
                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6 lg:flex lg:flex-col lg:justify-center">
                           <div className="space-y-4">
                                {activeIndustry.useCases.map((useCase) => (
                                    <div key={useCase.title} className="bg-stone-50/80 p-5 rounded-2xl border border-stone-200/90 transition-shadow hover:shadow-md">
                                        <p className="font-semibold text-stone-800">{useCase.title}</p>
                                        <p className="text-stone-600 text-sm leading-relaxed">{useCase.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default IndustrySection;