import { Calendar } from 'lucide-react';

interface GalleryCardProps {
    images: string[]; // Expecting exactly 3 images for the collage
    title: string;
    date: string;
    onClick?: () => void;
}

function GalleryCard({ images, title, date, onClick }: GalleryCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-[24px] md:rounded-[32px] p-3 md:p-4 border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
            {/* Image Collage Section - 1 Image */}
            <div className="h-[180px] md:h-[220px] mb-4 md:mb-5 overflow-hidden rounded-[16px] md:rounded-[20px]">
                <img
                    src={images[0]}
                    alt="Gallery Thumbnail"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content Section */}
            <div className="px-1">
                <h3 className="text-[16px] font-bold text-gray-900 mb-4 leading-snug">
                    {title}
                </h3>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryCard;
