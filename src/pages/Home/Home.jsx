import { Landing } from "../Sections/Landing/Landing"
import { About } from "../Sections/About/About"
import { Certificates } from "../Sections/Certificates/Certificates"
import { Projects } from "../Sections/Projects/Projects"
import { Contact } from "../Sections/Contact/Contact"


export const Home = () => {
    return (
        <>
            <Landing />
            <About />
            <Certificates />
            <Projects />
            <Contact />
        </>
    )
}
