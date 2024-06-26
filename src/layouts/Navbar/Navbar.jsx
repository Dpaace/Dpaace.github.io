import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import Menu from '../../assets/Menu.png';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); 
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-black fixed top-0 left-0 w-full z-50 p-2">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <nav className="flex justify-between items-center w-full ">
                    <a href="#landing" onClick={(e) => handleNavClick(e, 'landing')}><img src={Logo} className="h-20 " alt='logo' /></a>
                    <div className="hidden md:flex gap-5">
                        <ul className="list-none flex gap-10 m-0 p-0">
                            <li className="text-white font-bold text-2xl">
                                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                            </li>
                            <li className="text-white font-bold text-2xl">
                                <a href="#certificates" onClick={(e) => handleNavClick(e, 'certificates')}>Certificates</a>
                            </li>
                            <li className="text-white font-bold text-2xl">
                                <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                            </li>
                            <li className="text-white font-bold text-2xl">
                                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="focus:outline-none">
                            <img src={Menu} alt="menu" className="h-6 cursor-pointer" />
                        </button>
                    </div>
                </nav>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-95 fixed top-24 left-0 w-full z-50  p-2">
                    <ul className="list-none flex flex-col items-end gap-5 m-0 p-0 pr-5">
                        <li className="text-white font-bold">
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                        </li>
                        <li className="text-white font-bold">
                            <a href="#certificates" onClick={(e) => handleNavClick(e, 'certificates')}>Certificates</a>
                        </li>
                        <li className="text-white font-bold">
                            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                        </li>
                        <li className="text-white font-bold">
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};
