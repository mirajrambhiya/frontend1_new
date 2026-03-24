import { useState, useEffect, useRef } from 'react';

const translate = "/assets/translate.png";
const down_arrow = "/assets/downarrow.png";

import mpcblogonew from "/assets/mpcblogonew.jpg";
const down_arrow_black = "/assets/blackdownarrow.svg";
import { useNavigate, Link } from '@tanstack/react-router';
import { useLanguage } from '../context/LanguageContext';

// About Us dropdown items (from navbanner tabs)
const aboutUsItems = [
    { name: "Introduction", path: "/about/introduction" },
    { name: "Establishment", path: "/about/establishment" },
    { name: "Present Board", path: "/about/presentboard" },
    { name: "Organizational Structure", path: "/about/organizationalstructure" },
    { name: "Office In-charge", path: "/about/officein-charge" },
    { name: "Offices", path: "/about/offices" },
    { name: "Laboratories", path: "/about/laboratories" },
    { name: "Annual Report", path: "/about/annualreport" },
    { name: "Training", path: "/about/training" },
    { name: "Budget", path: "/about/budget" },
    { name: "MPCB Employees", path: "/about/mpcbemployees" },
];

// Standing Orders dropdown items
const standingOrdersItems = [
    { name: "Important Standing Orders", path: "/standing-orders/importantstandingorders" },
    { name: "Circulars", path: "/standing-orders/circulars" },
    { name: "CPCB Directions", path: "/standing-orders/cpcbdirection" },
    { name: "MOEF Directions", path: "/standing-orders/moefdirection" },
    { name: "MPCB Directions", path: "/standing-orders/mpcbdirection" },
    { name: "State Govt. Directions", path: "/standing-orders/stategovtdirection" },
    { name: "CRZ Clearance by MOEF, Forest and Climate Change", path: "/standing-orders/crzclearance" },
    { name: "Government Resolution", url: "https://gr.maharashtra.gov.in/1145/Government-Resolutions" },
];

// Consent Management dropdown items
interface ConsentManagementItem {
    name: string;
    path?: string;
    url?: string;
    hasSubmenu?: boolean;
    submenuItems?: { name: string; path: string }[];
}

const consentManagementItems: ConsentManagementItem[] = [
    { name: "Apply for Online Consent/ Authorization/ Other Services (EC-MPCB Web Portal)", url: "https://www.ecmpcb.in/" },
    { name: "Procedure for Online Consent Application", path: "/consent-management/procedure-online" },
    { name: "Categorisation of Industries (R/O/G/W & B)", path: "/consent-management/categorisation" },
    { name: "Industries Location", path: "/consent-management/industrieslocation" },
    { name: "Consent Under Water and Air Act", path: "/consent-management/water-air-act" },
    { name: "Authorisation Under BMW(M&H)Rules,1998", path: "/consent-management/authunderbmw" },
    { name: "Authorisation Under HW(M&H)Rules,2003", path: "/consent-management/authunderhw" },
    { name: "Revision of Consent Fees", path: "/consent-management/revision-fees" },
    { name: "Scheme of Auto Renewal of Consents", path: "/consent-management/auto-renewal" },
    { name: "Sectorial Approach for Consent Processing", path: "/consent-management/sectorial-approach" },
    { name: "Environmental Standards", path: "/consent-management/environmental-standards" },
    { name: "Committees Constituted", path: "/consent-management/committees" },
    {
        name: "Inspection Procedure",
        path: "/consent-management/inspection-procedure",
        hasSubmenu: true,
        submenuItems: [
            { name: "Procedure", path: "/consent-management/inspection-procedure/procedure" },
            { name: "Circulars", path: "/consent-management/inspectionprocedure/circulars" },
        ]
    },
    { name: "Industrial Statistics", path: "/consent-management/industrialstatistics" },
    { name: "Consent & Authorization Disposal Compliance Dashboard", url: "https://manage.ecmpcb.in/public/dashboard/dist/index.html" },
    { name: "Amendment Consent Copies", url: "https://www.ecmpcb.in/cms_authorization/ammendment" },
    { name: "Procedure Documents", path: "/consent-management/proceduredocuments" },
];

