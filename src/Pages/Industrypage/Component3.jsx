import React from 'react'
import bg4 from '../../Assets/BgImg/bg4.png'
import typing from '../../Assets/Images/typing.png'
// import tikicon from '../../Assets/Icons/tikicon.png'

const Component3 = () => {
  return (
    <div className=' pb-20 lg:h-[886px] md:flex py-20 lg:py-40' style={{ backgroundImage:`url(${bg4})` , backgroundSize:"cover" , backgroundPosition:"center"}}>
      
            <div className='md:w-[50%]  md:mt-32 lg:mt-24 grid justify-items-center'>
                <img className='h-[220px] lg:h-[400px]   ' src={typing} alt="" />
            </div>
            <div className='  md:w-[50%] lg:w-[40%] ml-[20px] md:ml-[-10px] py-10 md:mt-[-40px] text-white '>
                <h2 className='text-[20px] md:text-[28px] lg:text-[36px] font-medium'>Lorem ipsum dolor sit amet consectetur</h2>
                <p className='text-[10px] md:text-[13px] lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur. Vitae molestie venenatis pulvinar sed ullamcorper proin non nascetur quis. Aliquam donec sem vitae duis. Est odio massa facilisis nibh nullam nibh turpis odio aenean. Sed porta porta in auctor facilisi elit sed. Fusce viverra fames at aliquam urna vitae. <br /> <br />

                    Et nec tellus ac purus bibendum in. Diam donec ligula amet mauris urna. Ipsum nibh odio cras nec pulvinar consectetur vitae. Suspendisse enim odio sit feugiat tortor sed ornare tellus neque. Sed at nisl vel mattis. Enim pharetra facilisis tempus commodo. Vehicula lacus pellentesque id amet in venenatis quis phasellus. Dui sit est ullamcorper ultrices. Purus placerat placerat senectus eu euismod amet commodo velit. Eu id et mattis nec porta sed nisi sem ultrices. Fames viverra maecenas quis vitae id nisi. Laoreet praesent sapien ultricies aliquet faucibus augue neque sollicitudin. <br /> <br />

                    Mattis et diam sapien nulla at ut condimentum. Fermentum nec faucibus risus mattis hac hendrerit amet. Ipsum sit mus pellentesque volutpat malesuada eu urna. Enim nunc urna molestie pharetra feugiat euismod sed. Porttitor hendrerit arcu sed ac lobortis.</p>
            </div>


    </div>
  )
}

export default Component3
