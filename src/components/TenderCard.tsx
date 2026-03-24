import { FileText } from 'lucide-react';

interface DocumentLink {
    text: string;
    url?: string;
}

interface TenderCardProps {
    title: string;
    isNew?: boolean;
    documents: DocumentLink[];
}

function TenderCard({ title, isNew = false, documents }: TenderCardProps) {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            {/* Header with Title and New Badge */}
            <div className="flex items-start gap-3 mb-4">
                <h3 className="text-[14px] md:text-[15px] font-bold text-gray-800 leading-snug flex-1">
                    {title}
                </h3>
                {isNew && (
                    <span className="shrink-0 animate-pulse inline-flex items-center justify-center px-2 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                        New
                    </span>
                )}
            </div>

            {/* Documents List */}
            <div className="flex flex-col gap-3">
                {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between group cursor-pointer">
                        <span className="text-[13px] text-[#0085E2] font-medium group-hover:underline group-hover:text-[#006BB3] transition-colors">
                            {doc.text}
                        </span>

                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-[#0085E2]/10 transition-colors">
                            <FileText className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2] transition-colors" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TenderCard;
