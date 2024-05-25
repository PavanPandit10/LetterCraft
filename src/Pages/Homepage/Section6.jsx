import React from 'react'
import pana2 from '../../Assets/Images/pana2.png'

const CaseStudy = () => {
  return (
    
    <div className='h-max pb-10 '>

    <div className='w-[90%] ml-6 md:w-[80%] lg:w-[50%] lg:ml-28 lg:py-16'>
        <h2 className='text-[36px] font-medium py-2'>Case Studies</h2>
        <p className='text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</p>
    </div>

    <div className='md:grid grid-cols-2'>
        <div>
            <div className=' w-[90%] md:w-[99%] mt-8 ml-6 lg:w-[60%] lg:ml-28 lg:mt-[-4%] '>
                <h4 className='lg:text-[24px] font-medium'>Title</h4>
                <p className='text-[16px] text-[#697587] mt-2'>Quis suscipit facilisibg-slate-500s consectetur netus egestas. Orci semper rhoncus tortor suspendisse. Lacinia tincidunt elementum elit ut risus enim aliquam tincidunt. Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis aliquam.</p>
            </div>
            <div className='list-disc w-[90%] ml-6 mt-5 md:w-[101%] lg:w-[60%] lg:ml-28 lg:mt-8  text-[#697587] '>
                <h4 className='lg:text-[24px] font-medium text-black'>Project highlights</h4>
                <li className='mt-2'>Quis integer non morbi eget non. </li>
                <li>At porta vestibulum consequat libero duis id justo. </li>
                <li>In urna at pulvinar adipiscing egestas neque. </li>
                <li>Et arcu sed sapien ligula ultricies nisl tincidunt. </li>
                <li>Consectetur nam mattis mollis proin.</li>
            </div>
        </div>
        <div className=' mt-5 md:mt-5 lg:mt-[-2%]'>
            <img className='h-[250px] w-[250px] ml-[22%]  md:h-[320px] md:w-[250px] md:ml-14  lg:h-[420px] lg:w-[380px] ' src={pana2} alt="" />
        </div>
    </div>

    <div className='mt-10 ml-[30%] md:ml-8 lg:ml-28 lg:mt-[-10px] pb-6'>
        <button className='bg-[#3D65FF] py-2 px-4 lg:py-2 lg:px-4 rounded-full text-white text-[14px]'>Download CaseStudy</button>
    </div>

</div>

  )
}

export default CaseStudy
