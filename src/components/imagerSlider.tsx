import { useState, useEffect, useCallback, useRef } from 'react';

const banner1 = "/assets/banner1new1.png";
const banner2 = "/assets/banner2new.png";
const banner3 = "/assets/banner3new.png";
const banner4 = "/assets/banner4new.png"
const banner5 = "/assets/banner5new.png"
const banner6 = "/assets/banner6new.png"

const IMAGES = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6
];

const SLIDE_DURATION = 5000;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    setCurrentIndex(index);

    // Reset transition lock after animation completes
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(-1);
    }, 1400);
  }, [currentIndex, isTransitioning]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);

      setTimeout(() => {
        setIsTransitioning(false);
        setPrevIndex(-1);
      }, 1400);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex]);


  const getSlideStyle = (index: number): React.CSSProperties => {
    if (index === currentIndex) {
      return {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out',
        animation: 'kenBurns 6s ease-out forwards',
        zIndex: 20,
      };
    }
    if (index === prevIndex && isTransitioning) {
      return {
        opacity: 0,
        transform: 'scale(1.04)',
        transition: 'opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 15,
      };
    }
    return {
      opacity: 0,
      transform: 'scale(1)',
      zIndex: 10,
    };
  };

  return (
    <div className="sticky top-0 w-full overflow-hidden bg-white z-10">
      {/* Navigation Dots — vertical, left side */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative flex items-center cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`
                w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-500 ease-out
                border-2
                ${index === currentIndex
                  ? 'bg-white border-white scale-125 shadow-[0_0_12px_rgba(255,255,255,0.7)]'
                  : 'bg-white/25 border-white/40 hover:bg-white/60 hover:border-white/80 hover:scale-110'
                }
              `}
            />
            <div
              className={`
                absolute left-full ml-2 h-[2px] bg-white/80 rounded-full
                transition-all duration-500 ease-out
                ${index === currentIndex ? 'w-5 opacity-100' : 'w-0 opacity-0'}
              `}
            />
          </button>
        ))}
      </div>


      {/* Slides */}
      <div className="relative w-full overflow-hidden">
        {IMAGES.map((src, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={index}
              className={`
                ${isActive ? 'relative' : 'absolute inset-0'}
                w-full
              `}
              style={getSlideStyle(index)}
            >
              <div className="w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Slider ${index}`}
                  className="w-full h-[700px] block"
                />
              </div>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/25 pointer-events-none" />

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;