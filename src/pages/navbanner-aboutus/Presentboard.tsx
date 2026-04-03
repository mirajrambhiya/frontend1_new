import React, { useState } from 'react'
import { Phone, Printer, User } from 'lucide-react';
import AboutUsBanner from '../AboutUs.tsx';
import Banner from '../navbanner-aboutus.tsx';
const siddhesh = "/assets/siddheshupscaled.jpg";
const devender = "/assets/devender.svg";
const jayshree = "/assets/jayshree.svg";
const rahul = "/assets/rahul.png"


interface ContactData {
  id: number;
  designation: string;
  department: string;
  address: string;
  landline?: string;
  fax?: string;
}

// --- Sample Data (Matching the image) ---
const sampleContacts: ContactData[] = [
  {
    id: 0,
    designation: 'Mrs. Jayshree Bhoj, (I.A.S)',
    department: 'Secretary | Environment & CC',
    address: 'Dept. Government of Maharashtra',
    landline: '022 22873845/ 22825973',
    fax: '022 22029388',
  },
  {
    id: 1,
    designation: 'Principle Secretary',
    department: 'Urban Development Dept.',
    address: 'Govt. Of Maharashtra, Room No 423 (Main)',
    landline: '022 22021444',
    fax: '022 22854573',
  },
  {
    id: 2,
    designation: 'Principle Secretary',
    department: 'Public Health Dept.',
    address: 'Government of Maharashtra, Room No. 108, Mantralaya, Mumbai 400 032',
    landline: '022 22873848',
    fax: '022 22045150',
  },
  {
    id: 3,
    designation: 'Principle Secretary',
    department: 'Home (Transport) Dept.',
    address: 'Government of Maharashtra, Room No.229, Mantralaya, Mumbai 400 032',
    landline: '022 22024009',
    fax: '022 22026070',
  },
  // --- Items beyond this point will be hidden initially ---
  {
    id: 4,
    designation: 'Chief Executive Officer',
    department: '',
    address: 'M.I.D.C., Mahakali Caves Road, Andheri (E),Mumbai – 400 093.',
    landline: '022 22616547',
    fax: '022 28221587',
  },
  {
    id: 5,
    designation: 'The Secretary',
    department: 'Water Supply and Sanitation Deptt.',
    address: 'Govt.of Maharashtra, 5th Floor, Mantralaya, Mumbai 400 032.',
    landline: '',
    fax: '',
  },
  {
    id: 6,
    designation: 'Member Secretary',
    department: 'Technical',
    address: 'Maharashtra Jeevan Pradhikaran, Express Towers, 4th Floor, Nariman Point, Mumbai 400 021',
    landline: '',
    fax: '',
  },
  {
    id: 7,
    designation: 'Mr. Vinod Pashilkar',
    department: 'Member (Agriculture)',
    address: 'M.P.C. Board, Mumbai, Mumbai',
    landline: '',
    fax: '',
  },
];

