import React from 'react'
import img from '../../Assets/Images/img.png'

const Section1 = () => {
  return (
    <div className='h-[800px] md:h-[650px] lg:h-[750px] '>
      
            <div className='w-[78%] md:w-[60%] lg:w-[40%] ml-[5%] lg:ml-[10%]'>
                <h2 className='text-[22px] md:text-[28px] lg:text-[36px]  font-medium pb-4'> The Team</h2>
                <p className='text-[10px] md:text-[13px] lg:text-[16px]'>We are a passionate team of professional Translators. With years of experience in translating over 80 language pairs and handling complex projects - We can cater to all your Translation needs.<br /> <br />
                Our People: the diversity and rich experience they bring in is our biggest asset that has enabled us to move from strength to strength.
                Founded in Singapore, we are now expanding our footprint into Hong Kong, Japan, India, UAE, and the UK.</p>
            </div>

            <div className='  py-10  mx-auto w-[90%] md:w-[90%] lg:w-[79%]  h-[570px] md:h-[350px] lg:h-[390px] '>
                <div className='grid grid-cols-2  md:flex justify-items-center gap-6 lg:gap-9 '>
                    <div className=' h-[260px] w-[170px] md:h-[300px] lg:h-[350px] lg:w-[240px] rounded-xl bg-white shadow-md'>
                        <img src={img} alt="" />
                        <div className='p-3'>
                        <h3 className='text-[16px] md:text-[17px] lg:text-[24px] font-medium'>Brooklyn Simmons</h3>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                    </div>
                    <div className='h-[260px] w-[170px] md:h-[300px] lg:h-[350px] lg:w-[240px] rounded-xl bg-white shadow-md'>
                        <img src={img} alt="" />
                        <div className='p-3'>
                        <h3 className='text-[16px] md:text-[17px] lg:text-[24px] font-medium'>Brooklyn Simmons</h3>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                    </div>
                    <div className='h-[260px] w-[170px] md:h-[300px] lg:h-[350px] lg:w-[240px] rounded-xl bg-white shadow-md'>
                        <img src={img} alt="" />
                        <div className='p-3'>
                        <h3 className='text-[16px] md:text-[17px] lg:text-[24px] font-medium'>Brooklyn Simmons</h3>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                    </div>
                    <div className='h-[260px] w-[170px] md:h-[300px] lg:h-[350px] lg:w-[240px] rounded-xl bg-white shadow-md'>
                        <img src={img} alt="" />
                        <div className='p-3'>
                        <h3 className='text-[16px] md:text-[17px] lg:text-[24px] font-medium'>Brooklyn Simmons</h3>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default Section1
