import React from "react";
import PageBanner from "../../../components/PageBanner";
import Sidebar from "../../../components/Sidebar";
import DocumentCard from "../../../components/DocumentCard";

const EndOfLifeVehicles: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <Sidebar activeItem="End-of-Life Vehicles" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h1 className="text-[#2B2B2B] text-[32px] font-bold mb-8">
                                    End-of-Life Vehicles
                                </h1>

                                <div className="grid grid-cols-2 gap-4">
                                    <DocumentCard
                                        document={{
                                            id: 1,
                                            title: "CPCB Guideline for Management of End-of-Life Vehicles",
                                            date: "21/01/2026",
                                            pdfUrl: "#"
                                        }}
                                    />
                                    <DocumentCard
                                        document={{
                                            id: 2,
                                            title: "Environment Protection (End-of-Life Vehicles) Rules 2025",
                                            date: "21/01/2026",
                                            pdfUrl: "#"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EndOfLifeVehicles;
