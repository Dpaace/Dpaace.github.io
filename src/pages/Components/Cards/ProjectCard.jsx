// import { useState } from 'react';

// export const ProjectCard = () => {
//     const my_projects = [
//         {
//             title: "Meta Front-End Developer",
//             category: "Web",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
//         },
//         {
//             title: "Meta Front-End Developer",
//             category: "Web",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
//         },
//         {
//             title: "Meta Front-End Developer",
//             category: "Web",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
//         },
//         {
//             title: "Meta Front-End Developer",
//             category: "Web",
//             image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
//             github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
//         },
//     ];

//     const [fullScreenImage, setFullScreenImage] = useState(null);

//     const handleImageClick = (image) => {
//         setFullScreenImage(image);
//     };

//     const handleCloseFullScreen = () => {
//         setFullScreenImage(null);
//     };

//     return (
//         <div className="w-full h-full overflow-x-scroll whitespace-nowrap overflow-y-hidden">
//             <div className='w-full h-10 rounded-t-2xl px-5 bg-coral'>
//                 <ul className='flex gap-10'>
//                     <li>All</li>
//                     <li>Web</li>
//                     <li>AI</li>
//                 </ul>
//             </div>
//             {my_projects.map((project, index) => (
//                 <div key={index} className="inline-block p-4 md:p-6 lg:p-8 h-full">
//                     <div className="bg-white rounded-lg shadow-lg overflow-hidden w-60 md:w-72 lg:w-80 h-80 md:h-96">
//                         <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-40 md:h-48 lg:h-64 object-cover cursor-pointer"
//                             onClick={() => handleImageClick(project.image)}
//                         />
//                         <div className="p-4">
//                             <h2 className="text-base md:text-lg font-semibold">{project.title}</h2>
//                             <p className="text-sm text-gray-600">{project.category}</p>
//                             <div className="w-full flex justify-center">
//                                 <a
//                                     href={project.github_link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="mt-4 inline-block bg-coral text-white py-2 px-4 rounded-xl w-4/5 md:w-3/5 hover:bg-red-600 text-center"
//                                 >
//                                     See Project
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}

//             {fullScreenImage && (
//                 <div
//                     className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
//                     onClick={handleCloseFullScreen}
//                 >
//                     <img src={fullScreenImage} alt="Full Screen" className="max-w-full max-h-full" />
//                 </div>
//             )}
//         </div>
//     );
// };
import { useState } from 'react';

export const ProjectCard = () => {
    const my_projects = [
        {
            title: "Meta Front-End Developer",
            category: "Web",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
        },
        {
            title: "Meta Front-End Developer",
            category: "Web",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
        },
        {
            title: "Meta Front-End Developer",
            category: "Web",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
        },
        {
            title: "Meta Front-End Developer",
            category: "AI",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC/CERTIFICATE_LANDING_PAGE~66M8HGQ286BC.jpeg",
            github_link: "https://github.com/Dpaace/Meta_Frontend_Course.git"
        },
    ];

    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleImageClick = (image) => {
        setFullScreenImage(image);
    };

    const handleCloseFullScreen = () => {
        setFullScreenImage(null);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? my_projects
        : my_projects.filter(project => project.category === selectedCategory);

    return (

        <>
            <div className='w-full h-10 rounded-t-2xl px-5 bg-coral flex justify-center items-center'>
                <ul className='flex flex-row justify-center text-xl gap-10 text-white'>
                    <li
                        className={`cursor-pointer ${selectedCategory === 'All' ? 'font-bold, text-black' : ''}`}
                        onClick={() => handleCategoryClick('All')}
                    >
                        All
                    </li>
                    <li
                        className={`cursor-pointer ${selectedCategory === 'Web' ? 'font-bold, text-black' : ''}`}
                        onClick={() => handleCategoryClick('Web')}
                    >
                        Web
                    </li>
                    <li
                        className={`cursor-pointer ${selectedCategory === 'AI' ? 'font-bold, text-black' : ''}`}
                        onClick={() => handleCategoryClick('AI')}
                    >
                        AI
                    </li>
                </ul>
            </div>

            <div className="w-full h-full overflow-x-scroll whitespace-nowrap overflow-y-hidden">

                {filteredProjects.map((project, index) => (
                    <div key={index} className="inline-block p-4 md:p-6 lg:p-8 h-full">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-60 md:w-72 lg:w-80 h-70 md:h-96">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 md:h-48 lg:h-64 object-cover cursor-pointer"
                                onClick={() => handleImageClick(project.image)}
                            />
                            <div className="p-4">
                                <h2 className="text-base md:text-lg font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-600">{project.category}</p>
                                <div className="w-full flex justify-center">
                                    <a
                                        href={project.github_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block bg-coral text-white py-2 px-4 rounded-xl w-4/5 md:w-3/5 hover:bg-red-600 text-center"
                                    >
                                        See Project
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

        </>

    );
};
