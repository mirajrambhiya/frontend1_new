import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

const documents = [
    {
        id: 1,
        title: "Final Report on Environment Assessment of Mumbai Oil Spill from MV RAK Carrier"
    },
    {
        id: 2,
        title: "Report on Oil Spill in Arbian sea."
    },
    {
        id: 3,
        title: "Environmental Impact Assessment (EIA) study on Pollution Due to Oil Spill."
    },
    {
        id: 4,
        title: "Report on Impact of Accidental Spillage of oil &Hazardous Chemicals in Mumbai Bay subsequent to Ship Collision on 7 August 2010, on Marine Ecology."
    }
];

function OilSpills() {
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
                                Related Topics & Information - Oil Spills
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                        {documents.map((doc) => (
                            <DocumentCard
                                key={doc.id}
                                document={doc}
                                wide={true}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OilSpills;
