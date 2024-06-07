// import './About.css'
// import Profile from '../../../assets/Profile.png';
// import { Button } from '../../Components/Button/Button';
// import { Aboutme } from '../../Components/Cards/Aboutme';


// export const About = () => {
//     return (
//         <section id="about" className='bg-about text-black h-[600px]'>
//             <div className='max-w-screen-xl h-full mx-auto bg-red-500 flex flex-row'>
//                 {/* <h1>About Me</h1> */}
//                 <div className='w-2/5 h-full p-10 flex flex-col justify-center bg-green-500'>
//                     <div className='h-auto w-full bg-coral rounded-[100%]'>
//                         <img src={Profile} alt="Profile" className='h-full w-full object-conver rounded-[100%]' />
//                     </div>
//                 </div>
//                 <div className='h-full w-3/5 bg-yellow-500 p-10 flex flex-col'>
//                     <div className=' bg-green-500 flex flex-row justify-between gap-10'>
//                         <Button title="About" onClick={() => (<></>)} />
//                         <Button title="Education" onClick={() => (<></>)} />
//                         <Button title="Experience" onClick={() => (<></>)} />
//                     </div>
//                     <div className='h-full w-full'>
//                         <Aboutme />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// import './About.css'
// import Profile from '../../../assets/Profile.png';
// import { Button } from '../../Components/Button/Button';
// import { Aboutme } from '../../Components/Cards/Aboutme';


// export const About = () => {
//     return (
//         <section id="about" className='bg-about text-black h-[600px]'>
//             <div className='max-w-screen-xl h-full mx-auto flex flex-row'>
//                 <div className='w-2/5 h-full p-10 flex flex-col justify-center'>
//                     <div className='h-auto w-full bg-coral rounded-[100%]'>
//                         <img src={Profile} alt="Profile" className='h-full w-full object-conver rounded-[100%]' />
//                     </div>
//                 </div>
//                 <div className='h-full w-3/5 p-10 flex flex-col'>
//                     <div className='flex flex-row justify-between gap-10'>
//                         <Button title="About" onClick={() => (<></>)} />
//                         <Button title="Education" onClick={() => (<></>)} />
//                         <Button title="Experience" onClick={() => (<></>)} />
//                     </div>
//                     <div className='h-full w-full'>
//                         <Aboutme />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import './About.css';
import Profile from '../../../assets/Profile.png';
import { Button } from '../../Components/Button/Button';
import { Aboutme } from '../../Components/Cards/Aboutme';

export const About = () => {
    return (
        // <section id="about" className='bg-about text-black h-auto md:h-[680px]'>
        //     <div className='max-w-screen-xl h-full mx-auto flex flex-col md:flex-row'>
        //         <div className='w-full md:w-2/5 h-full p-10 flex justify-center md:justify-center items-center md:items-center'>
        //             <div className='h-auto w-full max-w-xs md:max-w-full bg-coral rounded-full overflow-hidden '>
        //                 <img src={Profile} alt="Profile" className='h-full w-full object-cover rounded-full' />
        //             </div>
        //         </div>
        //         <div className='w-full md:w-3/5 h-full p-5 md:p-10 flex flex-col'>
        //             <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-1'>
        //                 <Button title="About" onClick={() => { }} />
        //                 <Button title="Education" onClick={() => { }} />
        //                 <Button title="Experience" onClick={() => { }} />
        //             </div>
        //             <div className='h-full w-full mt-5 md:mt-0'>
        //                 <Aboutme />
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section id="about" className='bg-about text-black h-auto md:h-[680px]'>
            <div className='max-w-screen-xl h-full mx-auto flex flex-col md:flex-row'>
                <div className='hidden md:flex w-full md:w-2/5 h-full p-10 justify-center items-center'>
                    <div className='h-auto w-full max-w-xs md:max-w-full bg-coral rounded-full overflow-hidden'>
                        <img src={Profile} alt="Profile" className='h-full w-full object-cover rounded-full' />
                    </div>
                </div>
                <div className='w-full md:w-3/5 h-full p-5 md:p-10 flex flex-col'>
                    <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-1'>
                        <Button title="About" onClick={() => { }} />
                        <Button title="Education" onClick={() => { }} />
                        <Button title="Experience" onClick={() => { }} />
                    </div>
                    <div className='h-full w-full mt-5 md:mt-0'>
                        <Aboutme />
                    </div>
                </div>
            </div>
        </section>

    );
};
