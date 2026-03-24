import AboutUsBanner from "../AboutUs";
import Banner from "../navbanner-aboutus";
const mpcblogo = "/assets/mpcblogo.png";

// 9 colors that cycle for annual report cards
const reportColors = [
    "bg-green-500",
    "bg-cyan-500",
    "bg-red-400",
    "bg-green-400",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-400",
    "bg-gray-100",
    "bg-lime-500",
];

// Generate annual report years from 2014-15 to 2025-26 (most recent first)
const generateReportCards = () => {
    const startYear = 2002;
    const endYear = 2025;
    const cards: any[] = [];

    for (let year = endYear; year >= startYear; year--) {
        const yearString = `${year}-${(year + 1).toString().slice(-2)}`;
        const colorIndex = (endYear - year) % reportColors.length;
        cards.push({
            id: year,
            year: yearString,
            color: reportColors[colorIndex],
        });
    }

    return cards;
};

const reportCards = generateReportCards();

// Annual Report Card component
const ReportCard = ({ year, color }: { year: string; color: string }) => {
    const isLight = color === "bg-gray-100";
    const textColor = isLight ? "text-gray-700" : "text-white/90";
    const borderColor = isLight ? "border-green-500" : "border-yellow-400";

    return (
        <div className={`${color} ${borderColor} border-4 rounded-2xl p-6 flex flex-col items-center justify-between h-[310px] cursor-pointer hover:shadow-lg transition-shadow duration-200 w-[262px]`}>
            {/* Header */}
            <p className={`text-[12px] font-semibold ${textColor} text-center tracking-wide`}>
                MAHARASHTRA POLLUTION CONTROL BOARD
            </p>

            {/* Emblem */}
            <div className={`${textColor} w-16 h-16 flex items-center justify-center`}>
                <img src={mpcblogo} alt="MPCB Logo" className="w-full h-full" />
            </div>

            {/* Annual Report Year */}
            <div className={`text-center ${textColor}`}>
                <p className="text-[11px] font-medium">ANNUAL REPORT</p>
                <p className="text-[13px] font-bold">{year}</p>
            </div>
        </div>
    );
};

function AnnualReport() {
    return (
        <div>
            <AboutUsBanner />
            <Banner bannerSection="annualreport" />

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-8 font-family-helvetica">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">Annual Report</h1>

                {/* Annual Report Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                    {reportCards.map((card) => (
                        <ReportCard key={card.id} year={card.year} color={card.color} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AnnualReport;