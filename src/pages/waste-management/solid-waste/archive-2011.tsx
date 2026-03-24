import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import GalleryCard from '../../../components/GalleryCard';
import DocumentCard from '../../../components/DocumentCard';
import standingorders from '/assets/standingorders.svg';

const sidebarItems = [
    { id: 'item1', title: "The M.P.C.Board joined The Times of India groups Green Ganesha Competition for Mumbai and Pune City in September 2011" },
    { id: 'item2', title: "The M.P.C.Board and Environment Department, govt. of Maharashtra together setup a sales stall showcasing Eco -Friendly Natural colour for Holi m at premises of Mantralaya, Mumbai on 1st March 2011" },
    { id: 'item3', title: "Finacial Aid was provided to Akil Bhartiya Mahila Lok Kala Sammelan on 9th and 10th October 2011 in Mumbai." },
    { id: 'item4', title: "The M.P.C.Board and Zee 24 Hrs news channel has organized eco friendly Household Ganesh Utsav competition across the state in September 2011." },
    { id: 'item5', title: "The M.P.C.Board and Loksatta, a leading newspaper in Marathi organized Domestic eco-friendly Ganesh Competition for Mumbai, Pune, Nagpur, Nashik, Nagar, and Aurangabad cities in September 2011." },
    { id: 'item6', title: "The M. P. C. Board sponsored the Eco Ganesha Competition organized by the DNA group of Publications in September 2011." },
    { id: 'item7', title: "Eco-Friendly Dahihandi in Mumbai on 22nd August 2011" },
    { id: 'item8', title: "Financial Aid was provided for the Green Development summit held at Chandrapur on 10th June 2011." },
    { id: 'item9', title: "Bhimashankar Vikas Pratishtan, an NGO, had organized Green Bicycle Rally On 28 February, 2011 from Thane to Governor House, Malbar Hill Mumbai." }
];

