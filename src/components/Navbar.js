import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-[#0c0c0c] py-8 px-5 md:px-24 flex items-center justify-between'>
      <h1 className='text-white font-[Sahonme-Buch] tracking-[8px]'>MUSTHAPHA</h1>
      <Link href="/about" className='text-white font-[Sahonme-Buch] hidden md:flex'>About Me</Link>
      <Link href="/" className='text-white font-[Sahonme-Buch] hidden md:flex border border-white rounded-full px-10 py-4'>Let's Work Together</Link>
    </div>
  )
}

export default Navbar
