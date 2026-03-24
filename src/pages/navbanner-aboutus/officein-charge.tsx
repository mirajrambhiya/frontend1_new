import { useState } from 'react';
import AboutUsBanner from '../AboutUs';
import Banner from '../navbanner-aboutus';

// Type definitions
interface TableRow {
  sNo: string;
  department?: string;
  designation: string;
  name?: string;
  email?: string[];
}

interface SubTable {
  subTitle: string;
  data: TableRow[];
}

interface SectionData {
  title: string;
  hasDepartment?: boolean;
  hasMultipleTables?: boolean;
  tables?: SubTable[];
  data?: TableRow[];
}

const OfficeInCharge = () => {
  // Section data - each section has its own table data
  const sectionsData: Record<string, SectionData> = {
    "Chairman Section": {
      title: "Chairman Section",
      data: [
        { sNo: "1", designation: "Chairman", name: "Shri. Siddhesh Ramdas Kadam", email: ["chairman@mpcb.gov.in"] },
      ]
    },
    "Member Secretary Section": {
      title: "Member Secretary Section",
      data: [
        { sNo: "1", designation: "Member Secretary", name: "Shri. M. Devender Singh", email: ["ms@mpcb.gov.in"] }
      ]
    },
    "Head Quarter": {
      title: "Head Quarter",
      hasDepartment: true,
      data: [
        { sNo: "1", department: "Technical", designation: "Assistant Secretary, Technical", name: "Dr. Rajendra Rajput", email: ["ast@mpcb.gov.in"] },
        { sNo: "2", department: "Technical", designation: "Joint Director, Air", name: "Shri. Satish H. Padwal", email: ["jdair@mpcb.gov.in"] },
        { sNo: "3", department: "Technical", designation: "Joint Director, Water", name: "Shri. Jagannath Shankar Salunkhe", email: ["jdwater@mpcb.gov.in"] },
        { sNo: "4", department: "Scientific", designation: "Principal Scientific Officer", name: "Dr. Vishwajeet Ramesh Thakur", email: ["pso@mpcb.gov.in"] },
        { sNo: "5", department: "Technical", designation: "Regional Officer, HQ", name: "Smt. Sneha Digambar Kamble", email: ["rohq@mpcb.gov.in"] },
        { sNo: "6", department: "Technical", designation: "Regional Officer, BMW", name: "Smt. Indira Gaikwad", email: ["robmw@mpcb.gov.in"] },
        { sNo: "7", department: "Accounts / CESS", designation: "CAO", name: "Shri Shyamkumar Rajaram Patil", email: ["cao@mpcb.gov.in"] },
        { sNo: "8", department: "Estate and Materials Department", designation: "Executive Engineer", name: "Shri Bhalchandra Ramdas Jagtap", email: ["ee@mpcb.gov.in"] },
        { sNo: "9", department: "Legal", designation: "Law Officer - 1", name: "Smt. Netra Chaphekar", email: ["lo@mpcb.gov.in"] },
        { sNo: "10", department: "Legal", designation: "Law Officer - 2", name: "Smt. Smita Madhav Khatavkar", email: ["lo1@mpcb.gov.in"] },
        { sNo: "11", department: "Statistical", designation: "Statistical Officer", name: "Shri D.M. Sonawane", email: ["so@mpcb.gov.in"] },
        { sNo: "12", department: "Establishment", designation: "Assistant Secretary, EB", name: "Smt. Neeta Bhorade", email: ["ase@mpcb.gov.in"] },
        { sNo: "13", department: "Establishment", designation: "Administrative Officer", name: "Shri. Pramod Nandgaonkar", email: ["aoeb@mpcb.gov.in"] },
        { sNo: "14", department: "Environmental Information Centre", designation: "Assistant Secretary, Technical", name: "Dr. Rajendra Rajput", email: ["ast@mpcb.gov.in"] },
      ]
    },
    "Field Office": {
      title: "Field Office",
      hasMultipleTables: true,
      tables: [
        {
          subTitle: "1. Regional Office Amravati",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Sanjay Deorao Patil", email: ["roamravati@mpcb.gov.in", "mpcbamravati@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer Amravati-I", name: "Smt. Yogini Balankhe", email: ["sroamravati1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer Amravati-II", name: "Shri. Prashant M. Mehare", email: ["sroamravati2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer Akola", name: "Shri. Mahesh Devrao Bhivapurkar", email: ["sroakola@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "2. Regional Office Chhatrapati Sambhaji Nagar",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Manish Holkar", email: ["rochhatrapatisambhajinagar@mpcb.gov.in", "mpcbchhatrapatisambhajinagar@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer-Chhatrapati Sambhaji Nagar-I", name: "Shri. Achyut Nandavate", email: ["srochhatrapatisambhajinagar1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer-Jalna", name: "Smt. Sindhu Kapare", email: ["srojalna@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Latur", name: "Shri. Parmeshwar Naik", email: ["srolatur@mpcb.gov.in"] },
            { sNo: "v.", designation: "Sub Regional Officer - Nanded", name: "Shri. Suryakant Shinde", email: ["ronanded@mpcb.gov.in"] },
            { sNo: "vi.", designation: "Sub Regional Officer - Parbhani", name: "Shri. Somnath Kurmude", email: ["sroparbhani@mpcb.gov.in"] },
            { sNo: "vii.", designation: "Senior Scientific Officer", name: "Shri. Vikram Wanjari", email: ["sochhatrapatisambhajinagarlab@mpcb.gov.in", "mpcbchhatrapatisambhajinagarlab@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "3. Regional Office Chandrapur",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Tanaji Govind Yadav", email: ["rochandrapur@mpcb.gov.in", "mpcbchandrapur@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer", name: "Shri. Umashankar Bhagwan Bhadule", email: ["srochandrapur@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Senior Scientific Officer", name: "Smt. Sandhya Kumare", email: ["sochandrapurlab@mpcb.gov.in", "mpcbchandrapurlab@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "4. Regional Office Kalyan",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri Jayvant Hajare", email: ["rokalyan@mpcb.gov.in", "mpcbkalyan@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Kalyan - I", name: "Shri. Upendra C. Kulkarni", email: ["srokalyan1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Kalyan - II", name: "Shri. Jayant Kadam", email: ["srokalyan2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Kalyan - III", name: "Dr. Seema Uday Dalavi", email: ["srokalyan3@mpcb.gov.in"] },
            { sNo: "v.", designation: "Sub Regional Officer-Bhivandi", name: "Smt. Saujanya S. Patil", email: ["srobhivandi@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "5. Regional Office Kolhapur",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Nikhil Gharat", email: ["rokolhapur@mpcb.gov.in", "mpcbkolhapur@mpcb.gov.in"] },
            { sNo: "i.", designation: "Sub Regional Officer - Kolhapur", name: "Shri. Pramod R Mane", email: ["srokolhapur@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Sangli", name: "Shri. Vidyasagar Killedar", email: ["srosangli@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Ratnagiri", name: "Shri. Uttam Mane", email: ["sroratnagiri@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Chiplun", name: "Shri. Shripad Kulkarni", email: ["srochiplun@mpcb.gov.in"] },
            { sNo: "v.", designation: "Scientific Officer - Chiplun", name: "Shri. Dayanand Tare", email: ["solabchiplun@mpcb.gov.in", "mpcbchiplunlab@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "6. Regional Office Mumbai",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Sujit Dholam", email: ["romumbai@mpcb.gov.in", "mpcbmumbai@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Mumbai -I", name: "Shri. Pratap Dagduba Jagtap", email: ["sromumbai1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Mumbai -II", name: "Smt. Madhurima Joshi", email: ["sromumbai2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Mumbai -III -", name: "Shri. Rakesh Daphade", email: ["sromumbai3@mpcb.gov.in"] },
            { sNo: "v.", designation: "Sub Regional Officer - Mumbai -IV", name: "Shri. Shakil Shaikh", email: ["sromumbai4@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "7. Regional Office Nashik",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Limbaji Bhad", email: ["ronasik@mpcb.gov.in", "mpcbnashik@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Nashik", name: "Shri. Prashant Gaikwad", email: ["sronashik@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Jalgaon", name: "Shri. Karansing Amarsingh Rajput", email: ["srojalgaon1@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Dhule", name: "Shri. Pranav Pakhle", email: ["srojalgaon2@mpcb.gov.in"] },
            { sNo: "v.", designation: "Sub Regional Officer - Ahilyanagar", name: "Shri. Chandrakant Shinde", email: ["sroahilyanagar@mpcb.gov.in"] },
            { sNo: "vi.", designation: "Scientific Officer", name: "Shri. Suresh Mali", email: ["sonasiklab@mpcb.gov.in", "mpcbnashiklab@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "8. Regional Office Nagpur",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Smt. Hema Mayuresh Deshpande", email: ["ronagpur@mpcb.gov.in", "mpcbnagpur@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Nagpur - I", name: "Smt. Dhanashri Patil", email: ["sronagpur1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Nagpur - II", name: "Shri. Sushilkumar Rathod", email: ["sronagpur2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Bhandara", name: "Shri. Kishor Prabhakar Pusadkar", email: ["srobhandara@mpcb.gov.in"] },
            { sNo: "v.", designation: "Senior Scientific Officer", name: "Shri. Dattatray Nehe", email: ["sonagpurlab@mpcb.gov.in", "mpcbnagpurlab@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "9. Regional Office Navi - Mumbai",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri Satish Hanumant Padwal", email: ["ronavimumbai@mpcb.gov.in", "mpcbnavimumbai@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Navi Mumbai - I", name: "Shri. Amar Durgule", email: ["navimumbai1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Navi Mumbai -II", name: "Shri. Sachin Janardhan Adkar", email: ["navimumbai2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer -Taloja", name: "Shri. Vikrant Hemant Bhalerao", email: ["srotaloja@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "10. Regional Office Pune",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Babasaheb Kukade", email: ["ropune@mpcb.gov.in", "mpcbpune@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Pune - I", name: "Shri. Kartikey Langote", email: ["sropune1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Pune -II", name: "Shri. Kishor Kerlikar", email: ["sropune2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - PimpriChinchwad", name: "Shri. Manchak Namdev Jadhav", email: ["sropimprichinchwad@mpcb.gov.in"] },
            { sNo: "v.", designation: "Sub Regional Officer - Satara", name: "Shri. Amol Anandrao Satpute", email: ["srosatara@mpcb.gov.in"] },
            { sNo: "vi.", designation: "Sub Regional Officer - Solapur", name: "Shri. Nikhil More", email: ["srosolapur@mpcb.gov.in"] },
            { sNo: "vii.", designation: "Scientific Officer", name: "Shri. Shantilal Nagare", email: ["sopunelab@mpcb.gov.in", "mpcbpunelab@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "11. Regional Office Raigad",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Sanjay Bhosale", email: ["roraigad@mpcb.gov.in", "mpcbraigad@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Raigad - I", name: "Shri. Prashant Madhukar Bhosale", email: ["sroraigad1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Raigad - II", name: "Smt. Rutuja Bhalerao", email: ["sroraigad2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Mahad", name: "Shri. Tanaji Patil", email: ["sromahad@mpcb.gov.in"] },
          ]
        },
        {
          subTitle: "12. Regional Office Thane",
          data: [
            { sNo: "i.", designation: "Regional Officer", name: "Shri. Kiran Nitant Hasbanis", email: ["rothane@mpcb.gov.in", "mpcbthane@mpcb.gov.in"] },
            { sNo: "ii.", designation: "Sub Regional Officer - Thane - I", name: "Shri. Sanjivkumar Redasani", email: ["srothane1@mpcb.gov.in"] },
            { sNo: "iii.", designation: "Sub Regional Officer - Thane- II", name: "Shri. Anand Nilkanth Katole", email: ["srothane2@mpcb.gov.in"] },
            { sNo: "iv.", designation: "Sub Regional Officer - Tarapur - I", name: "Shri. Raju Ramsing Vasave", email: ["srotarapur1@mpcb.gov.in"] },
            { sNo: "v.", designation: "Sub Regional Officer - Tarapur - II", name: "Shri. Virendra Singh", email: ["srotarapur2@mpcb.gov.in"] },
            { sNo: "vi.", designation: "Scientific Officer", name: "Smt. Smita Wagh", email: ["mpcbthanelab@mpcb.gov.in"] },
          ]
        }
      ]
    },
    "Central Laboratory": {
      title: "Central Laboratory",
      data: [
        { sNo: "1", designation: "Senior Scientific Officer", name: "Dr. Padmanabh Khadkikar", email: ["icclab@mpcb.gov.in"] },
      ]
    },
    "RO MAITRI": {
      title: "RO MAITRI",
      data: [
        { sNo: "1", designation: "	Regional Officer MAITRI", name: "Mr. Sagar Auti", email: ["ro.maitri@mpcb.gov.in"] },
      ]
    }
  };

  const sidebarItems = Object.keys(sectionsData);
  const [activeSection, setActiveSection] = useState<string>(sidebarItems[0]);
  const [fieldOfficeExpanded, setFieldOfficeExpanded] = useState(false);

  const currentSectionData = sectionsData[activeSection];
  const showDepartment = currentSectionData?.hasDepartment || false;
  const hasMultipleTables = currentSectionData?.hasMultipleTables || false;

  // Get regional office names for dropdown
  const fieldOfficeTables = sectionsData["Field Office"]?.tables || [];
  const regionalOfficeNames = fieldOfficeTables.map((table, idx) => ({
    id: `regional-office-${idx}`,
    name: table.subTitle.replace(/^\d+\.\s*Regional Office\s*/i, '') // Remove numbering and "Regional Office" prefix
  }));

  // Scroll to specific regional office
  const scrollToRegionalOffice = (id: string) => {
    setActiveSection("Field Office");
    // Small delay to ensure content is rendered
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Reusable table component
  const renderTable = (tableData: TableRow[], showDept: boolean) => (
    <div className="border border-gray-200 rounded-[24px] md:rounded-[35px] overflow-hidden overflow-x-auto">
      <table className="w-full border-collapse min-w-[800px]">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="py-4 md:py-6 px-4 md:px-6 text-left w-20">
              <div className="border border-gray-100 rounded-full py-2 md:py-3 px-3 md:px-4 text-center text-[12px] md:text-[14px] font-semibold">
                S.No.
              </div>
            </th>
            {showDept && (
              <th className="py-4 md:py-6 px-2 text-left">
                <div className="border border-gray-100 rounded-full py-2 md:py-3 px-4 md:px-6 text-[12px] md:text-[14px] font-semibold whitespace-nowrap">
                  Department
                </div>
              </th>
            )}
            <th className="py-4 md:py-6 px-2 text-left">
              <div className="border border-gray-100 rounded-full py-2 md:py-3 px-4 md:px-6 text-[12px] md:text-[14px] font-semibold whitespace-nowrap">
                Designation
              </div>
            </th>
            <th className="py-4 md:py-6 px-2 text-left">
              <div className="border border-gray-100 rounded-full py-2 md:py-3 px-4 md:px-6 text-[12px] md:text-[14px] font-semibold whitespace-nowrap">
                Name of the Officer
              </div>
            </th>
            <th className="py-4 md:py-6 px-4 md:px-6 text-left">
              <div className="border border-gray-100 rounded-full py-2 md:py-3 px-4 md:px-6 text-[12px] md:text-[14px] font-semibold">
                Email
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {tableData.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
              <td className="py-4 md:py-5 px-6 md:px-8 text-[12px] md:text-[13px] text-gray-500">{row.sNo}</td>
              {showDept && (
                <td className="py-4 md:py-5 px-4 text-[12px] md:text-[13px] text-gray-700">
                  {row.department}
                </td>
              )}
              <td className="py-4 md:py-5 px-4 text-[12px] md:text-[13px] text-gray-700">
                {row.designation}
              </td>
              <td className="py-4 md:py-5 px-4 text-[12px] md:text-[13px] text-gray-700">
                {row.name}
              </td>
              <td className="py-4 md:py-5 px-4 md:px-6 text-[12px] md:text-[13px] text-gray-700 leading-relaxed">
                {row.email?.map((e, i) => (
                  <div key={i}>{e}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <AboutUsBanner />
      <Banner bannerSection="officein-charge" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 p-4 md:p-12 bg-white min-h-screen font-family-helvetica text-[#333] mx-0 md:ml-[90px] md:mr-[120px]">

        {/* Sidebar - Interactive with hover and active states */}
        <div className="w-full md:w-[280px] flex flex-col gap-3 md:gap-5">
          {sidebarItems.map((item, index) => {
            const isActive = activeSection === item;
            const isFieldOffice = item === "Field Office";

            return (
              <div key={index}>
                <div
                  onClick={() => {
                    if (isFieldOffice) {
                      setFieldOfficeExpanded(!fieldOfficeExpanded);
                    }
                    setActiveSection(item);
                  }}
                  className={`flex items-center justify-between px-4 md:px-6 py-4 md:py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                  ${isActive
                      ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                      : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                    }`}
                >
                  <span className={`text-[14px] md:text-[16px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                    {item}
                  </span>
                  {isFieldOffice && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${fieldOfficeExpanded ? 'rotate-180' : ''} ${isActive ? 'text-[#00A3FF]' : 'text-gray-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                {/* Dropdown for Field Office */}
                {isFieldOffice && fieldOfficeExpanded && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {regionalOfficeNames.map((office, officeIdx) => (
                      <div
                        key={officeIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToRegionalOffice(office.id);
                        }}
                        className="px-3 py-3 text-[13px] text-gray-700 bg-white hover:bg-[#00A3FF]/10 hover:text-[#00A3FF] rounded-lg cursor-pointer transition-all duration-200 border border-gray-200 hover:border-[#00A3FF]/40 text-center flex items-center justify-center"
                      >
                        {office.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full min-w-0">
          <h1 className="text-[24px] md:text-[32px] font-medium mb-6 md:mb-8 text-black">{currentSectionData?.title}</h1>

          {/* Render multiple tables or single table based on section type */}
          {hasMultipleTables ? (
            <div className="flex flex-col gap-6 md:gap-8">
              {currentSectionData?.tables?.map((table, tableIdx) => (
                <div key={tableIdx} id={`regional-office-${tableIdx}`}>
                  <h2 className="text-[18px] md:text-[20px] font-semibold mb-3 md:mb-4 text-black">{table.subTitle}</h2>
                  {renderTable(table.data, false)}
                </div>
              ))}
            </div>
          ) : (
            renderTable(currentSectionData?.data || [], showDepartment)
          )}
        </div>
      </div>
    </>
  );
};

export default OfficeInCharge;



