import React from 'react'
import Vector3 from '../../Assets/BgImg/Vector3.png'
import logos from '../../Assets/Logos/logos.png'
import Section5 from '../Homepage/Section5'

const Section4 = () => {
    return (


        <div className=' h-[500px] md:h-[600px] lg:h-[881px] lg:py-10 ' style={{ backgroundImage: `url(${Vector3})`, backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className='grid justify-items-center'>
                <h2 className='text-[24px] lg:text-[36px] py-16 lg:py-20 text-white text-center font-medium'>Our Clients</h2>
                <p className='w-[90%] md:w-[80%] lg:w-[60%] mt-[-8%] md:mt-[-5%] text-[12px] md:text-[16px] text-white text-center '>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</p>
            </div>

            <div className='text-white text-[14px] p-2 w-[92%] md:w-[90%] lg:w-[70%] mx-auto  cursor-pointer mt-[3%] '>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:flex gap-2 md:gap-4 lg:space-x-5  justify-items-center text-center '>
                    <p className='text-[11px] md:text-[13px] lg:text-[16px]'>Travel & Leisure</p>
                    <p className='text-[11px] md:text-[13px] lg:text-[16px]'>Government  & NGO</p>
                    <p className='text-[11px] md:text-[13px] lg:text-[16px]'>Banking & Finance</p>
                    <p className='text-[11px] md:text-[13px] lg:text-[16px]'>Legal</p>
                    <p className='text-[11px] md:text-[13px] lg:text-[16px]'>Health</p>
                    <p className='text-[11px] md:text-[13px] lg:text-[16px]'>Engineering</p>
                    <p className='text-[11px] md:text-[13px] lg:text-[16px]'>Digital & Education</p>
                </div>
            </div>
            <div className='grid justify-items-center'>
                <img className='w-[85%] mt-10 md:mt-10 lg:mt-16 ' src={logos} alt="" />
            </div>
        </div>

    )
}

export default Section4
