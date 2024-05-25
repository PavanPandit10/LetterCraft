import React from 'react'
import img from '../../Assets/Images/img.png'

const Component2 = () => {
  return (
    <div className='h-auto pb-20 mt-10 lg:mt-16'>     
      <div className='lg:w-[30%]  lg:ml-[10%]'>
            <h2 className='text-center lg:text-left  text-[20px] md:text-[28px] lg:text-[36px] font-medium'>Samples of certified translations</h2>
      </div>
      <div className='w-[90%] md:w-[95%]  grid grid-cols-3 md:flex gap-2 ml-[20px] md:ml-[20px] lg:gap-8 mt-4 lg:mt-6 lg:ml-[10%]'>
            <div className='p-2 h-[170px] w-[130px] md:h-[200px] md:w-[160px] lg:h-[300px] lg:w-[230px] rounded-lg bg-slate-200'>
                <img src={img} alt="" />
               <h4 className='mt-2 text-[10px] md:text-[13px] lg:text-[16px] font-medium'>Birth certificate <br /> <span className='text-[8px] md:text-[11px] lg:text-[14px]'>$45.00</span>  →</h4>
            </div>
            <div className='p-2 h-[170px] w-[130px] md:h-[200px] md:w-[160px] lg:h-[300px] lg:w-[230px] rounded-lg bg-slate-200'>
                <img src={img} alt="" />
               <h4 className='mt-2 text-[10px] md:text-[13px] lg:text-[16px] font-medium'>Birth certificate <br /> <span className='text-[8px] md:text-[11px] lg:text-[14px]'>$45.00</span>  →</h4>
            </div>
            <div className='p-2 h-[170px] w-[130px] md:h-[200px] md:w-[160px] lg:h-[300px] lg:w-[230px] rounded-lg bg-slate-200'>
                <img src={img} alt="" />
               <h4 className='mt-2 text-[10px] md:text-[13px] lg:text-[16px] font-medium'>Birth certificate <br /> <span className='text-[8px] md:text-[11px] lg:text-[14px]'>$45.00</span>  →</h4>
            </div>
            <div className='p-2 h-[170px] w-[130px] md:h-[200px] md:w-[160px] lg:h-[300px] lg:w-[230px] rounded-lg bg-slate-200'>
                <img src={img} alt="" />
               <h4 className='mt-2 text-[10px] md:text-[13px] lg:text-[16px] font-medium'>Birth certificate <br /> <span className='text-[8px] md:text-[11px] lg:text-[14px]'>$45.00</span>  →</h4>
            </div>
            <div className='p-2 h-[170px] w-[130px] md:h-[200px] md:w-[160px] lg:h-[300px] lg:w-[230px] rounded-lg bg-slate-200'>
                <img src={img} alt="" />
               <h4 className='mt-2 text-[10px] md:text-[13px] lg:text-[16px] font-medium'>Birth certificate <br /> <span className='text-[8px] md:text-[11px] lg:text-[14px]'>$45.00</span>  →</h4>
            </div>

            </div>        
          

      </div>

    
  )
}

export default Component2
