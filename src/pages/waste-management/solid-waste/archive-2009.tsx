import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import GalleryCard from '../../../components/GalleryCard';
import DocumentCard from '../../../components/DocumentCard';
import standingorders from '/assets/standingorders.svg';

const sidebarItems = [
    { id: 'item1', title: "Competition for celebrating Eco-Friendly Ganesh Festival for societies or Ganesh mandals" },
    { id: 'item2', title: "MPCB celebrating World Ozone Day for preservation of Ozone layer on 16th September,2009" },
    { id: 'item3', title: "Training worshop for Preparation of Environmental Status Report for Municipal Councils/Corporations" },
    { id: 'item4', title: "EKO Award 2009" }
];

const Archive2009 = () => {
    const [selectedTab, setSelectedTab] = useState(sidebarItems[0].title);
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    // Data for each tab
    const eventData: Record<string, { description?: string, photos: any[], videos: any[], document?: any }> = {
        "Competition for celebrating Eco-Friendly Ganesh Festival for societies or Ganesh mandals": {
            description: "The Maharashtra Pollution Control Board (MPCB) has always taken initiative for creating awareness among the citizens for celebrating Eco-Friendly Ganesh Festival. In this context, MPCB in association with Various NGOs and Ganesh Festival Coordination Committee has organized a competition for societies and Ganesh mandals in the state. The competition is aimed at encouraging use of Eco-Friendly Ganesh idols made of Shadu clay, use of natural colors and avoiding use of thermocol and plastic for decoration. The winners will be awarded with prizes at district and state levels. This competition 'Green Ganesha Awards 2009' has received a huge response from the public and various mandals have participated in large numbers showing their concern for environmental protection during the festive season. The initiative focuses on reducing water pollution in the immersion points and promoting sustainable celebration practices.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Ganesh Festival Photo ${i + 1}`,
                date: "2009",
                images: [`https://placehold.co/800x600?text=Ganesh+Festival+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Ganesh Festival Highlights", thumbnail: "https://placehold.co/600x400?text=Ganesh+Festival+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "MPCB celebrating World Ozone Day for preservation of Ozone layer on 16th September,2009": {
            description: "To celebrate World Ozone Day for preservation of Ozone layer, MPCB has organized various awareness programs across the state. In this series of events, a specialized training session is scheduled on 8th & 9th September, 2009 at Central Laboratory, MPCB, Nirmal Bhavan Mahape. The program aims to educate stakeholders and board officials on the importance of the Montreal Protocol and the initiatives required to phase out Ozone Depleting Substances (ODS) in the industrial sector. Technical experts will provide guidance on the monitoring and control of CFCs and other substances that contribute to ozone layer depletion, aligning with national and international environmental goals.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Ozone Day Photo ${i + 1}`,
                date: "2009",
                images: [`https://placehold.co/800x600?text=Ozone+Day+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Ozone Day highlights", thumbnail: "https://placehold.co/600x400?text=Ozone+Day+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "Training worshop for Preparation of Environmental Status Report for Municipal Councils/Corporations": {
            description: "The Maharashtra Pollution Control Board has organized a specialized training workshop for the Preparation of Environmental Status Report (ESR) for Municipal Councils and Corporations. This training is scheduled on 8th & 9th September, 2009 at Central Laboratory, MPCB, Nirmal Bhavan Mahape. The workshop aims to provide technical guidance and standardized frameworks to urban local bodies for assessing and reporting their environmental performance. This initiative is crucial for better urban environmental management and transparency in reporting the state of the environment at the local government level.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Workshop Photo ${i + 1}`,
                date: "2009",
                images: [`https://placehold.co/800x600?text=Workshop+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Workshop Highlights", thumbnail: "https://placehold.co/600x400?text=Workshop+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "EKO Award 2009": {
            description: "The EKO Award 2009 was presented to recognize and encourage outstanding environmental initiatives and compliance among industries and local bodies. This prestigious award highlights the commitment of the winners towards sustainable development and environmental conservation. MPCB takes pride in facilitating this recognition to promote a greener future for Maharashtra.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `EKO Award Photo ${i + 1}`,
                date: "2009",
                images: [`https://placehold.co/800x600?text=EKO+Award+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "EKO Award Highlights", thumbnail: "https://placehold.co/600x400?text=EKO+Award+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ],
            document: {
                id: 1,
                title: "EKO Award 2009 - Official Announcement",
                department: "Public Relations",
                date: "2009",
                pdfUrl: "#"
            }
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
                                Archive - Year 2009
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
                                            <p className="text-[15px] text-gray-700 leading-relaxed text-justify whitespace-pre-line mb-8">
                                                {eventData[selectedTab].description}
                                            </p>
                                            {eventData[selectedTab].document && (
                                                <div className="mt-8 border-t border-gray-100 pt-8">
                                                    <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Related Documents</h3>
                                                    <DocumentCard document={eventData[selectedTab].document} wide={true} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-12">
                                        {/* Photos Section */}
                                        <div>
                                            <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Event Photos</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                                {eventData[selectedTab].photos.map((item) => (
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

                                        {/* Videos Section */}
                                        <div>
                                            <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Event Videos</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                                {eventData[selectedTab].videos.map((video) => (
                                                    <div key={video.id} onClick={() => handleVideoClick(video)} className="group flex flex-col gap-4 cursor-pointer">
                                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 bg-gray-100">
                                                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                            <div className="absolute inset-0 bg-black/5" />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                                                    <Play className="w-5 h-5 text-[#00A3FF] fill-[#00A3FF] ml-0.5" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-[#00A3FF] transition-colors">{video.title}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
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
                        <button onClick={handlePrevImage} className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"><ChevronRight className="w-8 h-8 md:w-12 md:h-12" /></button>
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

export default Archive2009;
