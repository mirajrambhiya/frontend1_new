import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import GalleryCard from '../../../components/GalleryCard';
import standingorders from '/assets/standingorders.svg';

const HoliFestivalPhotos = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Generating 40 dummy items for the gallery
    const galleryItems = Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        title: i < 12 ? [
            "पर्यावरणपूरक होळी २०१३ - १",
            "पर्यावरणपूरक होळी २०१३ - २",
            "पर्यावरणपूरक होळी २०१३ - ३",
            "पर्यावरणपूरक होळी २०१३ - ४",
            "पर्यावरणपूरक होळी २०१३ - ५",
            "पर्यावरणपूरक होळी २०१३ - ६",
            "पर्यावरणपूरक होळी २०१३ - ७",
            "पर्यावरणपूरक होळी २०१३ - ८",
            "पर्यावरणपूरक होळी २०१३ - ९",
            "पर्यावरणपूरक होळी २०१२ - १०",
            "पर्यावरणपूरक होळी २०१२ - ११",
            "पर्यावरणपूरक होळी २०१२ - १२"
        ][i] : `Holi Festival Awareness - ${i + 1}`,
        date: i < 9 ? "2013" : "2012",
        images: [
            `https://placehold.co/800x600?text=Holi+Festival+${i + 1}`
        ]
    }));

    const openSlideshow = (item: any) => {
        setSelectedAlbum(item);
        setCurrentImageIndex(0);
    };

    const closeSlideshow = () => {
        setSelectedAlbum(null);
    };

    const handleNextImage = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedAlbum.images.length);
    };

    const handlePrevImage = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
    };

    // Auto-play logic for slideshow
    useEffect(() => {
        if (!selectedAlbum) return;
        const timer = setTimeout(() => {
            handleNextImage();
        }, 4000);
        return () => clearTimeout(timer);
    }, [currentImageIndex, selectedAlbum]);

    return (
        <div className="min-h-screen bg-[#FDFDFD] pb-20 font-family-helvetica">
            {/* Top Banner Section (like rts.tsx) */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${standingorders})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${standingorders})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Holi Festival - Photo Gallery
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <div className="w-full max-w-[1282px] mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {galleryItems.map((item) => (
                        <GalleryCard
                            key={item.id}
                            images={item.images}
                            title={item.title}
                            date={item.date}
                            onClick={() => openSlideshow(item)}
                        />
                    ))}
                </div>
            </div>

            {/* Slideshow Modal */}
            {selectedAlbum && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                    onClick={closeSlideshow}
                >
                    <button
                        onClick={closeSlideshow}
                        className="absolute top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1001] shadow-lg border border-white/10 cursor-pointer"
                    >
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    <div className="flex items-center justify-center gap-2 max-h-[90vh] w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={handlePrevImage}
                            className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"
                        >
                            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                        </button>

                        <div className="relative shrink-0 flex items-center justify-center">
                            <img
                                src={selectedAlbum.images[currentImageIndex]}
                                alt={`Slide ${currentImageIndex + 1}`}
                                className="max-h-[85vh] max-w-[calc(100vw-140px)] object-contain rounded-lg shadow-2xl select-none"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/60 px-4 py-1 rounded-full backdrop-blur-sm z-10 pointer-events-none">
                                {currentImageIndex + 1} / {selectedAlbum.images.length}
                            </div>
                        </div>

                        <button
                            onClick={handleNextImage}
                            className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"
                        >
                            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HoliFestivalPhotos;
