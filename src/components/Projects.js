import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Projects = () => {
    return (
        <div className='w-full bg-[#0c0c0c] md:px-24 px-5'>
            <Marquee className='flex py-20 overflow-y-hidden items-center' gradient="true" gradientColor="#0c0c0c" >
                <h1 className='text-white text-4xl mx-4  mt-2 font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick'></Image>
                <h1 className='text-gray-600 text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick'></Image>
                <h1 className='text-white text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick'></Image>
                <h1 className='text-gray-600 text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick'></Image>
                <h1 className='text-white text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick'></Image>
                <h1 className='text-gray-600 text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick'></Image>
            </Marquee>

            <div className='w-full flex items-center justify-center md:px-36 px-5'>
                <div className='w-full h-[0.1px] bg-white md:-mt-20 -mt-28'></div>
            </div>

            <div className='md:px-36 px-5 pb-48 flex flex-col gap-8'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>01</h1>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>UAV Swarm System</h1>
                        </div>
                        <div>
                            <Link href="" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                        </div>

                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/uav.jpg" className='w-full md:w-[200px]' width={200} height={600} alt='uav'></Image>
                        <Image src="/uavs.jpg" width={300} height={600} alt='uav'></Image>
                        <Image src="/uav.png" width={300} height={600} alt='uav'></Image>
                    </div>
                </div>
                <div className='w-full h-[0.1px] bg-white'></div>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>02</h1>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>Cellular Vehicle Tracker</h1>
                        </div>
                        <div>
                            <Link href="" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                        </div>

                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/vt.jpg" className='w-full md:w-[400px]' width={400} height={600} alt='uav'></Image>
                    </div>
                </div>
                <div className='w-full h-[0.1px] bg-white'></div>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>03</h1>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white capitalize'>Unmanned Ground Vehicle</h1>
                        </div>
                        <div>
                            <Link href="" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                        </div>

                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/ulv.jpg" className='w-full md:w-[300px]' width={200} height={400} alt='uav'></Image>
                        <Image src="/ulvs.jpg" width={300} height={400} alt='uav'></Image>
                        {/* <Image src="/uav.png" width={300} height={600} alt='uav'></Image> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects