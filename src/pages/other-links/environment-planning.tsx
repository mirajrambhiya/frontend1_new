import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

const sidebarTabs = [
    "Zoning Atlas For Sitting Of Industries",
    "Spatial Environmental Planning Programme",
    "District Environmental Atlas of Pune."
];

// Reusable Paginated Section Component
const PaginatedSection = ({ title, documents }: { title: string, documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = 4; // 2 rows * 2 columns

    const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

    const currentDocuments = isViewAll
        ? documents
        : documents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const toggleViewAll = () => {
        setIsViewAll(!isViewAll);
        setCurrentPage(1);
    };

    const getPageNumbers = (curr: number, total: number) => {
        const pages: any[] = [];
        if (total <= 3) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            if (curr <= 2) pages.push(1, 2, 3, '...', total);
            else if (curr >= total - 1) pages.push(1, '...', total - 2, total - 1, total);
            else pages.push(1, '...', curr - 1, curr, curr + 1, '...', total);
        }
        return pages;
    };

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#00A3FF] pl-3">
                    {title}
                </h3>
                {documents.length > ITEMS_PER_PAGE && (
                    <button
                        onClick={toggleViewAll}
                        className="px-4 py-2 text-sm font-medium text-[#00A3FF] bg-blue-50 hover:bg-[#00A3FF] hover:text-white cursor-pointer rounded-full transition-all duration-300"
                    >
                        {isViewAll ? "Show Less" : "View All"}
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentDocuments.map((doc) => (
                    <DocumentCard
                        key={doc.id}
                        document={doc}
                        wide={false}
                    />
                ))}
            </div>

            {!isViewAll && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    {currentPage > 1 && (
                        <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                    )}
                    {getPageNumbers(currentPage, totalPages).map((page, index) => (
                        page === '...' ? (
                            <span key={`ellipsis-${index}`} className="px-2 text-gray-400 text-sm">...</span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page as number)}
                                className={`w-8 h-8 flex items-center justify-center rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer
                                    ${currentPage === page
                                        ? 'bg-[#00A3FF] text-white shadow-md shadow-blue-200 scale-110'
                                        : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                    {currentPage < totalPages && (
                        <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

const puneDEADocuments = [
    { id: 'pdea1', title: "Pune DEA Report 2008 - Contents", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea2', title: "Pune DEA Report 2008 - Chapter1", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea3', title: "Pune DEA Report 2008 - Chapter2", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea4', title: "Pune DEA Report 2008 - Chapter3", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea5', title: "Pune DEA Report 2008 - Chapter4", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea6', title: "Pune DEA Report 2008 - Chapter5", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea7', title: "Pune DEA Report 2008 - Chapter6", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea8', title: "Annexure I - Supporting Data for DEA of Pune", date: "2008-01-01", pdfUrl: "#" },
    { id: 'pdea9', title: "Annexure II - Maps IN Environmental Atlas Of Pune.", date: "2008-01-01", pdfUrl: "#" }
];

function EnvironmentPlanning() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Related Topics & Information - Environmental Planning
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarTabs.map((tab) => {
                                    const isActive = selectedTab === tab;
                                    return (
                                        <div
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 w-full">
                            <div className="rounded-[24px] p-0 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-6 uppercase">
                                    {selectedTab}
                                </h2>

                                <div className="text-[14px] text-gray-700 leading-relaxed space-y-6">
                                    {selectedTab === "Zoning Atlas For Sitting Of Industries" ? (
                                        <>
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">An Environment Management Tool</h3>
                                                <p>
                                                    Industrial development is an essential evil in the development of country like India. Industrialization results in environmental pollution by generating hazardous waste and has increases the risk to the Environment. The human settlements, the forests, water bodies and Air are more sensitive to Pollution and may degrade due to pollution. Therefore, Environmental planning is necessary to protect these sensitive areas.
                                                </p>
                                                <p>
                                                    Presently a proposed site for establishing an Industry is cleared by regulatory bodies by setting discharging / emission standards. However, this does not guarantee industries emit no Pollution. Also Pollution Control equipment's used in an industry to meet the standards prescribed by the Pollution Control Board may not perform all the time or at its desired level of efficiency.
                                                </p>
                                                <p>
                                                    It is the site that ultimately determines which water bodies might get affected by water pollution by an Industry so as which emission may affect Air quality. As a result nature balance may be harmed.
                                                </p>
                                                <p>
                                                    To overcome this Problem in future the MPCB in collaboration with Central Pollution control Board & GTZ (German Technical co operation) Germany are preparing district wise "Zoning Atlas for Sitting of Industries" in the state with financial assistance from world Bank under Environmental Management Capacity Building Project.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">Zoning Atlas</h3>
                                                <p>
                                                    The Zoning Atlas for sitting of Industries, zones and classifies the environment in the district and presents the Pollution receiving potentials of various sites/zones and suggest the possible alternate sites for industry through easy to read maps.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">Objectives</h3>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>To Zone and classify the environment in a district.</li>
                                                    <li>To identify locations for sitting of industries and</li>
                                                    <li>To identify locations for sitting of industries and To identify industries suitable to the identified sites</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">Essentials</h3>
                                                <p>
                                                    The zoning atlas considers only the environmental aspects. For sitting of industries, both the economic factors, such as availability of raw materials, market for finished product, water supply, electricity labor availability etc and the environmental factors are to be considered. Assuming that the industry is the best judge in identifying the sites best suitable from economic considerations. The industry may subsequently evaluate the site suitable from the both economic and environmental considerations. Non-consideration of environmental factors maximizes profits over a short period but consideration of environmental factors minimizes liabilities over a longer period. Due to increasing pollution, the environmental standards are being made more and more stringent with time.
                                                </p>
                                                <p>
                                                    The cost of pollution control investments in the industry are tremendously increasing, some times posing a great burden on the industry and adding to the risks of closer by the regulatory authorities Hence, the preparation of the zoning Atlas based on environmental considerations is relevant and justified.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">Utility</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Provides a ready-reckoner for best site and relevant environmental information</li>
                                                    <li>Makes decision making process simpler, faster, realistic, transparent and reliable.</li>
                                                    <li>Provides a basis for incorporating environmental aspects in to physical (land use) planning process that is lacking in the country:</li>
                                                    <li>Helps in planning cost-effective pollution control measures and programs:</li>
                                                    <li>Helps an entrepreneur in readily finding out the location best suited to site an industry thereby saving time, efforts, investment and risk instead of heading for an unknown site, conducting environmental impacts assessment and awaiting clearance by the regulatory authorities</li>
                                                    <li>Helps in developing infrastructures facilities, such as roads, water supply, electricity etc. and common waste treatment and disposal facilities;</li>
                                                    <li>Helps check additional pollution in the areas already over-stressed with pollution;</li>
                                                    <li>Ensure that pollution potential of an industry is made compatible with the local conditions of the sites</li>
                                                    <li>Ensure that an industry, with high pollution potential desiring to be located, in a high risk area, will have to adopt clean technologies for manufacturing process so as to prevent generation of waste / pollution there by making it compatible with the receiving environment.</li>
                                                    <li>Helps in increasing awareness of the public on type of industries and nature of pollution anticipated in the neighborhood well in advance; and</li>
                                                    <li>Helps in achieving sustainable development</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">Zoning Atlas a Tool for Decision-making</h3>
                                                <p>
                                                    The Zoning Atlas for sitting of industries helps in decision-making at various levels including the central & State Government, the industry, the regulatory authorities and the general public. The types of decisions that can be taken at various levels are given below.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">The Government</h3>
                                                <ul className="list-decimal pl-5 space-y-2">
                                                    <li>Notification of industrial areas</li>
                                                    <li>Decision on the type of industrial development. If the environmental consideration are out-weighed by the economic consideration for sitting industry, the government will know the environmental costs to be borne, risk involved and the term liabilities</li>
                                                    <li>Restriction of growth of certain industries in specific areas, and</li>
                                                    <li>Liberalizing location of certain industries & permitting them anywhere in a region / district.</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">The Industry</h3>
                                                <p>
                                                    For location of an industry, economic factors, such as availability of raw materials, water supply, electricity, labor etc. and the environmental factors are to be considered. Although industry knows the best suitable location from economic considerations, it may not be aware of its implications from environmental protection angle.
                                                </p>
                                                <p>
                                                    From the zoning atlas, an industry can find out the suitable location in various Districts of a state and then work out feasibility or economic viability of commencing its operations in these locations. Accordingly, a decision can be taken on best suitable location.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">The Regulatory authorities</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Decision on the suitability of an industry to a particular site without losing much time in conducting of environmental assessment;</li>
                                                    <li>Notification of site specific standards;</li>
                                                    <li>Provision of common pollution treatment and disposal facilities;</li>
                                                    <li>Plan well in advance pollution monitoring and control programs; and.</li>
                                                    <li>Plan in advance requirements of manpower, monitoring instruments, laboratory facilities, budget etc. in the regional / zonal offices of the State Pollution Control Boards for environmental regulations.</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">The Public</h3>
                                                <p>
                                                    The public through the Zoning Atlas will know the locations of industries that are likely to come up and the anticipated pollution in their neighborhood. They can decide on the acceptability of such a development even before an industry actual comes up. This eliminates apprehension against forcing pollution on them.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800">Methodology for Preparation of Zoning Atlas</h3>
                                                <p>
                                                    The Zoning, for sitting of industry is made using GIS applications through overlaying of thematic maps and by the method of elimination of areas unsuitable for industrial activity due to different environmental conditions of sensitivity. The methodology includes identification of the characteristic of the district, mapping of the sensitive Zones that are unsuitable for sitting of industries owing to legal restrictions, physical constraints, social considerations etc., assessing the pollution receiving potential of the District in terms of Air/water (surface/ground) pollution and identification of possible alternate sites suiting to different types of pollution potential. The suitability is based entirely on environmental factors. The scale used for preparation of various maps is 1 : 2,50,000 (1cm = 2.5 km).The procedure for preparing Zoning Atlas for a district is broadly categorized in to six steps, as below :
                                                </p>
                                                <ul className="list-decimal pl-5 space-y-2">
                                                    <li>Preparation of the base map of the district;</li>
                                                    <li>Preparation of the themes, which show the physical features of the district (land use & drainage map, physiography, land capabilities, etc.)</li>
                                                    <li>Identification of areas showing "Sensitive Zones" which are unsuitable for industrial sitting from environmental considerations / guidelines, legal restrictions, social constrains and physical constrains;</li>
                                                    <li>Preparation of theme maps pertaining to Air pollution sensitivity and ground water pollution sensitivity.</li>
                                                    <li>
                                                        Preparation of 'pollution sensitivity maps based on overlay of theme maps and identification of
                                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                                            <li>Possible alternative sites for location of industries based on the sensitivity of the sites to air and water pollution and the risk associated with industrial sitting; and</li>
                                                            <li>Possible solid waste disposal sites based on the sensitivity to ground water pollution.</li>
                                                        </ul>
                                                    </li>
                                                    <li>Listing of the categories of industry suitable to various sites identified and recommending guidelines for sitting of industries and the site clearance procedures.</li>
                                                </ul>
                                            </div>
                                        </>
                                    ) : selectedTab === "Spatial Environmental Planning Programme" ? (
                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-bold text-gray-800 uppercase">SPATIAL ENVIRONMENTAL PLANNING PROGRAMME (SEPP)</h3>
                                                <p>
                                                    The Spatial Environmental Planning Program was conceptualized for ensuring protection of environment and its resources through planned and sustainable development. The program commenced in 1995 with District Wise Environmental Assessment for Siting of Industries. The program although initially catered to Siting of Industries, it was expanded subsequently cater to compilation of environmental information, environmental improvement of Urban Areas / Mining / Tourism / Religious Places etc.
                                                </p>
                                                <p>
                                                    The program was extended under Environmental management Capacity Building Technical Assistance Project funded by the World Bank, during April 1997 to June 2003. The program was coordinated by the Central pollution Control Board. The program activities were executed by various State Pollution Control Boards and other executing agencies. The program received technical assistance from the German Technical Cooperation (GTZ) under the Indo-German Bilateral Program. The program also received support from CDG (now called InVent) of Germany for undertaking Human Resource Development Program (Training programs). Details of the activities undertaken by the Board are as follows:
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="font-bold text-gray-800">The District Level Zoning Atlas for Siting of Industries:</h4>
                                                <p>
                                                    The study inter relates the sensitivity of environment with the pollution potential of industries, so as to identify sites with pollution potential of industries so as to identify sites with minimal environmental impact / risk.
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="font-bold text-gray-800">District Level Industrial Siting Guidelines:</h4>
                                                <p>
                                                    The District Level Siting Guidelines, clearly bring out information on environmentally sensitive zones / areas to avoided for location of industries or carrying of process or operations to be restricted in the district, potential zones for Siting of air and water polluting industries and carrying process that may be considered for Siting any where in the district, other than Environmentally Sensitive Zones / Areas to be avoided for priority districts. This will help in implementing the District Level Zoning Atlas for Siting of Industries.
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="font-bold text-gray-800">District Environmental Atlas:</h4>
                                                <p>
                                                    The District Environment Atlas will be a compilation of environment related information in the form of maps, texts, and statistical data. It includes maps on General / Physical Features, Surface / Ground Water Features, Environmentally Sensitive Zones, Major Source of Pollution, these Atlas will be 1:2,50,000 scale.
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="font-bold text-gray-800">The State Environmental Atlas:</h4>
                                                <p>
                                                    The State Environmental Atlas will be a compilation of environment related information in the form of maps, texts and statistical data. It includes maps on general features like Administrative boundaries, major settlements, transportation network etc. The physical characteristics of the State include Land Use, Physiography, Land Capability etc., The Surface / Groundwater features includes Drainage Pattern, Use, Quality, Flow and Table etc. Sensitive Zones will cover major source of Pollution and Environmental Sensitive Zones which specifies Biological Diversity, Incompatible Land Uses in the State.
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="font-bold text-gray-800">State-Level Industrial Siting Guidelines:</h4>
                                                <p>
                                                    The State Level Industrial Siting Guidelines will clearly bring out the areas to be avoided and the rules / norms / procedures to be followed to obtain consent to establish.
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="font-bold text-gray-800">Environment Improvement Planning at Religious Places:</h4>
                                                <p>
                                                    The religious places in Maharashtra are mostly located in small cities or on the bank of rivers. The local authority do not have adequate infrastructure to manage the floating population during the festival seasons or religious occasions. Due to huge gathering of people occasionally at small place may put stress on environment causing Air, water, noise and solid waste pollution. Considering seriousness of the problem Board has identified the Religious Places in Maharashtra to make places for Eco-Friendly for visitors.
                                                </p>
                                            </div>

                                            {/* Table */}
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-bold text-gray-800 uppercase">STATUS OF ZONING ATLAS PROJECT IN M.P.C.BOARD)</h3>
                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto">
                                                    <table className="w-full border-collapse min-w-[600px]">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr No</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">PROJECT</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Districts</th>
                                                                <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Status of Project Work</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {/* Row 1 Group */}
                                                            <tr className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top border-r border-gray-100" rowSpan={3}>1.</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-100" rowSpan={3}>Zoning Atlas for sitting of industries</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Ratnagiri</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Completed</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Pune</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Completed</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Aurangabad</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Completed</td>
                                                            </tr>

                                                            {/* Row 2 Group */}
                                                            <tr className="hover:bg-gray-50/50 transition-colors bg-gray-50/30">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top border-r border-gray-100" rowSpan={3}>2.</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-100" rowSpan={3}>District Level Siting Guidelines (DLSG)</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Ratnagiri</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Completed</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50/50 transition-colors bg-gray-50/30">
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Pune</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Completed</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50/50 transition-colors bg-gray-50/30">
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Aurangabad</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Completed</td>
                                                            </tr>

                                                            {/* Row 3 Group */}
                                                            <tr className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top border-r border-gray-100" rowSpan={3}>3</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-100" rowSpan={3}>District Environmental Atlas (DEA)</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Pune</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Completed</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Aurangabad</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">In Progress</td>
                                                            </tr>
                                                            <tr className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Ratnagiri</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">In Progress</td>
                                                            </tr>

                                                            {/* Row 4 */}
                                                            <tr className="hover:bg-gray-50/50 transition-colors bg-gray-50/30">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top border-r border-gray-100">4</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-100">State Environmental Atlas(SEA)</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Maharashtra</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">In Progress</td>
                                                            </tr>

                                                            {/* Row 5 */}
                                                            <tr className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top border-r border-gray-100">5</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-100">State level Industrial Siting Guidelines (SLISGL)</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">-</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">In Progress</td>
                                                            </tr>

                                                            {/* Row 6 */}
                                                            <tr className="hover:bg-gray-50/50 transition-colors bg-gray-50/30">
                                                                <td className="py-4 px-4 text-[13px] text-gray-600 align-top border-r border-gray-100">6</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-100">Environment Improvement Program at Religious places</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">Shani-Shingnapur, Shirdi, Dehu-Alandi</td>
                                                                <td className="py-4 px-4 text-[13px] text-gray-700 align-top">In Progress</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "District Environmental Atlas of Pune." ? (
                                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <PaginatedSection
                                                title="District Environmental Atlas of Pune"
                                                documents={puneDEADocuments}
                                            />
                                        </div>
                                    ) : (
                                        <p>
                                            Content for "{selectedTab}" will be displayed here.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EnvironmentPlanning;
