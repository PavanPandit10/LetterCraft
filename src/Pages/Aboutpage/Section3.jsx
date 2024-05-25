import React from 'react'
import processing from '../../Assets/Images/processing.png'

const Section3 = () => {
  return (
    <div className=' pb-10 '>
        <div className=' md:flex ml-[9%] lg:ml-[10%] lg:py-20'>
            <div className='w-[80%] md:w-[55%] lg:w-[50%] mt-10 md:mt-16 lg:mt-[-1px]'>
                <h2 className='text-[20px] md:text-[28px] lg:text-[36px] font-medium'>Our Process</h2>
                <p className='text-[#697587] text-[10px] md:text-[12px] lg:text-[16px] mt-2'>We continuously refine our processes to adapt to the latest technology and best project management practices. <br /> <br />
                    Projects are assigned only to Translators with the relevant language proficiency, industry background and qualifications. All large projects undergo a peer-peer review and QA checks to ensure consistency in tone and writing style.
                    Initial assessment, drafting of the Translation, QA check, Customer Service and Client Feedback - Every stage of the translation project is logged and reviewed for continuous improvement.</p>
            </div>
            <div className=' ml-[20%] mt-5 md:mt-16 lg:mt-0 md:ml-8 lg:ml-16'>
                <img className='h-[200px] md:h-[250px] lg:h-[300px] ' src={processing} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section3