// Notices dropdown items
interface NoticesItem {
    name: string;
    path?: string;
    url?: string;
    hasSubmenu?: boolean;
    submenuItems?: { name: string; path: string }[];
}

const noticesItems: NoticesItem[] = [
    { name: "Tenders", path: "/notices/tenders" },
    { name: "Model Tender Document", path: "/notices/modeltenderdoc" },
    { name: "Public Notices", path: "/notices/publicnotices" },
    {
        name: "Public Hearings",
        path: "/notices/publichearings",
        hasSubmenu: true,
        submenuItems: [
            { name: "Conducted", path: "/notices/publichearings/conducted" },
            { name: "Upcoming", path: "/notices/publichearings/upcoming" },
            { name: "Circulars", path: "/notices/publichearings/circulars" },
        ]
    },
    { name: "Gem Purchase", path: "/notices/gempurchase" },
    { name: "Regarding Appointment on Service Contract Basis", path: "/notices/appointmentservicecontract" },
];

// RTI dropdown items
interface RtiItem {
    name: string;
    path?: string;
    url?: string;
    hasSubmenu?: boolean;
    submenuItems?: { name: string; path?: string; url?: string }[];
    leftOpening?: boolean;
}

const rtiItems: RtiItem[] = [
    { name: "RIGHT TO INFORMATION ACT 2005", path: "/rti/act-2005" },
    { name: "INFORMATION OFFICERS", path: "/rti/information-officers" },
    {
        name: "SEC 4 OF RTI ACT AS ON 30/11/2025",
        hasSubmenu: true,
        submenuItems: [
            { name: "English", path: "/rti/sec4/english" },
            { name: "Marathi", path: "/rti/sec4/marathi" },
        ]
    },
    {
        name: "ONLINE APPLICATION",
        hasSubmenu: true,
        leftOpening: true,
        submenuItems: [
            { name: "Online RTI", url: "https://www.ecmpcb.in/rti" },
            { name: "First Appeal", url: "https://www.ecmpcb.in/rti/appeal" },
        ]
    },
    { name: "CITIZEN CHARTER", path: "/rti/citizen-charter" },
];

