import React from 'react'
import Frame from '../../Assets/BgImg/Frame.png'
import img2 from '../../Assets/BgImg/img2.jpg'
import tikicon from '../../Assets/Icons/tikicon.png'
import Component1 from '../Careerpage/Component1'
import Component2 from '../Careerpage/Component2'

const Career = () => {
  return (
      <>

    <div className='h-[665px] md:grid grid-cols-2  md:py-10'  style={{ backgroundImage:`url(${img2})` , backgroundSize:"cover" , backgroundPosition:"center"}}>
       
          <div className='w-[80%] md:w-[80%] ml-10 lg:ml-24 lg:mt-[15%] text-white '>
              <h1 className='text-[20px] md:text-[24px] lg:text-[48px] font-bold'>We are always looking for the best of the best</h1>
              <p className='text-[10px] md:text-[13px] lg:text-[16px]'>Developers, designers, product managers, planners, creatives and operations specialists. Get in touch with us, tell us your interests and skills, and we’ll let you know when a position that fits you opens up</p>
              <h4 className='text-[18px] md:text-[20px] lg:text-[24px] font-medium'>Why work with us</h4>
              <div className='flex'>
                <img className='h-[14px] md:h-[20px] md:mt-1' src={tikicon} alt="" />
                <p className='text-[10px] md:text-[13px] lg:text-[16px] ml-2'>Fair and Transparent</p>
              </div>
              <div className='flex'>
                <img className='h-[14px] md:h-[20px] md:mt-1' src={tikicon} alt="" />
                <p className='text-[10px] md:text-[13px] lg:text-[16px] ml-2'>Work remotely and strike work life balance</p>
              </div>
              <div className='flex'>
                <img className='h-[14px] md:h-[20px] md:mt-1' src={tikicon} alt="" />
                <p className='text-[10px] md:text-[13px] lg:text-[16px] ml-2'>Always open to pushing the limits and exploring new technology & ideas .</p>
              </div>
          </div>

          <div className=''  style={{backgroundImage:`url(${Frame})` , backgroundRepeat:"no-repeat" , backgroundPosition:"right top"}}>
          </div>

    </div>


      <Component1/>
      <Component2/>
    </>
  )
}

export default Career
