import { useState, useEffect } from 'react';
import { useSearch } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, X } from 'lucide-react';
import GalleryCard from '../../components/GalleryCard';

import cleanup1 from "/assets/photo-gallery-1/1.jpg"
import cleanup2 from "/assets/photo-gallery-1/2.jpg"
import cleanup3 from "/assets/photo-gallery-1/3.jpg"
import cleanup4 from "/assets/photo-gallery-1/4.jpg"
import cleanup5 from "/assets/photo-gallery-1/5.jpg"
import cleanup6 from "/assets/photo-gallery-1/6.jpg"
import cleanup7 from "/assets/photo-gallery-1/7.jpg"
import cleanup8 from "/assets/photo-gallery-1/8.jpg"
import cleanup9 from "/assets/photo-gallery-1/9.jpg"
import plasticawareness1 from "/assets/photo-gallery-2/1.jpeg"
import plasticawareness2 from "/assets/photo-gallery-2/2.jpeg"
import plasticawareness3 from "/assets/photo-gallery-2/3.jpeg"
import plasticawareness4 from "/assets/photo-gallery-2/4.jpeg"
import plasticawareness5 from "/assets/photo-gallery-2/5.jpeg"
import plasticawareness6 from "/assets/photo-gallery-2/6.jpeg"
import plasticawareness7 from "/assets/photo-gallery-2/7.jpeg"
import plasticawareness8 from "/assets/photo-gallery-2/8.jpeg"
import plasticawareness9 from "/assets/photo-gallery-2/9.jpeg"
import plasticawareness10 from "/assets/photo-gallery-2/10.jpeg"
import environmentconference1 from "/assets/photo-gallery-3/1.jpg"
import environmentconference2 from "/assets/photo-gallery-3/2.jpg"
import environmentconference3 from "/assets/photo-gallery-3/3.jpg"
import environmentconference4 from "/assets/photo-gallery-3/4.jpg"
import environmentconference5 from "/assets/photo-gallery-3/5.jpg"
import environmentconference6 from "/assets/photo-gallery-3/6.jpg"
import environmentconference7 from "/assets/photo-gallery-3/7.jpg"
import environmentconference8 from "/assets/photo-gallery-3/8.jpg"
import environmentconference9 from "/assets/photo-gallery-3/9.jpg"
import environmentconference10 from "/assets/photo-gallery-3/10.jpg"
import environmentconference11 from "/assets/photo-gallery-3/11.jpg"
import environmentconference12 from "/assets/photo-gallery-3/12.jpg"
import environmentconference13 from "/assets/photo-gallery-3/13.jpg"
import environmentconference14 from "/assets/photo-gallery-3/14.jpg"
import environmentconference15 from "/assets/photo-gallery-3/15.jpg"
import environmentconference16 from "/assets/photo-gallery-3/16.jpg"
import environmentconference17 from "/assets/photo-gallery-3/17.jpg"
import pandharidari1 from "/assets/photo-gallery-4/1.jpg"
import pandharidari2 from "/assets/photo-gallery-4/2.jpg"
import pandharidari3 from "/assets/photo-gallery-4/3.jpg"
import pandharidari4 from "/assets/photo-gallery-4/4.jpg"
import pandharidari5 from "/assets/photo-gallery-4/5.jpg"
import pandharidari6 from "/assets/photo-gallery-4/6.jpg"
import pandharidari7 from "/assets/photo-gallery-4/7.jpg"
import pandharidari8 from "/assets/photo-gallery-4/8.jpg"
import pandharidari9 from "/assets/photo-gallery-4/9.jpg"
import pandharidari10 from "/assets/photo-gallery-4/10.jpg"
import pandharidari11 from "/assets/photo-gallery-4/11.jpg"
import pandharidari12 from "/assets/photo-gallery-4/12.jpg"
import pandharidari13 from "/assets/photo-gallery-4/13.jpeg"
import pandharidari14 from "/assets/photo-gallery-4/14.jpeg"
import pandharidari15 from "/assets/photo-gallery-4/15.jpeg"
import pandharidari16 from "/assets/photo-gallery-4/16.jpeg"
import pandharidari17 from "/assets/photo-gallery-4/17.jpeg"
import kartikichiwari1 from "/assets/photo-gallery-5/1.jpeg"
import kartikichiwari2 from "/assets/photo-gallery-5/2.jpeg"
import kartikichiwari3 from "/assets/photo-gallery-5/3.jpeg"
import kartikichiwari4 from "/assets/photo-gallery-5/4.jpeg"
import kartikichiwari5 from "/assets/photo-gallery-5/5.jpeg"
import greenmind1 from "/assets/photo-gallery-6/1.jpeg"
import greenmind2 from "/assets/photo-gallery-6/2.jpeg"
import greenmind3 from "/assets/photo-gallery-6/3.jpeg"
import greenmind4 from "/assets/photo-gallery-6/4.jpeg"
import greenmind5 from "/assets/photo-gallery-6/5.jpeg"
import greenmind6 from "/assets/photo-gallery-6/6.jpeg"
import plasticrecycling1 from "/assets/photo-gallery-7/1.jpeg"
import plasticrecycling2 from "/assets/photo-gallery-7/2.jpeg"
import plasticrecycling3 from "/assets/photo-gallery-7/3.jpeg"
import circulareconomy1 from "/assets/photo-gallery-8/1.jpeg"
import circulareconomy2 from "/assets/photo-gallery-8/2.jpeg"
import cpr1 from "/assets/photo-gallery-9/1.jpeg"
import cpr2 from "/assets/photo-gallery-9/2.jpeg"
import cpr3 from "/assets/photo-gallery-9/3.jpeg"
import cpr4 from "/assets/photo-gallery-9/4.jpeg"
import sustainabledev1 from "/assets/photo-gallery-10/1.jpg"
import sustainabledev2 from "/assets/photo-gallery-10/2.jpg"
import sustainabledev3 from "/assets/photo-gallery-10/3.jpg"
import sustainabledev4 from "/assets/photo-gallery-10/4.jpg"
import consentmanagemen1 from "/assets/photo-gallery-11/1.jpeg"
import consentmanagemen2 from "/assets/photo-gallery-11/2.jpeg"
import consentmanagemen3 from "/assets/photo-gallery-11/3.jpeg"
import consentmanagemen4 from "/assets/photo-gallery-11/4.jpeg"
import consentmanagemen5 from "/assets/photo-gallery-11/5.jpeg"
import white1 from "/assets/photo-gallery-12/1.jpeg"
import emissiontrading1 from "/assets/photo-gallery-13/1.jpeg"
import emissiontrading2 from "/assets/photo-gallery-13/2.jpeg"
import globalmomentum1 from "/assets/photo-gallery-14/1.jpeg"
import globalmomentum2 from "/assets/photo-gallery-14/2.jpeg"
import globalmomentum3 from "/assets/photo-gallery-14/3.jpeg"
import globalmomentum4 from "/assets/photo-gallery-14/4.jpeg"
import globalmomentum5 from "/assets/photo-gallery-14/5.jpeg"
import msfelicitation1 from "/assets/photo-gallery-15/1.jpeg"
import implementationtrading1 from "/assets/photo-gallery-16/1.jpeg"
import implementationtrading2 from "/assets/photo-gallery-16/2.jpeg"
import implementationtrading3 from "/assets/photo-gallery-16/3.jpeg"
import implementationtrading4 from "/assets/photo-gallery-16/4.jpeg"

