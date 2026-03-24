import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { currentGalleryData, archiveGalleryData } from '../pages/gallery/gallery';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const allGalleryData = [...currentGalleryData, ...archiveGalleryData];

// Extract year from date string for real recency sorting
const getYear = (dateStr: string) => {
  const match = dateStr.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

const recentGalleryData = [...allGalleryData].sort((a, b) => {
  const yearA = getYear(a.date);
  const yearB = getYear(b.date);
  if (yearB !== yearA) return yearB - yearA;
  return b.id - a.id;
});

const stories = recentGalleryData.slice(0, 9).map((item) => ({
  id: item.id,
  date: item.date,
  imageUrl: item.images[0],
  title: item.id === 3 // Japanese Consul special case
    ? "The Consul General of Japan in Mumbai, Mr. Koji Yagi-san, visited the Board’s headquarters for a high-level meeting."
    : (item.title ? item.title.split('.')[0] + '.' : "MPCB Story")
}));

const StoriesSection: React.FC = () => {
  // We keep the middle one active by default (index 4 for 9 items)
  const [activeIndex, setActiveIndex] = useState(4);
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    // Initial check
    if (typeof window !== 'undefined') {
      checkMobile();
      window.addEventListener('resize', checkMobile);
    }
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Auto-play logic for modal
  useEffect(() => {
    if (!selectedAlbum) return;

    const timer = setTimeout(() => {
      handleNextImage();
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, selectedAlbum]);

  const handleNextImage = () => {
    if (!selectedAlbum) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedAlbum.images.length);
  };

  const handlePrevImage = () => {
    if (!selectedAlbum) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
  };

  const openSlideshow = (id: number) => {
    const album = allGalleryData.find(item => item.id === id);
    if (album) {
      setSelectedAlbum(album);
      setCurrentImageIndex(0);
    }
  };

  const closeSlideshow = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <section className="w-full flex justify-center py-20 bg-white overflow-hidden font-family-helvetica mb-[-40px]">

        <div className="w-full max-w-[1282px] flex flex-col items-center px-4">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-gray-900 leading-tight tracking-tight">
              Our Stories
            </h2>
          </div>

          {/* Accordion Viewport */}
          <div className="flex items-center justify-center w-full h-auto min-h-[600px] md:h-[520px]">

            <div className="flex flex-col md:flex-row gap-3 w-full h-auto md:h-full justify-center">
              {stories.map((story, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={story.id}
                    // TRIGGER ON HOVER (Desktop) or CLICK (Mobile)
                    onMouseEnter={() => !isMobile && setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    layout
                    animate={{
                      width: isMobile ? '100%' : (isActive ? '480px' : '85px'),
                      height: isMobile ? (isActive ? '400px' : '60px') : '100%',
                      filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)'
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      filter: { duration: 0.3 }
                    }}
                    className="relative rounded-[24px] md:rounded-[60px] overflow-hidden cursor-pointer shadow-lg bg-gray-200 shrink-0"
                  >
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10"
                        >
                          <span className="text-[12px] md:text-[14px] text-white/80 mb-2">{story.date}</span>
                          <h3 className="text-[16px] md:text-[20px] font-bold text-white leading-tight mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">
                            {story.title}
                          </h3>
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent accordion interaction
                              openSlideshow(story.id);
                            }}
                            className="self-start px-6 md:px-8 py-2 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[14px] md:text-[16px] font-medium hover:bg-white/20 transition-all cursor-pointer"
                          >
                            View Album
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow Modal */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={closeSlideshow}
        >
          {/* Close Button */}
          <button
            onClick={closeSlideshow}
            className="absolute top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1001] shadow-lg border border-white/10 cursor-pointer"
            title="Close"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <div className="flex items-center justify-center gap-2 max-h-[90vh] w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
            {/* Prev Button */}
            <button
              onClick={handlePrevImage}
              className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            {/* Image Container */}
            <div className="relative shrink-0 flex items-center justify-center">
              <img
                src={selectedAlbum.images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="max-h-[85vh] max-w-[calc(100vw-140px)] object-contain rounded-lg shadow-2xl select-none"
              />

              {/* Caption / Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/60 px-4 py-1 rounded-full backdrop-blur-sm z-10 pointer-events-none">
                {currentImageIndex + 1} / {selectedAlbum.images.length}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StoriesSection;