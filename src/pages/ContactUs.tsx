import React from 'react';
// Using assets from public folder
const industry = "/assets/industry_full.png";

const ContactUsBanner: React.FC = () => {

    return (
        <>
            <section className="w-full flex justify-center bg-white font-family-helvetica">
                {/* 1282px Max-Width Container to match the rest of your site */}
                <div className="w-full max-w-[1282px] px-4">

                    {/* Main Banner Container: Responsive Height */}
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">

                        {/* LAYER 1: The Sharp Base Image */}
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${industry})` }}
                        />

                        {/* LAYER 2: The Gradual Blur Layer */}
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${industry})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />

                        {/* LAYER 3: The Blue/White Professional Gradient Overlay */}
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        {/* LAYER 4: Content Container */}
                        <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-0 md:mt-[-50px]">
                            <h1 className="text-[32px] md:text-[48px] font-bold text-[#000000] tracking-tight leading-none mb-2 md:mb-4">
                                Contact Us
                            </h1>
                            <p className="text-[14px] md:text-[18px] font-medium text-black opacity-90">
                                Get in touch with us for any queries or assistance
                            </p>
                        </div>

                        {/* Subtle Bottom Glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Contact Information Section - Vertical Cards + Map */}
            <section className="w-full flex justify-center bg-white font-family-helvetica py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Side: 3 Vertical Cards */}
                        <div className="w-full md:w-1/2 flex flex-col gap-6">

                            <div className="bg-gray-50 rounded-[20px] p-6 shadow-sm border border-gray-100">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-[15px] text-gray-800 font-semibold">Office Address and Postal Address</p>
                                </div>
                                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                                    Maharashtra Pollution Control Board, Kalpataru Point, 3rd and 4th floor, Opp. PVR Cinema, Sion Circle, Mumbai-400 022.
                                </p>
                                <a
                                    href="/about/offices"
                                    className="text-[#00A3FF] text-[14px] font-medium hover:underline"
                                >
                                    Click To Contact Field Officers
                                </a>
                            </div>

                            <div className="bg-gray-50 rounded-[20px] p-6 shadow-sm border border-gray-100">
                                <p className="text-[15px] text-gray-800 font-semibold mb-4 leading-relaxed">
                                    Queries Related to Contests/ Quizzes or for Engagement with MPCB
                                </p>
                                <div className="space-y-3">
                                    <a
                                        className="flex items-center gap-2 text-gray-700 text-[14px]"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        enquiry@mpcb.gov.in
                                    </a>
                                    <div className="flex items-center gap-2 text-gray-700 text-[14px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        022-67808888 (Head Office)
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-[20px] p-6 shadow-sm border border-gray-100">
                                <p className="text-[15px] text-gray-800 font-semibold mb-4 leading-relaxed">
                                    Connect With Us
                                </p>
                                <div className="flex items-center gap-4">
                                    {/* Facebook */}
                                    <a
                                        href="https://www.facebook.com/MPCBOfficial/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    {/* X (Twitter) */}
                                    <a
                                        href="https://x.com/mpcb_official?lang=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a
                                        href="https://www.instagram.com/mpcb_official/?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#C13584] flex items-center justify-center hover:opacity-80 transition-opacity"
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 2: Queries Related */}




                        </div>

                        {/* Right Side: Google Map */}
                        <div className="w-full md:w-2/3">
                            <div className="rounded-[20px] overflow-hidden shadow-md border border-gray-200 h-full md:min-h-[450px] min-h-[152px]">
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Maharashtra+Pollution+Control+Board,Sion,Mumbai&zoom=16"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Maharashtra Pollution Control Board Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUsBanner;