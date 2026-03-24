import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight, X, ChevronLeft } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import DocumentCard from '../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar Data Structure
const awarenessData = [
    {
        title: "SUP Ban Awareness Campaign",
        items: [
            "Single Used Plastic Ban Awareness Campaign 2025 - Pali Nagarpanchayat - 03 June 2025",
            "Single Used Plastic Ban Awareness Campaign 2025 - Khalapur Nagarpanchayat - 03 June 2025"
        ]
    },
    {
        title: "Environmental Articles",
        items: [
            "General Enviromental Quotes",
            "Marathi Slogans",
            "Plant as Pollution Control Device",
            "Climate",
            "Ganesh Festival",
            "Tree and The Enviroment"
        ]
    },
    {
        title: "Print Media Campaign",
        items: [
            "New Year Advertisements",
            "Republic Day Advertisements",
            "Holi Festival",
            "World Environment Day",
            "Janmashtami",
            "Ganesh Festival",
            "Ozone Day",
            "Navaratri",
            "Diwali",
            "Advertisements on Special Occasions"
        ]
    }
];

const archiveAwarenessData = [
    {
        title: "Environmental Articles",
        items: [
            "Article-1",
            "Article-2",
            "Article-3",
            "Article-4",
            "Article-5",
            "Article-6"
        ]
    },
    {
        title: "Print Media Campaign",
        items: [
            "World Environment Day Posters",
            "Ozone Awareness Posters",
            "Earth Day Awareness Posters"
        ]
    }
];

const adData = [
    {
        year: "2006",
        images: [
            "https://placehold.co/400x500?text=2006+Ad+1",
            "https://placehold.co/400x500?text=2006+Ad+2"
        ]
    },
    {
        year: "2005",
        images: [
            "https://placehold.co/400x500?text=2005+Ad+1"
        ]
    }
];

const republicDayAdData = [
    {
        year: "2006",
        images: [
            "https://placehold.co/400x500?text=Republic+2006+1",
            "https://placehold.co/400x500?text=Republic+2006+2"
        ]
    }
];

const holiDayAdData = [
    {
        year: "2006",
        images: [
            "https://placehold.co/400x500?text=Holi+2006+1",
            "https://placehold.co/400x500?text=Holi+2006+2",
            "https://placehold.co/400x500?text=Holi+2006+3"
        ]
    },
    {
        year: "2005",
        images: [
            "https://placehold.co/400x500?text=Holi+2005+1",
            "https://placehold.co/400x500?text=Holi+2005+2",
            "https://placehold.co/400x500?text=Holi+2005+3",
            "https://placehold.co/400x500?text=Holi+2005+4",
            "https://placehold.co/400x500?text=Holi+2005+5",
            "https://placehold.co/400x500?text=Holi+2005+6",
            "https://placehold.co/400x500?text=Holi+2005+7"
        ]
    }
];

const worldEnvDayAdData = [
    {
        year: "2006",
        images: [
            "https://placehold.co/400x500?text=EnvDay+2006+1",
            "https://placehold.co/400x500?text=EnvDay+2006+2",
            "https://placehold.co/400x500?text=EnvDay+2006+3"
        ]
    },
    {
        year: "2005",
        images: [
            "https://placehold.co/400x500?text=EnvDay+2005+1",
            "https://placehold.co/400x500?text=EnvDay+2005+2"
        ]
    },
    {
        year: "2004",
        images: [
            "https://placehold.co/400x500?text=EnvDay+2004+1",
            "https://placehold.co/400x500?text=EnvDay+2004+2",
            "https://placehold.co/400x500?text=EnvDay+2004+3",
            "https://placehold.co/400x500?text=EnvDay+2004+4",
            "https://placehold.co/400x500?text=EnvDay+2004+5"
        ]
    }
];

const janmashtamiAdData = [
    {
        year: "2005",
        images: [
            "https://placehold.co/400x500?text=Janmashtami+2005+1",
            "https://placehold.co/400x500?text=Janmashtami+2005+2",
            "https://placehold.co/400x500?text=Janmashtami+2005+3",
            "https://placehold.co/400x500?text=Janmashtami+2005+4",
            "https://placehold.co/400x500?text=Janmashtami+2005+5"
        ]
    },
    {
        year: "2004",
        images: [
            "https://placehold.co/400x500?text=EnvDay+2004+1",
            "https://placehold.co/400x500?text=EnvDay+2004+2",
            "https://placehold.co/400x500?text=EnvDay+2004+3",
            "https://placehold.co/400x500?text=EnvDay+2004+4",
            "https://placehold.co/400x500?text=EnvDay+2004+5"
        ]
    }
];

