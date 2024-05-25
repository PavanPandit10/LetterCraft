import React from 'react'
import CPpana1 from '../../Assets/Images/CPpana1.png'
import CPpana2 from '../../Assets/Images/CPpana2.png'
import CPpana3 from '../../Assets/Images/CPpana3.png'
import CPpana4 from '../../Assets/Images/CPpana4.png'

const Component1 = () => {
  return (
    <div className='h-auto lg:h-[630px] pb-8 py-14'>
        <h2 className='text-[24px] ml-[5%] md:text-[28px] lg:text-[36px] font-medium'>We are constantly looking for</h2>

    
            <div className='mt-6 w-[90%] h-[600px] md:h-[400px] md:w-[95%] lg:w-[88%] justify-items-center  mx-auto grid grid-cols-2 md:grid-cols-4 '>
                    <div className='bg-white p-3 h-auto w-[150px]  md:w-[180px]  lg:w-[275px] shadow-lg rounded-lg'>
                        <img src={CPpana1} alt="" />
                        <h4  className='mt-3 text-[16px] md:text-[18px] lg:text-[24px]  font-medium'>Translators</h4>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                    </div>
                    <div className='bg-white p-3 h-auto w-[150px]  md:w-[180px]  lg:w-[275px] shadow-lg rounded-lg'>
                        <img src={CPpana2} alt="" />
                        <h4  className='mt-3 text-[16px] md:text-[18px] lg:text-[24px]  font-medium'>Industry Bloggers</h4>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                    </div>
                    <div className='bg-white p-3 h-auto w-[150px]  md:w-[180px] lg:w-[275px] shadow-lg rounded-lg'>
                        <img className='lg:ml-4' src={CPpana3} alt="" />
                        <h4  className='mt-3 text-[16px] md:text-[18px] lg:text-[24px]  font-medium'>Digital Marketing experts</h4>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                    </div>
                    <div className='bg-white p-3 h-auto w-[150px]  md:w-[180px]  lg:w-[275px] shadow-lg rounded-lg'>
                        <img  className='lg:ml-4' src={CPpana4} alt="" />
                        <h4  className='mt-3 text-[16px] md:text-[18px] lg:text-[24px]  font-medium'>Social Media Influencers</h4>
                        <p className='text-[10px] md:text-[12px] lg:text-[16px]'>Dapibus eget mi et eu ut tortor ipsum. Volutpat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                    </div>
                    
                  
                   
                    
            </div>
 
    </div>
    
  )
}

export default Component1
