import React from 'react'
import Vector3 from '../../Assets/BgImg/Vector3.png'
import Gala from '../../Assets/Images/Gala.png'

const Section5 = () => {
  return (
    <div className='overflow-hidden'>
    <div className='h-[700px] md:h-[650px] lg:h-[900px]  md:py-24'  style={{ backgroundImage:`url(${Vector3})` , backgroundSize:"cover" , backgroundPosition:"center"}}>
            <div className='py-20 text-white ml-10 md:ml-[9%]'>
                <h2 className='text-[24px] md:text-[24px] lg:text-[36px] font-medium'>Certifications & Memberships</h2>
            </div>
           
            <div className='grid grid-cols-3 w-[90%] ml-7 md:w-[97%] md:ml-[9%] md:flex gap-3 md:gap-5 h-[440px]  mt-[-7%] lg:mt-[-4%] overflow-x-hidden '>
                
                <div className='h-[210px] w-[130px] md:h-[250px] md:w-[160px] lg:h-[415px] lg:w-[275px] bg-white rounded-xl'>
                    <img src={Gala} alt="" />
                    <div className=' p-2 lg:p-5'>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px] font-medium'>Globalization and <br /> Localization Association <br /> (GALA)</p>
                    </div>
                </div>
                <div className='h-[210px] w-[130px] md:h-[250px] md:w-[160px] lg:h-[415px] lg:w-[275px] bg-white rounded-xl'>
                    <img src={Gala} alt="" />
                    <div className=' p-2 lg:p-5'>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px] font-medium'>Globalization and <br /> Localization Association <br /> (GALA)</p>
                    </div>
                </div>
                <div className='h-[210px] w-[130px] md:h-[250px] md:w-[160px] lg:h-[415px] lg:w-[275px] bg-white rounded-xl'>
                    <img src={Gala} alt="" />
                    <div className=' p-2 lg:p-5'>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px] font-medium'>Globalization and <br /> Localization Association <br /> (GALA)</p>
                    </div>
                </div>
                <div className='h-[210px] w-[130px] md:h-[250px] md:w-[160px] lg:h-[415px] lg:w-[275px] bg-white rounded-xl'>
                    <img src={Gala} alt="" />
                    <div className=' p-2 lg:p-5'>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px] font-medium'>Globalization and <br /> Localization Association <br /> (GALA)</p>
                    </div>
                </div>
                <div className='h-[210px] w-[130px] md:h-[250px] md:w-[160px] lg:h-[415px] lg:w-[275px] bg-white rounded-xl'>
                    <img src={Gala} alt="" />
                    <div className=' p-2 lg:p-5'>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px] font-medium'>Globalization and <br /> Localization Association <br /> (GALA)</p>
                    </div>
                </div>
               
            </div>
       
    </div>
    </div>
  )
}

export default Section5