const ganeshFestivalAdData = [
    {
        year: "2006",
        images: [
            "https://placehold.co/400x500?text=Ganesh+2006+1",
            "https://placehold.co/400x500?text=Ganesh+2006+2"
        ]
    },
    {
        year: "2004",
        images: [
            "https://placehold.co/400x500?text=Ganesh+2004+1",
            "https://placehold.co/400x500?text=Ganesh+2004+2",
            "https://placehold.co/400x500?text=Ganesh+2004+3",
            "https://placehold.co/400x500?text=Ganesh+2004+4"
        ]
    }
];

const ozoneDayAdData = [
    {
        year: "2006",
        images: [
            "https://placehold.co/400x500?text=Ozone+2006+1",
            "https://placehold.co/400x500?text=Ozone+2006+2",
            "https://placehold.co/400x500?text=Ozone+2006+3"
        ]
    },
    {
        year: "2009",
        images: [
            "https://placehold.co/400x500?text=Ozone+2009+1"
        ]
    }
];

const navaratriAdData = [
    {
        year: "2004",
        images: [
            "https://placehold.co/400x500?text=Navaratri+2004+1",
            "https://placehold.co/400x500?text=Navaratri+2004+2"
        ]
    }

];

const diwaliAdData = [
    {
        year: "2024",
        images: [
            "https://placehold.co/400x500?text=Diwali+2024+1"
        ]
    },
    {
        year: "2006",
        images: [
            "https://placehold.co/400x500?text=Diwali+2006+1",
            "https://placehold.co/400x500?text=Diwali+2006+2"
        ]
    },
    {
        year: "2005",
        images: [
            "https://placehold.co/400x500?text=Diwali+2005+1",
            "https://placehold.co/400x500?text=Diwali+2005+2",
            "https://placehold.co/400x500?text=Diwali+2005+3",
            "https://placehold.co/400x500?text=Diwali+2005+4"
        ]
    },
    {
        year: "2004",
        images: [
            "https://placehold.co/400x500?text=Diwali+2004+1",
            "https://placehold.co/400x500?text=Diwali+2004+2",
            "https://placehold.co/400x500?text=Diwali+2004+3",
            "https://placehold.co/400x500?text=Diwali+2004+4",
            "https://placehold.co/400x500?text=Diwali+2004+5"
        ]
    }
];

const specialOccasionAdData = [

    {
        year: "2005",
        images: [
            "https://placehold.co/400x500?text=Special+Occasion+2005+1",
            "https://placehold.co/400x500?text=Special+Occasion+2005+2",
            "https://placehold.co/400x500?text=Special+Occasion+2005+3",
            "https://placehold.co/400x500?text=Special+Occasion+2005+4"
        ]
    }
];

const worldEnvDayPostersData = [
    {
        year: "Posters",
        images: Array(18).fill(null).map((_, i) => `https://placehold.co/400x500?text=Poster+${i + 1}`)
    }
];

const ozoneAwarenessPostersData = [
    {
        year: "Posters",
        images: Array(5).fill(null).map((_, i) => `https://placehold.co/400x500?text=Ozone+Poster+${i + 1}`)
    }
];

const earthDayAwarenessPostersData = [
    {
        year: "Posters",
        images: Array(20).fill(null).map((_, i) => `https://placehold.co/400x500?text=Earth+Day+Poster+${i + 1}`)
    }
];

