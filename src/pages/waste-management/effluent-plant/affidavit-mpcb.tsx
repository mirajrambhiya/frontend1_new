import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';

const standingorders = "/assets/standingorders.svg";

const affidavitItems = [
    "Affidavits on 27/02/2013",
    "Affidavits on 03/01/2013",
    "Affidavits on 19/01/2013",
    "Affidavits on 19/01/2013",
    "Affidavits on 14/01/2013",
    "Affidavits on 05/01/2013",
    "Affidavits on 12/08/2011",
    "Affidavit on 15/12/2011- Part-A",
    "Affidavit on 15/12/2011- Part-B",
    "Affidavit on 05/01/2012",
    "Affidavit on 13/01/2012",
    "Affidavit on 22/01/2012",
    "Affidavit on 30/04/2012",
    "Affidavit on 04/07/2012 -Part-A",
    "Affidavit on 04/07/2012 -Part-B",
    "Affidavit on 04/07/2012 -Part-C",
    "Affidavit on 04/07/2012 -Part-D",
    "Affidavit on 29/08/2012",
    "Affidavit on 12/12/2012",
    "Affidavit on 27/12/2012"
];

const AffidavitMPCB = () => {
    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            <PageBanner title="Waste Management" image={standingorders} />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Common Effluent Treatment Plant" />

                        {/* Content */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h1 className="text-[24px] font-bold text-gray-900 uppercase mb-8 border-b border-gray-200 pb-4">
                                    AFFIDAVIT FILED BY M.P.C.BOARD IN PIL NO.17/2011
                                </h1>

                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <div className="flex flex-col divide-y divide-gray-100">
                                        {affidavitItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="px-6 py-4 hover:bg-gray-50/80 transition-colors duration-200"
                                            >
                                                <a
                                                    href="#"
                                                    className="text-[14px] font-medium text-[#0085E2] hover:text-[#006bb3] hover:underline flex items-center gap-3 transition-colors"
                                                >
                                                    {item}
                                                </a>
                                            </div>
                                        ))}
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

export default AffidavitMPCB;
