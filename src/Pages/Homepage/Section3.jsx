import React from 'react'
import Vector2 from '../../Assets/BgImg/Vector2.png'
import quote from '../../Assets/Icons/quote.png'
import edit from '../../Assets/Icons/edit.png'
import msg from '../../Assets/Icons/msg.png'
import headset from '../../Assets/Icons/headset.png'
import Line from '../../Assets/Icons/Line.png'


const Section3 = () => {
    return (
        <div className='max-w-screen-2xl'>

            <div className=' h-auto pb-10 lg:h-[1013px] mt-[-70px]' style={{ backgroundImage: `url(${Vector2})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                <div className=' h-auto pb-10'>
                    <h2 className=' text-center py-20 text-[20px] md:text-[26px] lg:text-[36px] font-medium pb-10 text-white '>Translation Process</h2>

                    <div className='hidden md:grid place-content-center '>
                        <img className='' src={Line} alt="" />
                    </div>

                    <div className=' lg:mt-[-40%] md:mt-[-65%] md:grid place-content-center'>
                        <div className='ml-5 md:ml-0 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
                            <div className=' grid place-content-center '>
                                <img className='mt-2 lg:mt-5' src={quote} alt="" />
                            </div>

                            <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
                                <div className='grid place-content-center '>
                                    <img className='mt-2 lg:mt-5' src={edit} alt="" />
                                </div>
                            </div>
                            <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
                                <div className='grid place-content-center '>
                                    <img className='mt-2 lg:mt-5' src={msg} alt="" />
                                </div>
                            </div>
                            <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
                                <div className='grid place-content-center '>
                                    <img className='mt-2 lg:mt-5' src={headset} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='ml-28 mt-[-13%] md:ml-[2%] md:mt-[-9%] lg:ml-[12%] lg:mt-[-5%]'>
                            <div className='h-auto w-[90%]  md:w-[41%]  lg:w-[35%] bg-white rounded-lg shadow-lg'>
                                <div className='ml-4 py-2'>
                                    <p className='font-medium lg:text-[16px]'>Get a quote</p>
                                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Email your documents to <span className='text-[#3D65FF]'>info@lettercarfts.org</span> or fill up a short form to get a quote in 30 mins. </p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-28 mt-[12%] md:ml-[58%] md:mt-[8%] lg:ml-[56%] lg:mt-[3%]'>
                            <div className='h-auto w-[90%]  md:w-[90%]  lg:w-[77%] bg-white rounded-lg shadow-lg'>
                                <div className='ml-4 py-2'>
                                    <p className='font-medium lg:text-[16px]'>We begin translation</p>
                                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Industry experts and native language translators work on your requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-28 mt-[13%] md:ml-[2%] md:mt-[6%] lg:ml-[12%] lg:mt-[5%]'>
                            <div className='h-auto w-[90%]  md:w-[41%]  lg:w-[35%] bg-white rounded-lg shadow-lg'>
                                <div className='ml-4 py-2'>
                                    <p className='font-medium lg:text-[16px]'>Receive translation</p>
                                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Translated documents can be emailed or delivivered to your address.</p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-28 mt-[11%] md:ml-[58%] md:mt-[7%] lg:ml-[56%] lg:mt-[6%]'>
                            <div className='h-auto w-[90%]  md:w-[90%] lg:w-[77%] bg-white rounded-lg shadow-lg'>
                                <div className='ml-4 py-2'>
                                    <p className='font-medium lg:text-[16px]'>Post translation support</p>
                                    <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




        </div>
    )
}

export default Section3
