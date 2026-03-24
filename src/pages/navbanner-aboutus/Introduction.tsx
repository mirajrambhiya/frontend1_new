import React from 'react';
import AboutUsBanner from '../AboutUs.tsx';
import Banner from '../navbanner-aboutus.tsx';
const years = "/assets/50years.svg";




const objectives = [
    {
        id: '01',
        text: 'To prevent, control and abate environmental pollution in the State',
    },
    {
        id: '02',
        text: 'To promote cleaner production processes and technologies',
    },
    {
        id: '03',
        text: 'To ensure sustainable development with environ-mental considerations',
    },
    {
        id: '04',
        text: 'To create environmental awareness among public and industries',
    },
    {
        id: '05',
        text: 'To enforce environmental laws and regulations effectively',
    },
];


const Introduction: React.FC = () => {

    return (
        <>
            <AboutUsBanner />
            <Banner bannerSection="introduction" />
            <section className="w-full flex justify-center py-8 md:py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4 flex flex-col md:flex-row gap-8 md:gap-12">

                    {/* --- LEFT SIDEBAR --- */}
                    <div className="w-full md:w-[300px] flex flex-col items-center md:items-start gap-4 shrink-0 mt-[-5px]">
                        {/* Logo - Ensuring responsive size */}
                        <img src={years} alt="50years" className='w-[200px] md:w-[339px] h-auto md:h-[302px] object-contain' />
                    </div>

                    {/* --- RIGHT MAIN CONTENT --- */}
                    <div className="flex-1 flex flex-col gap-8 md:gap-12 text-center md:text-left">

                        {/* About MPCB Section */}
                        <div>
                            <h2 className="text-[28px] md:text-[40px] font-bold text-black mb-4 md:mb-6">About MPCB</h2>
                            <div className="flex flex-col gap-4 md:gap-6 text-base md:text-lg text-gray-500 leading-relaxed w-full md:w-[700px]">
                                <p>
                                    Maharashtra Pollution Control Board was established on 7th September, 1970 under the provisions of Maharashtra Prevention of Water Pollution Act, 1969. The Water (P&CP) Act, 1974 that is a central legislation was adopted in Maharashtra on 01/06/1981 and accordingly Maharashtra Pollution Control Board was formed under the provisions of section 4 of Water (P& CP) Act, 1974.
                                </p>
                                <p>
                                    The Air (P&CP) Act 1981 was adopted in the Maharashtra in 1983 and initially, some areas were declared as Air Pollution Control Area on 02/05/1983. The entire state of Maharashtra has been declared as Air Pollution Control Area since 06/11/1996. The Board is also functioning as the State Board under section 5 of the Air (P&CP) Act, 1981.
                                </p>
                            </div>
                        </div>

                        {/* Mission Section */}
                        <div>
                            <h2 className="text-[28px] md:text-[40px] font-bold text-black mb-4 md:mb-6">Misson</h2>
                            <p className="text-base md:text-lg text-gray-500 leading-relaxed w-full md:w-[700px]">
                                Improvement in the Board's functional efficiency, transparency in operation and adequate response to growing need of environmental protection and sustainable development in State of Maharashtra.
                            </p>
                        </div>

                        {/* Objectives Section */}
                        <div>
                            <p className="text-[28px] md:text-[40px] font-medium text-black mb-6 md:mb-8">Objectives</p>
                            {/* Flex Wrap for Responsive Grid (1 col on mobile, flexible on desktop) */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                {objectives.map((obj) => (
                                    <div key={obj.id} className="w-full md:w-[220px]">
                                        <div className="bg-blue-50 rounded-[24px] p-3 flex flex-col gap-4 h-[180px] md:h-[220px] w-full text-left">
                                            <span className="text-[60px] md:text-[100px] font-medium text-blue-200 leading-none ml-[10px]">{obj.id}</span>
                                            <p className="text-[#006fff] text-[14px] md:text-[16px] font-medium leading-snug ml-[8px]">{obj.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Introduction;