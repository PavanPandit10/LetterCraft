import React,{useRef} from 'react'
import Vector1 from '../../Assets/BgImg/Vector1.png'
import Frame from '../../Assets/BgImg/Frame.png'
import account from '../../Assets/FormIcon/account.png'
import cellphone from '../../Assets/FormIcon/cellphone.png'
import delivery from '../../Assets/FormIcon/delivery.png'
import email from '../../Assets/FormIcon/email.png'
import file from '../../Assets/FormIcon/file.png'
import translate from '../../Assets/FormIcon/translate.png'
import translate1 from '../../Assets/FormIcon/translate1.png'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import Component5 from './Component5'
import Component6 from './Component6'
import emailjs from '@emailjs/browser';

const Certified = () => {
  const form = useRef()
  const handleSubmit =(e)=>{
    e.preventDefault();
  
      emailjs
        .sendForm('service_ihrewie', 'template_358fuko', form.current,{publicKey : 'xfUSt9tK1MpaLJiMv'})
        .then((res)=>{
          console.log(res)
          alert("Email sent successfully")
        })
        .catch((err)=>{
          console.log(err)
          alert('error sending email')
        })
  }
  return (

    <>

    
    <div className='h-auto pb-10 lg:h-[735px] md:grid grid-cols-2 md:py-10 ' style={{ backgroundImage:`url(${Vector1})` , backgroundSize:"cover" , backgroundPosition:"center"}}>

    <div className='w-[90%] md:w-[82%] lg:h-auto  text-white py-10 lg:mt-[15%] ml-[20px] md:ml-[12%]  '>
        <h1 className='text-[20px] md:text-[24px] lg:text-[48px] font-bold'>Certified & Notarised Translations in  Singapore</h1> 
        <p className='text-[10px] md:text-[13px] lg:text-[16px] mt-2'>If you are moving into Singapore or moving to a different country, there are a wealth of personal documents that you will need translate. <br /> <br />
            Embassies, State Court, MOM, MOE, LTA and ACRA. The ICA requires that the translated documents for visa applications are also notarised and authenticated by SAL. We arrange this for you as part of our Certified Translations service.</p>
            <div className=' lg:w-[80%] mt-5'>
                <button className='text-[10px] md:text-[12px] lg:text-[14px] py-2 px-2 rounded-full bg-blue-600'>Personal Documents Translation : $40 only and No GST.</button>
            </div>
    </div>

    <div className='  lg:flex flex-row gap-5 lg:py-[50%] lg:mt-[-6%] ' style={{backgroundImage:`url(${Frame})` , backgroundRepeat:"no-repeat" , backgroundPosition:"right top"}}>
        
    <form ref={form} onSubmit={handleSubmit}>
            <div className='ml-[20px] p-4 lg:ml-[50%] w-[90%] md:w-[85%] md:mt-10  lg:w-[150%] lg:h-[500px] lg:mt-[-50%] rounded-xl bg-white '>
                <div className='relative'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={account} alt="" /> 
                  </div>
                    <input className=' border-2 py-2  w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='name' type="text" placeholder='Name'   required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={email} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='email' type="text" placeholder='E-mail'   required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={cellphone} alt="" /> 
                  </div>
                    <input className=' border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='phone' type="text" placeholder='Phone'  required />
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={translate} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='source' type="text" placeholder='Source Language'  required />
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={translate1} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='language' type="text" placeholder='To Language'  required />
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={delivery} alt="" /> 
                  </div>
                    <input className=' border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='delivery' type="text" placeholder='Delivery Options'  required />
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2 ' src={file} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='message' type="text" placeholder='Your Message'  required />
                </div>
                <div>
                  <button type='submit' className=' border-2 py-2 px-4 bg-[#3D65FF] rounded-full text-white mt-4 '>Send Message</button>
                </div>
            </div>
           
        </form>

    </div>
    </div>

    <Component2/>
    <Component3/>
    <Component4/>
    <Component5/>
    <Component6/>

    </>


  )
}

export default Certified