// --- Single Contact Card Component ---
const ContactCard: React.FC<{ data: ContactData }> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center bg-white border border-gray-200 rounded-[24px] p-4 md:p-6 shadow-sm gap-4 md:gap-6">
      {/* Placeholder Icon */}
      <div className="shrink-0 bg-[#EFEFEF] rounded-[20px] w-[60px] h-[60px] md:w-[72px] md:h-[72px] flex items-center justify-center">
        <User className="text-gray-400 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
      </div>

      {/* Main Details */}
      <div className="grow flex flex-col gap-1 w-full">
        <div className="flex flex-wrap items-center gap-2 text-[14px] md:text-[16px]">
          <span className="font-bold text-gray-900">{data.designation}</span>
          <span className="text-gray-400 font-light hidden md:inline">|</span>
          <span className="text-gray-900 block md:inline w-full md:w-auto">{data.department}</span>
        </div>
        <p className="text-[13px] md:text-[15px] text-gray-500 mt-1">{data.address}</p>
      </div>

      {/* Contact Numbers - Only show if landline or fax exist */}
      {(data.landline || data.fax) && (
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:gap-2 lg:gap-8 mt-2 md:mt-0 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
          {/* Landline */}
          {data.landline && (
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-xs md:text-sm text-gray-500 font-medium">Landline</span>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[14px] md:text-[15px] font-medium">{data.landline}</span>
              </div>
            </div>
          )}

          {/* Fax */}
          {data.fax && (
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-xs md:text-sm text-gray-500 font-medium">Fax</span>
              <div className="flex items-center gap-2 text-gray-700">
                <Printer className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[14px] md:text-[15px] font-medium">{data.fax}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// --- Main List Component ---
const ContactListSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Initial number of items to show full before the blur starts
  const initialCount = 3;

  // Decide which items to render based on state
  // If not expanded, we render initialCount + 1 (the +1 gets blurred)
  const itemsToShow = isExpanded
    ? sampleContacts
    : sampleContacts.slice(0, initialCount + 1);

  return (
    <section className="bg-white py-8 md:py-12 px-4 relative font-family-helvetica">
      <div className="max-w-[1000px] mx-auto relative">

        {/* List of Cards */}
        <div className="flex flex-col gap-4 relative z-0">
          {itemsToShow.map((contact) => (
            <ContactCard key={contact.id} data={contact} />
          ))}
        </div>

        {/* Blur Gradient Overlay - Only visible when collapsed */}
        {!isExpanded && (
          <div
            className="absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-t from-white via-white/95 to-transparent z-10 pointer-events-none rounded-b-[24px]"
            style={{ bottom: '0px' }}
          />
        )}

        {/* View More Button Container */}
        <div className="flex justify-center mt-6 md:mt-8 relative z-20">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-[#3B9EFF] hover:bg-blue-600 text-white text-[14px] md:text-[15px] font-medium py-2.5 px-8 md:py-3 md:px-10 rounded-full transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 hover:cursor-pointer"
          >
            {isExpanded ? 'View Less' : 'View More'}
          </button>
        </div>

      </div>
    </section>
  );
};

interface Profile {
  image: string;
  name: string;
  designation: string;
  location: string;
  phone: string;
  fax: string;
  hideContact?: boolean;
}

// --- Component ---

const TeamSection: React.FC = () => {
  const profiles: Profile[] = [
    {
      image: siddhesh,
      name: 'Shri. Siddhesh Ramdas Kadam',
      designation: 'Chairman | M.P.C Board',
      location: 'Mumbai',
      phone: '022 24042418',
      fax: '022 24023516',
      hideContact: true,
    },
    {
      image: rahul,
      name: 'Shri. Rahul Rekhawar (IAS:2011 RR)',
      designation: 'Member Secretary | M.P.C Board',
      location: 'Mumbai, Maharashtra',
      phone: '022 24010706',
      fax: '022 24023516',
      hideContact: true,
    },
  ];

  return (
    <section className="bg-white py-8 md:py-16 px-4 font-family-helvetica">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
        {profiles.map((person, index) => (
          <div key={index} className="flex flex-col w-full max-w-[320px]">
            {/* Image with specific squircle-style rounding */}
            <div className="w-full aspect-square mb-4 md:mb-6 overflow-hidden rounded-[24px] md:rounded-[45px]">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[16px] md:text-[18px] text-[#1A1A1A] leading-tight mb-1 md:mb-2">
                {person.name}
              </h3>

              <div className="text-[13px] md:text-[14px] text-[#7A7A7A] leading-relaxed">
                <p>{person.designation}</p>
                <p>{person.location}</p>
              </div>

              {/* Contact Information - Only show if hideContact is not true */}
              {!person.hideContact && (
                <div className="flex items-center gap-4 md:gap-6 mt-3 md:mt-4">
                  {/* Phone */}
                  <div className="flex items-center gap-2">
                    <PhoneIcon />
                    <span className="text-[13px] md:text-[14px] font-medium text-[#1A1A1A]">
                      {person.phone}
                    </span>
                  </div>

                  {/* Fax */}
                  <div className="flex items-center gap-2">
                    <PrinterIcon />
                    <span className="text-[13px] md:text-[14px] font-medium text-[#1A1A1A]">
                      {person.fax}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Icons (Optimized SVGs) ---

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PrinterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const Presentboard: React.FC = () => {
  return (
    <>
      <AboutUsBanner />
      <Banner bannerSection="presentboard" />
      <TeamSection />
      <ContactListSection />
    </>
  )
}

export default Presentboard;