const Archive2011 = () => {
    const [selectedTab, setSelectedTab] = useState(sidebarItems[0].title);
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    // Data for each tab
    const eventData: Record<string, { description?: string, photos: any[], videos: any[], document?: any }> = {
        "The M.P.C.Board joined The Times of India groups Green Ganesha Competition for Mumbai and Pune City in September 2011": {
            description: "The M.P.C.Board joined The Times Green Ganesha Competition for Mumbai and Pune City. The activity was focused on appealing people to accept the change without changing the traditional values. The campaign was supported by 360 degree media plan i.e. print, radio, internet, SMS. The Times response covered this campaign in Navabharat Times, Bombay Times, Mumbai Mirror, and Bombay Times and Pune Mirror. The special Coverage of the celebrity talks, expert interviews and M.P.C.Board's view about the eco friendly Ganapati festival were covered to act, promote and increase the awareness about the eco friendly festival. During the campaign idol making workshops was also organized to create awareness of this campaign.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Green Ganesha Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Green+Ganesha+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Green Ganesha Highlights", thumbnail: "https://placehold.co/600x400?text=Green+Ganesha+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "The M.P.C.Board and Environment Department, govt. of Maharashtra together setup a sales stall showcasing Eco -Friendly Natural colour for Holi m at premises of Mantralaya, Mumbai on 1st March 2011": {
            description: "With the Objective to create awareness among common people to celebrate Holi with eco-friendly and natural colours, MPCB & Environment Department GoM, together setup a sales stall showcasing Eco-Friendly Colours at the premises of Mantralya, Mumbai. The stall was inaugurated by Hon'ble Minister of State environment, Shri Sachin Ahir in presence of Environment Secretary, Smt. Valsa Nair Singh along with the officials from MPCB and environment Department. The boxes were provided by Social Forest, GoM,Thane Division. The employees of Mantralaya purchased more than 200 Kg of natural colours.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Eco Holi Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Eco+Holi+Photo+${i + 1}`]
            })),
            videos: []
        },
        "Finacial Aid was provided to Akil Bhartiya Mahila Lok Kala Sammelan on 9th and 10th October 2011 in Mumbai.": {
            description: "Lokrang Sanskrutik manch had organized Akhil Bhartiya Mahila Lok Kala Sammelan on October 9 and October 10,2011, in Mumbai. In this Sammelan folk artists performed various programmes. Folk art is a media in rural area to educate rural society about the pollution free environment. MPCB has taken initiative to educate the folk artist to support the awareness activity of pollution free environment. The folk arts for e.g. Kirtan, Bharud, Powada, Gan-gavalan, batavani etc. were performed in this sammelan.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Mahila Sammelan Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Mahila+Sammelan+Photo+${i + 1}`]
            })),
            videos: []
        },
        "The M.P.C.Board and Zee 24 Hrs news channel has organized eco friendly Household Ganesh Utsav competition across the state in September 2011.": {
            description: "To create awareness among the society MPCB and Zee 24 Hrs news channel has organized eco friendly Household Ganesh Utsav competition across the state in September 2011. Zee 24 Taas has appeal to the viewers to send the photographs of eco friendly Household Ganapati along with their detailed information. More than 500 participants submitted their reports.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Zee 24 Hrs Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Zee+24+Hrs+Photo+${i + 1}`]
            })),
            videos: []
        },
        "The M.P.C.Board and Loksatta, a leading newspaper in Marathi organized Domestic eco-friendly Ganesh Competition for Mumbai, Pune, Nagpur, Nashik, Nagar, and Aurangabad cities in September 2011.": {
            description: "To create awareness among the society to celebrate eco-friendly Ganesh Festival, MPCB and Loksatta, a leading newspaper in Marathi organized Domestic eco-friendly Ganesh Competition for Mumbai, Pune, Nagpur, Nashik, Nagar, and Aurangabad cities. The competition's objective was to appeal people to opt for Ganesha idol made up of mud and Natural colours than of clay and POP. The competition was organized for the duration of 10 days. The participants were asked submit the photograph of their Household Ganapati along with the detail information of eco-friendly decoration. The winners were felicitated with the Prizes.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Loksatta Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Loksatta+Photo+${i + 1}`]
            })),
            videos: []
        },
        "The M. P. C. Board sponsored the Eco Ganesha Competition organized by the DNA group of Publications in September 2011.": {
            description: "The M. P. C. Board sponsored the Eco Ganesha Competition organized by the DNA group of Publications. The competition involved a unique idea of creating the theme of Ashtavinayak wherein all the eight different forms of lord Ganesha were placed across the city at the leading malls like Cross World, Haji Ali, Inorbit, Malad, R Mall, Mulund, Eternity Thane, Centre point, Navi Mumbai. Along with this it also introduced a concept of Green Housing Society. It also appealed people to involve themselves in the paper collection drive. The First hundred societies that registered were gifted pooja thali and saplings were offered to the participants. Through this paper collection drive, DNA made eight eco-ganesha idols, basically replica of Ashtavinayak Ganapati and were placed in eight prominent malls across the city. DNA also felicitated those Ganesh Mandals who celebrated eco-friendly Ganesh-festival. DNA's campaign included lot of advertisement in their newspaper, was also associated with FM radio Channels along with the editorial coverage in DNA newspaper. The prize distribution ceremony was organized in presence of State minister Of environment, Shri, Sachin Ahir, Member Secretary of MPCB, Shri, Milind maiskar and the famous Hindi Actress, Samira Reddy was also remain present in this ceremony. On the occasion of this public awareness campaign, DNA also organized for senior citizen of Mumbai city Ashtavinayak Yatra Tour for eight eco idols was placed to create awareness to celebrate eco-friendly Ganesh festival and the response from this Yatra was truly tremendous. All eight Ashtavinayak were made from eco friendly clay. For this campaign Minister of Environment, Shri Sanjay Deotale, Minister of State for Environment Shri, Sachin Ahir, visited selected places of Ashtavinayak idols and both the dignitaries performed Ganesh Aarti.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `DNA Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=DNA+Photo+${i + 1}`]
            })),
            videos: []
        },
        "Eco-Friendly Dahihandi in Mumbai on 22nd August 2011": {
            description: "The M.P.C. Board & Ideal Pustak Triveni had organized Eco-Friendly Dahihandi in Mumbai in August 2011. On the occasion of the day a rally was organized that toured from Shivaji Park, Dadar across the city in the open Double Decker Best Bus wherein film star also joined and conveyed the social message of reducing noise pollution. The rally was inaugurated by Mr Bharat Nimbarte, Regional Head. The rally began with performance of a street play for reducing Noise Pollution and concluded at Ideal Book Depot, Dadar.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Dahihandi Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Dahihandi+Photo+${i + 1}`]
            })),
            videos: []
        },
        "Financial Aid was provided for the Green Development summit held at Chandrapur on 10th June 2011.": {
            description: "On June 4, 2011 We Live India had organized awareness program through which messages promoting conserving environment could reached to many people. The programs were canvas painting, Talk show, and etc. Many celebrities, sport-stars and political leaders attended the function",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Summit Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Summit+Photo+${i + 1}`]
            })),
            videos: []
        },
        "Bhimashankar Vikas Pratishtan, an NGO, had organized Green Bicycle Rally On 28 February, 2011 from Thane to Governor House, Malbar Hill Mumbai.": {
            description: "On the occasion of World Science Day, observed On 28 February, 2011, Bhimashankar Vikas Pratishtan, an NGO, had organized Green Bicycle Rally from Thane to Governor House, Malbar Hill Mumbai. The campaign was financially supported by MPCB. Internationally famous scientist Dr Anand Karve gave the flag off to the rally at Thane. Winner of Chattrapati award bicycle champion, Shri Pankaj Marlesa, Police Inspector of Thane City, college students and many enthusiasts participated in this cycle rally. The rally was organized with an objective to create awareness about the nature among society at large appealing them to stop destroying nature, avoiding plastic bags, saving energy, saving water, minimizing use of electricity, and opt for natural habits to livelihood.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Bicycle Rally Photo ${i + 1}`,
                date: "2011",
                images: [`https://placehold.co/800x600?text=Bicycle+Rally+Photo+${i + 1}`]
            })),
            videos: []
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
                                Archive - Year 2011
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
                                        {eventData[selectedTab].videos.length > 0 && (
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
                                        )}
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

export default Archive2011;
