import { format } from 'date-fns';

export const Footer = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy');

    return (
        <section id="contact" className="bg-black text-white h-[60px] md:h-[100px]">
            <div className="max-w-screen-xl mx-auto h-full p-4 flex justify-center items-center text-center">
                <h1 className="text-xl font-bold">Copyright &copy; Dipesh Nepali, {formattedDate}</h1>
            </div>
        </section>
    );
}
