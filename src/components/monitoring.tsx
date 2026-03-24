import React from 'react';
import { Wind, Droplets, Activity } from 'lucide-react';

const air = "/assets/air.svg";
const water = "/assets/water.svg";
const noise = "/assets/noise.svg";

interface MonitoringCardProps {
  title: string;
  description: string;
  imageUrl: string;
  Icon: React.ElementType;
  link?: string;
}

const MonitoringCard: React.FC<MonitoringCardProps> = ({ title, description, imageUrl, Icon, link }) => {
  return (
    <div className="flex flex-col bg-white rounded-[40px] p-2 w-full max-w-[340px] shadow-sm border border-gray-50 font-family-helvetica">
      {/* Image Header with Icon Overlay */}
      <div className="relative w-full h-[180px] md:h-[220px] rounded-[24px] md:rounded-[32px] overflow-hidden mb-6 md:mb-8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[300px] object-cover"
        />
        {/* Gradient Overlay for Icon visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent pointer-events-none" />

        {/* Icon */}
        <div className="absolute top-6 left-6 text-white opacity-70">
          <Icon size={48} strokeWidth={1.5} />
        </div>

        {/* Soft bottom fade to match image blend */}
        <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col grow">
        <h3 className="text-[24px] md:text-[32px] font-semibold text-black mb-3 md:mb-4 ml-4 leading-tight">
          {title}
        </h3>
        <p className="text-[14px] md:text-[18px] text-black leading-relaxed mb-6 md:mb-10 ml-4 min-h-[48px] w-auto md:w-[250px] pr-4 md:pr-0">
          {description}
        </p>
      </div>

      {/* Read More Button */}
      <button
        onClick={() => link && (window.location.href = link)}
        className="self-start px-8 py-3 rounded-2xl ml-5 mb-5 border border-blue-100 text-[#0096ff] text-[16px] font-medium hover:bg-blue-50 transition-colors font-family-helvetica cursor-pointer"
      >
        Read More
      </button>
    </div>
  );
};

const EnvironmentalMonitoring: React.FC = () => {
  const monitoringData = [
    {
      title: "Air Quality",
      description: "Ambient Air Quality Monitoring Network in Maharashtra",
      imageUrl: air,
      Icon: Wind,
      link: "/environmental-quality/air-quality"
    },
    {
      title: "Water Quality",
      description: "Water Quality Monitoring Network",
      imageUrl: water,
      Icon: Droplets,
      link: "/environmental-quality/water-quality"
    },
    {
      title: "Noise Pollution",
      description: "Noise Pollution Monitoring in Maharashtra",
      imageUrl: noise,
      Icon: Activity,
      link: "/environmental-quality/noise-pollution"
    }
  ];

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="flex justify-center w-full max-w-[1361px] py-10 md:py-20 bg-linear-to-b from-[#006fff]/12 to-[#ffffff] font-family-helvetica rounded-[32px] md:rounded-[53px] mx-4">
        <div className="flex flex-col items-center w-full max-w-[1140px] px-4">
          {/* Component Title */}
          <h2 className="text-[28px] md:text-[42px] font-[550] text-[#006fff] mb-8 md:mb-16 text-center tracking-tight leading-tight">
            Environmental <br className="block md:block" /> Monitoring
          </h2>

          {/* Cards Grid */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-8 items-center">
            {monitoringData.map((data, index) => (
              <MonitoringCard
                key={index}
                title={data.title}
                description={data.description}
                imageUrl={data.imageUrl}
                Icon={data.Icon}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalMonitoring;