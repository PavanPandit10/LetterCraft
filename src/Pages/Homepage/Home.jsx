import React from 'react'
import Vector1 from '../../Assets/BgImg/Vector1.png'
import Frame from '../../Assets/BgImg/Frame.png'
import star from '../../Assets/Icons/star.png'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'


const Home = () => {
  return (
 
    <>

  <div className='h-[648px] md:mt-[-70px]  md:grid grid-cols-2 md:py-10 ' style={{ backgroundImage:`url(${Vector1})` , backgroundSize:"cover" , backgroundPosition:"center"}}>
        <div className='w-[60%] md:w-[55%] text-white py-10 md:mt-32 lg:mt-[15%] ml-[14%]'>
            <h1 className='text-[24px] md:text-[36px] lg:text-[48px] font-bold'>LetterCrafts <br /> Type|</h1> 
            <p className='mt-3 text-[16px]'>Professional translators delivering High Quality, Fast & Affordable translation services in  🇸🇬 Singapore.</p>
            <button className='bg-[#3D65FF] px-3 py-2 rounded-full mt-3 text-[14px] font-bold'>Lorem More →</button>
        </div>

        <div className='' style={{backgroundImage:`url(${Frame})` , backgroundRepeat:"no-repeat" , backgroundPosition:"right top"}}>
            <div className=' flex gap-3 md:mt-[40%] mt-10 p-2 '>
            <div className='h-[200px] w-[220px] lg:h-[200px] md:h-[280px]  p-3 bg-[#E6FFAF] rounded-[16px]'>
                <img  src={star} alt="" />
                <h4 className='mt-2 font-semibold'>Certified translation and notarisation</h4>
                <p className='mt-1 text-[10px] md:text-[13px] lg:text-[14px]'>Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
                <button className='text-[#3D65FF] font-bold text-[12px] lg:text-[14px]'>Lorem More →</button>
            </div>
            <div className='h-[200px] w-[220px] lg:h-[200px] md:h-[280px]  p-3 bg-[#FFC4B1] rounded-[16px]'>
                <img  src={star} alt="" />
                <h4 className='mt-2 font-semibold'>Certified translation and notarisation</h4>
                <p className='mt-1 text-[10px] md:text-[13px] lg:text-[14px]'>Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
                <button className='text-[#3D65FF] font-bold text-[12px] lg:text-[14px]'>Lorem More →</button>
            </div>
            <div className='h-[200px] w-[220px] lg:h-[200px] md:h-[280px]  p-3 bg-[#AEE7FF] rounded-[16px]'>
                <img  src={star} alt="" />
                <h4 className='mt-2 font-semibold'>Certified translation and notarisation</h4>
                <p className='mt-1 text-[10px] md:text-[13px] lg:text-[14px]'>Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
                <button className='text-[#3D65FF] font-bold text-[12px] lg:text-[14px]'>Lorem More →</button>
            </div>
            
        </div>
        </div>

    </div> 








      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      </>
    
  )
}

export default Home
