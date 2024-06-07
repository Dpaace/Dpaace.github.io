import { EduExp } from "../Elements/EduExp";


export const ExperienceCard = () => {

    const my_experiences = [
        {
            title: "SmartScape Inc. (Sep 2023 - Present)",
            subtitle: "Software Engineer",
            address: "Tokyo, Japan (Remote)"
        },
        {
            title: "Hult Prize  at Softwarica (Sep 2022 - Apr 2023)",
            subtitle: "Deputy Campus Director",
            address: "Dillibazar, Kathmandu, Nepal"
        },
        {
            title: "Focusone Payment Solutions (Mar 2022 - Jun 2022)",
            subtitle: "Graphic Design Intern",
            address: "Kamladi, Kathmandu, Nepal"
        },
    ]
    return (
        <div className="h-full w-full">
            <h1 className="text-coral text-4xl md:text-6xl my-2 font-bold">My Experiences</h1>
            {my_experiences.map((edu, index) => (
                <EduExp
                    key={index}
                    title={edu.title}
                    subtitle={edu.subtitle}
                    address={edu.address}
                />
            ))}
        </div>
    );
};
