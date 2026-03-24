import React from 'react';

interface PageBannerProps {
    title: string;
    image?: string;
    subTitle?: string;
}

const defaultImage = "/assets/standingorders.svg";

const PageBanner: React.FC<PageBannerProps> = ({ title, image = defaultImage, subTitle }) => {
    return (
        <section className="w-full flex justify-center bg-white">
            <div className="w-full max-w-[1282px] px-4">
                <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <div
                        className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                        style={{
                            backgroundImage: `url(${image})`,
                            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                            maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                        }}
                    />
                    <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                    <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                        <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4">
                            {title}
                        </h1>
                        {subTitle && (
                            <h2 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8 opacity-80">
                                {subTitle}
                            </h2>
                        )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                </div>
            </div>
        </section>
    );
};

export default PageBanner;
