import React from 'react'
import Vector1 from '../../Assets/BgImg/Vector1.png'
import abtlogo from '../../Assets/Logos/abtlogo.png'
import Frame from '../../Assets/BgImg/Frame.png'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'


const About = () => {
  return (

    <>

    <div className=' h-[520px] lg:h-[650px] mt-[-70px]  grid grid-cols-2 md:py-10' style={{ backgroundImage:`url(${Vector1})` , backgroundSize:"cover" , backgroundPosition:"center"}}>
            <div className='ml-10 lg:mt-[15%] md:ml-10 lg:ml-[10%]'>
                <div className=' text-white lg:h-[300px] w-[150%] md:w-[100%] lg:w-[100%]'>
                <div className='w-[80%] lg:w-[70%]'>
                    <h1 className=' lg:text-[48px] font-bold'>About us</h1>
                    <p className='text-[12px] md:text-[14px] lg:text-[16px] '>In mi nunc auctor eget a donec placerat. Enim turpis turpis sed eu eu. Neque duis orci nam in mauris a sed. Ac id leo posuere et mattis in cras dapibus. Tortor sapien amet cursus at consequat faucibus laoreet eu at. Eu ac mattis risus augue. Ultricies adipiscing euismod id egestas lacus platea senectus mattis mattis. Erat sit amet non porttitor id elementum. Et vel placerat eros risus molestie hac diam sed. Lectus fusce volutpat consequat augue. Tortor cras urna risus accumsan cursus. Molestie libero ut sapien ultrices amet nunc fusce.</p>
                </div>
            </div> 
        </div>

        <div className=' ' style={{backgroundImage:`url(${Frame})` , backgroundRepeat:"no-repeat" , backgroundPosition:"right top"}}>            <div className='mt-16 ml-16 md:mt-[20%] w-[40%]'>
            <img className='h-[100px] md:h-[150px] lg:h-[200px]' src={abtlogo} alt="" />
            </div>
                   
            </div>

    </div>
   
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
    <Section5/>
   <Section6/>
   <Section7/>
   </> 
  )

}

export default About
