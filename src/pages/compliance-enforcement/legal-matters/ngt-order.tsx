import React from 'react';
import PageBanner from '../../../components/PageBanner';

const NgtOrder = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="COMPLIANCE OF THE NATIONAL GREEN TRIBUNAL (NGT) ORDER"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    {/* Header */}
                    <div className="bg-gray-50/50 border-b border-gray-200 px-6 py-4">
                        <h3 className="text-[18px] font-bold text-gray-800">Particulars</h3>
                    </div>

                    {/* Content Row */}
                    <div className="bg-white">
                        {/* Main Text */}
                        <div className="p-6 text-[15px] font-medium text-gray-700 leading-relaxed border-b border-gray-200">
                            Compliance of the Judgement passed by Hon'ble National Green Tribunal, New Delhi dated 22/12/2016 in Application No. 199/2014 filed by Almitra H. Patel v/s Union of India & Ors.
                        </div>

                        {/* Links Row */}
                        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
                            <a
                                href="#"
                                className="flex-1 p-4 text-[14px] text-[#0085E2] font-medium hover:bg-blue-50 transition-colors flex items-center justify-center md:justify-start hover:underline"
                            >
                                Notification
                            </a>
                            <a
                                href="#"
                                className="flex-1 p-4 text-[14px] text-[#0085E2] font-medium hover:bg-blue-50 transition-colors flex items-center justify-center md:justify-start hover:underline"
                            >
                                Contents of Judgement
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NgtOrder;
