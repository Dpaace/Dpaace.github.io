import { ProjectCard } from "../../Components/Cards/ProjectCard"

export const Projects = () => {
    return (
        <section id="projects" className="bg-about text-black h-auto md:h-[700px]">
            <div className="max-w-screen-xl mx-auto h-full px-4">
                <h1 className='text-coral text-3xl md:text-5xl font-bold'>Projects</h1>
                <h2 className='text-xl md:text-4xl mt-4'>My Projects showcases my expertise...</h2>
                <div className="max-w-screen-xl bg-card h-[380px] md:h-[500px] rounded-3xl overflow-x-scroll whitespace-nowrap overflow-y-hidden">
                    <ProjectCard />
                </div>
            </div>

        </section>
    )
}