import { EduExp } from "../Elements/EduExp";


export const EducationCard = () => {

    const my_education = [
        {
            title: "Softwarica College of IT and E-commerce",
            subtitle: "BSc. (Hons) Computing",
            address: "Dillibazar, Kathmandu, Nepal"
        },
        {
            title: "GEMS Institute of Higher Education (GIHE)",
            subtitle: "Higher Secondary Level",
            address: "Dhapakhel, Lalitpur, Nepal"
        },
        {
            title: "Graded English Meduim School (GEMS)",
            subtitle: "School Level",
            address: "Dhapakhel, Lalitpur, Nepal"
        },
    ]
    return (
        <div className="h-full w-full">
            <h1 className="text-coral text-4xl md:text-6xl my-2 font-bold">My Education</h1>
            {my_education.map((edu, index) => (
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
