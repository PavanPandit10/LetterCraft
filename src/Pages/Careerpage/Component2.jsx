import React from 'react'
import Vector4 from '../../Assets/BgImg/Vector4.png'
import Line from '../../Assets/Icons/Line.png'
import quote from '../../Assets/Icons/quote.png'

const Component2 = () => {
  return (
    <div className='h-auto lg:h-[950px] pb-10' style={{ backgroundImage:`url(${Vector4})` , backgroundSize:"cover" , backgroundPosition:"center"}}>
       
          


        <h2 className=' text-center py-20 text-[36px] font-medium pb-10 text-white '>Translation Process</h2>
          
            <div className='hidden md:grid place-content-center  '>
                  <img src={Line} alt="" />
            </div>

            <div className='lg:mt-[-40%] md:mt-[-65%] md:grid place-content-center'>
            <div className='ml-5 md:ml-0 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
               <div className=' grid place-content-center '>
                  <img className='mt-2 lg:mt-5' src={quote} alt="" />
               </div>
              
               <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
                  <div className='grid place-content-center '>
                    <img className='mt-2 lg:mt-5' src={quote} alt="" />
                  </div>
                </div>
                <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
                  <div className='grid place-content-center '>
                    <img className='mt-2 lg:mt-5' src={quote} alt="" />
                  </div>
                </div>
                <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
                  <div className='grid place-content-center '>
                    <img className='mt-2 lg:mt-5' src={quote} alt="" />
                  </div>
                </div>
            </div>
            </div>

          <div>
            <div className='ml-28 mt-[-13%] md:ml-[2%] md:mt-[-9%] lg:ml-[12%] lg:mt-[-5%]'>
              <div className='h-auto w-[90%]  md:w-[41%]  lg:w-[35%] bg-white rounded-lg'>
                  <div className='ml-4 py-2'>
                    <p className='font-medium lg:text-[16px]'>Inbox</p>
                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Email us your CV / Resume <span className='text-[#3D65FF]'>info@lettercarfts.org</span></p>
                  </div>
              </div>
            </div>
            <div className='ml-28 mt-[15%] md:ml-[58%] md:mt-[9%] lg:ml-[56%] lg:mt-[5%]'>
              <div className='h-auto w-[90%] md:w-[90%]  lg:w-[77%] bg-white rounded-lg'>
                  <div className='ml-4 py-2'>
                    <p className='font-medium lg:text-[16px]'>LinkedIn</p>
                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Stay connect on our <span className='font-medium'>LinkedIn</span> page for job posts and updates</p>
                  </div>
              </div>
            </div>
            <div className='ml-28 mt-[17%] md:ml-[2%] md:mt-[8%] lg:ml-[12%] lg:mt-[5%]'>
              <div className='h-auto w-[90%]  md:w-[41%]  lg:w-[35%] bg-white rounded-lg'>
                  <div className='ml-4 py-2'>
                    <p className='font-medium lg:text-[16px]'>NDA</p>
                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Once you are short listed -  you will receive an NDA</p>
                  </div>
              </div>
            </div>
            <div className='ml-28 mt-[17%] md:ml-[58%] md:mt-[8%] lg:ml-[56%] lg:mt-[7%]'>
              <div className='h-auto w-[90%]  md:w-[90%] lg:w-[77%] bg-white rounded-lg'>
                  <div className='ml-4 py-2'>
                    <p className='font-medium lg:text-[16px]'>Projects</p>
                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Our project managers will then start contacting you on various projects / ideas.</p>
                  </div>
              </div>
            </div>

            </div>
    </div>
  )
}

export default Component2
