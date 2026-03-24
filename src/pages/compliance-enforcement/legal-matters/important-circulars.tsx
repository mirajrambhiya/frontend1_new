import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface CircularData {
    date: string;
    department: string;
    circulars: string;
    link: string;
}

const importantCircularsData: CircularData[] = [
    {
        date: "19/01/2013",
        department: "P&L Div.",
        circulars: "Terms of Reference /Mandate of the Committees constituted in compliance of the order passed by the Hon'ble High Court of Judicature at Mumbai in the Writ Petition No. 17/2011 filed by Nicholas Almeida V/s. State ofMaharashtra & Ors.",
        link: "#"
    },
    {
        date: "18/01/2013",
        department: "P&LDiv",
        circulars: "Corrigendum-Clarification in respect of imposition of lapse period consent fee and delayed payment charges in respect of grant of consent/Authorization under various Environmental Law..",
        link: "#"
    },
    {
        date: "14/01/2013",
        department: "P&L Divn.",
        circulars: "Uniform guidelines for obtaining Bank Guarantees from CETPs.",
        link: "#"
    },
    {
        date: "14/01/2013",
        department: "P&L Divn.",
        circulars: "Review meeting regarding performance of CETPs was held in the Head Office of the Board on 21.12.2013.",
        link: "#"
    },
    {
        date: "01/01/2013",
        department: "P&L Divn.",
        circulars: "Writ Petition (Civil) No.657/1995 Research Foundation for Science Technology and Natural Resource Policy.",
        link: "#"
    },
    {
        date: "15/12/2012",
        department: "P&L Divn.",
        circulars: "Procedure for processing of application for grant of Consent to Establish /Operate under the purview of HQ.",
        link: "#"
    },
    {
        date: "05/12/2012",
        department: "P&L Divn.",
        circulars: "Review of imposition of lapse period consent fee and delayed payment charges in respect of grant of consent /Authorisation under various Environmental Law.",
        link: "#"
    },
    {
        date: "01/09/2012",
        department: "Legal",
        circulars: "Amendment-Scheme of auto renewal of Consents based on self-certification.",
        link: "#"
    },
    {
        date: "25/06/2012",
        department: "Legal",
        circulars: "Procedure for assessment of Cess as per the provisions contained in Section 6 of the Water(P&CP) Cess Act, 1977.",
        link: "#"
    },
    {
        date: "19/06/2012",
        department: "Legal",
        circulars: "Validity period for Commissioning of the project in the Consent to Establish.",
        link: "#"
    },
    {
        date: "27/04/2012",
        department: "Legal",
        circulars: "Procedure for Public Consultation for projects falling under para 8(v) of CRZ Notificatin,2011.",
        link: "#"
    },
    {
        date: "11/04/2012",
        department: "Legal",
        circulars: "Review of imposition of Penal Charges 10 times of Consent Fees in respect of Industries directly applying for Consent to Operate without obtaining Consent to Establish and illegally operating the Activity thereby adversely affects environment.",
        link: "#"
    },
    {
        date: "20/03/2012",
        department: "Legal",
        circulars: "Procedure for issurance of refusal/revocation order and reconsideration of cases on the basis of further compliance/ remand back the Appellate Authority/review of those orders by Competent Authority on account of the merit of the case.",
        link: "#"
    },
    {
        date: "01/02/2012",
        department: "Legal",
        circulars: "Order for Constitution of Appellate Committee.",
        link: "#"
    },
    {
        date: "13/12/2011",
        department: "Legal",
        circulars: "Grant of Consent of Sugar, Co-generation, distilleries those are within same premises.",
        link: "#"
    },
    {
        date: "13/12/2011",
        department: "Legal",
        circulars: "Revision of professional charges for appointment of Advocates for defending Board's interest in various Courts of law.",
        link: "#"
    },
    {
        date: "03/12/2011",
        department: "Legal",
        circulars: "Circular on NoCs for Establishment/Expansion of Industrial Units in the CETPs Areas,where the CETPs are not working Satisfactorily",
        link: "#"
    },
    {
        date: "11/10/2011",
        department: "Legal",
        circulars: "RTI order",
        link: "#"
    },
    {
        date: "18/06/2011",
        department: "Legal",
        circulars: "राज्य शासनाचा पर्यावरण अनुमतीबाबतचा दिनांक07/08/1997 चा शासन निर्णय रद्द करण्याबाबत.",
        link: "#"
    },
    {
        date: "31/05/2011",
        department: "Legal",
        circulars: "रेती उत्खननासाठी सक्शन पंप लावण्यासाठी पर्यावरण ना हरकत दाखला मिळणेबाबत.",
        link: "#"
    },
    {
        date: "23/05/2011",
        department: "Legal",
        circulars: "Compliance of Various Conditions imposed by the Competent Authority on the MPCB and the provisions of EIA Notifiction2006 by the Hon'ble High Court of Judicature at Mumbai in the Writ Petition No.7050/2010.",
        link: "#"
    },
    {
        date: "27/04/2011",
        department: "Legal",
        circulars: "Implementation of provisions of Coastal Regulation zone Notification 2011 issued vide S.O.No.19(E) dated 6th January 2011",
        link: "#"
    },
    {
        date: "31/03/2011",
        department: "Legal",
        circulars: "Complaint received from Sub Regional Officer, MPCB Ratnagiri in respect of the ill effects/health impacts being casued due to installation of Mobile Tower.",
        link: "#"
    },
    {
        date: "11/03/2011",
        department: "Legal",
        circulars: "Implementation of Noise Polution (R&C) Rules,2000",
        link: "#"
    },
    {
        date: "03/03/2011",
        department: "Legal",
        circulars: "Guidelines for use of fly ash, bottom ash or pond ash in the manufacture of bricks and other construction activities for utilization of flyash by the Thermal Power Plants",
        link: "#"
    },
    {
        date: "10/02/2011",
        department: "Legal",
        circulars: "Clarification regarding grant of Consent for Industrial Units located in Wardha District.",
        link: "#"
    },
    {
        date: "06/01/2011",
        department: "Legal",
        circulars: "Standing Order- Lapse period consent fee and delayed payment charges from Industries.",
        link: "#"
    },
    {
        date: "04/01/2011",
        department: "Legal",
        circulars: "Misuse of the Trademark / trade name\"Xerox\"",
        link: "#"
    },
    {
        date: "09/12/2010",
        department: "Legal",
        circulars: "Initiating appropriate legal actions against the industries operations or processes including industries Association/CETP generating HW and an Action Plan for securing the compliance of Environmental Norms.",
        link: "#"
    },
    {
        date: "28/04/2010",
        department: "Legal",
        circulars: "Conditions to be imposed in the Consent granted to the Building construction projects.",
        link: "#"
    },
    {
        date: "24/02/2010",
        department: "Legal",
        circulars: "Attendance of Courts for evidence by retired officers of the MPCB.",
        link: "#"
    },
    {
        date: "01/08/2009",
        department: "Legal",
        circulars: "Procedure /Guidelines for exercising powers delegated under section 33A of the Water(prevention & Control of Pollution)Act, 1974 and under 31A of the Air(prevention & Control of Pollution)Act, 1981",
        link: "#"
    },
    {
        date: "13/11/2009",
        department: "Legal",
        circulars: "Emission Standards for Brick Industry- Notification",
        link: "#"
    },
    {
        date: "22/07/2009",
        department: "Legal",
        circulars: "Rule passed by the Hon'ble High Court of Judicature at Mumbai in PIL no.42 of 2009 filed by Digi Koli Samaj. Rahivasi Sangh V/s MPCB & Ors.",
        link: "#"
    },
    {
        date: "23/7/2008",
        department: "Legal",
        circulars: "Processing of applications for Consent to Establish/Operate received from IT/ITES Parks",
        link: "#"
    },
    {
        date: "10/5/2008",
        department: "Legal",
        circulars: "Proposal for approval of maintaining of Consent Passbook by the Green Category of industries, operations or processes.",
        link: "#"
    },
    {
        date: "13/01/1989",
        department: "Legal",
        circulars: "Law Evidance Sample",
        link: "#"
    }
];

const ImportantCirculars = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Important Circulars /Office Orders / Standing Orders" />
            <section className="w-full flex justify-center py-8 md:py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[24px] border border-gray-100 p-4 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-6 md:mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            Legal- Circulars (as on 19/01/2013)
                        </h2>

                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
                            <table className="w-full border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 text-left w-[15%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-gray-50/50">
                                                Date
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[15%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Department
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[70%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Circulars
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {importantCircularsData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-8 text-[13px] text-gray-500 font-medium align-top">
                                                {row.date}
                                            </td>
                                            <td className="py-5 px-4 text-[13px] text-gray-700 font-medium align-top">
                                                {row.department}
                                            </td>
                                            <td className="py-5 px-4 text-[13px] font-medium leading-relaxed align-top">
                                                <a href={row.link} className="text-[#0085E2] hover:underline hover:text-blue-700 transition-colors">
                                                    {row.circulars}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImportantCirculars;
