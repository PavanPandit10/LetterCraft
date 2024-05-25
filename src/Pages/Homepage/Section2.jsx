import React from 'react'
import logo1 from '../../Assets/Logos/logo1.png'
import logo2 from '../../Assets/Logos/logo2.png'
import logo3 from '../../Assets/Logos/logo3.png'
import logo4 from '../../Assets/Logos/logo4.png'
import logo5 from '../../Assets/Logos/logo5.png'
import logo6 from '../../Assets/Logos/logo6.png'
import pana from '../../Assets/Images/pana.png'
import icon1 from '../../Assets/Icons/icon1.png'
import icon2 from '../../Assets/Icons/icon2.png'
import icon3 from '../../Assets/Icons/icon3.png'
import icon4 from '../../Assets/Icons/icon4.png'
import icon5 from '../../Assets/Icons/icon5.png'
import icon6 from '../../Assets/Icons/icon6.png'
import icon7 from '../../Assets/Icons/icon7.png'
import icon8 from '../../Assets/Icons/icon8.png'
import icon9 from '../../Assets/Icons/icon9.png'


const Section2 = () => {
  return (
    <div className='h-[1850px] md:h-[1480px] lg:h-[950px] '>

            <div className='py-10 lg:py-20 ml-10 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:ml-10 '>
                <img src={logo1} alt="logo" />
                <img src={logo2} alt="logo" />
                <img src={logo3} alt="logo" />
                <img src={logo4} alt="logo" />
                <img src={logo5} alt="logo" />
                <img src={logo6} alt="logo" />
            </div>

            <div className='lg:grid grid-cols-2 lg:w-[1300px]'>
                <div className='py-10'>
                    <div className='w-[400px] md:w-[600px] lg:w-[500px] md:ml-[80px] h-[470px] ml-[40px] '>
                        <h1 className='text-[20px] md:text-[24px] lg:text-[36px] md:text-center font-medium'>Translation Services</h1>
                        <p className='py-6 text-[12px] md:text-[14px] lg:text-[16px] md:text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laboriosam nostrum voluptatibus deleniti eos autem doloremque enim explicabo nam eius!</p>
                        <div className=' mt-8 md:ml-[90px] lg:ml-4'>
                            <img className='h-auto' src={pana} alt="img" />
                        </div>
                    </div>
                </div>

                    <div className='py-10'>
                    <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center w-[400px] h-[840px] md:w-[620px] md:h-[540px] lg:h-[520px] lg:w-[620px] mx-auto'>
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4 ' src={icon1} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Certified translation and notarisation</h6>
                            </div> 
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon2} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Business document translation</h6>
                            </div> 
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon3} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Personal document translation</h6>
                            </div> 
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon4} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Website and apps translation and localisation</h6>
                            </div> 
                            <div className='h-[150px] w-[180px] grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon5} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Typesetting and copywriting documents</h6>
                            </div> 
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon6} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Marketing translation and transcreation</h6>
                            </div> 
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon7} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Business specific translation</h6>
                            </div> 
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon8} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Legal document translation</h6>
                            </div> 
                            <div className='h-[150px] w-[180px]  grid justify-items-center  rounded-[16px] shadow-xl'>
                                <img className='py-4' src={icon9} alt="" />
                                <h6 className='p-3 mt-[-20px] text-[16px] font-medium text-center'>Technical and IT translation</h6>
                            </div> 
                    </div>
                    </div>
            </div>




        </div>
   
  )
}

export default Section2
