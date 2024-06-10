// export const CertificateCard = () => {
//     const my_certificates = [
//         {
//             title: "Meta Front-End Developer",
//             platform: "Coursera ",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
//         },
//         {
//             title: "Meta Front-End Developer",
//             platform: "Coursera ",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
//         },
//         {
//             title: "Meta Front-End Developer",
//             platform: "Coursera ",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
//         },
//         {
//             title: "Meta Front-End Developer",
//             platform: "Coursera ",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
//         },
//     ];
//     return (
//         <div className="w-full h-full overflow-x-scroll whitespace-nowrap">
//             {my_certificates.map((certificate, index) => (
//                 <div key={index} className="inline-block p-4 md:p-6 lg:p-10 h-full">
//                     <div className="bg-white rounded-lg shadow-lg overflow-hidden w-60 md:w-72 lg:w-80 h-80 md:h-96">
//                         <img src={certificate.image} alt={certificate.title} className="w-full h-40 md:h-48 lg:h-64 object-cover" />
//                         <div className="p-4">
//                             <h2 className="text-base md:text-lg font-semibold">{certificate.title}</h2>
//                             <p className="text-sm text-gray-600">From: {certificate.platform}</p>
//                             <div className="w-full flex justify-center">
//                                 <a
//                                     href={certificate.credential}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="mt-4 inline-block bg-coral text-white py-2 px-4 rounded-xl w-4/5 md:w-3/5 hover:bg-red-600 text-center"
//                                 >
//                                     See Credentials
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

import { useState } from 'react';

export const CertificateCard = () => {
    const my_certificates = [
        {
            title: "Meta Front-End Developer",
            platform: "Coursera",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
        },
        {
            title: "Meta Front-End Developer",
            platform: "Coursera",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
        },
        {
            title: "Meta Front-End Developer",
            platform: "Coursera",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
        },
        {
            title: "Meta Front-End Developer",
            platform: "Coursera",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            credential: "https://www.coursera.org/account/accomplishments/specialization/66M8HGQ286BC"
        },
    ];

    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleImageClick = (image) => {
        setFullScreenImage(image);
    };

    const handleCloseFullScreen = () => {
        setFullScreenImage(null);
    };

    return (
        <div className="relative w-full h-full overflow-x-scroll whitespace-nowrap">
            {my_certificates.map((certificate, index) => (
                <div key={index} className="inline-block p-4 md:p-6 lg:p-10 h-full">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-60 md:w-72 lg:w-80 h-80 md:h-96">
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-40 md:h-48 lg:h-64 object-cover cursor-pointer"
                            onClick={() => handleImageClick(certificate.image)}
                        />
                        <div className="p-4">
                            <h2 className="text-base md:text-lg font-semibold">{certificate.title}</h2>
                            <p className="text-sm text-gray-600">From: {certificate.platform}</p>
                            <div className="w-full flex justify-center">
                                <a
                                    href={certificate.credential}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-coral text-white py-2 px-4 rounded-xl w-4/5 md:w-3/5 hover:bg-red-600 text-center"
                                >
                                    See Credentials
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {fullScreenImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleCloseFullScreen}
                >
                    <img src={fullScreenImage} alt="Full Screen" className="max-w-full max-h-full" />
                </div>
            )}
        </div>
    );
};
