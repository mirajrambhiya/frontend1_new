import React from 'react';
import PageBanner from '../components/PageBanner';

const VideoGallery: React.FC = () => {
    const videoData = [
        {
            id: 1,
            title: "",
            description: "The Maharashtra Pollution Control Board and the Aadhar Ability Foundation collaborated to host a training that demonstrated and provided information on how to use first aid and CPR to save lives in cardiac arrest.",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail: "https://placehold.co/600x340?text=CPR+Training+Video",
            isVertical: false
        },
        {
            id: 2,
            title: "MPCB GreenMind AI चॅटबॉट अनावरण २०२५",
            description: "पुढील पिढीला आपण काय देणार आहोत ? कचरा की स्वच्छ हवा? महाराष्ट्र प्रदूषण नियंत्रण मंडळ प्रस्तुत करत आहे अध्यक्ष सिद्धेश जी कदम यांच्यासोबत पर्यावरणविषयक विशेष पॉडकास्ट 'मनसंवाद'! पॉडकास्टची लिंक बायोमध्ये उपलब्ध आहे.",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail: "https://placehold.co/600x340?text=Podcast+Video",
            isVertical: false
        },
        {
            id: 3,
            title: "MPCB GreenMind AI चॅटबॉट अनावरण २०२५",
            description: "",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail: "https://placehold.co/340x600?text=AI+Chatbot+Short+Video",
            isVertical: true
        }
    ];

    return (
        <div className="min-h-screen bg-white font-family-helvetica pb-20">
            <PageBanner title="Video Gallery" />

            <div className="w-full max-w-[1282px] mx-auto px-4 py-12">
                <div className="overflow-x-auto border border-gray-300 shadow-sm">
                    <table className="w-full border-collapse bg-white table-fixed">
                        <tbody>
                            {videoData.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    {/* Description Row */}
                                    <tr>
                                        <td className="p-4 border border-gray-300 align-top" colSpan={3}>
                                            <div className="flex flex-col gap-2">
                                                {item.title && (
                                                    <h3 className="text-[18px] font-bold text-gray-900 border-b border-gray-100 pb-2">
                                                        {item.title}
                                                    </h3>
                                                )}
                                                {item.description && (
                                                    <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Video Row */}
                                    <tr>
                                        <td className="p-4 border border-gray-300">
                                            <div className={`relative ${item.isVertical ? 'max-w-[280px]' : 'w-full'} overflow-hidden rounded-lg bg-black ${item.isVertical ? 'aspect-[9/16]' : 'aspect-video shadow-md'}`}>
                                                <video
                                                    controls
                                                    poster={item.thumbnail}
                                                    className="w-full h-full object-cover"
                                                >
                                                    <source src={item.videoUrl} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-300"></td>
                                        <td className="p-4 border border-gray-300"></td>
                                    </tr>
                                </React.Fragment>
                            ))}
                            {/* Ganesh Festival Awareness Videos (2024) Header */}
                            <tr>
                                <td colSpan={3} className="p-4 bg-gray-50 border border-gray-300">
                                    <h2 className="text-[20px] font-bold text-gray-800">Ganesh Festival Awareness Videos (2024)</h2>
                                </td>
                            </tr>

                            {/* Ganesh Row 1 */}
                            <tr>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[15px] text-gray-700 leading-relaxed font-semibold mb-4">
                                        करूया बाप्पाचे विसर्जन घरच्या घरी.. वसुंधरेचे रक्षण घरोघरी.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed mb-4">
                                        It is our collective responsibility to celebrate Ganapati Visarjan in an eco-friendly way. To protect our natural water bodies, we urge everyone to immerse Ganpati idols at home or in the designated visarjan tanks provided by local authorities. Let's come together and follow these eco-conscious steps. Remember,celebrations and preserving the environment can go hand in hand. Your every decision counts.
                                        <br /><span className="text-blue-600">#EcoFriendlyVisarjan #GanpatiVisarjan #MPCB #GreenMaharashtra #GanpatiBappaMorya</span>
                                    </p>
                                    <div className="relative max-w-[200px] mx-auto aspect-[9/16] rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300"></td>
                            </tr>

                            {/* Ganesh Row 2 */}
                            <tr>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        पर्यावरण पूरक गणेश उत्सव साजरा करा असे आवाहन श्री. एकनाथजी शिंदे, मा. मुख्यमंत्री, श्री. देवेंद्र फडणवीस, मा. उपमुख्यमंत्री, श्री. अजितदादा पवार मा. उपमुख्यमंत्री, यांनी केले आहे. महाराष्ट्र प्रदूषण नियंत्रण मंडळाचे मा. अध्यक्ष श्री. सिद्धेशजी कदम, मा. श्री. प्रवीण दराडे प्रधान सचिव, पर्यावरण व वातावरणीय बदल विभाग, मा. डॉ. अविनाश ढाकणे, सदस्य सचिव, महाराष्ट्र प्रदूषण नियंत्रण मंडळ यांच्या मार्गदर्शनाखाली विविध जनजागृती उपक्रमाचे आयोजन केले जात आहे.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        यंदाच्या गणेशोत्सवाला घरी आणूया मातीची मूर्ती. गणरायाच्या स्वागतासाठी करूया इकोफ्रेंडली सजावट.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        गणपती बाप्पा मोरया. ध्वनी प्रदूषण टाळूया.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                            </tr>

                            {/* Eco-Friendly Ganesh Idol & Decoration Competition (2024) Header */}
                            <tr>
                                <td colSpan={3} className="p-4 bg-gray-50 border border-gray-300">
                                    <h2 className="text-[20px] font-bold text-gray-800">Eco-Friendly Ganesh Idol & Decoration Competition (2024)</h2>
                                </td>
                            </tr>

                            {/* Competition Row */}
                            <tr>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        महाराष्ट्र प्रदूषण नियंत्रण मंडळ व पर्यावरण व वातावरणीय बदल विभाग आणि 'लोकसत्ता' आपल्यासाठी यावर्षी देखील घेऊन येत आहे 'लोकसत्ता इकोफ्रेंडली घरगुती गणोत्सव स्पर्धा २०२४'
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        महाराष्ट्र प्रदूषण नियंत्रण मंडळ आणि साम टीव्ही मराठी आयोजित पर्यावरण पूरक गणेश उत्सव स्पर्धा २०२४. मोठ्या संख्येने सहभागी व्हा.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        महाराष्ट्र प्रदूषण नियंत्रण मंडळ व एबीपी माझा आयोजित पर्यावरण पूरक घरगुती गणपती स्पर्धा २०२४.. विजेत्यांच्या प्रत्यक्ष भेटणार आहेत कलावंत.. मोठ्या संख्येने सहभागी व्हा.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                            </tr>

                            {/* Competition Row 2 */}
                            <tr>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        महाराष्ट्र प्रदूषण नियंत्रण मंडळ व न्यूज १८ लोकमत आयोजित पर्यावरण पूरक सार्वजनिक गणेश उत्सव स्पर्धा २०२४. सहभागी व्हा आणि विजयी व्हा.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        महाराष्ट्र प्रदूषण नियंत्रण मंडळ व झी २४ तास आयोजित पर्यावरण पूरक घरगुती गणेश उत्सव स्पर्धा २०२४. सहभागी व्हा आणि विजयी व्हा.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                                        महाराष्ट्र प्रदूषण नियंत्रण मंडळ आणि टिव्ही ९ आयोजित शालेय विद्यार्थ्यांसाठी पर्यावरण पूरक गणेश उत्सव स्पर्धा २०२४. सहभागी व्हा आणि विजयी व्हा.
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                            </tr>

                            {/* Eco-friendly Ganesh Idol Creation Videos (2024) Header */}
                            <tr>
                                <td colSpan={3} className="p-4 bg-gray-50 border border-gray-300">
                                    <h2 className="text-[20px] font-bold text-gray-800">Eco-friendly Ganesh Idol Creation Videos (2024)</h2>
                                </td>
                            </tr>

                            {/* Idol Creation Row */}
                            <tr>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-center text-gray-700 font-medium mb-4">
                                        Information by Mr. Gautam Nundy of M/S SSRG
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-center text-gray-700 font-medium mb-4">
                                        Information about Gomay Ganesh by M/s Bhagirath Gramvikas Pratishthan
                                    </p>
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[13px] text-center text-gray-700 font-medium mb-4">
                                        Eco-friendly Ganesh idol making by Hemant Jorgekar - Liberty Arts
                                    </p>
                                    <div className="relative max-w-[180px] mx-auto aspect-[9/16] rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                            </tr>

                            {/* Punaravartan Sanstha Pune Header */}
                            <tr>
                                <td colSpan={3} className="p-4 bg-gray-50 border border-gray-300">
                                    <h2 className="text-[20px] font-bold text-gray-800">Punaravartan Sanstha Pune</h2>
                                </td>
                            </tr>

                            {/* Punaravartan Row */}
                            <tr>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-center text-gray-700 font-medium mb-4">
                                        a) PV23 clay collection
                                    </p>
                                    <div className="relative max-w-[200px] mx-auto aspect-[9/16] rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 align-top">
                                    <p className="text-[14px] text-center text-gray-700 font-medium mb-4">
                                        b) PV23 clay collection and distribution
                                    </p>
                                    <div className="relative max-w-[200px] mx-auto aspect-[9/16] rounded-lg overflow-hidden bg-black shadow-md">
                                        <video controls className="w-full h-full object-cover">
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </td>
                                <td className="p-4 border border-gray-300 items-center justify-center"></td>
                            </tr>

                            {/* Bottom Label Row */}
                            <tr>
                                <td colSpan={3} className="p-3 border border-gray-300 text-[14px] text-blue-600 font-medium">
                                    Information about environment friendly Ganesh idol made from Coco peat
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