export const currentGalleryData = [
    {
        "id": 16,
        "title": "5th of June World Environment Day at Girgaon Chaupati - Beach Clean Up Drive.",
        "category": "Events",
        "date": "2025",
        "images": [
            cleanup1, cleanup2, cleanup3, cleanup4, cleanup5, cleanup6, cleanup7, cleanup8, cleanup9
        ]
    },
    {
        "id": 15,
        "title": "5th June World Environment Day Celebration in Mantralaya - Single Use Plastic Public Awareness Campaign.",
        "category": "Events",
        "date": "2025",
        "images": [
            plasticawareness1, plasticawareness2, plasticawareness3, plasticawareness4, plasticawareness5, plasticawareness6, plasticawareness7, plasticawareness8, plasticawareness9, plasticawareness10
        ]
    },
    {
        "id": 14,
        "title": "5th June World Environment Day Conference in Hotel Taj Land.",
        "category": "Events",
        "date": "2025",
        "images": [
            environmentconference1, environmentconference2, environmentconference3, environmentconference4, environmentconference5, environmentconference6, environmentconference7, environmentconference8, environmentconference9, environmentconference10, environmentconference11, environmentconference12, environmentconference13, environmentconference14, environmentconference15, environmentconference16, environmentconference17
        ]
    },
    {
        "id": 13,
        "title": "पर्यावरणाची वारी, पंढरीच्या दारी २०२५",
        "category": "Facilities",
        "date": "2025",
        "images": [
            pandharidari1, pandharidari2, pandharidari3, pandharidari4, pandharidari5, pandharidari6, pandharidari7, pandharidari8, pandharidari9, pandharidari10, pandharidari11, pandharidari12, pandharidari13, pandharidari14, pandharidari15, pandharidari16, pandharidari17
        ]
    },
    {
        "id": 12,
        "title": "Kartiki Chi Wari, Pandharichya Dari 2025 On the occasion of Kartiki Ekadashi, the event “Kartiki Chi Wari, Pandharichya Dari” was organized in Pandharpur. The programme was inaugurated by Hon. Deputy Chief Minister Eknath Ji Shinde.",
        "category": "Facilities",
        "date": "2025",
        "images": [
            kartikichiwari1, kartikichiwari2, kartikichiwari3, kartikichiwari4, kartikichiwari5
        ]
    },
    {
        "id": 11,
        "title": "MPCB GreenMind AI Chatbot Launch 2025 The “GreenMind AI Chatbot,” an advanced chatbot designed to provide accurate responses to queries related to environmental regulations and permissions, was formally inaugurated by Hon. Shri Siddhesh Ji Kadam, Chairman of the Board, and Hon. Shri Devender Ji Singh, Member Secretary.",
        "category": "Facilities",
        "date": "2025",
        "images": [
            greenmind1, greenmind2, greenmind3, greenmind4, greenmind5, greenmind6
        ]
    },
    {
        "id": 10,
        "title": "Plastic Recycling Show Conference 2025 The exhibition featuring advanced technologies and machinery for single-use plastic recycling was formally inaugurated by Hon. Shri Siddhesh Ji Kadam.",
        "category": "Facilities",
        "date": "2025",
        "images": [
            plasticrecycling1, plasticrecycling2, plasticrecycling3,
        ]
    },
    {
        "id": 3,
        "title": "The Consul General of Japan in Mumbai, Mr. Koji Yagi-san, visited the Board’s headquarters for a high-level meeting. This visit is set to provide global momentum to Maharashtra’s environmental conservation initiatives. Under the visionary leadership of MPCB Chairman Shri. Siddhesh Kadam ji and Member Secretary Shri. M. Devender Singh ji (IAS), a significant step has been taken toward fostering cooperation between Japan and MPCB for environmental protection. This collaboration aims to effectively address pollution challenges by integrating advanced Japanese technology with expertise. An MOU was signed between Osaka City Environment Bureau and the MPCB at MPCB Hq. The event was attended by Mr. Shunsuke Kawabe (Manager, Environment Bureau, Osaka City Government Japan), Ms. Akiko Doi (Senior Programme Officer, International Cooperation Division, Global Environment Centre Japan), Mr. Tomoya Motoda (Senior Programe Officer, International Cooperation Division, Global Environment Centre Japan), Ms. Nakajima Nao, Ms. Chika Kataoka, Mr. Shunichi Honda, Mr. Anshuman Basu, and senior officials from the MPCB.",
        "category": "Facilities",
        "date": "2026",
        "images": [
            globalmomentum1, globalmomentum2, globalmomentum3, globalmomentum4, globalmomentum5,
        ]
    },
    {
        "id": 2,
        "title": "Felicitation of Sh M Devender Singh IAS,Member Secretary MPCB. On 12th Oct, Hon Chief Justice of India Justice Bhushan Ramakrishna Gavai felicitates the Member Secretary for completing the Mandangadh court complex in record time and effectively coordinating with all agencies and apprising the Hon Bombay High Court regularly. Hon Chief Minister of MH Sh Devendra Fadnavis and Hon Dy CM Sh Eknath Shinde were also present during the occasion.",
        "category": "Awareness Campaign",
        "date": "2026",
        "images": [
            msfelicitation1
        ]
    },
    {
        "id": 1,
        "title": "Professor Michael Greenstone, Milton Friedman Distinguished Service Professor in Economics at the University of Chicago, visited the Maharashtra Pollution Control Board (MPCB) and held an engaging and insightful discussion with the Hon’ble Chairman and the Member Secretary. During the meeting, Prof. Greenstone appreciated the progress made by Maharashtra in implementing the Emissions Trading Scheme (ETS) and discussed its potential as a scalable, market-based instrument for improving air quality. The discussions also explored opportunities for advanced research collaborations, particularly the use of machine learning and data-driven tools to predict environmental compliance violations—an initiative that would be a first of its kind in Maharashtra. Following this, Prof. Greenstone and the Member Secretary exchanged views on various prospective collaborative projects and shared a lighter, informal conversation on common interests, including reading and books. As a gesture of goodwill, the Member Secretary presented Prof. Greenstone with a copy of Blue Ocean Strategy, reflecting the shared emphasis on innovative and forward-looking approaches to policy and governance. The visit marked a valuable exchange of ideas and reinforced MPCB’s commitment to adopting innovative, research-backed solutions for environmental management in the state.",
        "category": "Events",
        "date": "2026",
        "images": [
            implementationtrading1, implementationtrading2, implementationtrading3, implementationtrading4
        ]
    },
    {
        "id": 9,
        "title": "In the 'National Conference on Circular Economy and Sustainability' Bengaluru organised by the KPCB, Govt of Karnataka on 18th Nov 2025. Hon’ble Shri. M. Devender Singh (IAS), Member Secretary, Maharashtra Pollution Control Board, delivered an insightful presentation MPCB’s efforts in recycling Sector. During the event, Hon’ble Dr. Shalini Rajneesh IAS, Chief Secretary Karnataka State, appreciated the efforts of Maharashtra State for setting up separate Recycling Parks State.",
        "category": "Events",
        "date": "2025",
        "images": [
            circulareconomy1, circulareconomy2,
        ]
    },
    {
        "id": 8,
        "title": "The Maharashtra Pollution Control Board and the Aadhar Ability Foundation collaborated to host a training that demonstrated and provided information on how to use first aid and CPR to save lives in cardiac arrest.",
        "category": "Events",
        "date": "2025",
        "images": [
            cpr1, cpr2, cpr3, cpr4
        ]
    },
    {
        "id": 7,
        "title": "Maharashtra Pollution Control Board (MPCB) organized a State-Level Conference on “Circular Economy for Sustainable Development in Maharashtra” at Navi Mumbai. The conference was inaugurated by Hon’ble Member Secretary Shri M. Devender Singh (IAS). Dr. Rajendra Rajput Assistant Secretary (Technical), Shri. Satish Padwal Joint Director (APC), Shri. Sanjay Bhuskute Public Relations Officer, Shri. Nandkumar Gurav (Technical Advisor), along with other officials and staff members, graced the occasion with their august presence. Representatives from various industry associations, officials of the Material Recycling Association of India, environmental experts, researchers, and industry representatives, were also present.",
        "category": "Awareness Campaign",
        "date": "2025",
        "images": [
            sustainabledev1, sustainabledev2, sustainabledev3, sustainabledev4
        ]
    },
    {
        "id": 6,
        "title": "Visit of the committee to the Pollution Control Boards of Andhra Pradesh, Tamil Nadu, Rajasthan, and Gujarat to study the timeline reduction for consent management.",
        "category": "Events",
        "date": "2025",
        "images": [
            consentmanagemen1, consentmanagemen2, consentmanagemen3, consentmanagemen4, consentmanagemen5,
        ]
    },
    {
        "id": 5,
        "title": "Committee meeting for identifying the white category of industries for ease of doing business",
        "category": "Awareness Campaign",
        "date": "5 July, 2025",
        "images": [
            white1
        ]
    },
    {
        "id": 4,
        "title": "Professor Michael Greenstone University of Chicago from the USA visited MPCB to discuss the emission trading scheme and the Use of AI for regulatory enforcement.",
        "category": "Events",
        "date": "2025",
        "images": [
            emissiontrading1, emissiontrading2,
        ]
    }
];

