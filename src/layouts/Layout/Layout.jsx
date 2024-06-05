import PropTypes from 'prop-types';
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"


export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};