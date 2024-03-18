import Link from "next/link"


const Footer = () => {
    return (
        <>
            <div className="w-full md:px-36 px-5 gap-5 pt-5 flex flex-col md:flex-row md:items-center justify-between bg-[#0c0c0c] pb-8">
                <div>
                    <h1 className="flex gap-8 text-white text-xl font-[Sahonme-Buch] opacity-25">Contact me for work</h1>
                    <div className="flex gap-8">
                        <Link href="linkedin.com/in/muochi9" className="flex gap-8 text-white text-xl font-[Sahonme-Buch]">LinkedIn</Link>
                        <Link href="mailto:omusatafer4@gmail.co" className="flex gap-8 text-white text-xl font-[Sahonme-Buch]">Email</Link>
                        <Link href="https://drive.google.com/file/d/1lqa1XEcCVq2VDIfZV6Gk3cssQyYiWb3g/view" className="flex gap-8 text-white text-xl font-[Sahonme-Buch]">Resume</Link>
                    </div>
                </div>

                <div>
                    <h1 className="flex gap-8 text-white text-xl font-[Sahonme-Buch] opacity-25">Social</h1>
                    <div className="flex gap-8">
                        <Link href="linkedin.com/in/muochi9" className="flex gap-8 text-white text-xl font-[Sahonme-Buch]">LINKEDIN</Link>
                    </div>
                </div>
            </div>
            <div className="w-full md:px-36 px-5 flex md:flex-row items-center justify-between bg-[#0c0c0c] pb-2">
                <h1 className="md:text-[140px] text-[52px] text-center text-white font-[Sahonme-Extrafelt] uppercase">MUSTAPHA</h1>
            </div>
            <div className="w-full md:px-36 px-5 pt-5 flex items-center justify-between bg-[#0c0c0c] pb-2">
                <div>
                    <Link href="/" className="flex gap-8 text-white md:text-xl font-[Sahonme-Buch]">Copyright © 2024</Link>
                </div>

                <div>
                    <Link href="/" className="flex gap-8 text-white md:text-xl font-[Sahonme-Buch] tracking-widest">MUSTAPHA</Link>
                </div>
            </div>
        </>
    )
}

export default Footer
