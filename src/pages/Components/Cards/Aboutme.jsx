import { Skills } from "../Elements/Skills";

export const Aboutme = () => {
    return (
        <div className="h-full w-full">
            <h1 className="text-coral text-3xl md:text-4xl lg:text-6xl mt-2 font-bold">About me</h1>
            <h2 className="text-black text-2xl md:text-3xl lg:text-5xl mt-3">Know about me more</h2>
            <p className="text-sm md:text-md lg:text-xl text-justify mt-2 md:mt-3 lg:mt-5">
                I am a passionate and versatile software developer with extensive experience in creating dynamic
                and interactive applications. My expertise spans across multiple technologies including React for
                building responsive web interfaces, Unity for immersive game development, and Flutter for crafting
                elegant cross-platform mobile apps. Additionally, I am proficient in backend development with Node.js,
                managing databases with SQL, and scripting with Python. My multifaceted skill set allows me to
                seamlessly integrate frontend and backend solutions, delivering comprehensive and high-quality
                software products. I am dedicated to continuous learning and thrive on tackling challenging
                projects that push the boundaries of innovation.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between mt-5">
                <h1 className="text-coral text-xl md:text-2xl lg:text-4xl font-bold pb-5 md:pb-0">My Skills</h1>
                <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                    <Skills title="Python" />
                    <Skills title="Node.js" />
                    <Skills title="Flutter" />
                    <Skills title="SQL" />
                </div>
            </div>
        </div>
    );
};
