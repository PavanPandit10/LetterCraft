import React from 'react'
import Vector5 from '../../Assets/BgImg/Vector5.png'
import teamG from '../../Assets/Images/teamG.png'

const Section2 = () => {
  return (
    <div className='h-[602px]  py-20 md:py-32 lg:py-32' style={{ backgroundImage:`url(${Vector5})` , backgroundSize:"cover" , backgroundPosition:"center"}} >
        <div className='md:flex '>
            <div className='ml-[25%] md:ml-[8%] lg:ml-[10%]'>
                <img className='h-[200px]  md:h-[250px] lg:h-[350px]' src={teamG} alt="" />
            </div>
            <div className='py-6 w-[80%] ml-[10%] md:ml-[5%] md:w-[50%] lg:w-[50%]  lg:py-16 text-white'>
                <h2 className='text-[20px] md:text-[28px] lg:text-[36px] font-medium' >Our Mission</h2>
                <p className='text-[10px] md:text-[13px] lg:text-[16px] mt-2'>We operate with a single-minded focus to deliver high quality, fast and an affordable Translation service. <br /> <br />
                        As a translations company we are conscious of the value proposition we bring to our clients and so we strive to do our best every-time a client engages us.
                    Providing customized solutions and being sensitive to client's requirements are values that are ingrained in our ways of working.</p>
            </div>
        </div>
    </div>
  )
}

export default Section2
