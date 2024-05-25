import React,{useRef} from 'react'
import Frame from '../../Assets/BgImg/Frame.png'
import img1 from '../../Assets/BgImg/img1.jpg'
import account from '../../Assets/FormIcon/account.png'
import cellphone from '../../Assets/FormIcon/cellphone.png'
import delivery from '../../Assets/FormIcon/delivery.png'
import email from '../../Assets/FormIcon/email.png'
import file from '../../Assets/FormIcon/file.png'
import translate from '../../Assets/FormIcon/translate.png'
import translate1 from '../../Assets/FormIcon/translate1.png'
import Component2 from '../Industrypage/Component2'
import Component3 from '../Industrypage/Component3'
import Component4 from '../Industrypage/Component4'
import Component5 from '../Industrypage/Component5'
import Component6 from '../Industrypage/Component6'
import emailjs from '@emailjs/browser'

const Component1 = () => {
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


      
    <div className='h-[665px]  md:grid grid-cols-2 md:py-10 ' style={{ backgroundImage:`url(${img1})` , backgroundSize:"cover" , backgroundPosition:"center" }}>

        <div className='w-[80%] ml-10 py-10 md:w-[70%] md:ml-12 lg:ml-24 text-white font-bold'>
            <h1 className='text-[20px] md:text-[24px] lg:text-[48px] md:mt-10 lg:mt-[15%]'>Lorem ipsum dolor sit amet consectetur. Praesent sit enim.</h1>
        </div>
        <div className=''  style={{backgroundImage:`url(${Frame})` , backgroundRepeat:"no-repeat" , backgroundPosition:"right top"}}>

        <form ref={form} onSubmit={handleSubmit}>
            <div className='ml-[45px] md:ml-[1%] p-4 mt-10 w-[80%] md:w-[85%] lg:w-[65%] lg:ml-40  lg:h-[500px] lg:mt-[30%] rounded-xl bg-white  '>
                <div className='relative'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={account} alt="" /> 
                  </div>
                    <input className=' border-2 py-2  w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='name' type="text" placeholder='Name'  required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={email} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='email' type="text" placeholder='E-mail'  required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={cellphone} alt="" /> 
                  </div>
                    <input className=' border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='phone' type="text" placeholder='Phone'  required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={translate} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='source' type="text" placeholder='Source Language'  required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={translate1} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='language' type="text" placeholder='To Language'  required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={delivery} alt="" /> 
                  </div>
                    <input className=' border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='delivery' type="text" placeholder='Delivery Options'  required/>
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2 ' src={file} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='message' type="text" placeholder='Your Messags'  required />
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

export default Component1
