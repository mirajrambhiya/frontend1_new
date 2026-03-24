import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';

const standingorders = "/assets/standingorders.svg";

// Table Data
interface TableRow {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const tableData: TableRow[] = [
    { caseNo: "PIL No.17/2011", orderDate: "07/02/2013", particulars: "Nicholos H.Almeida V/s.State of Maharashtsra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "07/02/2013", particulars: "Nicholos H.Almeida V/s.State of Maharashtsra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "24/01/2013", particulars: "Nicholos H.Almeida V/s.State of Maharashtsra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "10/01/2013", particulars: "Nicholos H. Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "03/01/2013", particulars: "Nicholos H. Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "13/12/2012", particulars: "Nicholos H. Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL.No.17/2011", orderDate: "20/11/2012", particulars: "Nicholos H.Almeida V/s State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No17/2011.", orderDate: "05/07/2012", particulars: "Nicholos H.Almeida V/s State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "11/06/2012", particulars: "Nicholos H.Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "11/05/2012", particulars: "Nicholos H.Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "10/05/2012", particulars: "Nicholos H.Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "30/03/2012", particulars: "Nicholos H. Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "01/03/2012", particulars: "Nicholos H. Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "31/01/2012", particulars: "Nicholos H. Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "23/01/2012", particulars: "Nicholos H. Almeida V/s State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No. 17/2011", orderDate: "22/12/2011", particulars: "Nicholos H. Almeida V/s. State of Maharashtra and Others", link: "#" },
    { caseNo: "PIL No.17/2011", orderDate: "01/12/2011", particulars: "Nicholos H.Almeida V/s.State of Maharashtra and Others", link: "#" },
];

const HighCourtOrders = () => {
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
                                    CETP- HIGH COURT ORDERS
                                </h1>

                                <div className="border border-gray-200 rounded-[35px] overflow-hidden">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                                <th className="py-6 px-6 text-left w-64">
                                                    <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white text-gray-700">
                                                        Case No.
                                                    </div>
                                                </th>
                                                <th className="py-6 px-6 text-left w-48">
                                                    <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white text-gray-700">
                                                        Order Date
                                                    </div>
                                                </th>
                                                <th className="py-6 px-6 text-left">
                                                    <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold bg-white text-gray-700">
                                                        Particulars
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {tableData.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-5 px-8 text-[13px] text-gray-700 font-medium">
                                                        {row.caseNo}
                                                    </td>
                                                    <td className="py-5 px-8 text-[13px] text-gray-700 font-medium whitespace-nowrap">
                                                        {row.orderDate}
                                                    </td>
                                                    <td className="py-5 px-8 text-[13px] font-medium">
                                                        <a
                                                            href={row.link}
                                                            className="text-[#0085E2] hover:text-[#006bb3] hover:underline transition-colors cursor-pointer"
                                                        >
                                                            {row.particulars}
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HighCourtOrders;
