import PageBanner from "../../../components/PageBanner";
import Sidebar from "../../../components/Sidebar";

const FlyAshNotificationImplementation: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <Sidebar activeItem="Fly Ash" />

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h1 className="text-[24px] font-bold text-gray-900">
                                        Fly Ash Notification Implementation
                                    </h1>
                                </div>

                                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {/* Introduction Section */}
                                    <div className="prose prose-gray max-w-none">
                                        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                                            The ministry of Environment & forest Government of India has issued Notification NO. S.O. 763(E), Dated 14.09.1999 & the same is amended on 27.08.2003, regarding the utilization of fly ash/Bottom ash generated from Coal/Lignite based thermal power plant, to protect the environment, conserve top soil & prevent the dumping & disposal of fly ash discharged from coal or lignite based thermal power plants. Further there is need for restricting the excavation of top soil for manufacture of bricks & promoting the utilization of fly ash in the manufacture of building material & in construction activity within the radius of 100 Km from coal or lignite based thermal power plants.
                                        </p>
                                        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                                            As per the above said notification fly ash/bottom ash generated from lignite/coal based thermal power plants in to the brick manufacturing & other construction activities all manufactures of clay bricks, or tiles or blocks for use i.e. construction activities, within 100 KM radius from lignite/coal based thermal power station are required to mix at least 25% of ash with soil on weight to weight basis.
                                        </p>
                                        <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
                                            Every construction agency engaged in the construction of buildings within a radius of fifty to one hundred kilometers from coal or lignite based thermal power plants shall use fly ash bricks or blocks or tiles or clay fly ash bricks or cement fly ash bricks or blocks or similar products or combination aggregate of them in such construction as per the following minimum percentage (by volume) of the total bricks, blocks & tiles, as the case may be, used in each construction project, namely:-
                                        </p>
                                    </div>

                                    {/* Percentage Milestones - Within 50-100 km */}
                                    <div className="bg-blue-50 rounded-xl p-6">
                                        <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Minimum percentage within 50-100 km radius:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                                                <span className="text-[#0085E2] font-bold">(i)</span>
                                                <span className="text-[14px] text-gray-700">25 per cent by 31st August 2004;</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                                                <span className="text-[#0085E2] font-bold">(ii)</span>
                                                <span className="text-[14px] text-gray-700">50 per cent by 31st August 2005;</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                                                <span className="text-[#0085E2] font-bold">(iii)</span>
                                                <span className="text-[14px] text-gray-700">75 per cent by 31st August 2006; and</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                                                <span className="text-[#0085E2] font-bold">(iv)</span>
                                                <span className="text-[14px] text-gray-700">100 per cent by 31st August 2007;</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Construction within 50 km */}
                                    <div className="prose prose-gray max-w-none">
                                        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                                            In respect of construction of buildings within a radius of 50 kilometers from a coal or lignite based thermal power plants the following minimum percentage (by volume) of use of bricks, blocks and tiles shall apply:-
                                        </p>
                                    </div>

                                    <div className="bg-green-50 rounded-xl p-6">
                                        <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Minimum percentage within 50 km radius:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                                                <span className="text-green-600 font-bold">(i)</span>
                                                <span className="text-[14px] text-gray-700">50 per cent by 31st August 2004;</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
                                                <span className="text-green-600 font-bold">(ii)</span>
                                                <span className="text-[14px] text-gray-700">100 per cent by 31st August 2005;</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Implementation Steps Section */}
                                    <div className="mt-8">
                                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Regarding the implementation of said notification Maharashtra Pollution Control Board has taken following steps:
                                            </h3>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <tbody>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">1.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            Identified the Brick Kilns located within 100 Km radius from Coal/Lignite based thermal power plants with the help of revenue department.
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">2.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            Concern District Collector have been asked through DO letters dated 27.01.2003 & 11.07.2003, to initiate action against the defaulting brick kilns by way of canceling lease agreement.
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">3.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            News paper advertisement has been given.
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">4.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            Co-ordination meeting of all head of thermal power plants with Hon'ble chairman, Member Secretary & Senior Officers of the Board.
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">5.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            As per the provisions of the rules Regional officers of the Board submitted proposals to the District Collectors to take action against non complying Brick Kilns.
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">6.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            As per the directions of Hon'ble High Court Delhi in his order dated 05.08.2004 Regional Officers of the Board has issued closure directions to those brick Kilns those who are not complying with the guide lines of the above said notification.
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">7.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            The Board has filled Three Nos of affidavits regarding steps taken to be take & difficulties expressed by Brick manufacturing association.
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">8.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            One Brick Kiln Manufacturing association approached the Environment Minister, Govt. of Maharashtra and expressed their difficulties. Accordingly, Hon'ble Minister of Environment, Govt. of Maharashtra called meeting on 24/11/2004. In the meeting it was decided to consider the request of the brick manufacturers and allow them to restart their manufacturing activity subject to some conditions:
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 text-[14px] text-gray-500 font-medium w-12 align-top">9.</td>
                                                        <td className="py-4 px-4 text-[14px] text-gray-700 leading-relaxed">
                                                            After due considerations it was decided to allow restarting of brick kilns subject to following conditions:
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Sub-conditions */}
                                        <div className="ml-8 mt-4 bg-gray-50 rounded-xl p-6">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-[#0085E2] font-medium">i.</span>
                                                    <span className="text-[14px] text-gray-700">The brick kiln owner shall submit an undertaking to revenue authorities on Stamp paper of Rs. 100/- with copy to MPCB for utilization of fly ash in proportion as per the notification.</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="text-[#0085E2] font-medium">ii.</span>
                                                    <span className="text-[14px] text-gray-700">The permission initially be granted for one year.</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="text-[#0085E2] font-medium">iii.</span>
                                                    <span className="text-[14px] text-gray-700">The permission may be without prejudice to the action taken in the Court matter.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Section */}
                                    <div className="mt-8">
                                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Status for the Year 2004-2005 of Fly Ash Utilizations By Coal / Lignite based Thermal Power Plants Located in Maharashtra.
                                            </h3>
                                        </div>

                                        <div className="prose prose-gray max-w-none">
                                            <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                                                In Maharashtra State Electricity Board is playing Major roll in producing Electricity. Maharashtra State Electricity Board has seven power generating stations. There are two private Coal / lignite based thermal power plants in Maharashtra i.e Tata Power Company Chembur, Mumbai & Reliance Energy, Dahanu, Dist. – Thane. The Details of Thermal Power Plants, its Fly ash generation & utilization is shown in <a href="#" className="text-[#0085E2] hover:underline font-medium">annexure-I</a>
                                            </p>
                                            <p className="text-[15px] text-gray-700 leading-relaxed">
                                                Action plan of fifteen Years of each Coal / lignite based Thermal Power plants are shown in <a href="#" className="text-[#0085E2] hover:underline font-medium">annexure-II</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlyAshNotificationImplementation;
