import React from 'react'
import G1Img from '../../Assets/Images/G1Img.png'

const Section6 = () => {
  return (
    <div className='h-[450px] md:h-[600px] lg:h-[700px]'>
        <div className='py-16'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[36px] text-center font-medium'>Technology</h1>
        </div>
        <div className=''>
        <div className='grid grid-cols-3  md:grid-cols-3 w-[90%] md:w-[90%] justify-items-center lg:w-[80%] mx-auto '>
            <div className=' shadow-xl h-[200px] w-[130px] md:h-[330px] md:w-[200px] lg:h-[430px] lg:w-[300px] bg-white rounded-lg'>
                <img className='h-[110px] md:h-[200px] lg:h-[250px]' src={G1Img} alt="" />
                <h4 className='text-[10px] mt-[-24px] md:text-[18px] lg:text-[24px] p-2 font-medium '>Translation management system (TMS)</h4>
                <p className='text-[9px] md:text-[13px] lg:text-[16px] p-2'>To record all project details systematically and assign jobs to in-house linguists or freelancers automatically.</p>
            </div>
            <div className=' shadow-xl h-[200px] w-[130px] md:h-[330px] md:w-[200px] lg:h-[430px] lg:w-[300px] bg-white rounded-lg'>
                <img className='h-[110px] md:h-[200px] lg:h-[250px]' src={G1Img} alt="" />
                <h4 className='text-[10px] mt-[-24px] md:text-[18px] lg:text-[24px] p-2 font-medium '>Translation management system (TMS)</h4>
                <p className='text-[9px] md:text-[13px] lg:text-[16px] p-2'>To record all project details systematically and assign jobs to in-house linguists or freelancers automatically.</p>
            </div>
            <div className=' shadow-xl h-[200px] w-[130px] md:h-[330px] md:w-[200px] lg:h-[430px] lg:w-[300px] bg-white rounded-lg'>
                <img className='h-[110px] md:h-[200px] lg:h-[250px]' src={G1Img} alt="" />
                <h4 className='text-[10px] mt-[-24px] md:text-[18px] lg:text-[24px] p-2 font-medium '>Translation management system (TMS)</h4>
                <p className='text-[9px] md:text-[13px] lg:text-[16px] p-2'>To record all project details systematically and assign jobs to in-house linguists or freelancers automatically.</p>
            </div>
           
           
        </div>
        </div>
    </div>
  )
}

export default Section6
