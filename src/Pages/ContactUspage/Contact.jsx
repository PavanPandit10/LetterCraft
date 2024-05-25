import React,{useRef} from 'react'
import Vector from '../../Assets/ContactUsImg/Vector.png'
import Frame from '../../Assets/ContactUsImg/Frame.png'
import location from '../../Assets/ContactUsImg/location.png'
// import email from '../../Assets/ContactUsImg/email.png'
import phone from '../../Assets/ContactUsImg/phone.png'
import clock from '../../Assets/ContactUsImg/clock.png'
import account from '../../Assets/FormIcon/account.png'
import cellphone from '../../Assets/FormIcon/cellphone.png'
import delivery from '../../Assets/FormIcon/delivery.png'
import email from '../../Assets/FormIcon/email.png'
import file from '../../Assets/FormIcon/file.png'
import translate from '../../Assets/FormIcon/translate.png'
import translate1 from '../../Assets/FormIcon/translate1.png'
import Map from '../../Assets/Images/Map.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <div>   

    <div className='h-[520px] lg:h-[615px]  md:grid grid-cols-2 md:py-10' style={{ backgroundImage:`url(${Vector})` ,zIndex:1, backgroundSize:"cover" , backgroundPosition:"center"}}>
    <div className='ml-10 lg:mt-[15%] md:ml-10 lg:ml-[10%]'>
        <div className=' text-white lg:h-[300px] w-[150%] md:w-[100%] lg:w-[110%]'>
        <div className='w-[60%] md:w-[90%] lg:w-[70%]'>
            <h1 className=' lg:text-[48px] font-bold'>Contact Us</h1>
            <div className='relative mt-6'>
                <img className='absolute' src={location} alt="" />
                <p className='text-[12px] md:text-[14px] lg:text-[16px] ml-8 '>Servcorp, Suntec Tower Three, #42-01, 8 Temasek Boulevard Singapore 038988</p>
            </div>
            <div className='relative mt-2'>
                <img className='absolute' src={phone} alt="" />
                <p className='text-[12px] md:text-[14px] lg:text-[16px] ml-8 '>+65 8695 7260</p>
            </div>
            <div className='relative mt-2'>
                <img className='absolute' src={phone} alt="" />
                <p className='text-[12px] md:text-[14px] lg:text-[16px] ml-8 '>+65 6711 0135</p>
            </div>
            <div className='relative mt-2'>
                <img className='absolute' src={email} alt="" />
                <p className='text-[12px] md:text-[14px] lg:text-[16px] ml-8 '>info@lettercrafts.org</p>
            </div>
            <div className='relative mt-2'>
                <img className='absolute' src={clock} alt="" />
                <p className='text-[12px] md:text-[14px] lg:text-[16px] ml-8 '>09.00 AM-06.30 PM</p>
            </div>
           
        </div>
    </div> 
</div>

    <div className=' lg:h-[550px] lg:w-[550px] md:h-[400px] md:w-[380px] lg:ml-[120px] ' style={{ backgroundImage:`url(${Frame})` , backgroundSize:"no-repeat" , backgroundPosition:"right top"}}>

    <form ref={form} onSubmit={handleSubmit}>
            <div className='ml-[45px] md:ml-[1%] p-4 mt-10  w-[80%]  md:w-[85%]  lg:w-[75%] lg:h-[500px] lg:mt-[15%]  rounded-xl bg-white '>
                <div className='relative'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={account} alt="" /> 
                  </div>
                    <input className=' border-2 py-2  w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='name' type="text" placeholder='Name'  required />
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={email} alt="" /> 
                  </div>
                    <input className='border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none' name='email' type="text" placeholder='E-mail'  required />
                </div>
                <div className='relative mt-2 lg:mt-4'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={cellphone} alt="" /> 
                  </div>
                    <input className=' border-2 py-2 w-[100%] md:w-[100%] lg:w-[100%] px-10 rounded-lg outline-none'name='phone' type="text" placeholder='Phone'  required />
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


    <div className=' '>
        <img className='md:h-[580px] w-full' src={Map} alt="" />
    </div>


</div> 
  
  )
}

export default Contact
