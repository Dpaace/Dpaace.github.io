import './Landing.css'
import Profile from '../../../assets/Profile.png';


export const Landing = () => {
    return (
        <section id="landing" className='bg-black text-white h-dvh'>
            <div className='h-full max-w-screen-xl mx-auto pt-10 flex flex-col md:flex-row'>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="md:w-3/5 w-full top-28 z-40 flex flex-col justify-center items-center md:items-start">
                        <h1 className="text-6xl md:text-[156px] font-bold leading-tight md:leading-[140px] text-center md:text-left">
                            Dipesh
                            <br />
                            <span className='ml-0 md:ml-[88px]'>Nepali</span>
                        </h1>
                        <br className="hidden md:block" />
                        <br className="hidden md:block" />
                        <br className="hidden md:block" />
                        <p className="text-lg md:text-xl font-semibold text-center md:text-left">
                            SOFTWARE<br />
                            <span className="relative">
                                ENGINEER
                                <span className="absolute left-1/2 md:left-0 top-6 w-8 h-1 bg-coral inline-block transform -translate-x-1/2 md:transform-none"></span>
                            </span>
                        </p>
                    </div>
                    <div className='md:w-2/5 w-full flex justify-center md:justify-end mt-10 md:mt-0'>
                        <div className='bg-pink-200 h-[70vw] md:h-[90%] w-[70vw] md:w-[450px] rounded-t-[50vw] md:rounded-t-[300px] z-30'>
                            <img src={Profile} alt="Profile" className='h-full w-full object-cover rounded-t-[50vw] md:rounded-t-[300px]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}


{/* <div className='bg-black bg-opacity-90 h-56'>
    <div className='max-w-screen-xl mx-auto grid'>
        Scroll Down
    </div>
</div> */}