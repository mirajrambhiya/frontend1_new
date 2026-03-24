import React, { useState } from 'react';
import AboutUsBanner from '../AboutUs.tsx';
import Banner from '../navbanner-aboutus.tsx';
const mpcbhierarchy = "/assets/mpcbhierarchy.png";
const fieldofficers = "/assets/fieldofficers.png";

interface ChartData {
  id: number;
  title: string;
  previewImage: string;
  fullImage: string;
}

// --- Sample Data ---
// Using placeholder data based on the provided images
const chartList: ChartData[] = [
  {
    id: 1,
    title: "Maharashtra Pollution Control Board",
    previewImage: mpcbhierarchy, // Small thumbnail
    fullImage: mpcbhierarchy,    // Large org chart
  },
  {
    id: 2,
    title: "Field Officers Chart",
    previewImage: fieldofficers,
    fullImage: fieldofficers,
  }
];

// --- Components ---

const ChartCard: React.FC<{ title: string, chart: ChartData; onOpen: (img: string) => void }> = ({ title, chart, onOpen }) => {
  return (
    <div className="relative bg-white border border-gray-100 rounded-lg shadow-sm w-full max-w-[550px] flex flex-col pt-12 pb-6 px-4 md:px-8 mt-8">
      {/* Floating Image Preview on top left */}
      <div
        className="absolute -top-8 left-4 md:left-6 w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-md shadow-lg border border-gray-200 p-1 cursor-pointer hover:scale-105 transition-transform overflow-hidden"
        onClick={() => onOpen(chart.fullImage)}
      >
        <img src={chart.previewImage} alt="Chart Preview" className="w-full h-full object-contain" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-start justify-center min-h-[80px] md:min-h-[100px] ml-[110px] md:ml-[140px]">
        <h3 className="text-[#333333] font-bold text-[14px] md:text-[16px] leading-tight text-left">
          {title}
        </h3>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-200 my-4 md:my-6" />

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onOpen(chart.fullImage)}
          className="border-2 border-[#00A3FF] text-[#00A3FF] font-bold py-2 px-8 md:px-10 rounded-full hover:bg-[#00A3FF] hover:text-white transition-colors text-[16px] md:text-[18px] hover:cursor-pointer"
        >
          View
        </button>
      </div>
    </div>
  );
};

const ChartGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-[50vh] p-4 md:p-16 font-family-helvetica">
      {/* Grid container for cards */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 md:gap-y-20 max-w-7xl mx-auto">
        {chartList.map((chart) => (
          <ChartCard title={chart.title} key={chart.id} chart={chart} onOpen={setSelectedImg} />
        ))}
      </div>

      {/* --- Modal / Lightbox Section --- */}
      {selectedImg && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-lg p-4 md:p-6 max-w-[95vw] max-h-[90vh] shadow-2xl overflow-auto flex flex-col items-center">
            {/* The Full Image */}
            <img
              src={selectedImg}
              alt="Full Chart View"
              className="max-w-full md:max-w-[800px] h-auto block rounded-sm"
            />

            {/* Exit Button positioned at bottom right per reference */}
            <button
              onClick={() => setSelectedImg(null)}
              className="mt-4 md:fixed md:bottom-6 md:right-10 bg-white rounded-full shadow-lg border border-gray-300 p-2 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7 text-gray-500 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



function OrganizationalStructure() {
  return (
    <>
      <AboutUsBanner />
      <Banner bannerSection="organizationalstructure" />
      <ChartGallery />
    </>
  )
}

export default OrganizationalStructure