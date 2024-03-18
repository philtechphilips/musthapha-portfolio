"use client";
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleNavBar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
}

  return (
    <>
    <div className='w-full bg-[#0c0c0c] py-8 px-5 md:px-24 flex items-center justify-between fixed z-[1000] top-0'>
      <Link href="/" className='text-white font-[Sahonme-Buch] tracking-[8px]'>MUSTAPHA</Link>
      <Link href="/about" className='text-white font-[Sahonme-Buch] hidden md:flex'>About Me</Link>
      <Link href="mailto:omusatafer4@gmail.co" className='text-white font-[Sahonme-Buch] hidden md:flex border border-white rounded-full px-10 py-4'>Let's Work Together</Link>
      <i className="ri-menu-2-line text-white md:hidden text-3xl" onClick={toggleNavBar}></i>
    </div>

    <div className={`w-full bg-[#0c0c0c] py-8 px-5 md:px-24 flex flex-col gap-16 fixed top-20 items-center justify-between transition-transform z-[1000] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full transition-transform'}`}>
      <Link href="/about" className='text-white font-[Sahonme-Buch] text-lg'>About Me</Link>
      <Link href="mailto:omusatafer4@gmail.co" className='text-white font-[Sahonme-Buch] border border-white rounded-full px-10 py-4'>Let's Work Together</Link>
    </div>
    </>
  )
}

export default Navbar
