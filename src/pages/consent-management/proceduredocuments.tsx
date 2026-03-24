import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Document data from the reference
const procedureDocuments = [
    { id: 1, title: "REGISTRATION AND RENEWAL OF E-WASTE RECYCLER THROUGH ONLINE EPR PORTAL UNDER E-WASTE MANAGEMENT RULE 2022" },
    { id: 2, title: "REGISTRATION AND RENEWAL OF PRODUCERS AND IMPORTERS OF ELECTRICAL AND ELECTRONIC EQUIPMENT THROUGH ONLINE EPR PORTAL UNDER E-WASTE MANAGEMENT RULE 2022" },
    { id: 3, title: "REGISTRATION AND RENEWAL OF PRODUCERS THROUGH ONLINE PORTAL UNDER BATTERY WASTE MANAGEMENT RULES, 2022" },
    { id: 4, title: "REGISTRATION AND RENEWAL OF RECYCLERS THROUGH THE ONLINE EPR PORTAL UNDER BATTERY WASTE MANAGEMENT RULES 2022" },
    { id: 5, title: "REGISTRATION OF MICRO & SMALL PRODUCERS, SELLERS, MANUFACTURER & IMPORTER OF RAW MATERIALS UNDER PWM RULES 2024" },
    { id: 6, title: "REGISTRATION OF PLASTIC WASTE PROCESSORS UNDER PWM RULES 2024" },
    { id: 7, title: "REGISTRATION OF PRODUCER, IMPORTER AND BRAND OWNERS UNDER PWM RULES 2024" },
    { id: 8, title: "SERVICE AUTHORIZATION OF TRADER UNDER H OWM RULES" },
    { id: 9, title: "SERVICE RENEWAL OF AUTHORIZATION OF TRADER UNDER H OWM RULES" },
];

const ITEMS_PER_PAGE = 6; // 3 columns x 2 rows

function ProcedureDocuments() {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination calculations
    const totalPages = Math.ceil(procedureDocuments.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentDocuments = procedureDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-0 md:px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] md:rounded-t-[48px] overflow-hidden">
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
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8">
                                Procedure & Documents
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-8 md:py-12">
                <div className="w-full max-w-[1282px] px-4">
                    {/* Document Cards Grid - Responsive columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {currentDocuments.map((doc) => (
                            <DocumentCard key={doc.id} document={doc} wide={false} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-100">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${currentPage === 1
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                    }`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                        ${currentPage === page
                                            ? 'bg-[#0085E2] text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${currentPage === totalPages
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                    }`}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default ProcedureDocuments;
