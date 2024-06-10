import { CertificateCard } from "../../Components/Cards/CertificateCard"

export const Certificates = () => {
    return (
        <section id="certificates" className='bg-about text-black h-auto md:h-[680px]'>
            <div className="max-w-screen-xl mx-auto h-full px-4">
                <h1 className='text-coral text-3xl md:text-5xl font-bold'>Certificates</h1>
                <h2 className='text-xl md:text-4xl mt-4'>My Learnings to showcase my expertise...</h2>
                <div className="max-w-screen-xl bg-card h-[380px] md:h-[480px] rounded-t-3xl mt-4">
                    <CertificateCard />
                </div>
            </div>
        </section>
    )
}
