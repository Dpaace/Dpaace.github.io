import "./Navbar.css"
import Logo from '../../assets/Logo.png';
import Menu from '../../assets/Menu.png';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="navbar-background">
            <div className="navber-container">
                <nav>
                    {/* <div className='logo'>
                        <img src={Logo} alt='logo' height={50} />
                    </div> */}
                    <Link to="/" >
                        <img src={Logo} alt='logo' />
                    </Link>
                    <ul>
                        <li>About</li>
                        <li>Certificates</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>
                            <Link to="/login" >
                                <img src={Menu} alt='menu' />
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}