function NavBar() {
    const { language, setLanguage } = useLanguage();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
    const [isStandingOrdersHovered, setIsStandingOrdersHovered] = useState(false);
    const [isConsentManagementHovered, setIsConsentManagementHovered] = useState(false);
    const [inspectionProcedureHovered, setInspectionProcedureHovered] = useState(false);
    const [isNoticesHovered, setIsNoticesHovered] = useState(false);
    const [publicHearingsHovered, setPublicHearingsHovered] = useState(false);
    const [isRtiHovered, setIsRtiHovered] = useState(false);
    const [sec4Hovered, setSec4Hovered] = useState(false);
    const [onlineApplicationHovered, setOnlineApplicationHovered] = useState(false);

    // Voice Search State
    const [searchText, setSearchText] = useState("");
    const [interimText, setInterimText] = useState("");
    const [isListening, setIsListening] = useState(false);
    const isListeningRef = useRef(isListening);
    const searchTextRef = useRef(searchText); // Track current text to append to

    useEffect(() => {
        isListeningRef.current = isListening;
    }, [isListening]);

    useEffect(() => {
        searchTextRef.current = searchText;
    }, [searchText]);

    useEffect(() => {
        if (!isListening) {
            setInterimText("");
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Your browser does not support voice search. Please use Google Chrome or Edge.");
            setIsListening(false);
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = language === "Marathi" ? "mr-IN" : "en-US";
        recognition.interimResults = true;
        recognition.continuous = true;

        // Store the text present BEFORE this specific recognition session started
        // This makes our update logic idempotent within a session: Base + Current Transcript
        let sessionBaseText = searchTextRef.current;

        recognition.onstart = () => {
            console.log("Voice recognition started");
            sessionBaseText = searchTextRef.current;
        };

        recognition.onresult = (event: any) => {
            // Reconstruct the full transcript for THIS session from scratch
            let sessionFinalTranscript = "";
            let sessionInterimTranscript = "";

            for (let i = 0; i < event.results.length; i++) {
                const result = event.results[i];
                const transcript = result[0].transcript;
                if (result.isFinal) {
                    sessionFinalTranscript += transcript + " ";
                } else {
                    sessionInterimTranscript += transcript;
                }
            }

            // Update state: Start with base text (trimmed) + space + new final transcript
            setSearchText(() => {
                const base = sessionBaseText.trim();
                const newContent = sessionFinalTranscript.trim();
                if (!base) return newContent;
                if (!newContent) return base;
                return base + " " + newContent;
            });

            setInterimText(sessionInterimTranscript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error);
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                setIsListening(false);
            }
        };

        recognition.onend = () => {
            console.log("Voice recognition ended");
            if (isListeningRef.current) {
                // If we're still listening, we need to restart. 
                // CRITICALLY: Update the base text to include what we just heard, so the next session appends to it.
                sessionBaseText = searchTextRef.current;
                try {
                    recognition.start();
                } catch (e) {
                    console.error("Failed to restart recognition", e);
                    setIsListening(false);
                }
            } else {
                setInterimText("");
            }
        };

        try {
            recognition.start();
        } catch (e) {
            console.error("Failed to start recognition", e);
            setIsListening(false);
        }

        return () => {
            recognition.stop();
        };
    }, [isListening, language]);

    const toggleListening = () => {
        setIsListening(prev => !prev);
    };

    const [isEmailHovered, setIsEmailHovered] = useState(false);
    const [fontOffset, setFontOffset] = useState(0); // Offset in percentage (0 = normal, +2 = A+ once, -2 = A- once)
    const navigate = useNavigate();

    // Apply font size adjustment to the entire website using CSS zoom
    useEffect(() => {
        const zoomLevel = 100 + fontOffset; // e.g., 100%, 102%, 98%
        document.body.style.zoom = `${zoomLevel}%`;

        // Cleanup on unmount
        return () => {
            document.body.style.zoom = '100%';
        };
    }, [fontOffset]);

    // Font size handlers - each click adjusts by 2%
    const increaseFontSize = () => {
        setFontOffset(prev => Math.min(prev + 2, 2)); // Max +20%
    };

    const decreaseFontSize = () => {
        setFontOffset(prev => Math.max(prev - 2, -2)); // Min -20%
    };

    const resetFontSize = () => {
        setFontOffset(0); // Reset to normal
    };

    const [isSpeechOn, setIsSpeechOn] = useState(false);

    useEffect(() => {
        if (!isSpeechOn) {
            window.speechSynthesis.cancel();
            return;
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const text = target.innerText?.trim();

            if (text && text.length > 0) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.rate = 1;
                utterance.pitch = 1;
                window.speechSynthesis.speak(utterance);
            }
        };

        const handleMouseOut = () => {
            window.speechSynthesis.cancel();
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            window.speechSynthesis.cancel();
        };
    }, [isSpeechOn]);

    const toggleSpeech = () => {
        setIsSpeechOn(!isSpeechOn);
    };

    // Updated Navigation Data (Example with > 8 items to test)
    const navItems = [
        { name: 'About Us', hasArrow: true, hasDropdown: true },
        { name: 'Standing Orders', hasArrow: true, hasDropdown: true },
        { name: 'Consent Management', hasArrow: true, hasDropdown: true },
        { name: 'Recruitment', hasArrow: false, hasDropdown: false, path: '/recruitment' },
        { name: 'RTS', hasArrow: false, hasDropdown: false, path: '/rts' },
        { name: 'Notices', hasArrow: true, hasDropdown: true },
        { name: 'RTI', hasArrow: true, hasDropdown: true },
        { name: 'Workshop', hasArrow: false, hasDropdown: false, path: '/workshop' },
    ];

    // Helper to split the array into chunks of 8
    const rows: any[] = [];
    for (let i = 0; i < navItems.length; i += 8) {
        rows.push(navItems.slice(i, i + 8));
    }


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
    const [expandedMobileSubSection, setExpandedMobileSubSection] = useState<string | null>(null);

    const toggleMobileSection = (section: string) => {
        setExpandedMobileSection(expandedMobileSection === section ? null : section);
        setExpandedMobileSubSection(null); // Reset sub-section when switching main sections
    };

    const toggleMobileSubSection = (e: React.MouseEvent, subsection: string) => {
        e.stopPropagation();
        setExpandedMobileSubSection(expandedMobileSubSection === subsection ? null : subsection);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setExpandedMobileSection(null);
        setExpandedMobileSubSection(null);
    };

    // ... existing ref logic ... 

    return (
        <div className='sticky top-0 z-[100] bg-white shadow-sm font-helvetica'>
            {/* Top Blue Bar */}
            <div className="w-full h-auto flex items-center min-h-[36px] bg-[#0085E2] py-1 md:py-0">
                <div className="container mx-auto px-4 h-full flex flex-wrap items-center justify-center md:justify-end md:mr-[80px] gap-2 md:gap-x-[20px] text-[#FFFFFF] text-[10px] md:text-[12px]">

                    {/* Links Group */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div onClick={() => navigate({ to: '/photo-gallery' })} className="whitespace-nowrap cursor-pointer hover:underline transition-colors">
                            Gallery
                        </div>
                        <div onClick={() => navigate({ to: '/missionlife' })} className="whitespace-nowrap cursor-pointer hover:underline transition-colors">
                            Mission LiFE
                        </div>
                        <div
                            className='relative flex items-center gap-[4px] md:gap-[8px] whitespace-nowrap cursor-pointer transition-colors'
                            onMouseEnter={() => setIsEmailHovered(true)}
                            onMouseLeave={() => setIsEmailHovered(false)}
                        >
                            Email
                            <img
                                src={down_arrow}
                                alt="down arrow"
                                className={`w-[5px] h-[3px] md:w-[5.82px] md:h-[3.43px] transition-transform ${isEmailHovered ? 'rotate-180' : ''}`}
                            />
                            {/* Email Dropdown (Keep existing logic) */}
                            {isEmailHovered && (
                                <div className="absolute top-full left-[-10px] pt-1 z-50">
                                    <div className="w-[150px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                                        <a href="https://outlook.live.com/mail/0/" target="_blank" rel="noopener noreferrer" className="block w-full text-[12px] py-2 px-3 text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 transition-colors duration-200 text-left cursor-pointer">MPCB Office 365</a>
                                        <a href="https://mail.mpcb.gov.in/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.mpcb.gov.in%2fowa%2f" target="_blank" rel="noopener noreferrer" className="block w-full text-[12px] py-2 px-3 text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 transition-colors duration-200 text-left cursor-pointer">MPCB Exchange</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div onClick={() => navigate({ to: '/contact-us' })} className="whitespace-nowrap cursor-pointer hover:underline transition-colors">
                            Contact Us
                        </div>
                    </div>

                    <div className="hidden md:block">|</div>

                    {/* Font Size & Lang & Search Group */}
                    <div className="flex items-center gap-2 md:gap-[20px]">
                        <div className="flex items-center gap-2 md:gap-[20px]">
                            <button onClick={decreaseFontSize} className="hover:underline cursor-pointer">A-</button>
                            <button onClick={resetFontSize} className="hover:underline cursor-pointer">A</button>
                            <button onClick={increaseFontSize} className="hover:underline cursor-pointer">A+</button>
                        </div>
                        <div className="hidden md:block">|</div>

                        {/* Language Dropdown */}
                        <div
                            className="relative flex items-center gap-[6px] md:gap-[10px] cursor-pointer"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <img src={translate} alt="translate" className="w-[12px] h-[12px] md:w-[15.04px] md:h-[15.04px]" />
                            <span>{language}</span>
                            <img
                                src={down_arrow}
                                alt="down arrow"
                                className={`w-[4px] h-[2px] md:w-[5.82px] md:h-[2.93px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                            />
                            {isDropdownOpen && (
                                <div className="absolute top-full right-0 pt-1 z-50">
                                    <div className="w-[100px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                                        <button className="w-full text-[12px] py-2 px-3 text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 transition-colors duration-200 text-left cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(false); setLanguage(language === 'English' ? 'Marathi' : 'English'); }}>
                                            {language === 'English' ? 'Marathi' : 'English'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Speech Toggle Button */}
                        <div
                            className={`rounded-[8px] border border-white/30 cursor-pointer h-[24px] md:h-[28px] px-2 flex items-center justify-center gap-1 transition-all duration-300 ${isSpeechOn ? 'bg-white/20' : 'hover:bg-white/10'}`}
                            onClick={toggleSpeech}
                            title={isSpeechOn ? "Turn Speech Off" : "Turn Speech On"}
                        >
                            {isSpeechOn ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
                                    <span className="text-[10px] md:text-[12px] font-medium hidden md:block">Speech On</span>
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                                    <span className="text-[10px] md:text-[12px] font-medium hidden md:block">Speech Off</span>
                                </>
                            )}
                        </div>

                        {/* Search Box - Hidden on very small screens if needed, or compacted */}
                        <div className={`rounded-[8px] bg-white/20 w-[120px] md:w-[180px] h-[24px] md:h-[28px] flex items-center gap-[6px] px-[8px] hover:bg-white/30 transition-colors focus-within:bg-white/30 ${isListening ? 'ring-2 ring-red-400 bg-white/30' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 shrink-0">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input
                                type="text"
                                value={searchText + interimText}
                                onChange={(e) => { setSearchText(e.target.value); setInterimText(""); }}
                                placeholder={isListening ? "Listening..." : "Search"}
                                className="bg-transparent border-none outline-none text-white placeholder-white/80 text-[10px] md:text-[12px] w-full font-medium"
                            />
                            <button onClick={toggleListening} className={`shrink-0 focus:outline-none transition-colors cursor-pointer ${isListening ? 'text-red-500 animate-pulse' : 'text-white/90 hover:text-white'}`} title="Voice Search">
                                {isListening ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className='w-full min-h-[40px] h-auto flex items-center bg-white py-3 px-4 shadow-sm relative'>
                <div className="container mx-auto md:mr-[80px] md:ml-[80px] flex items-center justify-between">
                    {/* Logo Section */}
                    <Link to="/" className='flex items-center shrink-0 gap-2'>
                        <img src={mpcblogonew} alt="mpcb logo" className='w-[140px] md:w-[250px] h-auto' />
                    </Link>

                    {/* Desktop Navigation - Hidden on Mobile */}
                    <div className='hidden xl:flex flex-col items-end grow ml-[20px]'>
                        <div className='flex flex-col items-end gap-y-2'>
                            {rows.map((rowItems, rowIndex) => (
                                <div key={rowIndex} className='flex flex-wrap items-center justify-end gap-x-2 md:gap-x-4 text-[#000000] text-[14.05px] w-full'>
                                    {rowItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className='relative flex items-center gap-1 whitespace-nowrap cursor-pointer hover:text-[#0085E2] transition-colors py-1'
                                            onClick={() => { if (item.path) navigate({ to: item.path }); }}
                                            onMouseEnter={() => {
                                                if (item.name === 'About Us') setIsAboutUsHovered(true);
                                                if (item.name === 'Standing Orders') setIsStandingOrdersHovered(true);
                                                if (item.name === 'Consent Management') setIsConsentManagementHovered(true);
                                                if (item.name === 'Notices') setIsNoticesHovered(true);
                                                if (item.name === 'RTI') setIsRtiHovered(true);
                                            }}
                                            onMouseLeave={() => {
                                                if (item.name === 'About Us') setIsAboutUsHovered(false);
                                                if (item.name === 'Standing Orders') setIsStandingOrdersHovered(false);
                                                if (item.name === 'Consent Management') { setIsConsentManagementHovered(false); setInspectionProcedureHovered(false); }
                                                if (item.name === 'Notices') { setIsNoticesHovered(false); setPublicHearingsHovered(false); }
                                                if (item.name === "RTI") { setIsRtiHovered(false); setSec4Hovered(false); setOnlineApplicationHovered(false); }
                                            }}
                                        >
                                            {item.name}
                                            {item.hasArrow && (
                                                <img src={down_arrow_black} alt="arrow" className={`w-[5.82px] h-[3.43px] transition-transform duration-200 ${(item.name === 'About Us' && isAboutUsHovered) || (item.name === 'Standing Orders' && isStandingOrdersHovered) || (item.name === 'Consent Management' && isConsentManagementHovered) || (item.name === 'Notices' && isNoticesHovered) || (item.name === 'RTI' && isRtiHovered) ? 'rotate-180' : ''}`} />
                                            )}

                                            {/* Dropdowns logic remains exactly as before for Desktop */}
                                            {item.name === 'About Us' && isAboutUsHovered && (
                                                <div className="absolute top-full right-0 pt-2 z-50">
                                                    <div className="w-[220px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                                                        {aboutUsItems.map((di, i) => (<div key={i} onClick={() => navigate({ to: di.path })} className="px-4 py-2.5 text-[13px] text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 cursor-pointer transition-colors">{di.name}</div>))}
                                                    </div>
                                                </div>
                                            )}
                                            {item.name === 'Standing Orders' && isStandingOrdersHovered && (
                                                <div className="absolute top-full right-0 pt-2 z-50">
                                                    <div className="w-[350px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                                                        {standingOrdersItems.map((di, i) => (<div key={i} onClick={() => di.url ? window.open(di.url, '_blank') : navigate({ to: di.path })} className="px-4 py-2.5 text-[13px] text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 cursor-pointer transition-colors">{di.name}</div>))}
                                                    </div>
                                                </div>
                                            )}
                                            {/* (Wait, I truncated other dropdowns for brevity in this tool call, but I will include them all in the actual apply) */}
                                            {/* ... Full Dropdown Logic for Consent, Notices, RTI ... */}
                                            {item.name === 'Consent Management' && isConsentManagementHovered && (
                                                <div className="absolute top-full right-0 pt-2 z-50">
                                                    <div className="w-[480px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                                                        {consentManagementItems.map((di, i) => (
                                                            <div key={i} className="relative" onMouseEnter={() => di.hasSubmenu && setInspectionProcedureHovered(true)} onMouseLeave={() => di.hasSubmenu && setInspectionProcedureHovered(false)}>
                                                                <div onClick={() => { if (!di.hasSubmenu) di.url ? window.open(di.url, '_blank') : navigate({ to: di.path }) }} className="px-4 py-2.5 text-[13px] text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 transition-colors flex items-center justify-between cursor-pointer">
                                                                    <span>{di.name}</span>
                                                                    {di.hasSubmenu && <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                                                                </div>
                                                                {di.hasSubmenu && inspectionProcedureHovered && (
                                                                    <div className="absolute right-full top-0 pr-2 z-60"><div className="w-[150px] bg-white rounded-xl shadow border border-gray-100 py-2">{di.submenuItems?.map((si, siIndex) => (<div key={siIndex} onClick={() => navigate({ to: si.path })} className="px-4 py-2.5 text-[13px] hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 cursor-pointer">{si.name}</div>))}</div></div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {item.name === 'Notices' && isNoticesHovered && (
                                                <div className="absolute top-full right-0 pt-2 z-50">
                                                    <div className="w-[320px] bg-white rounded-xl shadow border border-gray-100 py-2">
                                                        {noticesItems.map((di, i) => (
                                                            <div key={i} className="relative" onMouseEnter={() => di.hasSubmenu && setPublicHearingsHovered(true)} onMouseLeave={() => di.hasSubmenu && setPublicHearingsHovered(false)}>
                                                                <div onClick={() => di.url ? window.open(di.url, '_blank') : (di.path && navigate({ to: di.path }))} className="flex items-center justify-between px-4 py-2.5 text-[13px] text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 cursor-pointer">
                                                                    {di.name} {di.hasSubmenu && <img src={down_arrow_black} className="w-[5px] h-[3px] -rotate-90" />}
                                                                </div>
                                                                {di.hasSubmenu && publicHearingsHovered && (<div className="absolute right-full top-0 pr-2 z-60"><div className="w-[200px] bg-white rounded-xl shadow border border-gray-100 py-2">{di.submenuItems?.map((si, siIndex) => (<div key={siIndex} onClick={() => navigate({ to: si.path })} className="px-4 py-2.5 text-[13px] hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 cursor-pointer">{si.name}</div>))}</div></div>)}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {item.name === 'RTI' && isRtiHovered && (
                                                <div className="absolute top-full right-0 pt-2 z-50">
                                                    <div className="w-[300px] bg-white rounded-xl shadow border border-gray-100 py-2">
                                                        {rtiItems.map((di, i) => (
                                                            <div key={i} className="relative" onMouseEnter={() => { if (di.name.includes("SEC 4")) setSec4Hovered(true); if (di.name.includes("ONLINE")) setOnlineApplicationHovered(true); }} onMouseLeave={() => { if (di.name.includes("SEC 4")) setSec4Hovered(false); if (di.name.includes("ONLINE")) setOnlineApplicationHovered(false); }}>
                                                                <div onClick={() => !di.hasSubmenu && di.path && navigate({ to: di.path })} className="px-4 py-2.5 text-[13px] text-gray-700 hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 transition-colors flex justify-between items-center cursor-pointer"><span className="leading-tight">{di.name}</span>{di.hasSubmenu && <img src={down_arrow_black} className="w-[5px] h-[3px] -rotate-90 ml-2" />}</div>
                                                                {di.name.includes("SEC 4") && sec4Hovered && (<div className="absolute right-full top-0 pr-2 z-60"><div className="w-[150px] bg-white rounded shadow border py-2">{di.submenuItems?.map((si, idx) => (<div key={idx} onClick={() => navigate({ to: si.path })} className="px-4 py-2.5 text-[13px] hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 cursor-pointer">{si.name}</div>))}</div></div>)}
                                                                {di.name.includes("ONLINE") && onlineApplicationHovered && (<div className="absolute right-full top-0 pr-2 z-60"><div className="w-[150px] bg-white rounded shadow border py-2">{di.submenuItems?.map((si, idx) => (<div key={idx} onClick={() => window.open(si.url, '_blank')} className="px-4 py-2.5 text-[13px] hover:text-[#00A3FF] hover:bg-[#00A3FF]/5 cursor-pointer">{si.name}</div>))}</div></div>)}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}


                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-600 focus:outline-none"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg max-h-[85vh] overflow-y-auto z-[110]">
                    <div className="flex flex-col p-2 pt-4 pb-12 gap-1 text-[15px] font-medium text-gray-800">
                        {navItems.map((item, index) => {
                            const isExpanded = expandedMobileSection === item.name;
                            const hasDropdown = item.hasDropdown;

                            let dropdownItems: any[] = [];
                            if (item.name === 'About Us') dropdownItems = aboutUsItems;
                            if (item.name === 'Standing Orders') dropdownItems = standingOrdersItems;
                            if (item.name === 'Consent Management') dropdownItems = consentManagementItems;
                            if (item.name === 'Notices') dropdownItems = noticesItems;
                            if (item.name === 'RTI') dropdownItems = rtiItems;

                            return (
                                <div key={index} className="flex flex-col border-b border-gray-50 last:border-0 overflow-hidden">
                                    <div
                                        className={`flex justify-between items-center px-4 py-3.5 cursor-pointer transition-colors duration-200 ${isExpanded ? 'bg-[#0085E2]/5 text-[#0085E2]' : 'hover:bg-gray-50'}`}
                                        onClick={() => {
                                            if (hasDropdown) {
                                                toggleMobileSection(item.name);
                                            } else if (item.path) {
                                                navigate({ to: item.path });
                                                closeMobileMenu();
                                            }
                                        }}
                                    >
                                        <span className="select-none">{item.name}</span>
                                        {hasDropdown && (
                                            <svg
                                                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-0 text-[#0085E2]' : 'rotate-[-90deg]'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </div>

                                    {/* Submenu Expansion */}
                                    {hasDropdown && (
                                        <div
                                            className={`transition-all duration-300 ease-in-out bg-gray-50/50 ${isExpanded ? 'max-h-[2000px] opacity-100 py-2' : 'max-h-0 opacity-0 pointer-events-none'}`}
                                        >
                                            <div className="flex flex-col gap-1 px-2">
                                                {dropdownItems.map((di, i) => {
                                                    const isSubExpanded = expandedMobileSubSection === di.name;
                                                    const hasSubmenu = di.hasSubmenu;

                                                    return (
                                                        <div key={i} className="flex flex-col">
                                                            <div
                                                                onClick={(e) => {
                                                                    if (hasSubmenu) {
                                                                        toggleMobileSubSection(e, di.name);
                                                                    } else {
                                                                        if (di.url) {
                                                                            window.open(di.url, '_blank');
                                                                        } else if (di.path) {
                                                                            navigate({ to: di.path });
                                                                        }
                                                                        closeMobileMenu();
                                                                    }
                                                                }}
                                                                className={`px-6 py-2.5 rounded-lg text-[13.5px] transition-all flex items-center justify-between cursor-pointer ${isSubExpanded ? 'text-[#0085E2] font-semibold bg-white shadow-sm' : 'text-gray-600 hover:text-[#0085E2]'}`}
                                                            >
                                                                <span className="select-none">{di.name}</span>
                                                                {hasSubmenu && (
                                                                    <svg
                                                                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isSubExpanded ? 'rotate-0' : 'rotate-[-90deg]'}`}
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                    </svg>
                                                                )}
                                                            </div>

                                                            {/* Nested Submenu */}
                                                            {hasSubmenu && (
                                                                <div
                                                                    className={`transition-all duration-300 ease-in-out border-l-2 border-[#0085E2]/20 ml-8 my-1 flex flex-col gap-1 overflow-hidden ${isSubExpanded ? 'max-h-[500px] opacity-100 py-1' : 'max-h-0 opacity-0'}`}
                                                                >
                                                                    {di.submenuItems?.map((si: any, idx: number) => (
                                                                        <div
                                                                            key={idx}
                                                                            onClick={() => {
                                                                                if (si.url) {
                                                                                    window.open(si.url, '_blank');
                                                                                } else if (si.path) {
                                                                                    navigate({ to: si.path });
                                                                                }
                                                                                closeMobileMenu();
                                                                            }}
                                                                            className="px-4 py-2 text-[13px] text-gray-500 hover:text-[#0085E2] cursor-pointer select-none"
                                                                        >
                                                                            • {si.name}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Gray separator */}
            <div className="w-full h-px bg-black/10"></div>
        </div>
    );
}

export default NavBar;