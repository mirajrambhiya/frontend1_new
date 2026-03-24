import React, { useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from '@tanstack/react-router';
import AboutUsBanner from '../AboutUs.tsx';
import Banner from '../navbanner-aboutus.tsx';

interface ChevronProps {
  className?: string;
}

interface SidebarItemProps {
  title: string;
  isOpen?: boolean;
  toggle?: () => void;
  children?: ReactNode;
  hasDropdown?: boolean;
  href?: string;
  onClick?: () => void;
}

// --- Components ---

const ChevronDown = ({ className = "" }: ChevronProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const SidebarItem = ({
  title,
  isOpen = false,
  toggle,
  children,
  hasDropdown = false,
  href,
  onClick
}: SidebarItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      navigate({ to: href });
    } else if (hasDropdown && toggle) {
      toggle();
    }
  };

  return (
    <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white mb-4 shadow-sm transition-all duration-300 hover:border-[#00A3FF] cursor-pointer">
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
      >
        <span className="text-gray-800 font-medium transition-colors group-hover:text-[#00A3FF]">{title}</span>
        {hasDropdown && (
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 ease-in-out group-hover:text-[#00A3FF] ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {/* Smooth Animation Wrapper 
          1. We use a grid layout.
          2. We transition between 0fr (height 0) and 1fr (height auto).
        */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden">
          {children && (
            <div className="px-4 pb-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface YearBadgeProps {
  year: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const YearBadge = ({ year, isSelected = false, onClick }: YearBadgeProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-block px-5 py-1.5 rounded-xl text-sm font-medium cursor-pointer transition-colors ${isSelected
      ? 'bg-[#00A3FF] text-white'
      : 'bg-blue-100 text-gray-800 hover:bg-blue-200'
      }`}
  >
    {year}
  </button>
);

// Dummy seniority data for each year
const seniorityData: Record<string, { sNo: string; designation: string }[]> = {
  "2019": [
    { sNo: "1", designation: "Joint Director" },
    { sNo: "2", designation: "Deputy Director" },
    { sNo: "3", designation: "Regional Officer" },
    { sNo: "4", designation: "Sub Regional Officer" },
    { sNo: "5", designation: "Scientific Officer" },
  ],
  "2020": [
    { sNo: "1", designation: "Principal Scientific Officer" },
    { sNo: "2", designation: "Joint Director" },
    { sNo: "3", designation: "Deputy Director" },
    { sNo: "4", designation: "Assistant Secretary" },
    { sNo: "5", designation: "Regional Officer" },
    { sNo: "6", designation: "Scientific Officer" },
  ],
  "2021": [
    { sNo: "1", designation: "Member Secretary" },
    { sNo: "2", designation: "Joint Director" },
    { sNo: "3", designation: "Deputy Director" },
    { sNo: "4", designation: "Regional Officer" },
  ],
  "2022": [
    { sNo: "1", designation: "Joint Director (Air)" },
    { sNo: "2", designation: "Joint Director (Water)" },
    { sNo: "3", designation: "Deputy Director" },
    { sNo: "4", designation: "Regional Officer" },
    { sNo: "5", designation: "Sub Regional Officer" },
    { sNo: "6", designation: "Scientific Officer" },
    { sNo: "7", designation: "Law Officer" },
  ],
  "2023": [
    { sNo: "1", designation: "Principal Scientific Officer" },
    { sNo: "2", designation: "Joint Director" },
    { sNo: "3", designation: "Deputy Director" },
    { sNo: "4", designation: "Assistant Secretary" },
    { sNo: "5", designation: "Regional Officer" },
  ],
  "2024": [
    { sNo: "1", designation: "Joint Director" },
    { sNo: "2", designation: "Deputy Director" },
    { sNo: "3", designation: "Regional Officer" },
    { sNo: "4", designation: "Sub Regional Officer" },
    { sNo: "5", designation: "Scientific Officer" },
    { sNo: "6", designation: "Administrative Officer" },
  ],
  "2025": [
    { sNo: "1", designation: "Member Secretary" },
    { sNo: "2", designation: "Principal Scientific Officer" },
    { sNo: "3", designation: "Joint Director" },
    { sNo: "4", designation: "Deputy Director" },
    { sNo: "5", designation: "Regional Officer" },
    { sNo: "6", designation: "Sub Regional Officer" },
    { sNo: "7", designation: "Scientific Officer" },
    { sNo: "8", designation: "Law Officer" },
  ],
};

const OrganizationPage = () => {
  const [isSeniorityOpen, setIsSeniorityOpen] = useState<boolean>(false);
  const [isPityCaseOpen, setIsPityCaseOpen] = useState<boolean>(false);
  const [isJobSpecificationOpen, setIsJobSpecificationOpen] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const years: string[] = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-family-helvetica">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 md:min-w-[300px]">

          <SidebarItem title="Establishment" onClick={() => setSelectedYear(null)} />

          <SidebarItem title="Present Constitution" href="/about/presentboard" />

          <SidebarItem title="Recruitment Rules 2013" />

          <SidebarItem title="Personnel Summary with Pay Scales" />

          <SidebarItem
            title="Seniority List of Officer /Staff"
            hasDropdown={true}
            isOpen={isSeniorityOpen}
            toggle={() => setIsSeniorityOpen(!isSeniorityOpen)}
          >
            <div className="flex flex-wrap gap-2 pt-2">
              {years.map((year) => (
                <YearBadge
                  key={year}
                  year={year}
                  isSelected={selectedYear === year}
                  onClick={() => setSelectedYear(year)}
                />
              ))}
            </div>
          </SidebarItem>

          <SidebarItem
            title="Waiting List of Pity Case"
            hasDropdown={true}
            isOpen={isJobSpecificationOpen}
            toggle={() => setIsJobSpecificationOpen(!isJobSpecificationOpen)}
          >
            <div className="text-gray-500 text-sm py-2">
              No active cases found.
            </div>
          </SidebarItem>

          <SidebarItem
            title="Job Specification"
            hasDropdown={true}
            isOpen={isPityCaseOpen}
            toggle={() => setIsPityCaseOpen(!isPityCaseOpen)}
          >
            <div className="text-gray-500 text-sm py-2">
              No active cases found.
            </div>
          </SidebarItem>

        </div>

        {/* Right Content */}
        <div className="flex-1 pt-0 md:pt-2">
          {/* Show Seniority Table if a year is selected */}
          {selectedYear ? (
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 md:mb-6">
                Seniority List - {selectedYear}
              </h2>
              <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                <table className="w-full border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="py-4 px-6 text-left text-[14px] font-semibold text-gray-700 w-24">
                        Sr. No.
                      </th>
                      <th className="py-4 px-6 text-left text-[14px] font-semibold text-gray-700">
                        Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {seniorityData[selectedYear]?.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-6 text-[14px] text-gray-600">{row.sNo}</td>
                        <td className="py-4 px-6 text-[14px] text-gray-700">{row.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <>
              {/* Default content */}
              <p className="text-gray-500 mb-6 text-base md:text-lg leading-relaxed mt-[-10px]">
                Maharashtra Pollution Control Board was established on 7th September,1970 under the provisions of Maharashtra Prevention of Water Pollution Act,1969. The Water (P&CP) Act, 1974 that is a central legislation was adopted in Maharashtra on 1.6.81 and accordingly Maharashtra Pollution Control Board was formed under the provisions of section 4 of Water (P& CP) Act, 1974. The Air (P&CP) Act 1981 was adopted in the Maharashtra in1983 and initially, some areas were declared as Air Pollution Control Area on 2.5.83. The entire state of Maharashtra has been declared as Air Pollution Control Area since 6.11.96. The Board is also functioning as the State Board under section 5 of the Air (P&CP) Act, 1981.
              </p>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed ">
                The Board Consists of Chairman, Member Secretary and Official and Non-Official Members as laid down under the provisions of section 4 of the Water (P&CP) Act, 1974 and section 5 of Air (P&CP) Act, 1981.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Establishment: React.FC = () => {
  return (
    <>
      <AboutUsBanner />
      <Banner bannerSection="establishment" />
      <div className="font-family-helvetica">
        <h2 className="text-[40px] font-bold text-black flex justify-center">Establishment of MPCB</h2>
      </div>
      <OrganizationPage />
    </>
  );
};

export default Establishment;