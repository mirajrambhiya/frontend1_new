import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import standingorders from '/assets/standingorders.svg';

const sidebarItems = [
    { id: 'item1', title: "Foundation Stone Laying Ceremony of Central Laboratory, 21st Nov 2004" },
    { id: 'item2', title: "International Day for Preservation of Ozone Layer was celebrated by MPCB on 16th Sept, 2004" },
    { id: 'item3', title: "MPCB celebrated its 34th Foundation Day on 7th Sept, 2004" }
];

const Archive2004 = () => {
    const [selectedTab, setSelectedTab] = useState(sidebarItems[0].title);
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    // Data for each tab
    const eventData: Record<string, { description?: string, photos: any[], videos: any[] }> = {
        "Foundation Stone Laying Ceremony of Central Laboratory, 21st Nov 2004": {
            description: "November 21, 2004 was unique day for the MPCB. On this auspicious day Shri. Sharad Pawar, Hon. Minister for Agriculture and Food Technology laid down a foundation stone for the proposed building of the Central Laboratory at Mahape, Navi Mumbai. It was a sparkling event in which Deputy Chief Minister of Maharashtra, Shri. R.R. Patil was the Chief Guest and Chairman was Shri. Ganesh Naik, Minister of Environment, Government of Maharashtra. The State Minister for Environment, Shri. Ravindra Patil along with Shri. Sunil Tatkare, Minister for Agriculture and Food Supplies, Shri. Nakul Patil, Chairman CIDCO were the Guests of Honour. The ceremony was attended by employees of the board and numerous prominent personalities from all walks of life. The Honorable guests first visited the exhibition which acted as a show case of the various activities in the field of environmental protection and pollution control. Later on the main function started with a traditional Nandee by a cultural group from Pune and Shahir Vithal Umap sent a patriotic wave in the audience by his Powada and Maharashtra Geet. The show compared by Shri. Sudhir Gadgil, well known TV personality and host of Mahacharcha on Doordarshan. He was accompanied by another theatre and film personality Miss. Sharvari Jamenees. While addressing the large gathering Shri. Sharad Pawar, Hon. Minister for Agriculture and Food Technology laid emphasis on the balance of environmental protection and industrial growth. 'The industrial growth in the state has polluted the valuable water resources and common man is paying the cost of this development. We have to balance our activities and also protect the nature for the next generations,' commented Shri. Pawar. Deputy Chief Minister of Maharashtra, Shri. R.R. Patil hoped that the building of the Central Laboratory will be completed soon. 'Maharashtra is a leading state as far as industrial sector is concerned now let's be concerned about pollution control and also make the state pollution free. The State Government will support all the positive initiatives taken by the MPCB for curbing pollution in the State,' remarked Shri. R.R. Patil. Shri. Ganesh Naik, Minister of Environment, Government of Maharashtra and Principal Secretary Shri. B.P. Panday also spoke on the occasion. Central Laboratory's new facility is a need of the day. It is essential to handle the ever increasing demand for the analysis of Air, Water and Solid Waste etc. It will fulfill long-lasting demand of having a separate facility for this type of work. At the moment Central Laboratory's building at CIDCO Bhavan in Navi Mumbai along with regional laboratories at other regional offices does this type of analysis. But ever increasing demand for such type of testing is putting pressure on the existing infrastructure. The proposed 'state of the art' laboratory at Mahape costing around Rs. 8 Crores, will definitely help MPCB, in the long run.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Ceremony Photo ${i + 1}`,
                date: "2004",
                images: [`https://placehold.co/800x600?text=Ceremony+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Laying Ceremony Highlights", thumbnail: "https://placehold.co/600x400?text=Ceremony+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "International Day for Preservation of Ozone Layer was celebrated by MPCB on 16th Sept, 2004": {
            description: "International Day for Preservation of Ozone Layer was celebrated by MPCB, on 16th September, 2004 at 3rd floor, Kalpataru Point, Sion Circle, Sion (East). On this occasion 'The Ozone Story' Posters depicting Ozone Layer Awareness, published by MPCB were displayed in the exhibition. The Exhibition was inaugurated by Prof. Rashmi Patil, IIT, Mumbai. Shri Warhade, Director, Environmental Department, GoM, was present as a Guest of Honor. Dr. D.B. Boralkar presided over the function. On this occasion special issue of Paryavaran Sevak magazine, a joint venture of Paryavaran Sevak and M.P.C.B. was also released at the hands of Shri V.N.Warhade, Director, Environment Department, GoM. Prof. Rashmi Patil made a small presentation on evil effect of depleting ozone layer. Shri Warhade also explained certain important aspects on protection of ozone layer. Dr. D.B. Boralkar gave a presidential address, explaining efforts taken by MPCB to curb the pollution. Shri P.P. Nandusekar expressed vote of thanks. On this occasion quiz contest on ozone layer was organized, in which MPCB staff members participated in large numbers. Winners were felicitated by the guest with certain Prize Money. The exhibition arranged on this date lasted for two days i.e. 16th & 17th Sept. 2004. the representatives of Industries, Industrial Associates and NGO's visited the exhibition in large numbers",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Ozone Day Photo ${i + 1}`,
                date: "2004",
                images: [`https://placehold.co/800x600?text=Ozone+Day+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Ozone Day Celebration", thumbnail: "https://placehold.co/600x400?text=Ozone+Day+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "MPCB celebrated its 34th Foundation Day on 7th Sept, 2004": {
            description: "MPCB celebrated its 34th foundation day on 7th Sept 2004 at Buntara Bhawan, Chunabhatti, Mumbai. The theme of the programme was Environmental first Maharashtra (EFM). Hon'ble Sai Paranjape, noted Film Director, was the Chief Guest of the function. Shri Rajeshwar Neture - Board Member, MPCB and Shri Suresh Deshmukh - Board Member, MPCB were Guest of Honour of the function. Dr. D.B. Boralkar presided over the function. On this occasion 'Lifetime Achievement Awards' were given to Shri K.M. Mehta, Ex- Member Secretary; Shri. R.D. Rasal, Ex- Member Secretary and Shri S.D. Jogal, Ex- Head Accountant, Cess Wing. Staff members completing 25 years continuous service were also felicitated on this occasion. To mark the occasion, cassettes & CD's on Environmental Awareness, Directed by Shri. V.M. Motghare, Regional Officer- Nagpur and Produced by Dr. D.B. Boralkar, Member Secretary, MPCB were inaugurated at the hands of Sai Paranjape. Information Booklet on Environmental Awareness and 'Environmental First Maharashtra' Report, containing Environment related reports and MPCB's activities edited by Prof. Sharad Chapekar, were inaugurated at the hands of Shri Rajeshwar Neture and Shri Suresh Deshmukh respectively. The inaugural Program was followed by a melodious orchestra 'Awaz ki Duniya' by Shri Ashok Hande.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `34th Foundation Day Photo ${i + 1}`,
                date: "2004",
                images: [`https://placehold.co/800x600?text=Foundation+Day+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Foundation Day Highlights", thumbnail: "https://placehold.co/600x400?text=Foundation+Day+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        }
    };

    const handleTabClick = (title: string) => {
        setSelectedTab(title);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openSlideshow = (item: any) => {
        setSelectedAlbum(item);
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

    const handleVideoClick = (video: any) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (!selectedAlbum) return;
        const timer = setTimeout(handleNextImage, 4000);
        return () => clearTimeout(timer);
    }, [currentImageIndex, selectedAlbum]);

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-family-helvetica text-[#333333]">
            {/* Top Banner Section (rts.tsx style) */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${standingorders})` }} />
                        <div className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105" style={{ backgroundImage: `url(${standingorders})`, maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)' }} />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />
                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Archive - Year 2004
                            </h1>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[350px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarItems.map((item) => {
                                    const isActive = selectedTab === item.title;
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => handleTabClick(item.title)}
                                            className={`flex items-center justify-between px-6 py-4 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[13px] font-normal transition-colors duration-200 leading-snug ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {item.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                <h2 className="text-[22px] md:text-[24px] font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4 uppercase leading-snug">
                                    {selectedTab}
                                </h2>

                                {eventData[selectedTab].description ? (
                                    <div className="flex flex-col lg:flex-row gap-8 mb-12">
                                        <div className="w-full lg:w-1/3 flex flex-col gap-4">
                                            {eventData[selectedTab].photos.map((photo, idx) => (
                                                <div key={idx} className="rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-300" onClick={() => openSlideshow(photo)}>
                                                    <img src={photo.images[0]} alt={`Event ${idx + 1}`} className="w-full h-auto object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full lg:w-2/3">
                                            <p className="text-[15px] text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                                                {eventData[selectedTab].description}
                                            </p>
                                        </div>
                                    </div>
                                ) : null}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modals */}
            {selectedAlbum && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={() => setSelectedAlbum(null)}>
                    <button onClick={() => setSelectedAlbum(null)} className="absolute top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1001] cursor-pointer shadow-lg border border-white/10"><X className="w-8 h-8 md:w-10 md:h-10" /></button>
                    <div className="flex items-center justify-center gap-2 max-h-[90vh] w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handlePrevImage} className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"><ChevronLeft className="w-8 h-8 md:w-12 md:h-12" /></button>
                        <div className="relative shrink-0 flex items-center justify-center">
                            <img src={selectedAlbum.images[currentImageIndex]} alt="Slide" className="max-h-[85vh] max-w-[calc(100vw-140px)] object-contain rounded-lg shadow-2xl select-none" />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/60 px-4 py-1 rounded-full backdrop-blur-sm z-10 pointer-events-none">{currentImageIndex + 1} / {selectedAlbum.images.length}</div>
                        </div>
                        <button onClick={handleNextImage} className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"><ChevronRight className="w-8 h-8 md:w-12 md:h-12" /></button>
                    </div>
                </div>
            )}

            {selectedVideo && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center" onClick={closeVideo}>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <div className="relative z-10 w-full max-w-5xl mx-4 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeVideo} className="absolute -top-14 right-0 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer shadow-lg backdrop-blur-sm border border-white/10"><X className="w-8 h-8" /></button>
                        <div className="bg-black rounded-[32px] overflow-hidden shadow-2xl border border-white/10 aspect-video">
                            <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full" />
                        </div>
                        <div className="mt-6 text-white text-center">
                            <h2 className="text-[20px] font-bold tracking-tight">{selectedVideo.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Archive2004;