export const archiveGalleryData = [
    {
        "id": 112,
        "title": "लोकसत्ता व म. प्र. नि. मंडळ यांच्या संयुक्त विद्यमाने पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०२४",
        "category": "Events",
        "date": "2024",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1",
            "https://placehold.co/800x600?text=Event+Photo+2",
            "https://placehold.co/800x600?text=Event+Photo+3"
        ]
    },
    {
        "id": 111,
        "title": "महाराष्ट्र प्रदूषण नियंत्रण मंडळ व महाराष्ट्र कला संस्कृती मंच यांच्या संयुक्त विद्यमाने कार्तिकीची वारी, पंढरीच्या दारी",
        "category": "Events",
        "date": "2024",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1",
            "https://placehold.co/800x600?text=Event+Photo+2"
        ]
    },
    {
        "id": 110,
        "title": "Eco-Friendly Dahihandi - 2024",
        "category": "Events",
        "date": "2024",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1",
            "https://placehold.co/800x600?text=Event+Photo+2"
        ]
    },
    {
        "id": 109,
        "title": "लोकसत्ता व म. प्र. नि. मंडळ यांच्या संयुक्त विद्यमाने पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०२३",
        "category": "Events",
        "date": "2023",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1",
            "https://placehold.co/800x600?text=Event+Photo+2"
        ]
    },
    {
        "id": 108,
        "title": "Eco-Friendly Dahihandi - 2023",
        "category": "Events",
        "date": "2023",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1",
            "https://placehold.co/800x600?text=Event+Photo+2"
        ]
    },
    {
        "id": 107,
        "title": "लोकसत्ता व म. प्र. नि. मंडळ यांच्या संयुक्त विद्यमाने पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०२२",
        "category": "Events",
        "date": "2022",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1"
        ]
    },
    {
        "id": 106,
        "title": "लोकसत्ता व म. प्र. नि. मंडळ यांच्या संयुक्त विद्यमाने पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०२१",
        "category": "Events",
        "date": "2021",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1"
        ]
    },
    {
        "id": 105,
        "title": "लोकसत्ता व म. प्र. नि. मंडळ यांच्या संयुक्त विद्यमाने पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०२०",
        "category": "Events",
        "date": "2020",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1"
        ]
    },
    {
        "id": 104,
        "title": "Eco-Friendly Dahihandi - 2020",
        "category": "Events",
        "date": "2020",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1"
        ]
    },
    {
        "id": 103,
        "title": "लोकसत्ता व म. प्र. नि. मंडळ यांच्या संयुक्त विद्यमाने पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०१९",
        "category": "Events",
        "date": "2019",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1"
        ]
    },
    {
        "id": 102,
        "title": "Eco-Friendly Dahihandi - 2019",
        "category": "Events",
        "date": "2019",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1"
        ]
    },
    {
        "id": 101,
        "title": "लोकसत्ता व म. प्र. नि. मंडळ यांच्या संयुक्त विद्यमाने पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०१८",
        "category": "Events",
        "date": "2018",
        "images": [
            "https://placehold.co/800x600?text=Event+Photo+1"
        ]
    },
    {
        "id": 100,
        "title": "ऑगस्ट २०१७ रोजी दैनिक सामना व म. प्र. नि. मंडळातर्फे आयोजित पर्यावरणपूरक गणपती सार्वजनिक जागरूकता अभियान",
        "category": "Events",
        "date": "2017",
        "images": ["https://placehold.co/800x600?text=Ganpati+Campaign+2017"]
    },
    {
        "id": 99,
        "title": "५ जून २०१७ रोजी जागतिक पर्यावरण दिन साजरा केला",
        "category": "Events",
        "date": "2017",
        "images": ["https://placehold.co/800x600?text=Environment+Day+2017"]
    },
    {
        "id": 98,
        "title": "In August 2017 Eco Friendly Dahi Handi (Krushna Janmashtami) Festival 2017 was organized in association with IDEAL Book Company and MPCB",
        "category": "Events",
        "date": "2017",
        "images": ["https://placehold.co/800x600?text=Dahi+Handi+2017"]
    },
    {
        "id": 97,
        "title": "World Environment Day celebration dated 5th June 2017",
        "category": "Events",
        "date": "2017",
        "images": ["https://placehold.co/800x600?text=Environment+Day+Celebration+2017"]
    },
    {
        "id": 96,
        "title": "Eco-Ganesha Public awareness campaign organized by Dainik Samna and MPCB in the month of August 2017",
        "category": "Events",
        "date": "2017",
        "images": ["https://placehold.co/800x600?text=Eco-Ganesha+2017"]
    },
    {
        "id": 95,
        "title": "Training Program on Noise Level Monitoring for Police Officials",
        "category": "Events",
        "date": "2009",
        "images": ["https://placehold.co/800x600?text=Police+Training+2009"]
    }
];

