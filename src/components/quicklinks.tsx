import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, Scale, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuickLink {
  id: number;
  title: string;
  description?: string;
  icon: React.ReactNode;
  hasNewBadge?: boolean;
  url?: string;
}

const quickLinks: QuickLink[] = [
  {
    id: 1,
    title: "Apply For Online Consent/ Authorization/ Other Services (Ec-MPCB Web Portal)",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    url: "https://www.ecmpcb.in/",
  },
  {
    id: 2,
    title: "Consent Appraisal Committee(CAC) Meeting",
    icon: <Scale className="w-8 h-8 text-blue-500" />,
    url: "/cac-meetings",
  },
  {
    id: 3,
    title: "Consent Committee(CC) Meeting",
    icon: <Scale className="w-8 h-8 text-blue-500" />,
    url: "/cc-meetings",
  },
  {
    id: 4,
    title: "ONLINE CEMS",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    url: "/online-cems",
  },
  {
    id: 5,
    title: "Compliance Report Of Industries Using Petcoke",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    url: "/compliance-report",
  },
  {
    id: 6,
    title: "Non Attainment Cities Action Plan",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 7,
    title: "100 Days Mission Action Plan Of MPCB",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    hasNewBadge: true,
  },
  {
    id: 8,
    title: "100 Day's Office Reform Special Campaign",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    hasNewBadge: true,
  },
  {
    id: 9,
    title: "Revised Notification GR Of Sampling And Analysis Charges 17th Sept 2025",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    hasNewBadge: true,
  },
];

const QuickLinkCard: React.FC<{ link: QuickLink }> = ({ link }) => {
  const handleClick = () => {
    if (link.url) {
      if (link.url.startsWith('/')) {
        // Internal path - use window.location for navigation
        window.location.href = link.url;
      } else {
        // External URL - open in new tab
        window.open(link.url, '_blank');
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full min-h-[120px] h-auto p-4 md:p-5 border border-gray-100 rounded-[20px] md:rounded-[24px] bg-white flex items-center justify-between group cursor-pointer hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        {/* Icon Container */}
        <div className="shrink-0 w-[50px] h-[50px] md:w-[64px] md:h-[64px] bg-[#EBF5FF] rounded-[16px] md:rounded-[20px] flex items-center justify-center">
          {link.icon}
        </div>
        {/* Text Content */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] md:text-[16px] font-bold text-[#1A1A1A] leading-tight line-clamp-2 md:line-clamp-none">
              {link.title}
            </h3>
            {link.hasNewBadge && (
              <span className="px-2 py-[2px] bg-[#FFEDED] text-[#F44336] text-[10px] font-extrabold rounded-full uppercase">
                New
              </span>
            )}
          </div>
          {link.description && (
            <p className="text-[13px] text-[#808080] leading-snug">
              {link.description}
            </p>
          )}
        </div>
      </div>
      <div className="self-start mt-1">
        <ArrowUpRight className="w-5 h-5 text-[#C7C7C7] group-hover:text-blue-500 transition-colors" />
      </div>
    </div>
  );
};

const QuickLinks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Desktop Carousel
  const [mobileIndex, setMobileIndex] = useState(0); // Mobile Carousel
  const [isExpanded, setIsExpanded] = useState(false);

  // Logic for 2 rows x 3 columns = 6 items per slide (Desktop)
  const itemsPerPage = 6;
  const viewportWidth = 1202;
  const totalPages = Math.ceil(quickLinks.length / itemsPerPage);

  // Desktop Pagination Handlers
  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Mobile Pagination Handlers
  const mobileLinkCount = quickLinks.length;
  const nextMobile = () => setMobileIndex((prev) => (prev + 1) % mobileLinkCount);
  const prevMobile = () => setMobileIndex((prev) => (prev - 1 + mobileLinkCount) % mobileLinkCount);

  // Chunking the data for the 2x3 grid (Desktop)
  const pages: any[] = [];
  for (let i = 0; i < quickLinks.length; i += itemsPerPage) {
    pages.push(quickLinks.slice(i, i + itemsPerPage));
  }

  return (
    <div className="flex flex-col items-center w-full py-10 bg-white font-sans overflow-hidden">
      <div className="relative w-full max-w-[1202px] px-4">

        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[28px] md:text-[40px] font-medium text-[#111111] tracking-tight">Quick Links</h2>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-[18px] py-[6px] border border-gray-100 rounded-full text-[#007AFF] text-[14px] font-medium hover:bg-gray-50 transition-all shadow-sm active:scale-95 hover:cursor-pointer"
          >
            {isExpanded ? "View Less" : "View All"}
          </button>
        </div>

        {/* Mobile View (Carousel or Vertical List) */}
        <div className="block md:hidden w-full relative">
          {!isExpanded ? (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                {/* Prev Button */}
                <button
                  onClick={prevMobile}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm active:scale-95 shrink-0"
                  aria-label="Previous Link"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {/* Card */}
                <div className="flex-1 w-full min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobileIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <QuickLinkCard link={quickLinks[mobileIndex]} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextMobile}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm active:scale-95 shrink-0"
                  aria-label="Next Link"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Dots */}
              <div className="flex justify-center gap-1.5 flex-wrap px-4">
                {quickLinks.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === mobileIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {quickLinks.map((link, idx) => (
                <QuickLinkCard key={idx} link={link} />
              ))}
            </div>
          )}
        </div>

        {/* Desktop View (Carousel or Expanded Grid) */}
        <div className="hidden md:block relative">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative flex items-center"
              >
                {/* Nav Arrows */}
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`absolute -left-14 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-gray-400 hover:text-blue-500 transition-all ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {/* The 2x3 Carousel Grid */}
                <div className="overflow-hidden w-full">
                  <motion.div
                    className="flex"
                    animate={{ x: -(currentIndex * viewportWidth) }}
                    transition={{ type: "spring", stiffness: 220, damping: 28 }}
                  >
                    {pages.map((page, pageIdx) => (
                      <div
                        key={pageIdx}
                        className="shrink-0 grid grid-cols-3 grid-rows-2 gap-4"
                        style={{ width: `${viewportWidth}px` }}
                      >
                        {page.map((link, linkIdx) => (
                          <QuickLinkCard key={linkIdx} link={link} />
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= totalPages - 1}
                  className={`absolute -right-14 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-gray-400 hover:text-blue-500 transition-all ${currentIndex >= totalPages - 1 ? 'opacity-0' : 'opacity-100'}`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ) : (
              /* Expanded View: Full Grid */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-3 gap-4"
              >
                {quickLinks.map((link, idx) => (
                  <QuickLinkCard key={idx} link={link} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Indicators: Only visible in Carousel mode (Desktop) */}
        {!isExpanded && (
          <div className="hidden md:flex justify-center mt-10">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="p-2 cursor-pointer focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={`h-[6px] rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-[40px] bg-gray-400' : 'w-[12px] bg-gray-200'
                    }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickLinks;
