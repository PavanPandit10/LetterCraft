import React from 'react'
import user1 from '../../Assets/Icons/user1.png'
import user2 from '../../Assets/Icons/user2.png'
import user3 from '../../Assets/Icons/user3.png'
import user4 from '../../Assets/Icons/user4.png'
import stars from '../../Assets/Icons/stars.png'

const Section4 = () => {
  return (
    
    <div className='h-[990px] md:h-[950px] lg:h-[650px] '>
        <div className='lg:grid grid-cols-2 lg:mt-32 '>
       <div className='lg:mt-[-10%]'>
        <div className=' lg:w-[300px] lg:ml-[10%] '>
             <h3 className='text-[24px] md:text-[30px] text-center lg:text-[36px]  mt-16 font-medium'>Businesses love  working with us</h3>
        </div>
        
        <div className='grid grid-cols-2 mt-5  w-[420px] ml-[25px] md:ml-[13%] md:w-[700px] lg:w-[550px] lg:ml-[13%] h-[250px]  '>
            
            <div className='h-[110px] w-[200px] md:h-[120px] md:w-[250px] lg:w-[250px] '>
                <h4 className='text-[19px] md:text-[22px] lg:text-[24px] text-[#3D65FF]  font-medium'>250+</h4>
                <p className='text-[16px] text-[#697587]'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
            </div>
            <div className='h-[110px] w-[200px] md:h-[120px] md:w-[250px] lg:w-[250px] '>
                <h4 className='text-[19px] md:text-[22px] lg:text-[24px] text-[#3D65FF]  font-medium'>250+</h4>
                <p className='text-[16px] text-[#697587]'>Urna tincidunt vestibulum massa placerat quis eget non viverra.</p>
            </div> 
            <div className='h-[110px] w-[200px] md:h-[120px] md:w-[250px] lg:w-[250px] '>
                <h4 className='text-[19px] md:text-[22px] lg:text-[24px] text-[#3D65FF]  font-medium'>250+</h4>
                <p className='text-[16px] text-[#697587]'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
            </div>
            <div className='h-[110px] w-[200px] md:h-[120px] md:w-[250px] lg:w-[250px]'>
                <h4 className='text-[19px] md:text-[22px] lg:text-[24px] text-[#3D65FF]  font-medium'>250+</h4>
                <p className='text-[16px] text-[#697587]'>Urna tincidunt vestibulum massa placerat quis eget non viverra.</p>
            </div>
        </div>
        </div> 

        <div className=' '>
            <div className='ml-[20px] md:ml-[12%] h-[100px] w-[380px] md:w-[450px] p-4 rounded-xl shadow-xl'>
                <img className='md:h-[45px] md:ml-2'  src={user1} alt="" />
                <h4 className='font-medium text-[16px] mt-[-16%] ml-[20%] md:mt-[-12%] md:ml-[16%]'>Floyd Miles</h4>
                <img className='h-[18px] md:h-[20px]  ml-[20%] md:ml-[16%]' src={stars} alt="" />
                <p className='text-[#697587] text-[14px]  ml-[20%] md:ml-[16%]'>“Very quick and easy! Great service, thanks!”</p>
            </div>
            <div className='mt-8 ml-[20px] md:ml-[12%] h-[150px] md:h-[130px] w-[380px] md:w-[450px] p-4 rounded-xl shadow-xl'>
                <img className='md:h-[45px] md:ml-2'  src={user2} alt="" />
                <h4 className='font-medium text-[16px] mt-[-16%] ml-[20%] md:mt-[-12%] md:ml-[16%]'>Arlene McCoy</h4>
                <img className='h-[18px] md:h-[20px]  ml-[20%] md:ml-[16%]' src={stars} alt="" />
                <p className='text-[#697587] text-[14px]  ml-[20%] md:ml-[16%]'>“The Services provided are really great, we received a genuine advice and at very reasonable cost. all the work went hassle-free and no complication. Mr. Qamar i...”</p>
            </div>
            <div className='mt-8 ml-[20px] md:ml-[12%] h-[150px] md:h-[140px] w-[380px] md:w-[450px] p-4 rounded-xl shadow-xl'>
                <img className='md:h-[45px] md:ml-2'  src={user3} alt="" />
                <h4 className='font-medium text-[16px] mt-[-16%] ml-[20%] md:mt-[-12%] md:ml-[16%]'>Leslie Alexander</h4>
                <img className='h-[18px] md:h-[20px]  ml-[20%] md:ml-[16%]' src={stars} alt="" />
                <p className='text-[#697587] text-[14px]  ml-[20%] md:ml-[16%]'>“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”</p>
            </div>
            <div className='mt-8 ml-[20px] md:ml-[12%] h-[150px] md:h-[130px] w-[380px] md:w-[450px] p-4 rounded-xl shadow-xl'>
                <img className='md:h-[45px] md:ml-2'  src={user4} alt="" />
                <h4 className='font-medium text-[16px] mt-[-16%] ml-[20%] md:mt-[-12%] md:ml-[16%]'>Marvin McKinney</h4>
                <img className='h-[18px] md:h-[20px]  ml-[20%] md:ml-[16%]' src={stars} alt="" />
                <p className='text-[#697587] text-[14px]  ml-[20%] md:ml-[16%]'>“I ordered a Balmain T-shirt dress from here and it is fabulous. The packaging was extremely professional and nice and sweets were added in the box. Extremely sa...”</p>
            </div>
            
        </div>
        </div>

    </div>
  )
}

export default Section4
