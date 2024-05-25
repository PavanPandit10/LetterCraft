import React from 'react'
import bg4 from '../../Assets/BgImg/bg4.png'
import tag from '../../Assets/Icons/tag.png'
import star from '../../Assets/Icons/star.png'
import speed from '../../Assets/Icons/speed.png'

const Component6 = () => {
  return (
    <div className='h-auto lg:h-[697px]' style={{ backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
            <div className='w-[90%] ml-5 md:ml-16 lg:ml-48 flex py-24 md:py-36 lg:py-44 gap-3 lg:gap-5'>
                <div className=' h-[180px] w-[130px] md:h-[220px] md:w-[200px] lg:h-[280px] lg:w-[320px] grid justify-items-center p-2 md:p-4 bg-white rounded-xl'>
                    <img className='h-[30px]' src={tag} alt="" />
                    <h4 className='text-[16px] md:text-[20px] lg:text-[24px] '>Best Rates</h4>
                    <p className='text-[#697587] text-[10px] md:text-[13px] lg:text-[16px] text-center'>You are welcome to provide any feedback or ask for corrections.We assure 6 months post project support to all our clients.</p>
                </div>
                <div className=' h-[180px] w-[130px] md:h-[220px] md:w-[200px] lg:h-[280px] lg:w-[320px] grid justify-items-center p-2 md:p-4 bg-white rounded-xl'>
                    <img className='h-[30px]' src={star} alt="" />
                    <h4 className='text-[16px] md:text-[20px] lg:text-[24px] '>High Quality</h4>
                    <p className='text-[#697587] text-[10px] md:text-[13px] lg:text-[16px] text-center'>You are welcome to provide any feedback or ask for corrections.We assure 6 months post project support to all our clients.</p>
                </div>
                <div className=' h-[180px] w-[130px] md:h-[220px] md:w-[200px] lg:h-[280px] lg:w-[320px] grid justify-items-center p-2 md:p-4 bg-white rounded-xl'>
                    <img className='h-[30px]' src={speed} alt="" />
                    <h4 className='text-[16px] md:text-[20px] lg:text-[24px] '>Speed</h4>
                    <p className='text-[#697587] text-[10px] md:text-[13px] lg:text-[16px] text-center '>You are welcome to provide any feedback or ask for corrections.We assure 6 months post project support to all our clients.</p>
                </div>
            </div>

    </div>
  ) 
}

export default Component6
