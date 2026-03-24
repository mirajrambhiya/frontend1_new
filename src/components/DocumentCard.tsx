import { Eye, Download, FileText } from 'lucide-react'

interface DocumentCardProps {
    document: {
        id: number | string;
        title: string;
        department?: string;
        date?: string;
        pdfUrl?: string;
    };
    wide?: boolean; // When true, card takes more width (for 2-column layouts)
}

function DocumentCard({ document, wide = false }: DocumentCardProps) {
    const cardWidth = wide ? 'w-full md:min-w-[400px] md:max-w-[400px]' : 'w-full md:min-w-[400px] md:max-w-[400px]';

    return (
        <div className={`${cardWidth} bg-white border border-gray-200 rounded-[20px] md:rounded-[32px] p-4 md:p-5 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)]`}>
            {/* Header with icon and title */}
            <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0085E2]/10 rounded-[16px] md:rounded-[20px] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#0085E2]" />
                </div>
                <h4 className="text-[12px] md:text-[14px] font-semibold text-gray-800 leading-tight">
                    {document.title}
                </h4>
            </div>

            {/* Meta info - only show if department or date exists */}
            {(document.department || document.date) && (
                <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-[12px] text-gray-500 mt-2 md:mt-3">
                    {document.department && (
                        <span className="font-medium">{document.department}</span>
                    )}
                    {document.date && (
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                            </svg>
                            {document.date}
                        </span>
                    )}
                </div>
            )}

            {/* Spacer to push buttons to bottom */}
            <div className="flex-grow mt-2 md:mt-0" />

            {/* Action buttons - always at bottom */}
            <div className="flex gap-2 md:gap-3 mt-3">
                <button className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-[13px] text-gray-600 border border-gray-200 rounded-[16px] md:rounded-[21px] hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    View
                </button>
                <button className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-[13px] text-white bg-[#0085E2] rounded-[16px] md:rounded-[21px] hover:bg-[#0070C0] transition-colors cursor-pointer">
                    <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Download PDF
                </button>
            </div>
        </div>
    );
}

export default DocumentCard;