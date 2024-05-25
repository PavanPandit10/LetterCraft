import React from 'react'
import Qimg from '../../Assets/Images/Qimg.png'
import tikicon from '../../Assets/Icons/tikicon.png'

const Component3 = () => {
  return (
    <div className=' h-[750px] md:h-[650px] md:flex py-14'>

            <div className='md:w-[50%]'>
                <img className='h-[220px] lg:h-[400px] ml-24' src={Qimg} alt="" />
            </div>
            <div className='  md:w-[50%] ml-[20px] md:ml-0 py-10 md:mt-[-40px]'>
                <h2 className='text-[20px] md:text-[28px] lg:text-[36px] font-medium'>Why LetterCrafts?</h2>

                    <div className='w-[85%] md:w-[95%] lg:w-[70%] '>
                        <div className=' flex items-center'>
                            <img src={tikicon} alt="" />
                            <p className='text-[10px] md:text-[13px] lg:text-[16px] font-medium mt-2 ml-5'>We provide quick, affordable and high-quality Certified Translations & Notarisation Services.</p>
                        </div>  
                        <div className=' flex items-center '>
                            <img src={tikicon} alt="" />
                            <p className='text-[10px] md:text-[13px] lg:text-[16px] font-medium mt-2 ml-5'>We provide quick, affordable and high-quality Certified Translations & Notarisation Services.</p>
                        </div> 
                    </div>
                    <div className='text-[10px] md:text-[12px]  ml-12 mt-2 lg:text-[14px]'>
                        <li>ICA, MOM, LTA, ROM.</li>
                        <li>Visa, Immigration & Embassy submissions</li>
                        <li>PR applications</li>
                        <li>Notarization service is available on request</li>
                    </div>
                    <div className='w-[85%] md:w-[95%] lg:w-[70%] '>
                    <div className=' flex items-center'>
                            <img src={tikicon} alt="" />
                            <p className='text-[10px] md:text-[13px] lg:text-[16px] font-medium mt-2 ml-5'>We value your business and understand the importance of accurate translations.</p>
                        </div>
                        <div className=' flex items-center'>
                            <img src={tikicon} alt="" />
                            <p className='text-[10px] md:text-[13px] lg:text-[16px] font-medium mt-2 ml-5'>To ensure professional-grade translations, we only engage industry experts and native translators. We help our clients with:</p>
                        </div>
                        </div>
                        <div className='text-[10px] md:text-[12px] lg:text-[14px] mt-2 ml-12'>
                        <li>Business and Ecommerce documentation translations</li>
                        <li>Personal document translations</li>
                        <li>Banking, Legal and Contracts translations</li>
                        <li>Websites, Apps and Product Description translations</li>
                        <li>Technical, IT and Medical translations</li>
                        <li>Advertising and Marketing translations</li>
                    </div>
            </div>

    </div>
  )
}

export default Component3
