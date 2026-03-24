import React from 'react';
// Using assets from public folder
const industry = "/assets/industry_full.png";

const AboutUsBanner: React.FC = () => {

    return (
        <>
            <section className="w-full flex justify-center bg-white font-family-helvetica">
                {/* 1282px Max-Width Container to match the rest of your site */}
                <div className="w-full max-w-[1282px] px-4">

                    {/* Main Banner Container: Responsive Height */}
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">

                        {/* LAYER 1: The Sharp Base Image */}
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${industry})` }}
                        />

                        {/* LAYER 2: The Gradual Blur Layer */}
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${industry})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />

                        {/* LAYER 3: The Blue/White Professional Gradient Overlay */}
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        {/* LAYER 4: Content Container */}
                        <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-0 md:mt-[-50px]">
                            <h1 className="text-[32px] md:text-[48px] font-bold text-[#000000] tracking-tight leading-none mb-2 md:mb-4">
                                About Us
                            </h1>
                            <p className="text-[14px] md:text-[18px] font-medium text-black opacity-90">
                                About Maharashtra Pollution Control Board
                            </p>
                        </div>

                        {/* Subtle Bottom Glow: Enhances the transition into the next component */}
                        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutUsBanner;