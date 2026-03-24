import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import GalleryCard from '../../../components/GalleryCard';
import standingorders from '/assets/standingorders.svg';

const sidebarItems = [
    { id: 'item1', title: "Celebration of World Earth Day on 22nd April, 2006." },
    { id: 'item2', title: "Review Meet flooded with suggestions, 27th April, 2006" },
    { id: 'item3', title: "52nd Conference of Chairpersons and Member Secretaries of Pollution Control Boards or Committees at Hotel Retreat, Mumbai, 5th and 6th Jan 2006" }
];

const Archive2006 = () => {
    const [selectedTab, setSelectedTab] = useState(sidebarItems[0].title);
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    // Data for each tab
    const eventData: Record<string, { description?: string, photos: any[], videos: any[] }> = {
        "Celebration of World Earth Day on 22nd April, 2006.": {
            description: "The World Earth Day was celebrated on 22 nd April 2006 at Udyam Hall, Udyog Bhawan, Civil Lines, Nagpur. The programme was inaugurated by Dr. Sukumar Devotta, Director, NEERI, Nagpur and also chair the function. Dr. Raju Mankar, Director, Laxminarayan Institute of Technology, Nagpur was the Chief Guest and Dr. Ganvir, Nagpur Municipal Corporation was the Guest of Honour. Shri N.K. Agrawal of M/s Indorama Synthetics Ltd. Butibori was also present as sponsorer of the programme. Prof. Vijay Ghuge of Nisarga Vidnyan Mandal was also present during the function. Shri P.M. Patil, Regional Officer, M.P.C. Board, Nagpur in his inaugural speech highlighted the importance of Environment protection and urged the people to replace plastic bags in daily usage by cotton bags and plastic should be limited to the industrial application with stipulation of minimum 50 microns and size minimum by 8\" to 12\". Dr. Raju Mankar, Director, LIT told that paper could not be substitute of plastic bags in daily use. The manufacturing of paper will involve grater water and air pollution. In Europe, usage of plastic is much higher than in India. Awareness is needed for the eradication of plastic bags, as educated people are using more plastic than common people. He also stressed that eradication should require certain punitive measures for users of thin plastic bags Prof. Vijay Ghuge informed the people that he has started stitching of saree bags from last 2 years and told that use of cotton bags shall start with Children. Shri N.K. Agrawal, M/s Indorama Synthetics Ltd. highlighted various Environment Protection activities of M/s Indorama Synthetics Ltd. Dr. Ganvir, Nagpur Municipal Corporation, Nagpur informed the various cleaning activities of Municipal Corporation and punitive measures while implementing Maharashtra Plastic Carry Bags (Manufacture and Usage) Rules, 2006. The cotton bags printing slogan \"plastic cha soda heka, kapadi bag waprayala shika\" was also inaugurated by Dr. Devotta also issue of \"Nisargavedha\" published by Nisarga Vidnyan Mandal was inaugurated by Dr. Devotta. We have only one mother earth the protection of which is the duty of every citizen told Dr. Devotta. Her also stressed the need of sustainable development and discipline amongst the public using cotton bags. Vote of thanks was proposed by Shri P.M. Patil, Regional Officer, Nagpur. The programme was assisted by Shri N.G. Nihul, Shri S.S. Gadhawe, Sub-Regional Officers, Nagpur and all staff of Regional Office, Nagpur",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Earth Day Photo ${i + 1}`,
                date: "2006",
                images: [`https://placehold.co/800x600?text=Earth+Day+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Earth Day Highlights", thumbnail: "https://placehold.co/600x400?text=Earth+Day+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "Review Meet flooded with suggestions, 27th April, 2006": {
            description: "The review meeting of Chandrapur Action Plan held at Bachat Safalya Bhavan on Thursday brought good information and suggestions from prominent personalities of the district regarding the plan. Dr. Ajay Deshpande, Dr. S.B. Katoley, H D Pardeshi, were prominently present. Sanjeev Jaiswal, Collector, Ravindra Kadam, Superintendent of Police and Hansraj Ahir, Member of Parliament were the Chief guests. Apart from this, the representatives of around 60 large and medium scale industries and industrial associations of the district were prominently present at the meeting. S Dev, General Manager (Generation), Chandrapur Super Thermal Power Station (CSTPS), said that utilization of fly ash and prevention of pollution in CSTPS will be achieved in a time period of one year and the time frame of two years given in the plan was not needed, he clarified. He informed about the consistent meeting under progress with WCL, Cement Companies and others for utilisation of fly- ash. Roontga alleged that Chandrapur Super Thermal Power Station (CSTPS) officers have repeatedly promised to provide fly- ash to the small scale industries (SSIs) in the district only on papers as they have gone back on their words and the fly ash is not being given to the SSIs due to which many of them are on the verge of closure. He demanded immediate supply of 20 percent fly ash to Small Scale Industries . He also informed that MPCB can obtain a revenue of Rs. 100 crore per year as fund for the implementation of Chandrapur Action Plan.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Review Meet Photo ${i + 1}`,
                date: "2006",
                images: [`https://placehold.co/800x600?text=Review+Meet+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Review Meet Highlights", thumbnail: "https://placehold.co/600x400?text=Review+Meet+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
            ]
        },
        "52nd Conference of Chairpersons and Member Secretaries of Pollution Control Boards or Committees at Hotel Retreat, Mumbai, 5th and 6th Jan 2006": {
            description: "Central Pollution Control Board regularly holds Conference of Chairmen and Member Secretaries of Pollution Control Boards so as to discuss common issues related to prevention and control of pollution and to evolve strategies for pollution control enforcement. Since promulgation of the Water (P&CP) Act, 1974, 51 such Conferences were held by CPCB across the country. 52nd Conference was held at hotel 'The Retreat', Madh Island, Mumbai on January 5 and 6, 2006. Maharashtra Pollution Control Board hosted the Conference. Participants were from 28 States, 6 Union Territories, Central Pollution Control Board and Union Ministry for Environment and Forests (MoEF), New Delhi. The Conference was addressed by Shri A. Raja, Union Minister for Environment and Forests and Shri Ganesh Naik, Maharashtra State Environment Minister. On the first day of Conference various environmental issues were discussed. Major issues include review of environmental data bank activities, air quality monitoring, water quality monitoring, common treatment facilities, strategies for hazardous waste management, funding for new projects, strengthening of pollution control boards and committees, e-waste management, plastic waste management ( ban on plastic carry bags) and introduction of environmental educational courses. Air quality status, status of continuous air quality monitoring stations in 16 cities, air pollution source apportionment studies, etc were discussed in air quality status. MPCB is installing 3 continuous monitoring stations with the financial support of CPCB at Mumbai, Pune and Solapur. CPCB has initiated source apportionment studies in two cities namely; Pune and Mumbai. MPCB is already making air and water quality data available on MPCB website on a regular basis for public information. Status of common effluent treatment plants (CETPs), sewage treatment plants was reviewed. Status of common bio-medical waste treatment facilities (CBWTFs), common hazardous waste treatment storage and disposal facilities (CHWTSDF), review of implementation of action plan critically polluted areas, proposed strategy for hazardous waste management with respect to interstate movement and common hazardous waste treatment, storage & disposal facilities (CHWTSDF) was discussed for each state. Need to set up environment protection / improvement bank / environment Finance Corporation for funding the projects / schemes was identified and discussed. Maharashtra has 2 common hazardous waste treatment and disposal facilities at Taloja and TTC. Further there are 24 common biomedical waste treatment and disposal facilities in the state. MoEF also appreciated the initiatives by MPCB for improving the performance of CETPs. CPCB appreciated the progress of Maharashtra and Gujarat State for implementation of Hazardous Waste (Management and Handling) Rules, 2003 and Hon'ble Supreme Court Order dated 14.10.03. The functions of the state boards are increasing with newer legislations. The structure of the Board is presently based on the Water Act, 1974. It is therefore necessary that the Board should be developed and strengthened as a scientific and technical organization. The conference also noted a study conducted by MPCB on the capacity building of the Board through CRISIL. MPCB study envisaged a paradigm shift in the policy and approach of the Board in pollution control from command and control to information based and market based initiatives, . On January 6, 2006, the Chairman and Members of the Supreme Court Monitoring Committee (appointed in the matter of CWP No. 657 of 1995 regarding Hazardous Wastes Management) meeting was held for consultation with the State Pollution Control Boards. Dr. G. Thyagarajan, Chairman of the committee addressed the overview of environmental monitoring by the SCMC. He mentioned about the commendable steps taken by Maharashtra Pollution Control Board and Gujarat Pollution Control Board for implementation of Hazardous Waste Management and Control in their State. He placed the states in three categories as States in compliance, States not in compliance but who have committed to comply within already specified final time frames and States not in compliance. As stated by the Chairman, Maharashtra and Gujarat are the only two states which are 'States of Compliance' in whole of a country. Maharashtra Pollution Control Board has launched software on website to quantify the hazardous waste in different regions and verify the quantity of waste in the state. MPCB demonstrated the application of software to SCMC. This software will be further used to track Hazardous Waste in the state. MPCB has also prepared a detailed inventory of Hazardous waste generation of the state which is also available on MPCB website.",
            photos: Array.from({ length: 4 }, (_, i) => ({
                id: i + 1,
                title: `Conference Photo ${i + 1}`,
                date: "2006",
                images: [`https://placehold.co/800x600?text=Conference+Photo+${i + 1}`]
            })),
            videos: [
                { id: 1, title: "Conference Highlights", thumbnail: "https://placehold.co/600x400?text=Conference+Video", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
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
                                Archive - Year 2006
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

export default Archive2006;
