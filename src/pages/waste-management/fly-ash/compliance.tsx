
import React from 'react';
import PageBanner from "../../../components/PageBanner";
import Sidebar from "../../../components/Sidebar";

const FlyAshCompliance: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Waste Management" />

                        {/* Content */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h1 className="text-[24px] font-bold text-gray-900 uppercase leading-snug">
                                        COMPLIANCE OF ORDER PASSED BY HON'BLE HIGH COURT OF JUDICATURE AT DELHI DATED 25TH AUGUST, 1999 (IN PIL NO.2145/1999)
                                    </h1>
                                </div>

                                <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed text-justify">
                                    <p>
                                        The Ministry of Environment & Forests, Govt. of India has issued Notification bearing No.S.O.763 (E), dated 14th September, 1999 in pursuance of the Order passed by the Hon’ble High Court of Judicature at Delhi dated 25th August, 1999 in C.W.P.No.2145/1999 filed by the Centre for Public Interest Litigation, Delhi v/s Union of India, for ensuring the use of specified quantity of ash. The Notification prescribes the utilization of ash by Thermal Power Plants and it also provides that all Coal or Lignite based Thermal Power Plants shall utilize ash generated in power plants by making it available, for at least 10 years from the date of publication of Notification without any payment or any other consideration for the purpose of manufacturing ash-based products such as cement, concrete blocks, bricks, panels or any other material or for the construction of roads, embankments, dams, dykes or for any other construction activity. If such a Thermal Power Plant started with the environmental clearance, it shall utilize ash within a period of 9 years from the date of publication of the Notification, phase out the dumping & disposal of fly ash on land in accordance with the plan. Such plan shall provide for 30% of the fly ash utilization within 3 years from the date of publication of the Notification with further increase in utilization by at least 10% points every year progressively for the next six years till end of 9th year. In case of Thermal Power Plants established prior to Environment Impact Assessment Notification, 1994, i.e. without environment clearance, the fly ash shall be utilized within a period of 15 years from the date of publication of the Notification with an Action Plan to be drawn up by the power plants, which shall provide for 20% of the fly ash utilization within 3 years from the date of publication of the Notification, with further increase in utilization every year progressively for the next 12 years to enable the utilization of entire fly ash generated in the power plant. The Notification issued by the MoEF dated 14/9/99 is reproduced for perusal.
                                    </p>

                                    <p>
                                        The Regional Officers of the Maharashtra Pollution Control Board had issued directions of closure to the brick kilns manufacturers in pursuance of the order passed by the Hon’ble High Court of Judicature at Delhi for restricting the excavation of top soil for manufacture of bricks and promoting the utilization of fly ash in the brick klins manufacturing activity. After issuance of directions, a number of brick kilns manufacturers and their Association have approached Hon’ble Environment Minister, Maharashtra State, pointing out their difficulties in utilization of fly ash for the above activity. In this regard, Hon’ble Environment Minister conveyed a Meeting on 24/11/2004. During the said meeting, the Principal Secretary, Environment Deptt., Govt. of Maharashtra and officers of the Maharashtra Pollution Control Board made it clear that it is obligatory on the part of the brick kiln manufactures to utilize fly ash in brick manufacturing as per Notification.
                                    </p>

                                    <p>
                                        The Brick kilns Manufacturers Association has requested to communicate their practical difficulties to the Central Govt. for necessary consideration and also agreed to comply with the Notification. They have requested to grant permission to restart their manufacturing activity. After due consideration, it was decided that while granting permission, the brick kilns manufacturer should comply with the following conditions :
                                    </p>

                                    <div className="pl-4 space-y-2">
                                        <p>1) The brick kilns owners shall submit an undertaking to Revenue Authorities on Rs.100/- stamp paper, with a copy to MPCB for utilizing the fly ash in required proportions as per the Notification.</p>
                                        <p>2) The permission may initially be for one year only.</p>
                                        <p>3) The permission may be without prejudice to the action taken in the court matter.</p>
                                    </div>

                                    <p>
                                        The Regional Officers have issued conditional orders to restart bricks kilns manufacturing activities subject to the above conditions. The District Collectors are requested to issue/renew licences to those brick kilns manufacturers only, which have complied with the conditional order/s, ensuring compliance of the Fly Ash Notification issued by the Ministry of Environment & Forests, Govt.of India dated 14/9/99 & 27/8/2003 as well as the order passed by Hon'ble High Court of Judicature at Delhi in the Public Interest Litigation No.2145/99 dated 5/8/2004.
                                    </p>

                                    <p>
                                        Recently Jalan Consumers Co-operative Society Ltd has filed one Public Interest Litigation before Hon'ble High Court of Judicature Bench at Aurangabad bearing No.5931/2004 , challenging tendering done by Bhusawal Thermal Power Station and on the ground of improper disposal of Fly Ash, causing pollution. MPCB has filed its affidavit. A copy of affidavit filed by MPCB is reproduced hereunder.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlyAshCompliance;
