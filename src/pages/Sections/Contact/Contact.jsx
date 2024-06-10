// export const Contact = () => {
//     return (
//         <section id="contact" className="bg-contact text-black h-auto md:h-auto">
//             <div className="max-w-screen-xl mx-auto h-full p-4 flex flex-col md:flex-row">
//                 <div className="w-full md:w-2/5 h-full flex flex-col justify-between mb-8 md:mb-0">
//                     <h1 className='text-3xl md:text-5xl font-bold'>Details</h1>
//                     <div>
//                         <p className="font-medium text-lg md:text-xl my-5 md:my-10">
//                             <span className="font-bold text-xl md:text-2xl">Email: </span>
//                             dipeshnepali767@gmail.com
//                         </p>
//                         <p className="font-medium text-lg md:text-xl my-5 md:my-10">
//                             <span className="font-bold text-xl md:text-2xl">Phone: </span>
//                             (+977) 98102400889
//                         </p>
//                         <p className="font-medium text-lg md:text-xl my-5 md:my-10">
//                             <span className="font-bold text-xl md:text-2xl">Address: </span>
//                             Lalitpur, Nepal
//                         </p>
//                     </div>
//                 </div>
//                 <div className="w-full md:w-3/5 h-full flex flex-col justify-between">
//                     <h1 className='text-3xl md:text-5xl font-bold'>Contact Me</h1>
//                     <div className="p-2 md:p-5">
//                         <div className="flex flex-col md:flex-row justify-between gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 className="bg-transparent border-b border-black focus:outline-none w-full md:w-2/5 p-2 placeholder-black"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Enter your email"
//                                 className="bg-transparent border-b border-black focus:outline-none w-full md:w-2/5 p-2 placeholder-black"
//                             />
//                         </div>
//                         <textarea
//                             placeholder="Enter your message"
//                             className="bg-[#FFDA78] border border-black focus:outline-none resize-none w-full rounded-xl p-2 mt-2 placeholder-black"
//                             rows="4"
//                         ></textarea>
//                         <button className="bg-transparent border border-black py-2 px-4 rounded mt-4 hover:bg-coral">
//                             Send Now -&gt;
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form data:", formData);

        // eslint-disable-next-line no-unused-vars
        const response = await fetch(import.meta.env.VITE_API_URL, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // const result = await response.json();
        // console.log("Response JSON:", result);

        alert('Form submitted successfully');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="bg-contact text-black h-auto md:h-auto">
            <div className="max-w-screen-xl mx-auto h-full p-4 flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 h-full flex flex-col justify-between mb-8 md:mb-0">
                    <h1 className='text-3xl md:text-5xl font-bold'>Details</h1>
                    <div>
                        <p className="font-medium text-lg md:text-xl my-5 md:my-10">
                            <span className="font-bold text-xl md:text-2xl">Email: </span>
                            dipeshnepali767@gmail.com
                        </p>
                        <p className="font-medium text-lg md:text-xl my-5 md:my-10">
                            <span className="font-bold text-xl md:text-2xl">Phone: </span>
                            (+977) 98102400889
                        </p>
                        <p className="font-medium text-lg md:text-xl my-5 md:my-10">
                            <span className="font-bold text-xl md:text-2xl">Address: </span>
                            Lalitpur, Nepal
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-3/5 h-full flex flex-col justify-between">
                    <h1 className='text-3xl md:text-5xl font-bold'>Contact Me</h1>
                    <form className="p-2 md:p-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-transparent border-b border-black focus:outline-none w-full md:w-2/5 p-2 placeholder-black"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-black focus:outline-none w-full md:w-2/5 p-2 placeholder-black"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-[#FFDA78] border border-black focus:outline-none resize-none w-full rounded-xl p-2 mt-2 placeholder-black"
                            rows="4"
                        ></textarea>
                        <button type="submit" className="bg-transparent border border-black py-2 px-4 rounded mt-4 hover:bg-coral">
                            Send Now -&gt;
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
