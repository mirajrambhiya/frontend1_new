import React from 'react';
import { Link } from '@tanstack/react-router';
const whatsnewbg = "/assets/whatsnewbg.svg";

function WasteManagement() {
    const wasteTags = [
        "Updated Circular Economy Directory 2025",
        "Hazardous Waste",
        "Biomedical Waste",
        "Solid Waste Management",
        "Construction and Demolition Waste",
        "Common Effluent Treatment Plant",
        "Plastic Waste",
        "Electronic Waste",
        "Fly Ash",
        "Batteries",
        "Construction and Demolition Waste",
        "End-of-Life Vehicles"
    ];

    const tractorImg = "/assets/tractor.png";
    const recycleImg = "/assets/recycle.png";

    const wasteLinks = [
        "/waste-management/circular-economy",
        "/waste-management/hazardous-waste",
        "/waste-management/biomedical-waste",
        "/waste-management/solid-waste",
        "/waste-management/construction-demolition-waste",
        "/waste-management/common-effluent-treatment-plant",
        "/waste-management/plastic-waste",
        "/waste-management/electronic-waste",
        "/waste-management/fly-ash",
        "/waste-management/batteries",
        "/waste-management/construction-demolition-waste",
        "/waste-management/end-of-life-vehicles"
    ];

    const whatsNewItems = [
        {
            text: 'MPCB Participation in the "National Conference on Circular Economy and Sustainability", Bengaluru on 18th Nov 2025.',
            isNew: true
        },
        {
            text: 'MPCB Participation in the "National Conference on Circular Economy and Sustainability", Bengaluru on 18th Nov 2025.',
            isNew: true
        },
        {
            text: 'New Environmental Guidelines Published for Industrial Units.',
            isNew: true
        },
        {
            text: 'MPCB launches new online consent management portal.',
            isNew: false
        }
    ];

    const consentStatusItems = [
        {
            text: "Accessing Consent Copies from Date: 1st July 2016(Consents Applied Online & Gra…",
            link: "https://www.ecmpcb.in/cms"
        },
        {
            text: "Accessing Consent Copies Uptill Date: 30th June 2016",
            link: "/consent-status/accessing-consent"
        },
        {
            text: "Amended Consents of Coal based Thermal Power Plants",
            link: "/consent-status/amended-consents-thermal"
        },
        {
            text: "Amended Consents of Coal mines",
            link: "/consent-status/coal-mines"
        }
    ];

    const [activeTab, setActiveTab] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % wasteTags.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [activeTab, wasteTags.length]);

    return (
        <section className="w-full py-16 bg-white font-family-helvetica mt-[-40px]">
            {/* Custom scrollbar styles */}
            <style>{`
                .whats-new-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .whats-new-scroll::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
                .whats-new-scroll::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.4);
                    border-radius: 2px;
                }
                .whats-new-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.6);
                }
                .consent-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .consent-scroll::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.05);
                    border-radius: 2px;
                }
                .consent-scroll::-webkit-scrollbar-thumb {
                    background: rgba(0, 133, 226, 0.3);
                    border-radius: 2px;
                }
                .consent-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 133, 226, 0.5);
                }
            `}</style>

            <div className="max-w-[900px] mx-auto px-4">
                {/* Waste Management Header */}
                <div className="text-center mb-4">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-2 tracking-tight">Waste Management</h2>
                </div>

                {/* Tabs / Scrollable Menu */}
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 mb-8 px-4">
                    {wasteTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`
                                whitespace-nowrap px-6 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border
                                ${activeTab === index
                                    ? 'bg-[#2E7AF3] cursor-pointer text-white border-[#2E7AF3] shadow-[0_4px_10px_rgba(46,122,243,0.3)]'
                                    : 'bg-white cursor-pointer text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
                            `}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Featured Banner Card */}
                <div className="relative w-full rounded-[60px] overflow-hidden bg-[#EFF6FF] h-[350px] md:h-[380px] mb-16 group">

                    {/* Background Gradients/Decorations to match the soft blue look */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#EBF5FF] via-[#EBF5FF] to-transparent z-0" />

                    {/* Background Tractor Image */}
                    <div className="absolute right-[-60px] top-0 h-full w-[75%] md:w-[70%] z-0">
                        <img
                            src={tractorImg}
                            alt="Waste Management"
                            className="w-full h-full object-cover object-right"
                            style={{
                                maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
                            }}
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-[650px]">
                        <h3 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight">
                            {wasteTags[activeTab]}
                        </h3>

                        <Link
                            to={wasteLinks[activeTab] || '/'}
                            className="px-10 py-3.5 bg-[#2E7AF3] text-white text-[16px] font-semibold rounded-[14px] w-fit shadow-[0_4px_20px_rgba(46,122,243,0.3)] hover:bg-[#1a65d8] transition-all duration-300 cursor-pointer text-center inline-block"
                        >
                            Read More
                        </Link>
                    </div>

                    {/* Recycle Icon Overlay */}
                    <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center pointer-events-none">
                        <div className="w-[1000px] h-[1000px] flex items-center justify-center">
                            <img
                                src={recycleImg}
                                alt="Recycle"
                                className="w-full h-full object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
                        {wasteTags.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`
                                    h-2.5 rounded-full transition-all duration-300 cursor-pointer
                                    ${activeTab === idx ? 'w-10 bg-[#2E7AF3]' : 'w-2.5 bg-[#D1E5FF] hover:bg-[#2E7AF3]/50'}
                                `}
                            />
                        ))}
                    </div>
                </div>

                {/* What's New and Consent Status Grid */}
        <div className="flex flex-col justify-center md:flex-row gap-30 items-center md:items-center">
          {/* What's New Card */}
          <div className="w-full max-w-[350px] md:w-[280px] shrink-0 mx-auto md:mx-0">
            <div className="relative rounded-[20px] overflow-hidden flex flex-col bg-cover bg-center h-[420px]" style={{ backgroundImage: "url('/assets/whatsnewcard.png')" }}>
              {/* Header */}
              <div className="px-5 pt-6 pb-2 shrink-0">
                <h3 className="text-white text-[24px] md:text-[28px] font-bold leading-tight">
                  What&rsquo;s New
                </h3>
                <div className="h-[1px] bg-white/30 w-full mt-3"></div>
              </div>

              {/* Scrollable content area */}
              <div className="whats-new-scroll px-5 pb-14 space-y-4 overflow-y-auto flex-1 min-h-0">
                {whatsNewItems.map((item, index) => (
                  <div key={index} className="group">
                    <p className="text-white text-[13px] leading-[1.6] font-medium opacity-90 hover:opacity-100">
                      <span className="group-hover:underline transition-all decoration-white/80 underline-offset-2">
                        {item.text}
                      </span>
                      {item.isNew && (
                        <span className="ml-2 inline-flex align-middle">
                          <span className="text-[10px] text-red-500 bg-white px-1.5 py-0.5 rounded-[4px] font-bold shadow-sm">
                            New
                          </span>
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* View All button — pinned at bottom */}
              <div className="shrink-0 px-5 pb-5 pt-2 bg-gradient-to-t from-[#0052CC]/60 via-[#1A6FFF]/30 to-transparent">
                <a
                  href="/whats-new"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 text-[13px] font-semibold text-white bg-white/15 border border-white/40 rounded-[10px] hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
                >
                  View All
                  <span className="text-[15px]">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Consent Status */}
          <div className="w-full flex-1 max-w-[600px] relative mx-auto md:mx-0">
            <h3 className="text-[22px] md:text-[28px] font-bold text-black mb-5 md:mb-6 text-center md:text-left">
              Consent Status
            </h3>
            <div className="relative">
              {/* Consent items container */}
              <div className="space-y-4">
                {consentStatusItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-[24px] border-1 border-gray-300 gap-4 sm:gap-0"
                  >
                    <p className="text-[14px] text-gray-700 leading-relaxed pr-0 sm:pr-4 flex-1 font-semibold">
                      {item.text}
                    </p>
                    <button
                      onClick={() =>
                        item.link && window.open(item.link, "_blank")
                      }
                      className="shrink-0 px-5 py-2 text-[13px] text-[#0085E2] border border-[#0085E2] rounded-[12px] hover:bg-[#0085E2] hover:text-white transition-colors duration-200 cursor-pointer w-full sm:w-auto"
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
            </div>
        </section>
    );
}

export default WasteManagement;
