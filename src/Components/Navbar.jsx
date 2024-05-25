// import React from 'react'
import React, { useState } from 'react';
import logo from '../Assets/Logos/logo.png'
import mail from '../Assets/Icons/mail.png'
import phone from '../Assets/Icons/phone.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
       <nav className=" p-4 bg-[#101D2E] ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
          <img className='lg:ml-10' src={logo} alt="" />
          </div>
          <div className="hidden md:flex">
            <a href="/" className="text-white text-[14px]  mt-2 px-4">Home</a>
            <a href="about" className="text-white text-[14px]  mt-2 px-4">About</a>
            <a href="/industry" className="text-white text-[14px]  mt-2 px-4">Services</a>
            <a href="/language" className="text-white text-[14px]  mt-2 px-4">Languages</a>
            <a href="/career" className="text-white text-[14px]  mt-2 px-4">ePayments</a>
            <a href="/certified" className="text-white text-[14px]  mt-2 px-4">Blog</a>
            <a href="contact" className="text-white text-[14px]  mt-2 px-4">Contact</a>
            <div className='flex ml-2'>
            <button className='flex bg-[#3D65FF] text-[14px] text-white px-5 py-2   rounded-full'><span><img className='mt-1 mr-2' src={mail} alt="" /></span> info@lettercrafts.org</button>
            <button className='flex bg-[#3D65FF] text-[14px] text-white px-3 py-2 ml-4 rounded-full'><span><img className='mt-1 mr-2' src={phone} alt="" /></span> info@lettercrafts.org</button>
          </div>
          </div >
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="/" className="block text-white px-4 py-2">Home</a>
            <a href="/about" className="block text-white px-4 py-2">About</a>
            <a href="industry" className="block text-white px-4 py-2">Services</a>
            <a href="/language" className="block text-white px-4 py-2">Languages</a>
            <a href="/career" className="block text-white px-4 py-2">ePayments</a>
            <a href="/certified" className="block text-white px-4 py-2">Blog</a>
            <a href="contact" className="block text-white px-4 py-2">Contact</a>
            <div className=''>
            <button className='flex bg-[#3D65FF] text-[14px] text-white px-5 py-2  rounded-full'><span><img className='mt-1 mr-2' src={mail} alt="" /></span> info@lettercrafts.org</button>
            <button className='flex bg-[#3D65FF] text-[14px] text-white px-5 py-2 mt-3 rounded-full'><span><img className='mt-1 mr-2' src={phone} alt="" /></span> info@lettercrafts.org</button>
          </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  )
}

export default Navbar
