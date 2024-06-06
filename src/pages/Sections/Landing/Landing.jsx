import './Landing.css'
import Profile from '../../../assets/Profile.png';

export const Landing = () => {
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
                <div className='w-2/5 flex flex-row justify-end mt-20'>
                    <p className="text-3xl font-semibold text-right">
                        YEARS<br />
                        EXPERIENCE
                    </p>
                    <span className='text-[86px] leading-[70px] font-bold'>01</span>
                </div>
            </div>
            <div className='bg-black h-56'>
                <div className='max-w-screen-xl mx-auto grid'>
                    Scroll Down
                </div>
            </div>
        </section>

        // <section id="landing" className='bg-green-900 text-white h-lvh'>
        //     <div className='relative max-w-screen-xl mx-auto pt-10 flex'>
        //         <div className="relative w-3/5 flex flex-col">
        //             <div className="absolute top-28 z-40">
        //                 <h1 className="text-[156px] font-bold leading-[140px]">Dipesh<br />Nepali</h1>
        //                 <br />
        //                 <br />
        //                 <br />
        //                 <p className="text-xl font-semibold">
        //                     SOFTWARE<br />
        //                     <span className="relative">
        //                         ENGINEER
        //                         <span className="absolute left-0 top-6 w-8 h-1 bg-coral inline-block"></span>
        //                     </span>
        //                 </p>
        //             </div>
        //             <div className='relative bg-pink-200 h-[488px] w-[380px] mt-10 rounded-t-[200px] ml-[360px] z-30'>
        //                 <img src={Profile} alt="Profile" className='h-full w-full object-cover' />
        //             </div>
        //         </div>
        //         <div className='w-2/5  items-end bg-red-500'>
        //             <p className="text-3xl font-semibold text-right ">
        //                 YEARS<br />
        //                 EXPERIENCE
        //             </p>
        //         </div>
        //     </div>
        //     <div className='bg-black flex items-center justify-center'>
        //         <div className='max-w-screen-xl mx-auto text-white'>
        //             Scroll Down
        //         </div>
        //     </div>
        // </section>




    )
}


