import React from 'react';
import { Link } from '@tanstack/react-router';
import { useMemo } from 'react';
import { generateRangeMetrics, formatDate } from '../utils/visitorUtils';

// ... existing imports ...

// I
const embelem = "/assets/embelem.svg";
const appstore = "/assets/appstore.svg";
const playstore = "/assets/playstore.svg";
import industry from "/assets/industry.svg";



const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const totalVisitors = useMemo(() => {
    const today = formatDate(new Date());
    const data = generateRangeMetrics("2024-12-01", today);
    return data.visitors;
  }, []);





  return (
    <footer className="w-full flex flex-col items-center font-family-helvetica mt-[30px] overflow-hidden">


      {/* 1. CALL TO ACTION SECTION (With Background Image) */}
      <div
        className="relative w-full max-w-[1100px] h-auto min-h-[320px] rounded-[24px] md:rounded-[48px] overflow-hidden -mb-32 z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 shadow-2xl mx-4"
      >
        {/* The Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Replace this URL with your actual image path
            backgroundImage: `url(${industry})`
          }}
        />

        {/* Expert Overlay: Ensures text remains readable */}
        <div className="absolute inset-0 z-10 bg-[#005BFF] opacity-70 backdrop-blur-[2px]" />

        {/* Content - Lifted above the image and overlay with z-20 */}
        <div className="relative z-20 flex flex-col items-center py-10 md:py-0 md:mt-[20px]">
          <h2 className="text-[24px] md:text-[38px] font-bold text-white mb-2 tracking-tight">Need Assistance?</h2>
          <p className="text-[14px] md:text-[18px] text-white mb-8 md:mb-10 max-w-[600px] font-normal leading-relaxed">
            Our team is here to help you with consents, authorizations, and environmental compliance.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-[20px] w-full md:w-auto">
            <Link to="/contact-us" className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-medium text-[18px] md:text-[22px] hover:bg-blue-50 transition-all shadow-lg hover:scale-105 active:scale-95 text-center flex items-center justify-center w-full md:w-auto">
              Contact Us
            </Link>
            <Link to="/faq" className="px-10 py-4 bg-[#0096ff] backdrop-blur-md border border-white/20 text-white rounded-2xl font-medium text-[18px] md:text-[22px] hover:[#0096ff] transition-all shadow-lg hover:scale-105 active:scale-95 text-center flex items-center justify-center w-full md:w-auto">
              View FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="w-full bg-[#003458] pt-40 md:pt-48 pb-10 flex flex-col items-center">
        <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-4">
          {/* Column 1: Logo & Address */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 md:ml-[-10px]">
                <img src={embelem} alt="Logo" className="w-[52px] h-[98px] object-contain" />
              </div>
              <div className="hidden md:block w-px h-[77px] bg-white" />
              <div className="flex flex-col md:ml-[10px]">
                <p className="text-white text-[22px] font-medium leading-tight">Maharashtra</p>
                <p className="text-white text-[22px] font-medium leading-tight">Pollution Control</p>
                <p className="text-white text-[22px] font-medium leading-tight">Board</p>
              </div>
            </div>

            <p className="text-white text-[14px] leading-relaxed max-w-[300px] mb-[-10px]">
              Kalpataru Point, 3rd and 4th floor, Opp. PVR Theatre, Sion (E), Mumbai-400 022
            </p>

            <div className="flex flex-col gap-4 mt-2 items-center md:items-start">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="text-white text-[14px] font-bold">E-Catalyst</p>
                <div className="flex gap-3">
                  <div className="flex flex-col items-start leading-none">
                    <a href="https://play.google.com/store/apps/details?id=in.gov.mpcb.mpcbapp" target="_blank" rel="noopener noreferrer">
                      <img src={playstore} alt="Get it on play store" className='w-[120px] h-[40px]' />
                    </a>
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <a href="https://apps.apple.com/in/app/mpcbs-e-catalyst/id1534705673" target="_blank" rel="noopener noreferrer">
                      <img src={appstore} alt="Get it on app store" className='w-[120px] h-[40px]' />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="text-white text-[14px] font-bold">Maha Paryavaran</p>
                <div className="flex gap-3">
                  <div className="flex flex-col items-start leading-none">
                    <a href="https://play.google.com/store/apps/details?id=com.maha.paryavaran" target="_blank" rel="noopener noreferrer">
                      <img src={playstore} alt="Get it on play store" className='w-[120px] h-[40px]' />
                    </a>
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <a href="https://apps.apple.com/in/app/maha-paryavaran/id6746112134" target="_blank" rel="noopener noreferrer">
                      <img src={appstore} alt="Get it on app store" className='w-[120px] h-[40px]' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="col-span-1 md:col-span-8 flex flex-col pt-2">
            <h4 className="text-white text-[24px] md:text-[30px] font-bold tracking-wider mb-8 uppercase text-center w-full">IMPORTANT LINKS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-4 px-4 text-white text-[15px] text-center md:text-left">
              <ul className="flex flex-col gap-4">
                <li><Link to="/cepi" className="hover:text-blue-300 cursor-pointer transition-colors">Comprehensive Environmental Pollution Index</Link></li>
                <li><Link to="/reports-documents" className="hover:text-blue-300 cursor-pointer transition-colors">Reports / Documents</Link></li>
                <li><Link to="/actionplan-reports" className="hover:text-blue-300 cursor-pointer transition-colors">Action plan & reports</Link></li>
                <li><Link to="/technical-committee-pollution-load" className="hover:text-blue-300 cursor-pointer transition-colors">Technical Committee for certification of no increase in pollution load.</Link></li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li><Link to="/health-environment" className="hover:text-blue-300 cursor-pointer transition-colors">Health & Environment</Link></li>
                <li><Link to="/about/mpcbemployees" className="hover:text-blue-300 cursor-pointer transition-colors">MPCB Employees</Link></li>
                <li><Link to="/technical-committee" className="hover:text-blue-300 cursor-pointer transition-colors leading-tight">Technical Committee for By-Products and Hazardous waste categorization</Link></li>
                <li><Link to="/cpcb-guidelines" className="hover:text-blue-300 cursor-pointer transition-colors">CPCB Guidelines</Link></li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li><span className="hover:text-blue-300 cursor-pointer transition-colors">Events</span></li>
                <li><Link to="/photo-gallery" className="hover:text-blue-300 cursor-pointer transition-colors">Photo Gallery</Link></li>
                <li><Link to="/press-gallery" className="hover:text-blue-300 cursor-pointer transition-colors">Press Gallery</Link></li>
                <li><Link to="/video-gallery" className="hover:text-blue-300 cursor-pointer transition-colors">Video Gallery</Link></li>
                <li><Link to="/public-awareness/awareness-campaign" className="hover:text-blue-300 cursor-pointer transition-colors">SUP Ban Awareness Campaign</Link></li>
                <li><Link to="/public-awareness/awareness-campaign" className="hover:text-blue-300 cursor-pointer transition-colors">Print Media Campaign</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. SUB-FOOTER */}
        <div className="w-full max-w-[1282px] mt-10 pt-10 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center text-white text-[13px] px-6 font-family-helvetica relative gap-8 md:gap-0">



          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className='text-[14px] md:text-[16px] opacity-50'>Copyright {currentYear}, Maharashtra Pollution Control Board.<p> All Rights Reserved.</p></p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest font-medium opacity-50">Visitor Count</span>
            <Link to="/visitors-dashboard" className="flex gap-1.5 group cursor-pointer hover:scale-105 transition-transform duration-200" title="View Visitor Dashboard">
              {totalVisitors.toString().split('').map((num, i) => (
                <span key={i} className="w-7 h-9 bg-white/5 border border-white/10 flex items-center justify-center rounded-md font-family-helvetica text-[18px] text-white group-hover:bg-[#00A3FF] group-hover:border-[#00A3FF] transition-colors duration-200">
                  {num}
                </span>
              ))}
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-[14px] md:text-[16px] mb-3">
              <Link to="/" className="text-white/50 hover:text-white cursor-pointer transition-colors">Disclaimer</Link>
              <Link to="/" className="text-white/50 hover:text-white cursor-pointer transition-colors">Website Policies</Link>
              <Link to="/" className="text-white/50 hover:text-white cursor-pointer transition-colors">Sitemap</Link>
              <Link to="/feedback" className="text-white/50 hover:text-white cursor-pointer transition-colors">Feedback</Link>
            </div>
            <p className="text-[14px] md:text-[16px] opacity-50">Powered by: <a href="https://axionailabs.in" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00A3FF] transition-colors">Axion AI Labs</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;