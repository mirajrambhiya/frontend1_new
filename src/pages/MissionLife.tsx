import React from 'react';

const missionlife = "/assets/missionlife.png";
const openingquotes = "/assets/openingquotes.png";
const closingquotes = "/assets/closingquotes.png";
const lifebook = "/assets/lifebook.svg";
const lifebrochure = "/assets/lifebrochure.png";
const prayaas = "/assets/prayaas.png";
const bookofpaintings = "/assets/bookofpaintings.png";
const a_z = "/assets/a-z.png";

function MissionLife() {
    return (
        <div className="font-family-helvetica">
            {/* Hero Banner Section */}
            <section className="w-full flex justify-center items-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden flex items-center justify-center bg-gray-50">
                        {/* Mission LiFE Banner Image - Centered */}
                        <img
                            src={missionlife}
                            alt="Mission LiFE Banner"
                            className="h-full w-auto object-contain p-4"
                        />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full flex justify-center bg-white py-12 md:py-16">
                <div className="w-full max-w-[720px] px-4 md:px-6 text-center">
                    {/* Main Heading */}
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-[#333333] mb-8 md:mb-10">
                        Mission LiFE
                    </h2>

                    {/* Quote Section */}
                    <div className="mb-8">
                        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#444444] italic">
                            <img src={openingquotes} alt="" className="inline h-3 w-auto mr-1" />
                            <span className="font-semibold text-[#2b2b2b] not-italic">This word is LiFE</span>
                            , which means 'LiFEStyle For Environment'. Today, there is a need for all
                            of us to come together and take LiFEStyle For Environment forward as a campaign. This
                            can become a mass movement towards an environmentally conscious lifestyle.
                            <img src={closingquotes} alt="" className="inline h-3 w-auto ml-1" />
                        </p>
                    </div>

                    {/* Attribution */}
                    <p className="text-[13px] md:text-[14px] font-semibold text-[#333333] mb-8 md:mb-10">
                        - Prime Minister Shri Narendra Modi at COP26
                    </p>

                    {/* Description Paragraphs */}
                    <div className="text-[14px] leading-relaxed text-[#555555] mb-8 md:mb-10 space-y-4">
                        <p>
                            Mission LiFE seeks to translate the vision of LiFE into measurable impact.
                        </p>
                        <p>
                            It is designed with the objective to mobilise at least one billion Indians and other global
                            citizens to take individual and collective action for protecting and conserving the
                            environment in the period 2022–28.
                        </p>
                        <p>
                            Within India, at least 80 percent of all villages and urban local bodies are aimed to become
                            environment-friendly by 2028.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://missionlife-moefcc.nic.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-3 border-2 border-[#333333] text-[#333333] rounded-lg text-[14px] font-semibold hover:bg-[#333333] hover:text-white transition-colors duration-200 text-center"
                        >
                            Visit LiFE Portal
                        </a>
                        <a
                            href="#download-brochure"
                            className="w-full sm:w-auto px-8 py-3 bg-[#2196F3] text-white rounded-lg text-[14px] font-semibold hover:bg-[#1976D2] transition-colors duration-200 shadow-md text-center"
                        >
                            Download Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* Life Actions Section */}
            <section className="w-full flex justify-center bg-white py-12 md:py-16">
                <div className="w-full max-w-[1100px] px-4 md:px-6">
                    {/* Section Title */}
                    <h2 className="text-[24px] md:text-[32px] font-semibold text-[#333333] mb-6 md:mb-8">
                        Life Actions
                    </h2>

                    {/* Action Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Card 1 - Energy Saved (Yellow) */}
                        <div className="bg-[#FFF8E7] rounded-2xl p-5 h-[160px] flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <svg className="w-10 h-10 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#E07A00]">Energy Saved</p>
                        </div>

                        {/* Card 2 - Energy Reduced (Orange) */}
                        <div className="bg-[#FFF5F0] rounded-2xl p-5 h-[160px] flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <svg className="w-10 h-10 text-[#E05A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#E05A00]">Energy Reduced</p>
                        </div>

                        {/* Card 3 - Healthy Lifestyles Adopted (Green) */}
                        <div className="bg-[#E8F8EC] rounded-2xl p-5 h-[160px] flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <svg className="w-10 h-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#4CAF50]">Healthy Lifestyles<br />Adopted</p>
                        </div>

                        {/* Card 4 - Sustainable Food Systems Adopted (Teal) */}
                        <div className="bg-[#E0F2F1] rounded-2xl p-5 h-[160px] flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <svg className="w-10 h-10 text-[#26A69A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#26A69A]">Sustainable Food<br />Systems Adopted</p>
                        </div>

                        {/* Card 5 - Waste Reduced (Red) */}
                        <div className="bg-[#FFEBEE] rounded-2xl p-5 h-[160px] flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <svg className="w-10 h-10 text-[#E57373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#E57373]">Waste Reduced</p>
                        </div>

                        {/* Card 6 - Water Saved (Blue) */}
                        <div className="bg-[#E3F2FD] rounded-2xl p-5 h-[160px] flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <svg className="w-10 h-10 text-[#42A5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z" />
                                    <circle cx="7.5" cy="11.5" r="1.5" fill="currentColor" />
                                    <circle cx="10.5" cy="7.5" r="1.5" fill="currentColor" />
                                    <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" />
                                </svg>
                                <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#42A5F5]">Water Saved</p>
                        </div>

                        {/* Card 7 - Single Use Plastic Reduced (Light Blue) */}
                        <div className="bg-[#E8F4FC] rounded-2xl p-5 h-[160px] flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <svg className="w-10 h-10 text-[#2196F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#2196F3]">Single Use Plastic<br />Reduced</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Books For Reading Section */}
            <BooksForReading />

            {/* Creatives Section */}
            <Creatives />

            {/* Videos Section */}
            <Videos />
        </div>
    );
}

// Books data
const booksData = [
    { id: 1, title: "LiFE Lifestyle for Environment Brochure", img: lifebook },
    { id: 2, title: "LiFE Brochure", img: lifebrochure },
    { id: 3, title: "Final A-Z booklet of LiFE", img: a_z },
    { id: 4, title: "Prayaas-Se-Prabhaav-Tak", img: prayaas },
    { id: 5, title: "Book of Paintings", img: bookofpaintings },
];

function BooksForReading() {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [maxScroll, setMaxScroll] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = 280;
            const newPosition = direction === 'left'
                ? Math.max(0, scrollPosition - scrollAmount)
                : Math.min(maxScroll, scrollPosition + scrollAmount);

            containerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newPosition);
        }
    };

    const handleScroll = () => {
        if (containerRef.current) {
            setScrollPosition(containerRef.current.scrollLeft);
            setMaxScroll(containerRef.current.scrollWidth - containerRef.current.clientWidth);
        }
    };

    React.useEffect(() => {
        if (containerRef.current) {
            setMaxScroll(containerRef.current.scrollWidth - containerRef.current.clientWidth);
        }
    }, []);

    const isAtStart = scrollPosition <= 0;
    const isAtEnd = scrollPosition >= maxScroll - 10;

    return (
        <section className="w-full flex justify-center bg-white py-12 md:py-16 mt-[-30px]">
            <div className="w-full max-w-[1100px] px-4 md:px-6">
                {/* Section Title */}
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#333333] mb-6 md:mb-8">
                    Books For Reading
                </h2>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Navigation Button - Hidden when at start */}
                    {!isAtStart && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 cursor-pointer w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Right Navigation Button - Hidden when at end */}
                    {!isAtEnd && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer translate-x-4 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Books Carousel */}
                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {booksData.map((book) => (
                            <div key={book.id} className="flex-shrink-0 w-[220px]">
                                {/* Book Card */}
                                <div className="group relative h-[280px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                                    {/* Colored Background */}
                                    <img src={book.img} alt="lifebook" />

                                    {/* Download Button - Positioned at Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="w-full flex items-center cursor-pointer justify-center gap-2 bg-white/95 text-gray-700 px-6 py-3 rounded-full text-[14px] font-medium hover:bg-white transition-colors shadow-lg backdrop-blur-sm">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Download
                                        </button>
                                    </div>
                                </div>

                                {/* Book Title */}
                                <p className="mt-3 text-[14px] font-medium text-gray-700 leading-tight">
                                    {book.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Creatives data with categories
const creativesCategories = [
    { id: 'all', label: 'All' },
    { id: 'conserve-water', label: 'Conserve Water' },
    { id: 'e-waste', label: 'E-Waste' },
    { id: 'save-energy', label: 'Save Energy' },
    { id: 'single-use-plastic', label: 'Say No to Single Use Plastic' },
];

const creativesData = [
    // Conserve Water
    { id: 1, category: 'conserve-water', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=500&fit=crop', title: 'Participate in recharge of rural water bodies' },
    { id: 2, category: 'conserve-water', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=500&fit=crop', title: 'Practice Crop Diversification' },
    { id: 3, category: 'conserve-water', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop', title: 'Use efficient Water Saving Farming Techniques' },
    { id: 4, category: 'conserve-water', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=500&fit=crop', title: 'Create Rainwater Harvesting Infrastructure' },
    // E-Waste
    { id: 5, category: 'e-waste', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=500&fit=crop', title: 'Dispose E-Waste Responsibly' },
    { id: 6, category: 'e-waste', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&h=500&fit=crop', title: 'Recycle Old Electronics' },
    // Save Energy
    { id: 7, category: 'save-energy', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=500&fit=crop', title: 'Use LED Bulbs' },
    { id: 8, category: 'save-energy', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=500&fit=crop', title: 'Switch to Solar Energy' },
    // Single Use Plastic
    { id: 9, category: 'single-use-plastic', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=500&fit=crop', title: 'Use Cloth Bags' },
    { id: 10, category: 'single-use-plastic', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=500&fit=crop', title: 'Avoid Plastic Bottles' },
];

function Creatives() {
    const [activeCategory, setActiveCategory] = React.useState('all');

    const filteredCreatives = activeCategory === 'all'
        ? creativesData
        : creativesData.filter(item => item.category === activeCategory);

    return (
        <section className="w-full flex justify-center bg-white py-12 md:py-16">
            <div className="w-full max-w-[1100px] px-4 md:px-6">
                {/* Section Title */}
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#333333] mb-6 md:mb-8">
                    Creatives
                </h2>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {creativesCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${activeCategory === category.id
                                ? 'bg-[#2196F3] text-white'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-[#2196F3] hover:text-[#2196F3]'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Creatives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                    {filteredCreatives.map((creative) => (
                        <div key={creative.id} className="group relative">
                            {/* Image Card */}
                            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                                <img
                                    src={creative.image}
                                    alt={creative.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Hover Overlay with Buttons */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <div className="flex gap-2">
                                        <button className="flex items-center gap-1.5 bg-white/95 text-gray-700 px-4 py-2 rounded-full text-[12px] font-medium hover:bg-white transition-colors shadow-md cursor-pointer">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            View
                                        </button>
                                        <button className="flex items-center gap-1.5 bg-white/95 text-gray-700 px-4 py-2 rounded-full text-[12px] font-medium hover:bg-white transition-colors shadow-md cursor-pointer">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Videos data
const videosData = [
    { id: 1, title: 'Mission LiFE - PM Modi Speech', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop', videoUrl: '' },
    { id: 2, title: 'LiFE Campaign Launch', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop', videoUrl: '' },
    { id: 3, title: 'Environment Conservation', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop', videoUrl: '' },
];

// Helper function to convert YouTube URLs to embed URLs
const getYouTubeEmbedUrl = (url: string): string => {
    let videoId = '';

    if (url.includes('youtu.be/')) {
        // Short URL format: https://youtu.be/VIDEO_ID
        videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (url.includes('youtube.com/watch')) {
        // Standard URL format: https://www.youtube.com/watch?v=VIDEO_ID
        const urlParams = new URLSearchParams(url.split('?')[1]);
        videoId = urlParams.get('v') || '';
    } else if (url.includes('youtube.com/embed/')) {
        // Already an embed URL
        return url;
    }

    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

function Videos() {
    const [selectedVideo, setSelectedVideo] = React.useState<{ id: number; title: string; videoUrl: string } | null>(null);

    const openVideo = (video: { id: number; title: string; videoUrl: string }) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section className="w-full flex justify-center bg-white py-12 md:py-16">
                <div className="w-full max-w-[1100px] px-4 md:px-6">
                    {/* Section Title */}
                    <h2 className="text-[24px] md:text-[32px] font-semibold text-[#333333] mb-6 md:mb-8">
                        Videos
                    </h2>

                    {/* Videos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                        {videosData.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => openVideo(video)}
                                className="group relative cursor-pointer"
                            >
                                {/* Video Card */}
                                <div className="relative h-[180px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-500 to-blue-600">
                                    {/* Thumbnail */}
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover opacity-90"
                                    />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={closeVideo}
                >
                    {/* Backdrop with Blur */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    {/* Modal Content */}
                    <div
                        className="relative z-10 w-full max-w-4xl mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeVideo}
                            className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer shadow-lg"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video Player */}
                        <div className="bg-black rounded-2xl overflow-hidden aspect-video">
                            {selectedVideo.videoUrl ? (
                                // Check if it's a YouTube URL
                                selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
                                    <iframe
                                        src={getYouTubeEmbedUrl(selectedVideo.videoUrl)}
                                        title={selectedVideo.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        src={selectedVideo.videoUrl}
                                        controls
                                        autoPlay
                                        className="w-full h-full"
                                    />
                                )
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white">
                                    <div className="text-center">
                                        <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        <p className="text-lg font-medium">{selectedVideo.title}</p>
                                        <p className="text-sm opacity-70 mt-2">Video URL not set</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MissionLife;