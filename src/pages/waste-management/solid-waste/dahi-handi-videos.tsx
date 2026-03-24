import { useState } from 'react';
import { ChevronDown, Play, X } from 'lucide-react';
import standingorders from '/assets/standingorders.svg';

const dahiHandiVideoCategories = [
    "Dahi Handi Special Program 2019",
    "Dahi Handi Special Program 2018",
    "Dahi Handi Special Program 2016",
    "Dahi Handi Special Program 2015",
    "Dahi Handi Special Program 2012",
    "Dahi Handi news coverage 2019",
    "Dahi Handi news coverage 2017",
    "Dahi Handi news coverage 2016",
    "Dahi Handi news coverage 2015",
    "Dahi Handi news coverage 2014",
    "Dahi Handi news coverage 2013",
    "Dahi Handi news coverage 2012"
];

const DahiHandiVideos = () => {
    const [selectedCategory, setSelectedCategory] = useState(dahiHandiVideoCategories[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    const videoData: Record<string, any[]> = {};
    dahiHandiVideoCategories.forEach(cat => {
        videoData[cat] = [
            { id: 1, title: `${cat} Highlights`, thumbnail: `https://placehold.co/600x400?text=${cat.replace(/ /g, '+')}`, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
        ];
    });

    const handleVideoClick = (video: any) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] pb-20 font-family-helvetica text-[#333333]">
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${standingorders})` }} />
                        <div className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105" style={{ backgroundImage: `url(${standingorders})`, maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)' }} />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />
                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Dahi Handi - Video Gallery
                            </h1>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            <div className="w-full max-w-[1282px] mx-auto px-4 py-12">
                <div className="mb-12 relative z-[100]">
                    <div className="w-full max-w-[400px]">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full flex items-center justify-between px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
                            <span className="text-[16px] font-semibold text-[#333333]">{selectedCategory}</span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-y-auto max-h-[400px] animate-in fade-in slide-in-from-top-2 duration-200">
                                {dahiHandiVideoCategories.map((cat) => (
                                    <button key={cat} onClick={() => { setSelectedCategory(cat); setIsDropdownOpen(false); }} className={`w-full text-left px-6 py-4 text-[15px] font-medium transition-colors cursor-pointer ${selectedCategory === cat ? 'bg-[#00A3FF]/5 text-[#00A3FF]' : 'text-gray-600 hover:bg-gray-50'}`}>{cat}</button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {videoData[selectedCategory].map((video) => (
                        <div key={video.id} onClick={() => handleVideoClick(video)} className="group flex flex-col gap-4 cursor-pointer">
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 bg-gray-100">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/5" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500 backdrop-blur-sm">
                                        <Play className="w-7 h-7 text-[#00A3FF] fill-[#00A3FF] ml-1" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-[#00A3FF] transition-colors">{video.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center" onClick={() => { setSelectedVideo(null); document.body.style.overflow = 'auto'; }}>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <div className="relative z-10 w-full max-w-5xl mx-4 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => { setSelectedVideo(null); document.body.style.overflow = 'auto'; }} className="absolute -top-14 right-0 p-3 text-white bg-white/10 rounded-full transition-all cursor-pointer"><X className="w-8 h-8" /></button>
                        <div className="bg-black rounded-[32px] overflow-hidden shadow-2xl aspect-video">
                            <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DahiHandiVideos;
