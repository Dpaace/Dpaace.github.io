import './Landing.css'
import Profile from '../../../assets/Profile.png';

export const Landing = () => {
    const slider_image = [
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000", // Python
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=10256&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=1043&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=10236&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=3753&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=13406&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",

    ]
    return (
        <section id="landing" className='bg-green-900 text-white h-lvh'>
            <div className='relative max-w-screen-xl mx-auto pt-10 flex flex-row '>
                <div className="relative w-3/5 flex flex-col">
                    <div className="absolute top-28 z-40">
                        <h1 className="text-[156px] font-bold leading-[140px]">Dipesh<br />Nepali</h1>
                        <br />
                        <br />
                        <br />
                        <p className="text-xl font-semibold">
                            SOFTWARE<br />
                            <span className="relative">
                                ENGINEER
                                <span className="absolute left-0 top-6 w-8 h-1 bg-coral inline-block"></span>
                            </span>
                        </p>
                    </div>
                    <div className='relative bg-pink-200 h-[488px] w-[408px] mt-10 rounded-t-[200px] ml-[360px] z-30'>
                        <img src={Profile} alt="Profile" className='h-full w-full object-cover' />
                    </div>
                </div>
                <div className='w-2/5 mt-20'>
                    <div className='flex flex-row justify-end'>
                        <p className="text-3xl font-semibold text-right">
                            YEARS<br />
                            EXPERIENCE
                        </p>
                        <span className='text-[86px] leading-[70px] font-bold'>01</span>
                    </div>

                    {/* <div className='bg-black bg-opacity-30 rounded-3xl h-28 mt-20 w-4/5 mx-auto overflow-hidden'>
                        <div className='flex animate-scroll'>
                            {slider_image.concat(slider_image).map((img, index) => (
                                <img key={index} src={img} alt={`slider-img-${index}`} className='h-24 mx-2' />
                            ))}
                        </div>
                    </div> */}
                    {/* <div className='bg-black bg-opacity-30 rounded-3xl h-28 mt-20 w-4/5 mx-auto overflow-hidden'> */}
                    <div className='h-54 mt-20 w-11/12 mx-auto overflow-hidden'>
                        <div className='flex animate-scroll'>
                            {slider_image.concat(slider_image).map((img, index) => (
                                <img key={index} src={img} alt={`slider-img-${index}`} className='h-24 mx-2' />
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='bg-black h-56 mt-2'>
                <div className='max-w-screen-xl mx-auto grid'>
                    Scroll Down
                </div>
            </div>
        </section>

    )
}