function Awareness() {
    const [activeCategory, setActiveCategory] = useState<string | null>("SUP Ban Awareness Campaign");

    const [activeItem, setActiveItem] = useState<string>("Single Used Plastic Ban Awareness Campaign 2025 - Pali Nagarpanchayat - 03 June 2025");
    const [isArchive, setIsArchive] = useState(false);

    const handleToggleArchive = (archive: boolean) => {
        setIsArchive(archive);
        if (archive) {
            setActiveItem("Article-1");
            setActiveCategory("Environmental Articles");
        } else {
            setActiveItem("Single Used Plastic Ban Awareness Campaign 2025 - Pali Nagarpanchayat - 03 June 2025");
            setActiveCategory("SUP Ban Awareness Campaign");
        }
    };

    const toggleCategory = (category: string) => {
        if (activeCategory === category) {
            setActiveCategory(null);
        } else {
            setActiveCategory(category);
        }
    };

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    // Lightbox State
    const [selectedAdAlbum, setSelectedAdAlbum] = useState<typeof adData[0] | null>(null);
    const [currentAdImageIndex, setCurrentAdImageIndex] = useState(0);

    // Lightbox Handlers
    const openAdSlideshow = (album: typeof adData[0], index: number = 0) => {
        setSelectedAdAlbum(album);
        setCurrentAdImageIndex(index);
    };

    const closeAdSlideshow = () => {
        setSelectedAdAlbum(null);
        setCurrentAdImageIndex(0);
    };

    const handleNextAdImage = () => {
        if (!selectedAdAlbum) return;
        setCurrentAdImageIndex((prev) => (prev + 1) % selectedAdAlbum.images.length);
    };

    const handlePrevAdImage = () => {
        if (!selectedAdAlbum) return;
        setCurrentAdImageIndex((prev) => (prev - 1 + selectedAdAlbum.images.length) % selectedAdAlbum.images.length);
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedAdAlbum) return;
            if (e.key === 'Escape') closeAdSlideshow();
            if (e.key === 'ArrowRight') handleNextAdImage();
            if (e.key === 'ArrowLeft') handlePrevAdImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedAdAlbum]);

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section - Reusing RTS/PageBanner Style */}
            <PageBanner title="Public Awareness" image={standingorders} />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        {/* Custom Sidebar based on Sidebar.tsx */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {(isArchive ? archiveAwarenessData : awarenessData).map((category) => {
                                    const isExpanded = activeCategory === category.title;
                                    // Check if one of the items in this category is active, to highlight the category header if needed
                                    const hasActiveItem = category.items.includes(activeItem);

                                    return (
                                        <div key={category.title} className="flex flex-col mb-2">
                                            {/* Category Header */}
                                            <div
                                                onClick={() => toggleCategory(category.title)}
                                                className={`flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 z-10 relative group touch-manipulation
                                                    ${isExpanded || hasActiveItem
                                                        ? 'bg-linear-to-r from-[#0085E2] to-[#00A3FF] text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                                                        : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-[#0085E2] border border-gray-100 active:scale-[0.98]'
                                                    }`}
                                            >
                                                <span className="text-[15px] font-semibold tracking-wide">
                                                    {category.title}
                                                </span>
                                                {isExpanded ? (
                                                    <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                ) : (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                )}
                                            </div>

                                            {/* Dropdown Items */}
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="mx-4 mt-2 mb-4 bg-white border border-gray-100 rounded-xl flex flex-col gap-1 shadow-sm p-2">
                                                    {category.items.map((item) => {
                                                        const isActive = activeItem === item;
                                                        return (
                                                            <div
                                                                key={item}
                                                                onClick={() => handleItemClick(item)}
                                                                className={`px-4 py-3 rounded-lg cursor-pointer text-[14px] transition-all duration-200 flex items-center justify-between group
                                                                    ${isActive
                                                                        ? 'bg-blue-50 text-[#0085E2] font-semibold translate-x-1'
                                                                        : 'text-gray-600 hover:text-[#0085E2] hover:bg-gray-50 hover:translate-x-1'
                                                                    }`}
                                                            >
                                                                <span className="leading-snug">{item}</span>
                                                                {isActive && <ChevronRight className="w-4 h-4 text-[#0085E2] flex-shrink-0" />}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-5 md:p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-gray-200 pb-4 gap-4">
                                    <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 uppercase">
                                        {activeItem}
                                    </h2>

                                    {/* Toggle Switch */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 w-fit">
                                        <button
                                            onClick={() => handleToggleArchive(false)}
                                            className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => handleToggleArchive(true)}
                                            className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                <div className="text-[15px] text-gray-700 leading-relaxed">
                                    {(activeItem === "Single Used Plastic Ban Awareness Campaign 2025 - Pali Nagarpanchayat - 03 June 2025" ||
                                        activeItem === "Single Used Plastic Ban Awareness Campaign 2025 - Khalapur Nagarpanchayat - 03 June 2025") ? (
                                        <div className="flex flex-col gap-4">
                                            <DocumentCard
                                                document={{
                                                    id: activeItem,
                                                    title: activeItem,
                                                    pdfUrl: "#"
                                                }}
                                                wide={false}
                                            />
                                        </div>
                                    ) : activeItem === "Article-1" ? (
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug border-b border-gray-200 pb-2 mb-4">
                                                AWARENESS -ENVIRONMENTAL QUOTES
                                            </h3>
                                            <ul className="flex flex-col gap-4 list-none">
                                                {[
                                                    "There’s so much pollution in the air now that if it weren’t for our lungs there'd be no place to put it all.",
                                                    "It isn’t pollution that’s harming the environment. It’s the impurities in our air and water that are doing it.",
                                                    "Thank God men cannot fly, and lay waste the sky as well as the earth.",
                                                    "I’m not an environmentalist. I’m an Earth warrior.",
                                                    "Take care of the earth and she will take care of you.",
                                                    "Waste not the smallest thing created, for grains of sand make mountains and atomies infinity.",
                                                    "The system of nature, of which man is a part, tends to be self-balancing, self-adjusting, self-cleansing. Not so with technology.",
                                                    "Our modern industrial economy takes a mountain covered with trees, lakes, running streams and transforms it into a mountain of junk, garbage, slime pits, and debris.",
                                                    "We’re finally going to get the bill for the Industrial Age. If the projections are right, it’s going to be a big one: the ecological collapse of the planet.",
                                                    "In an underdeveloped country, don’t drink the water, in a developed country, don’t breathe the air."
                                                ].map((quote, idx) => (
                                                    <li key={idx} className="flex gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-2 shrink-0"></span>
                                                        <span className="text-gray-700 leading-relaxed">{quote}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-col gap-6 mt-4 pt-6">
                                                <div>
                                                    <p className="text-[16px] font-medium text-gray-800 mb-1">There is sufficiency in the world for man's need but not for man's greed.</p>
                                                    <p className="text-[13px] text-gray-500 font-medium">— Mohandas K. Gandhi</p>
                                                </div>

                                                <div>
                                                    <p className="text-[16px] font-medium text-gray-800 mb-1">Nature provides a free lunch, but only if we control our appetites.</p>
                                                    <p className="text-[13px] text-gray-500 font-medium">— William Ruckelshaus, Business Week, 18 June 1990</p>
                                                </div>

                                                <div>
                                                    <p className="text-[16px] font-medium text-gray-800 mb-1">We never know the worth of water till the well is dry.</p>
                                                    <p className="text-[13px] text-gray-500 font-medium">— Thomas Fuller, Gnomologia, 1732</p>
                                                </div>
                                            </div>
                                        </div>

                                    ) : activeItem === "Article-3" ? (
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug border-b border-gray-200 pb-2 mb-4">
                                                AWARENESS - ENVIRONMENT RELATED DOCUMENTS
                                            </h3>
                                            <p className="text-[15px] text-gray-700 leading-relaxed text-justify">
                                                Plants and plant communities are very important to humans and their environment. Here are some of the important things plants provide to our environment. The oxygen in the air we breathe comes from the photosynthesis of plants. The quality of the air can be greatly influenced by plants. Plants can stop the movement of dust and pollutants. Through the intake of carbon dioxide, plants can also lessen the greenhouse effect caused from the burning of fossil fuels like coal. Plants are extremely important to the quality of the water we use. A diverse cover of plants aids in maintaining healthy watersheds, streams, and lakes by holding soil in place, controlling stream flows, and filtering sediments from water. Regional climates are impacted by the amount and type of plant cover. Forest and marshes, for example, can cool local climates. Natural disasters, such as drought, have been blamed on the destruction of forests and other critically important plant communities.
                                            </p>

                                            <div>
                                                <h3 className="text-[18px] font-bold text-gray-800 mb-4">Smoke shield</h3>
                                                <ul className="flex flex-col gap-4">
                                                    {[
                                                        { title: "Dust, heat and auto emission:", desc: "Neem, Banyan, peepal, ashoke, silver, oak, kachnaar and jacaranda" },
                                                        { title: "Benzene, hydrocarbons, methane, CO, oxides of sodium and nitrogen", desc: "Krishnachura and radhachura" },
                                                        { title: "Oxides of nitrogen and sulphur", desc: "Tamarind, nerium and tibetia" },
                                                        { title: "Oxides oil sulphur", desc: "Chhati,m" },
                                                        { title: "SPM / RPM", desc: "Shimul" }
                                                    ].map((item, idx) => (
                                                        <li key={idx} className="flex gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-2 shrink-0"></span>
                                                            <div className="flex flex-col">
                                                                <span className="font-semibold text-gray-800 text-[15px]">{item.title}</span>
                                                                {item.desc && <span className="text-gray-700 text-[14px]">{item.desc}</span>}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h3 className="text-[18px] font-bold text-gray-800 mb-4">The SUPPER – SOPPER</h3>
                                                <p className="text-[15px] text-gray-700 leading-relaxed text-justify">
                                                    Banyan and Sal- With their broad, fleshy leaves are best in controlling SPM and RPM. Banyan leaves suck in pollutants and capture them permanently in their stomata. For years this goes on but the tree kills itself in the process. Sal has better endurance even simul is useful during its leafing season.
                                                </p>
                                            </div>
                                        </div>
                                    ) : activeItem === "Article-4" ? (
                                        <div className="flex flex-col gap-6 text-[15px] text-gray-700 leading-relaxed text-justify">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug border-b border-gray-200 pb-2 mb-4">
                                                AWARENESS - CLIMATE CHANGE
                                            </h3>
                                            <p>The Earth is the only planet in our solar system that supports life. The complex process of evolution occurred on Earth only because of some unique environmental conditions that were present: water, an oxygen-rich atmosphere, and a suitable surface temperature. About 30% of incoming energy from the sun is reflected back to space while the rest reaches the earth, warming the air, oceans, and land, and maintaining an average surface temperature of about 15 oC.</p>

                                            <p>The atmosphere carries out the critical function of maintaining life-sustaining conditions on Earth, in the following way: each day, energy from the sun is absorbed by the land, seas, mountains,etc. If all this energy were to be absorbed completely, the earth would gradually become hotter and hotter. But actually, the earth both absorbs and, simutanously releases it in the form of infra red waves. All this rising heat is not lost to space, but is partly absorbed by some gases present in very small (or trace) quantities in the atmosphere, called GHGs (greenhouse gases).</p>

                                            <p>Greenhouse gases(for example, carbon dioxide, methane, nitrous oxide, water vapour, ozone), reemit some of this heat to the earth's surface. It they did not perform this useful function, most of the heat energy would escape, leaving the earth cold (about -18oC) and until to support life.</p>

                                            <p>However, ever since the Industrial Revolution began about 150 years ago, man-made activities have added significant quantities of GHGs to the atmosphere. The atmospheric concentrations of carbon dioxide, methane, and nitrous oxide have grown by about 31%, 151% and 17% , respectively, between 1750 and 2000.</p>

                                            <p>An increase in the levels of GHGs could lead to greater warming, which in turn could have an impact on the world's Climate, leading to the phenomenon known as climate change. Climate change refers to a statistically significant variation in either the mean state of the climate or in its variability, persisting for an extended period (typically decades or longer). Indeed, scientists have observed that over the 20th century, the mean global surface temperature increased by 0.6 C. They also observed that since 1860 ( the year temperature began to be recorded systematically using a thermometer), the 1990's have been the warmest decade. Basic information about the climate change are given below.</p>

                                            <div className="flex flex-col gap-4 mt-2">
                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Human activities are releasing greenhouse gases into the atmosphere.</span> Carbon dioxide is producted when fossil fuels are used to generate energy and when forests are cut down and burned. Methane and nitrous oxide ar emitted from agricultural activities, changes in land use, and other sources. Artificial chemicals called halocarbons (CFCs, HFC, PFCs) and other long-lived gases such as suphur hexafluoride (SF) are released by industrial processes.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Rising levels of greenhouse gases are already changing the climate.</span> In response to humanity's emissions, the climate has started to adjust to a "thicker blanket" of greenhouse gases in order to maintain the balance between energy arriving from the sun and energy escaping back into space. Observations show that global temperatures have risen by about 0.6 C over the 20th century. There is new and stronger evidence that most of the observed warming over the last 50 years is attributable to human activities.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Climate models predict that the global temperature will rise by about 1.4 - 5.8 C by the year 2100.</span> This change would be much larger than any climate change experienced over at least the last 10,000 years. The projection is based on a wide range of assumptions about the main forces driving future emissions (such as population growth and technological change) but does not reflect any efforts to control emissions due to concerns about climate change.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Climate change is likely to have a significant impact on the global environment.</span> In general, the faster the climate changes, the greater will be the risk of damage. The mean sea level is expected to rise 9-88 cm by the year 2100, causing flooding of low-lying areas and other damage. Other effects could include an increase in global precipitation and changes in the serverity or frequency of extreme events.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Human society will face new risks and pressures.</span> Food security is unlikely to be threatened at the global level, but some regions are likely to experience food shortages and hunger. Water resources will be affected as precipitation and evaporation patterns change around the world. Physical infrasture will be damaged, particularly by sea-level rise and by extreme weather events.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">People and ecosystems will need to adapt to future climatic regimes.</span> Past and current emissions have aleady committed the earth to some degree of climate change in the 21st century. Adapting to these effects will require a good understanding of socio-economic and natural systems, their sensitivity to climate change, and their inherent ability to adapt. Fortunately, many strategies are available for adapting to the expected effect of climate change.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Stablilizing atmospheric concentrations of greenhouse gases will demand a major effort.</span> Without emissions-control policies motivated by concerns about climate change, atmospheric concentrations of carbon dioxide are expected to rise from today's 367 parts per million to 490 -1,260 ppm by the year 2100. This would representa 75 -350% increase since the year 1750. Stabilizing concerntrations at, for example, 450 ppm would require worldwide emissions to fall below 1990 levels within the next few decades.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">The Kyoto Protocol would require government to take even stronger action.</span> In 1997, the Parties to the Convention agreed by consensus that developed countries should accept a legally binding commitment to reduce their collective emissions of six greenhouse gases by at least 5% compared to 1990 levels by the period 2008-2012. The Protocol also establishes an emission trading regime and a "Clean development mechanism". Howwever, the Protocol has not yet received enough ratifications to enter into force.
                                                </div>
                                            </div>
                                        </div>

                                    ) : activeItem === "Article-2" ? (
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug border-b border-gray-200 pb-2 mb-4">
                                                Article 2
                                            </h3>
                                            <div>
                                                <a href="#" className="text-[#0085E2] font-semibold hover:underline text-[16px] inline-flex items-center gap-2 group">
                                                    Article 2
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    ) : (activeItem === "Article-5" || activeItem === "Article-6") ? (
                                        <div className="flex flex-col gap-4">
                                            <DocumentCard
                                                document={{
                                                    id: activeItem,
                                                    title: activeItem,
                                                    pdfUrl: "#"
                                                }}
                                                wide={false}
                                            />
                                        </div>
                                    ) : (activeItem === "World Environment Day Posters") ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                WORLD ENVIRONMENT DAY POSTERS
                                            </h3>

                                            {worldEnvDayPostersData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`World Environment Day Poster ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (activeItem === "Ozone Awareness Posters") ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                OZONE AWARENESS POSTERS
                                            </h3>

                                            {ozoneAwarenessPostersData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`Ozone Awareness Poster ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    ) : (activeItem === "Earth Day Awareness Posters") ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                EARTH DAY AWARENESS POSTERS
                                            </h3>

                                            {earthDayAwarenessPostersData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`Earth Day Awareness Poster ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "General Enviromental Quotes" ? (
                                        <div className="flex flex-col gap-6">
                                            <ul className="flex flex-col gap-4 list-none">
                                                {[
                                                    "There’s so much pollution in the air now that if it weren’t for our lungs there'd be no place to put it all.",
                                                    "It isn’t pollution that’s harming the environment. It’s the impurities in our air and water that are doing it.",
                                                    "Thank God men cannot fly, and lay waste the sky as well as the earth.",
                                                    "I’m not an environmentalist. I’m an Earth warrior.",
                                                    "Take care of the earth and she will take care of you.",
                                                    "Waste not the smallest thing created, for grains of sand make mountains and atomies infinity.",
                                                    "The system of nature, of which man is a part, tends to be self-balancing, self-adjusting, self-cleansing. Not so with technology.",
                                                    "Our modern industrial economy takes a mountain covered with trees, lakes, running streams and transforms it into a mountain of junk, garbage, slime pits, and debris.",
                                                    "We’re finally going to get the bill for the Industrial Age. If the projections are right, it’s going to be a big one: the ecological collapse of the planet.",
                                                    "In an underdeveloped country, don’t drink the water, in a developed country, don’t breathe the air."
                                                ].map((quote, idx) => (
                                                    <li key={idx} className="flex gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-2 shrink-0"></span>
                                                        <span className="text-gray-700 leading-relaxed">{quote}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-col gap-6 mt-4 border-t border-gray-100 pt-6">
                                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                                    <p className="text-[16px] font-medium text-gray-800 mb-2">"There is sufficiency in the world for man's need but not for man's greed."</p>
                                                    <p className="text-[13px] text-gray-500 font-medium">— Mohandas K. Gandhi</p>
                                                </div>

                                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                                    <p className="text-[16px] font-medium text-gray-800 mb-2">"Nature provides a free lunch, but only if we control our appetites."</p>
                                                    <p className="text-[13px] text-gray-500 font-medium">— William Ruckelshaus, Business Week, 18 June 1990</p>
                                                </div>

                                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                                    <p className="text-[16px] font-medium text-gray-800 mb-2">"We never know the worth of water till the well is dry."</p>
                                                    <p className="text-[13px] text-gray-500 font-medium">— Thomas Fuller, Gnomologia, 1732</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : activeItem === "Marathi Slogans" ? (
                                        <div className="flex flex-col gap-4">
                                            <a href="#" className="text-[#0085E2] font-semibold hover:underline text-[16px] inline-flex items-center gap-2 group">
                                                Marathi Slogans
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    ) : activeItem === "Plant as Pollution Control Device" ? (
                                        <div className="flex flex-col gap-6">
                                            <p className="text-[15px] text-gray-700 leading-relaxed text-justify">
                                                Plants and plant communities are very important to humans and their environment. Here are some of the important things plants provide to our environment. The oxygen in the air we breathe comes from the photosynthesis of plants. The quality of the air can be greatly influenced by plants. Plants can stop the movement of dust and pollutants. Through the intake of carbon dioxide, plants can also lessen the greenhouse effect caused from the burning of fossil fuels like coal. Plants are extremely important to the quality of the water we use. A diverse cover of plants aids in maintaining healthy watersheds, streams, and lakes by holding soil in place, controlling stream flows, and filtering sediments from water. Regional climates are impacted by the amount and type of plant cover. Forest and marshes, for example, can cool local climates. Natural disasters, such as drought, have been blamed on the destruction of forests and other critically important plant communities.
                                            </p>

                                            <div>
                                                <h3 className="text-[18px] font-bold text-gray-800 mb-4">Smoke shield</h3>
                                                <ul className="flex flex-col gap-4">
                                                    {[
                                                        { title: "Dust, heat and auto emission:", desc: "Neem, Banyan, peepal, ashoke, silver, oak, kachnaar and jacaranda" },
                                                        { title: "Benzene, hydrocarbons, methane, CO, oxides of sodium and nitrogen", desc: "Krishnachura and radhachura" },
                                                        { title: "Oxides of nitrogen and sulphur", desc: "Tamarind, nerium and tibetia" },
                                                        { title: "Oxides of sulphur", desc: "Chhatim" },
                                                        { title: "SPM / RPM", desc: "Shimul" }
                                                    ].map((item, idx) => (
                                                        <li key={idx} className="flex gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2] mt-2 shrink-0"></span>
                                                            <div className="flex flex-col">
                                                                <span className="font-semibold text-gray-800 text-[15px]">{item.title}</span>
                                                                {item.desc && <span className="text-gray-700 text-[14px]">{item.desc}</span>}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h3 className="text-[18px] font-bold text-gray-800 mb-4">The SUPPER – SOPPER</h3>
                                                <p className="text-[15px] text-gray-700 leading-relaxed text-justify">
                                                    Banyan and Sal- With their broad, fleshy leaves are best in controlling SPM and RPM. Banyan leaves suck in pollutants and capture them permanently in their stomata. For years this goes on but the tree kills itself in the process. Sal has better endurance even simul is useful during its leafing season.
                                                </p>
                                            </div>
                                        </div>
                                    ) : activeItem === "Climate" ? (
                                        <div className="flex flex-col gap-6 text-[15px] text-gray-700 leading-relaxed text-justify">
                                            <p>The Earth is the only planet in our solar system that supports life. The complex process of evolution occurred on Earth only because of some unique environmental conditions that were present: water, an oxygen-rich atmosphere, and a suitable surface temperature. About 30% of incoming energy from the sun is reflected back to space while the rest reaches the earth, warming the air, oceans, and land, and maintaining an average surface temperature of about 15 oC.</p>

                                            <p>The atmosphere carries out the critical function of maintaining life-sustaining conditions on Earth, in the following way: each day, energy from the sun is absorbed by the land, seas, mountains,etc. If all this energy were to be absorbed completely, the earth would gradually become hotter and hotter. But actually, the earth both absorbs and, simutanously releases it in the form of infra red waves. All this rising heat is not lost to space, but is partly absorbed by some gases present in very small (or trace) quantities in the atmosphere, called GHGs (greenhouse gases).</p>

                                            <p>Greenhouse gases(for example, carbon dioxide, methane, nitrous oxide, water vapour, ozone), reemit some of this heat to the earth's surface. It they did not perform this useful function, most of the heat energy would escape, leaving the earth cold (about -18oC) and until to support life.</p>

                                            <p>However, ever since the Industrial Revolution began about 150 years ago, man-made activities have added significant quantities of GHGs to the atmosphere. The atmospheric concentrations of carbon dioxide, methane, and nitrous oxide have grown by about 31%, 151% and 17% , respectively, between 1750 and 2000.</p>

                                            <p>An increase in the levels of GHGs could lead to greater warming, which in turn could have an impact on the world's Climate, leading to the phenomenon known as climate change. Climate change refers to a statistically significant variation in either the mean state of the climate or in its variability, persisting for an extended period (typically decades or longer). Indeed, scientists have observed that over the 20th century, the mean global surface temperature increased by 0.6 C. They also observed that since 1860 ( the year temperature began to be recorded systematically using a thermometer), the 1990's have been the warmest decade. Basic information about the climate change are given below.</p>

                                            <div className="flex flex-col gap-4 mt-2">
                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Human activities are releasing greenhouse gases into the atmosphere.</span> Carbon dioxide is producted when fossil fuels are used to generate energy and when forests are cut down and burned. Methane and nitrous oxide ar emitted from agricultural activities, changes in land use, and other sources. Artificial chemicals called halocarbons (CFCs, HFC, PFCs) and other long-lived gases such as suphur hexafluoride (SF) are released by industrial processes.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Rising levels of greenhouse gases are already changing the climate.</span> In response to humanity's emissions, the climate has started to adjust to a "thicker blanket" of greenhouse gases in order to maintain the balance between energy arriving from the sun and energy escaping back into space. Observations show that global temperatures have risen by about 0.6 C over the 20th century. There is new and stronger evidence that most of the observed warming over the last 50 years is attributable to human activities.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Climate models predict that the global temperature will rise by about 1.4 - 5.8 C by the year 2100.</span> This change would be much larger than any climate change experienced over at least the last 10,000 years. The projection is based on a wide range of assumptions about the main forces driving future emissions (such as population growth and technological change) but does not reflect any efforts to control emissions due to concerns about climate change.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Climate change is likely to have a significant impact on the global environment.</span> In general, the faster the climate changes, the greater will be the risk of damage. The mean sea level is expected to rise 9-88 cm by the year 2100, causing flooding of low-lying areas and other damage. Other effects could include an increase in global precipitation and changes in the serverity or frequency of extreme events.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Human society will face new risks and pressures.</span> Food security is unlikely to be threatened at the global level, but some regions are likely to experience food shortages and hunger. Water resources will be affected as precipitation and evaporation patterns change around the world. Physical infrasture will be damaged, particularly by sea-level rise and by extreme weather events.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">People and ecosystems will need to adapt to future climatic regimes.</span> Past and current emissions have aleady committed the earth to some degree of climate change in the 21st century. Adapting to these effects will require a good understanding of socio-economic and natural systems, their sensitivity to climate change, and their inherent ability to adapt. Fortunately, many strategies are available for adapting to the expected effect of climate change.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">Stablilizing atmospheric concentrations of greenhouse gases will demand a major effort.</span> Without emissions-control policies motivated by concerns about climate change, atmospheric concentrations of carbon dioxide are expected to rise from today's 367 parts per million to 490 -1,260 ppm by the year 2100. This would representa 75 -350% increase since the year 1750. Stabilizing concerntrations at, for example, 450 ppm would require worldwide emissions to fall below 1990 levels within the next few decades.
                                                </div>

                                                <div>
                                                    <span className="font-bold text-gray-900 italic">The Kyoto Protocol would require government to take even stronger action.</span> In 1997, the Parties to the Convention agreed by consensus that developed countries should accept a legally binding commitment to reduce their collective emissions of six greenhouse gases by at least 5% compared to 1990 levels by the period 2008-2012. The Protocol also establishes an emission trading regime and a "Clean development mechanism". Howwever, the Protocol has not yet received enough ratifications to enter into force.
                                                </div>
                                            </div>
                                        </div>
                                    ) : (activeItem === "Tree and The Enviroment") ? (
                                        <div className="flex flex-col gap-4">
                                            <DocumentCard
                                                document={{
                                                    id: activeItem,
                                                    title: activeItem,
                                                    pdfUrl: "#"
                                                }}
                                                wide={false}
                                            />
                                        </div>
                                    ) : activeItem === "Ganesh Festival" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {ganeshFestivalAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Ganesh Festival Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "New Year Advertisements" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                New Year Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {adData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} New Year Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "Republic Day Advertisements" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Republic Day Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {republicDayAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Republic Day Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "Holi Festival" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Holi Festival Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {holiDayAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Holi Festival Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "World Environment Day" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {worldEnvDayAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} World Environment Day Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "Janmashtami" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Janmashtami Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {janmashtamiAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Janmashtami Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "Ozone Day" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Ozone Day Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {ozoneDayAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Ozone Day Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "Navaratri" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Navaratri Festival Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {navaratriAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Navaratri Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "Diwali" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Diwali Festival Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {diwaliAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Diwali Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : activeItem === "Advertisements on Special Occasions" ? (
                                        <div className="flex flex-col gap-12">
                                            <h3 className="text-[18px] font-bold text-gray-800 uppercase leading-snug">
                                                Environment Awarness Advertisements Published In Various Newspapers, Souveniers, Magazines, Etc.
                                            </h3>

                                            {specialOccasionAdData.map((album) => (
                                                <div key={album.year} className="flex flex-col gap-4">
                                                    <h4 className="text-[20px] font-bold text-gray-900 border-b border-gray-200 pb-2">{album.year}</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
                                                        {album.images.map((img, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer group"
                                                                onClick={() => openAdSlideshow(album, idx)}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`${album.year} Special Occasion Ad ${idx + 1}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                                    <div className="bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                                                        View
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>Content for "{activeItem}" will be displayed here.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div >
                </div >
            </section >

            {/* Slideshow Modal */}
            {
                selectedAdAlbum && (
                    <div
                        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                        onClick={closeAdSlideshow}
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeAdSlideshow();
                            }}
                            className="absolute top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1001] shadow-lg border border-white/10 cursor-pointer"
                            title="Close"
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <div className="flex items-center justify-center gap-4 max-h-[90vh] w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
                            {/* Prev Button */}
                            <button
                                onClick={handlePrevAdImage}
                                className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"
                            >
                                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                            </button>

                            {/* Image Container */}
                            <div className="relative shrink-0 flex items-center justify-center">
                                <img
                                    src={selectedAdAlbum.images[currentAdImageIndex]}
                                    alt={`Slide ${currentAdImageIndex + 1}`}
                                    className="max-h-[85vh] max-w-[calc(100vw-140px)] object-contain rounded-lg shadow-2xl select-none bg-white"
                                />

                                {/* Caption / Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/60 px-4 py-1 rounded-full backdrop-blur-sm z-10 pointer-events-none">
                                    {currentAdImageIndex + 1} / {selectedAdAlbum.images.length}
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNextAdImage}
                                className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"
                            >
                                <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                            </button>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default Awareness;
