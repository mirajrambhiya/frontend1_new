import React from 'react';

const NewsTicker: React.FC = () => {
  // Sample news data based on your image
  const newsItems = [
    { text: "24010437 / (022) 24020781 Extension-323", isNew: false },
    { text: "Helpdesk contact number for Ec-MPCB portal is 7045113344 / 7045113345", isNew: true },
    { text: "All regional offices are now equipped with the new monitoring system.", isNew: false },
  ];

  return (
    <div className="flex justify-center w-full py-1 bg-white font-family-helvetica mb-[60px]">
      <div
        className="flex items-center border-y border-gray-100 bg-white overflow-hidden w-full max-w-[1282px] h-[40px] md:h-[50px]"
      >
        {/* Static Header Section */}
        <div className="flex items-center bg-white z-10 px-4 h-full shrink-0">
          <div className="flex flex-col justify-center leading-[1.1] text-gray-900">
            <span className="text-[12px] md:text-[15px] font-bold">Latest</span>
            <span className="text-[12px] md:text-[15px] font-bold">News</span>
          </div>
          {/* Vertical Separator */}
          <div className="ml-6 h-8 w-px bg-gray-300"></div>
        </div>

        {/* Scrolling Section */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* We duplicate the items to ensure a seamless loop */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="flex items-center mx-4 md:mx-10 text-[12px] md:text-[14px] text-gray-600 font-medium">
                {item.isNew && (
                  <span className="mr-2 px-2 py-px bg-red-100 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-tighter border border-red-200">
                    New
                  </span>
                )}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;