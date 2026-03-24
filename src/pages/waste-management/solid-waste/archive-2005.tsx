import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import GalleryCard from '../../../components/GalleryCard';
import standingorders from '/assets/standingorders.svg';

const sidebarItems = [
    { id: 'item1', title: "International Exibition on Environment 2005 at Abu Dhabi, 30th Jan to 2nd Feb 2005" },
    { id: 'item2', title: "Interaction with the Press and NGOs on Environment on 10th Nov, 2005" }
];

const Archive2005 = () => {
    const [selectedTab, setSelectedTab] = useState(sidebarItems[0].title);
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    // Data for each tab
    const eventData: Record<string, { description?: string, photos: any[], videos: any[] }> = {
        "International Exibition on Environment 2005 at Abu Dhabi, 30th Jan to 2nd Feb 2005": {
            description: "Maharashtra Pollution Control Board has represented in International Exhibition on Environment 2005 at Abu Dhabi which was held during 30th January to 2nd February, 2005. The inauguration of the Exhibition has been made by H.E. Hamed Abdul Rehman Al Midfa, Minister of Health, U.A.E., on behalf of the Government of U.A.E. and other dignitaries present were Dr. Klaus Toepfer, United Nations Under-Secretary-General, Amb. Anwarul K. Chowdhury, UN Under-Secretary-General, H.E. Margaret Wolf, Vice Minister and Parliamentary State Secretary, Germany and W. Adrian Loader, Shell International Director Strategic Planning, Sustainable Development and External Affairs. By participating in this exhibition we have made efforts to show how things are progressing in the State with reference to environmental protection and Maharashtra can be the most preferred destination for foreign investors. This exhibition stall was very attractive to the visitors and four corners of the stall, Flag of India and various activities in the form of models, posters, laminated photographs, chart and descriptive information as well as awareness information were displayed. Technology for the Hazardous Waste Treatment and Disposal, Municipal Solid Waste and typical industrial waste were also displayed. The Officers of MPCB, namely Mr. R.G. Pethe, Water Pollution Abatement Engineer, Mr. P.P. Nandusekar, Principal Scientific Officer, Mr S.S. Doke, Regional Officer (P&P) and Mr. G.N. Mohite, I/C. Regional Officer (Mumbai) have made pain taking efforts to make the exhibition successful and useful. Exhibition is found to be very much useful to the visitors and they desired that such types of stall was unique and requested to participate frequently by India in future also in such exhibition.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Exibition Photo ${i + 1}`,
                date: "2005",
                images: [`https://placehold.co/800x600?text=Exibition+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Exibition Highlights", thumbnail: "https://placehold.co/600x400?text=Exibition+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "Interaction with the Press and NGOs on Environment on 10th Nov, 2005": {
            description: "With a intention to interact with the press & NGOs on the work so far done by the MPCB in implementation of various legislations and rules framed for environment protection in the State, a meeting was organized on 10th of Nov. 2005 at Textile Committee Hall, Prabhadevi, Mumbai-400 025. First of all Shri D. T. Devale, SLO welcomed the dignitaries on the dais, NGOs, media persons & officers and staff members of the MPCB. In his welcome speech, he briefly introduced the chief guest & other dignitaries and given the background about this meet. He requested to the gatherings to pay homage to late Ex-President of India, Hon. Shri K. R. Narayanan on his demise by observing 2 minutes silence. Shri P. P. Nandusekar, PSO in his speech gave details about his long tenure in the Board and the work done in the field of air pollution, water pollution and public awareness campaigns, Kumbha mela at Nashik. He expressed his displeasure about the media that, many a time media do not publish remarkable work even of the MPCB for want of presence of big political leaders. This attitude of the media deprives the public from important and useful information in the field of environment protection. He emphasized the efforts taken by him for organizing exhibitions on local level, State level and abroad with the positive support and able guidance of present Member Secretary. Dr. D. B. Boralkar, M.S. explained the gravity of the subject environment protection in the State. He enlightened about the quantum of wastes generation and velocity of urbanization in the State, comparing percentage-wise with other States. He emphasized the formation of a private infrastructure company for implementation of various acts, enactments, court orders effectively in the State and given details of the process initiated by the State Govt. Shri Kumar Kadam, President of the Mumbai Marathi Patrikar Sangh in his speech insisted on effective public participation for the environment protection & awareness drive at grass route and rural level than at white collar/high society level. He traced the need of giving proper and true information to the media personnel and identifying the bogus NGOs. He also desired to have a joint venture with 'Patrakar Sangh' for public awareness work. He explained his experience in the village 'Avashi' & how politically motivated NGOs created superficial atmosphere and make out hot news of the incident which has not actually taken place. He was of the view that the MPCB should prepare a handbook manual for environmental journalists & MPCB should provide regulation information to the press for wide spread publicity and awareness amongst the public at large. Shri Chandrasen Borade from Ranjai, Pune explained, how effective work can be done by through the public participation. He also emphasized that, without encouragement from the concern departments and government machinery, NGOs cannot function effectively. He informed about the project undertaken by the KDMC in collaboration with foreign based company for power generation from MSW. 500 MT, MSW which can give 10 MW power. This project can be brought to the notice of Pune Mun. Corpn. for use of MSW for power generation. He pointed out that, BMW generated in the big hospitals in Pune is only taken care of, but the small health care centers do not dispose their BMW in scientific manner, hence MPCB should look into small generators. NGOs are trying to monitor and create public awareness in this field. He pointed out the inefficient functioning of Kurkumbh CETP and not having facility like fire station etc. at that place. He express his anxiety about the lead and mercury pollution in the city. He also stressed the need to extend concept 'Parisar' to more & more areas rather than to one's own house, so that more area will be brought under clean up by each one in the society. Vasant Mhatre, NGO from Navi Mumbai expressed his grave concern regarding MSW of NMMC. He felt that the MPCB be given free hand without interference of political powers to implement environmental legislations effectively. He also pointed out that, MSW site of NMMC should be at far distance from residential area as this chemical belt has become thickly populated area. He expressed his willingness to support MPCB activities in respect of pollution control and ready to act as a watch-dog. He also felt need of separate body of professionally experts in environmental field for giving pollution free atmosphere to the citizens. Shri Kishore Dharia, President of 'Hirwal', NGO also welcomed MPCB for organizing such a meet for interaction with press, media and NGOs. Rishi Aggarwal, NGO opined to frame a separate department in MPCB to co-ordinate NGOs for regular meet for exchange of thoughts and ideas. Prof. S. B. Chaphekar, Chief Guest of the meeting guided all in depth. He informed about his interaction with the Board from the time of Mr. Lentin, Ex-Director of the Board and so on. He emphasized that, only enforcement of various acts will not suffice to educate people about the environment protection, there must be action plan with the Board for awareness campaign. On the remarks of Dr. Boralkar, 'Board is self-sufficient', he opined that, Board must remove deficiencies they experienced in day to day working, only financial self-sufficiency will not result in awareness campaign. Besides doing work through agencies and consultants, many ways are to be adopted to educate people for pollution control programme. In his speech, he traced need of participation of rural NGOs, Municipal Councils of B & C Class and small cities & towns in the protection of the environment. Programmes on school level should be prepared for these activities. He narrated effectiveness of participation of the students in such activities. He mentioned his displeasure about the unhygienic atmosphere experienced in our pilgrim places. Action plans like Shani- Shinganapur should be undertaken in other pilgrimage places immediately. Instead of meeting with NGOs from and around Mumbai area, Statewide conference be arranged for interaction on this issue with the NGOs. He also enlightened about the un-recoverable pollution of soil. He deeply expressed his concern about unscientific and unhygienic way of dumping of MSW, which affected fertility of the soil. He suggested, Board should support to the NGOs, citizens and schools for effective awareness and environment protection plans to achieve success in environment protection and pollution control aim. The interaction meet was attended by 75 participants consisting of NGOs, representatives of the press, media, experts and consultants in the field of the environment all over The Maharashtra with a short notice. MPCB exhibited various news published in the various news-papers about the actions of the MPCB in favour of & against the Board. Activities undertaken by the MPCB during Ganpati festival, Holi, Navratri and Diwali festival for creation of awareness were also displayed. The operative part of the orders passed by the Hon'ble Supreme Court of India & Mumbai High Court Benches in respect of Management of Hazardous Wastes, Municipal Solid Wastes, Noise Monitoring and effective actions initiated by the Board in Mahabaleshwar & Panchgani sensitive zone were also shown in the exhibition. The information about the participation of the MPCB at State, National & International level was highlighted in the exhibition. For making the above programme successful, the following officers as well as employees taken very hard work, namely, 1) Dr.A.N. Kamble, JSO 2) Shri B. D. Wadde, SRO 3) Shri A.S. Nandvate, FO 4) Shri D.R. Bansod, FO 5) Miss Viju Sirsath, FO 6) Mrs.Kamla Bhaskar, Jr.Steno 7) Shri A.M. Mirkute, jr.Steno 8) Miss. Renuka Chavan, JRF 9) Mrs. Deepali Joshi, Jr. Clerk Shri R. G. Pethe concluded the meeting and given vote of thanks to the participants with vote of thanks to the chair.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Press Interaction Photo ${i + 1}`,
                date: "2005",
                images: [`https://placehold.co/800x600?text=Press+Interaction+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Press Interaction Highlights", thumbnail: "https://placehold.co/600x400?text=Press+Interaction+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
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
                                Archive - Year 2005
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

export default Archive2005;
