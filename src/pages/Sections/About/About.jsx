import { useState } from 'react';
import Profile from '../../../assets/Profile.png';
import { Button } from '../../Components/Button/Button';
import { Aboutme } from '../../Components/Cards/Aboutme';
import { EducationCard } from '../../Components/Cards/EducationCard';
import { ExperienceCard } from '../../Components/Cards/ExperienceCard';

export const About = () => {
    const [activeCard, setActiveCard] = useState('about');

    return (
        <section id="about" className='bg-about text-black h-auto md:h-[650px] lg:h-[700px]'>
            <div className='max-w-screen-xl h-full mx-auto flex flex-col md:flex-row'>
                <div className='hidden md:flex w-full md:w-2/5 h-full p-5 md:p-10 justify-center items-center'>
                    <div className='h-auto w-full max-w-xs md:max-w-full bg-coral rounded-full overflow-hidden'>
                        <img src={Profile} alt="Profile" className='h-full w-full object-cover rounded-full' />
                    </div>
                </div>
                <div className='w-full md:w-3/5 h-full p-5 md:p-10 flex flex-col'>
                    <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-5'>
                        <Button title="About" onClick={() => setActiveCard('about')} isActive={activeCard === 'about'} />
                        <Button title="Education" onClick={() => setActiveCard('education')} isActive={activeCard === 'education'} />
                        <Button title="Experience" onClick={() => setActiveCard('experience')} isActive={activeCard === 'experience'} />
                    </div>
                    <div className='h-full w-full mt-5 md:mt-0'>
                        {activeCard === 'about' && <Aboutme />}
                        {activeCard === 'education' && <EducationCard />}
                        {activeCard === 'experience' && <ExperienceCard />}
                    </div>
                </div>
            </div>
        </section>
    );
};