const standingorders = "/assets/standingorders.svg";

function Gallery() {
    const search = useSearch({ from: '/photo-gallery' }) as { view?: string };
    const [isArchive, setIsArchive] = useState(search.view === 'archive');

    useEffect(() => {
        setIsArchive(search.view === 'archive');
    }, [search.view]);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ITEMS_PER_PAGE = 6;

    // Derived data
    const displayData = isArchive ? archiveGalleryData : currentGalleryData;
    const totalPages = Math.ceil(displayData.length / ITEMS_PER_PAGE);
    const paginatedData = displayData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset page on toggle
    useEffect(() => {
        setCurrentPage(1);
    }, [isArchive]);

    // Auto-play logic
    useEffect(() => {
        if (!selectedAlbum) return;

        const timer = setTimeout(() => {
            handleNextImage();
        }, 4000);

        return () => clearTimeout(timer);
    }, [currentImageIndex, selectedAlbum]);

    const handleNextImage = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedAlbum.images.length);
    };

    const handlePrevImage = () => {
        if (!selectedAlbum) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
    };

    const openSlideshow = (album: any) => {
        setSelectedAlbum(album);
        setCurrentImageIndex(0);
    };

    const closeSlideshow = () => {
        setSelectedAlbum(null);
        setCurrentImageIndex(0);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 300, behavior: 'smooth' }); // Scroll to top of grid
    };

    // Generate page numbers logic
    const getPageNumbers = (currentPage: number, totalPages: number) => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        if (currentPage <= 3) {
            return [1, 2, 3, 4, '...', totalPages];
        }
        if (currentPage >= totalPages - 2) {
            return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }
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
                        <span>Gallery</span>
                    </div>
                    <h1 className="text-[36px] font-bold leading-tight">
                        Photo Gallery
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1282px] mx-auto px-4 py-8">

                {/* Header Row with Toggle */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                    <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 uppercase">
                        {isArchive ? "Archive: Photo Gallery" : "Current Photo Gallery"}
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
                            onClick={() => setIsArchive(true)}
                            className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Archive
                        </button>
                    </div>
                </div>

                {/* Gallery Grid */}
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
                    {/* Close Button */}
                    <button
                        onClick={closeSlideshow}
                        className="absolute top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1001] shadow-lg border border-white/10 cursor-pointer"
                        title="Close"
                    >
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    <div className="flex items-center justify-center gap-2 max-h-[90vh] w-full max-w-7xl" onClick={(e) => e.stopPropagation()}>
                        {/* Prev Button */}
                        <button
                            onClick={handlePrevImage}
                            className="cursor-pointer p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all flex-shrink-0 z-[1001]"
                        >
                            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                        </button>

                        {/* Image Container */}
                        <div className="relative shrink-0 flex items-center justify-center">
                            <img
                                src={selectedAlbum.images[currentImageIndex]}
                                alt={`Slide ${currentImageIndex + 1}`}
                                className="max-h-[85vh] max-w-[calc(100vw-140px)] object-contain rounded-lg shadow-2xl select-none"
                            />

                            {/* Caption / Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/60 px-4 py-1 rounded-full backdrop-blur-sm z-10 pointer-events-none">
                                {currentImageIndex + 1} / {selectedAlbum.images.length}
                            </div>
                        </div>

                        {/* Next Button */}
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
    )
}

export default Gallery;
