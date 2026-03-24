import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, X } from 'lucide-react';
import GalleryCard from '../components/GalleryCard';

const standingorders = "/assets/standingorders.svg";

const currentPressData = [
    {
        id: 1,
        title: "हवा प्रदूषण रोखण्यासाठी आरएमसी प्लांटवर कडक कारवाई.",
        date: "2025",
        images: ["https://placehold.co/600x800?text=RMC+Plant+Action"]
    },
    {
        id: 2,
        title: "MPCB च्या उपाययोजनांचा सकारात्मक परिणाम, मुंबई मधील हवेच्या गुणवत्तेमध्ये (AQI) लक्षणीय सुधारणा!",
        date: "2025",
        images: ["https://placehold.co/600x800?text=AQI+Improvement"]
    },
    {
        id: 3,
        title: "मुंबईतील हवेच्या प्रदूषणाचे सर्वेक्षण! मंडळाचे अध्यक्ष सिद्धेश कदम यांची सतत वातावरणीय हवा गुणवत्ता सनियंत्रण केंद्राना (CAAQM) भेट",
        date: "2025",
        images: ["https://placehold.co/600x800?text=CAAQM+Visit"]
    },
    {
        id: 4,
        title: "प्रदूषणमुक्त ठाणे शहरासाठी महाराष्ट्र प्रदूषण नियंत्रण मंडळाची संयुक्त मोहीम!",
        date: "2025",
        images: ["https://placehold.co/600x800?text=Thane+Pollution+Free"]
    }
];

const archivePressData = [
    {
        id: 101,
        title: "Archive: Environmental Awareness Campaign 2024",
        date: "2024",
        images: ["https://placehold.co/600x800?text=Archive+2024"]
    },
    {
        id: 102,
        title: "Archive: Tree Plantation Drive 2023",
        date: "2023",
        images: ["https://placehold.co/600x800?text=Archive+2023"]
    }
];

function PressGallery() {
    const navigate = useNavigate();
    const [isArchive, setIsArchive] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAlbum, setSelectedAlbum] = useState<typeof currentPressData[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ITEMS_PER_PAGE = 6;

    // Filter Data based on Toggle
    const displayData = isArchive ? archivePressData : currentPressData;

    // Pagination Logic
    const totalPages = Math.ceil(displayData.length / ITEMS_PER_PAGE);
    const paginatedData = displayData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset page on toggle
    useEffect(() => {
        setCurrentPage(1);
    }, [isArchive]);

    // Lightbox Logic
    const openSlideshow = (album: typeof currentPressData[0]) => {
        setSelectedAlbum(album);
        setCurrentImageIndex(0);
    };

    const closeSlideshow = () => {
        setSelectedAlbum(null);
        setCurrentImageIndex(0);
    };

    const handleNextImage = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedAlbum.images.length);
    };

    const handlePrevImage = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const getPageNumbers = (currentPage: number, totalPages: number) => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
        if (currentPage <= 3) return [1, 2, 3, 4, '...', totalPages];
        if (currentPage >= totalPages - 2) return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] pb-20 font-family-helvetica">
            {/* Top Banner */}
            <div className="w-full h-[250px] relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${standingorders})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
                </div>

                <div className="relative z-10 h-full max-w-[1282px] mx-auto px-4 flex flex-col justify-center text-white">
                    <div className="flex items-center gap-2 mb-4 text-sm opacity-80">
                        <span>Home</span>
                        <span>&gt;</span>
                        <span>Press Gallery</span>
                    </div>
                    <h1 className="text-[36px] font-bold leading-tight">
                        Press Gallery
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1282px] mx-auto px-4 py-8">

                {/* Header Row with Toggle */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                    <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 uppercase">
                        {isArchive ? "Archive: Press Releases" : "Latest Press Releases"}
                    </h2>

                    {/* Toggle Switch */}
                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 w-fit">
                        <button
                            onClick={() => setIsArchive(false)}
                            className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Current
                        </button>
                        <button
                            onClick={() => navigate({ to: '/photo-gallery', search: { view: 'archive' } })}
                            className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Archive
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {paginatedData.map((item) => (
                        <GalleryCard
                            key={item.id}
                            images={item.images}
                            title={item.title}
                            date={item.date}
                            onClick={() => openSlideshow(item)}
                        />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-16">
                        <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className={`w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 transition-colors ${currentPage === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-400 hover:border-[#0085E2] hover:text-[#0085E2] cursor-pointer'
                                }`}
                        >
                            <ChevronsLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 transition-colors ${currentPage === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-400 hover:border-[#0085E2] hover:text-[#0085E2] cursor-pointer'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {getPageNumbers(currentPage, totalPages).map((page, index) => (
                            <button
                                key={index}
                                onClick={() => typeof page === 'number' && handlePageChange(page)}
                                disabled={typeof page !== 'number'}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium transition-colors ${page === currentPage
                                    ? 'bg-[#0085E2] text-white shadow-md'
                                    : typeof page === 'number'
                                        ? 'border border-gray-200 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] cursor-pointer'
                                        : 'text-gray-400 cursor-default'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 transition-colors ${currentPage === totalPages
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-400 hover:border-[#0085E2] hover:text-[#0085E2] cursor-pointer'
                                }`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className={`w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 transition-colors ${currentPage === totalPages
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-400 hover:border-[#0085E2] hover:text-[#0085E2] cursor-pointer'
                                }`}
                        >
                            <ChevronsRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
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
                        title="Close"
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
                                className="max-h-[85vh] max-w-[calc(100vw-140px)] object-contain rounded-lg shadow-2xl select-none bg-white"
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
}

export default PressGallery;
