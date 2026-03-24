import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, RefreshCw, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const standingorders = "/assets/standingorders.svg";

// Custom Dropdown Component
interface CustomDropdownProps {
    name: string;
    value: string;
    options: string[];
    onChange: (name: string, value: string) => void;
    placeholder?: string;
    required?: boolean;
}

const CustomDropdown = ({ name, value, options, onChange, placeholder = "- Select -", required = false }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOptionClick = (option: string) => {
        onChange(name, option);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full pl-4 pr-10 py-3 bg-gray-50 border ${isOpen ? 'border-[#00A3FF] ring-2 ring-[#00A3FF]' : 'border-gray-200'} rounded-xl cursor-pointer transition-all flex items-center justify-between group hover:border-[#00A3FF]`}
            >
                <span className={`block truncate ${!value ? 'text-gray-500' : 'text-gray-700'}`}>
                    {value || placeholder}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 group-hover:text-[#00A3FF] transition-colors">
                    <ChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </span>
            </div>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1 animate-in fade-in zoom-in-95 duration-100">
                    <ul className="text-base text-gray-700">
                        {/* Placeholder Option */}
                        <li
                            className="text-gray-900 cursor-pointer select-none relative py-2.5 pl-4 pr-9 hover:bg-blue-50 hover:text-[#00A3FF] transition-colors"
                            onClick={() => handleOptionClick("")}
                        >
                            <span className="font-normal block truncate text-gray-400">
                                {placeholder}
                            </span>
                        </li>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`text-gray-900 cursor-pointer select-none relative py-2.5 pl-4 pr-9 hover:bg-blue-50 hover:text-[#00A3FF] transition-colors ${value === option ? 'bg-blue-50 text-[#00A3FF] font-medium' : 'font-normal'}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                <span className="block truncate">
                                    {option}
                                </span>
                                {value === option && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#00A3FF]">
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Hidden Input for Form Submission logic if needed by some libraries, though mostly controlled state is used here */}
            {required && <input type="text" className="sr-only" value={value} required={required} tabIndex={-1} onChange={() => { }} />}
        </div>
    );
};

const Feedback = () => {
    const { language } = useLanguage();

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        visitorType: '',
        purpose: '',
        frequency: '',
        ratings: {
            navigation: 0,
            speed: 0,
            design: 0,
            content: 0,
            mobile: 0,
            accuracy: 0,
            overall: 0
        },
        favoriteFeature: '',
        challenges: '',
        suggestions: '',
        agreement: false,
        captchaAnswer: ''
    });

    // Captcha State
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });

    // Speech Recognition State
    const [listeningField, setListeningField] = useState<string | null>(null);
    const [interimText, setInterimText] = useState("");
    const formDataRef = useRef(formData);
    // Keep a ref of the current listening field to check against during asynchronous callbacks (like onend)
    const listeningFieldRef = useRef(listeningField);

    useEffect(() => {
        formDataRef.current = formData;
    }, [formData]);

    useEffect(() => {
        listeningFieldRef.current = listeningField;
    }, [listeningField]);

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 20) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ num1: n1, num2: n2, result: n1 + n2 });
    };

    useEffect(() => {
        if (!listeningField) {
            setInterimText("");
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Your browser does not support voice search. Please use Google Chrome or Edge.");
            setListeningField(null);
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = language === "Marathi" ? "mr-IN" : "en-US";
        recognition.interimResults = true;
        recognition.continuous = true;

        // Store the text present BEFORE this specific recognition session started
        // This makes our update logic idempotent within a session: Base + Current Transcript
        let sessionBaseText = formDataRef.current[listeningField as keyof typeof formData] as string || '';

        recognition.onstart = () => {
            console.log("Voice recognition started for", listeningField);
            sessionBaseText = formDataRef.current[listeningField as keyof typeof formData] as string || '';
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
            setFormData(prev => {
                const base = sessionBaseText.trim();
                const newContent = sessionFinalTranscript.trim();
                let finalText = "";

                // Smart spacing logic
                if (!base) finalText = newContent;
                else if (!newContent) finalText = base;
                else finalText = base + " " + newContent;

                return { ...prev, [listeningField]: finalText };
            });

            setInterimText(sessionInterimTranscript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error);
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                setListeningField(null);
            }
        };

        recognition.onend = () => {
            // CRITICAL FIX: Only restart if we are STILL listening to the SAME field according to the latest state (ref)
            // This prevents infinite loops when switching fields or stopping manually
            if (listeningFieldRef.current === listeningField) {
                console.log("Restarting voice recognition for", listeningField);
                sessionBaseText = formDataRef.current[listeningField as keyof typeof formData] as string || '';
                try {
                    recognition.start();
                } catch (e) {
                    console.error("Failed to restart recognition", e);
                    setListeningField(null);
                }
            } else {
                console.log("Voice recognition stopped naturally (field changed or stopped)");
                setInterimText("");
            }
        };

        try {
            recognition.start();
        } catch (e) {
            console.error("Failed to start recognition", e);
            setListeningField(null);
        }

        return () => {
            recognition.stop();
        };
    }, [listeningField, language]);

    const toggleListening = (field: string) => {
        setListeningField(prev => prev === field ? null : field);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDropdownChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRatingChange = (category: string, rating: number) => {
        setFormData(prev => ({
            ...prev,
            ratings: { ...prev.ratings, [category]: rating }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(formData.captchaAnswer) !== captcha.result) {
            alert('Incorrect Captcha! Please try again.');
            generateCaptcha();
            setFormData(prev => ({ ...prev, captchaAnswer: '' }));
            return;
        }
        if (!formData.agreement) {
            alert('Please accept the agreement to submit constraints.');
            return;
        }

        console.log('Form Submitted:', formData);
        alert('Thank you for your feedback!');
        setFormData({
            name: '',
            email: '',
            visitorType: '',
            purpose: '',
            frequency: '',
            ratings: {
                navigation: 0,
                speed: 0,
                design: 0,
                content: 0,
                mobile: 0,
                accuracy: 0,
                overall: 0
            },
            favoriteFeature: '',
            challenges: '',
            suggestions: '',
            agreement: false,
            captchaAnswer: ''
        });
        generateCaptcha();
    };

    const StarRating = ({ category, label }: { category: string, label: string }) => (
        <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors px-2 rounded-lg">
            <label className="text-gray-700 text-sm font-medium">{label}</label>
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(category, star)}
                        className={`text-2xl transition-all duration-200 hover:scale-110 focus:outline-none cursor-pointer ${(formData.ratings as any)[category] >= star
                            ? 'text-yellow-400 drop-shadow-sm'
                            : 'text-gray-200 hover:text-yellow-200'
                            }`}
                    >
                        ★
                    </button>
                ))}
            </div>
        </div>
    );

    const visitorTypeOptions = [
        "Citizen",
        "Industry Representative",
        "NGO",
        "Student/Researcher",
        "Other"
    ];

    const purposeOptions = [
        "Check Public Services",
        "File Complaint",
        "Read News/GRs/Notifications",
        "Download Forms",
        "Dashboard/Statistics",
        "Other"
    ];

    const frequencyOptions = [
        "First Time",
        "Occasionally (once in 2-3 months)",
        "Regularly (monthly)",
        "Very Frequently (weekly/daily)"
    ];

    // Helper to mix regular value and interim text with proper spacing
    const getDisplayValue = (field: string) => {
        const val = (formData as any)[field];
        if (listeningField === field && interimText) {
            // If there's existing text, add space before interim
            return val ? `${val} ${interimText}` : interimText;
        }
        return val;
    };

    return (
        <div className="font-family-helvetica bg-slate-50 min-h-screen pb-12">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white shadow-sm">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-b-[24px] md:rounded-b-[48px] overflow-hidden shadow-lg">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${standingorders})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${standingorders})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />
                        {/* Modern Overlay Pattern */}
                        <div className="absolute inset-0 z-10 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                        <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-10px]">
                            <h1 className="text-[32px] md:text-[44px] font-extrabold text-[#000000] tracking-tight leading-none mb-4 drop-shadow-sm">
                                Feedback Form
                            </h1>
                            <p className="text-[16px] md:text-[22px] font-light text-gray-800 tracking-wide uppercase">MPCB Website User Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center py-12">
                <div className="w-full max-w-[1000px] px-4">
                    <form onSubmit={handleSubmit} className="bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100">

                        {/* Personal Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Name <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={getDisplayValue('name')}
                                        onChange={handleInputChange}
                                        className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent transition-all outline-none text-gray-700 placeholder:text-gray-400"
                                        placeholder="Enter your name"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => toggleListening('name')}
                                        className={`absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors ${listeningField === 'name' ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-400 hover:text-[#00A3FF] hover:bg-blue-50'}`}
                                        title="Voice Input"
                                    >
                                        {listeningField === 'name' ? <MicOff size={18} /> : <Mic size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={getDisplayValue('email')}
                                        onChange={handleInputChange}
                                        className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent transition-all outline-none text-gray-700 placeholder:text-gray-400"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => toggleListening('email')}
                                        className={`absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors ${listeningField === 'email' ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-400 hover:text-[#00A3FF] hover:bg-blue-50'}`}
                                        title="Voice Input"
                                    >
                                        {listeningField === 'email' ? <MicOff size={18} /> : <Mic size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Visitor Type <span className="text-red-500">*</span></label>
                                <CustomDropdown
                                    name="visitorType"
                                    value={formData.visitorType}
                                    options={visitorTypeOptions}
                                    onChange={handleDropdownChange}
                                    required={true}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Purpose of Visit <span className="text-red-500">*</span></label>
                                <CustomDropdown
                                    name="purpose"
                                    value={formData.purpose}
                                    options={purposeOptions}
                                    onChange={handleDropdownChange}
                                    required={true}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Frequency of Visit <span className="text-red-500">*</span></label>
                                <CustomDropdown
                                    name="frequency"
                                    value={formData.frequency}
                                    options={frequencyOptions}
                                    onChange={handleDropdownChange}
                                    required={true}
                                />
                            </div>
                        </div>

                        {/* Experience Ratings */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                                Website Experience
                                <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">(Ratings: 1 = Poor, 5 = Excellent) <span className="text-red-500">*</span></span>
                            </h3>
                            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-2 shadow-sm">
                                <StarRating category="navigation" label="Ease of Navigation" />
                                <StarRating category="speed" label="Speed & Performance" />
                                <StarRating category="design" label="Design & Layout" />
                                <StarRating category="content" label="Content Availability (Marathi/English)" />
                                <StarRating category="mobile" label="Mobile & Accessibility Features" />
                                <StarRating category="accuracy" label="Information Accuracy & Timeliness" />
                                <StarRating category="overall" label="Overall Experience" />
                            </div>
                        </div>

                        {/* Text Areas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Favorite feature</label>
                                <div className="relative">
                                    <textarea
                                        name="favoriteFeature"
                                        value={getDisplayValue('favoriteFeature')}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent transition-all outline-none text-gray-700 resize-none placeholder:text-gray-400"
                                        placeholder="Write your favorite feature..."
                                    />
                                    <button
                                        type="button"
                                        onClick={() => toggleListening('favoriteFeature')}
                                        className={`absolute cursor-pointer right-3 bottom-3 p-1.5 rounded-lg transition-colors ${listeningField === 'favoriteFeature' ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-400 hover:text-[#00A3FF] hover:bg-blue-50'}`}
                                        title="Voice Input"
                                    >
                                        {listeningField === 'favoriteFeature' ? <MicOff size={18} /> : <Mic size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Challenges faced</label>
                                <div className="relative">
                                    <textarea
                                        name="challenges"
                                        value={getDisplayValue('challenges')}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent transition-all outline-none text-gray-700 resize-none placeholder:text-gray-400"
                                        placeholder="Describe any challenges..."
                                    />
                                    <button
                                        type="button"
                                        onClick={() => toggleListening('challenges')}
                                        className={`absolute cursor-pointer right-3 bottom-3 p-1.5 rounded-lg transition-colors ${listeningField === 'challenges' ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-400 hover:text-[#00A3FF] hover:bg-blue-50'}`}
                                        title="Voice Input"
                                    >
                                        {listeningField === 'challenges' ? <MicOff size={18} /> : <Mic size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">Suggestions for improvement</label>
                                <div className="relative">
                                    <textarea
                                        name="suggestions"
                                        value={getDisplayValue('suggestions')}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent transition-all outline-none text-gray-700 resize-none placeholder:text-gray-400"
                                        placeholder="Your suggestions..."
                                    />
                                    <button
                                        type="button"
                                        onClick={() => toggleListening('suggestions')}
                                        className={`absolute cursor-pointer right-3 bottom-3 p-1.5 rounded-lg transition-colors ${listeningField === 'suggestions' ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-400 hover:text-[#00A3FF] hover:bg-blue-50'}`}
                                        title="Voice Input"
                                    >
                                        {listeningField === 'suggestions' ? <MicOff size={18} /> : <Mic size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Agreement */}
                        <div className="mb-8">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreement}
                                        onChange={(e) => setFormData(prev => ({ ...prev, agreement: e.target.checked }))}
                                        className="peer w-5 h-5 border-2 border-gray-300 rounded text-[#00A3FF] focus:ring-[#00A3FF] cursor-pointer appearance-none checked:bg-[#00A3FF] checked:border-[#00A3FF] transition-all"
                                    />
                                    <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 7L6 10L11 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors select-none text-sm">
                                    I agree that my feedback may be used by MPCB to improve its website and digital services.
                                </span>
                            </label>
                        </div>

                        {/* Captcha */}
                        <div className="mb-10 bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <h4 className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-2 uppercase tracking-wider">
                                <span className="text-[#00A3FF]">▼</span> Captcha
                            </h4>
                            <p className="text-xs text-gray-500 mb-4">This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.</p>

                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm font-mono font-bold text-lg text-gray-700 selection:bg-none select-none">
                                    <span>Math question</span>
                                    <span className="text-red-500">*</span>
                                    <span className="px-2">{captcha.num1} + {captcha.num2} =</span>
                                </div>

                                <input
                                    type="number"
                                    value={formData.captchaAnswer}
                                    onChange={(e) => setFormData(prev => ({ ...prev, captchaAnswer: e.target.value }))}
                                    className="w-full md:w-32 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00A3FF] focus:border-transparent transition-all outline-none"
                                    placeholder="Result"
                                />

                                <button
                                    type="button"
                                    onClick={generateCaptcha}
                                    className="p-3 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-[#00A3FF] hover:border-[#00A3FF] transition-all"
                                    title="Refresh Captcha"
                                >
                                    <RefreshCw size={18} />
                                </button>
                            </div>
                            <p className="text-[11px] text-gray-400 mt-2">Solve this simple math problem and enter the result. E.g. for 1+3, enter 4.</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full md:w-auto px-10 py-4 bg-[#75B726] hover:bg-[#66a120] text-white font-bold rounded-xl shadow-[0_4px_14px_0_rgba(117,183,38,0.39)] hover:shadow-[0_6px_20px_rgba(117,183,38,0.23)] hover:-translate-y-1 transition-all duration-200 uppercase tracking-wide text-sm"
                        >
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};
export default Feedback;
