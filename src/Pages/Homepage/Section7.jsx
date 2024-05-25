import React,{useRef} from 'react'
import Vector4 from '../../Assets/BgImg/Vector4.png'
import account from '../../Assets/FormIcon/account.png'
import cellphone from '../../Assets/FormIcon/cellphone.png'
import delivery from '../../Assets/FormIcon/delivery.png'
import email from '../../Assets/FormIcon/email.png'
import file from '../../Assets/FormIcon/file.png'
import translate from '../../Assets/FormIcon/translate.png'
import translate1 from '../../Assets/FormIcon/translate1.png'
import icon1 from '../../Assets/Icons/icon1.png'
import emailjs from '@emailjs/browser'

const Section7 = () => {
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
    <div className='h-[1300px] md:h-[1120px] lg:h-[850px]' style={{ backgroundImage:`url(${Vector4})` ,backgroundRepeat:"no-repeat" ,  backgroundSize:"cover" , backgroundPosition:"center"}}>

          <div className='text-white text-center w-[85%] ml-[7%] md:w-[80%] md:ml-[8%] lg:w-[30%] lg:ml-20 lg:text-left py-16 lg:py-36 '>
              <h2 className='text-[36px] font-medium'>Get in touch</h2>
              <p className='text-[12px] md:text-[16px]'>Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo vel. Nec viverra commodo at convallis faucibus amet. Aliquam a id aliquam pulvinar neque.</p>
          </div>
 
          <div className='lg:grid grid-cols-2'>
        
        <form ref={form} onSubmit={handleSubmit}>
            <div className='ml-[70px] md:ml-[16%] lg:mt-[-14%] lg:ml-[12%] '>
                <div className='relative'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={account} alt="" /> 
                  </div>
                    <input className='py-2 w-[80%] md:w-[80%] lg:w-[60%] px-10 rounded-lg outline-none' name='name' type="text" placeholder='Name' required/>
                </div>
                <div className='relative mt-2'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={email} alt="" /> 
                  </div>
                    <input className='py-2 w-[80%] md:w-[80%] lg:w-[60%] px-10 rounded-lg outline-none' name='email' type="text" placeholder='E-mail'  required />
                </div>
                <div className='relative mt-2'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={cellphone} alt="" /> 
                  </div>
                    <input className='py-2 w-[80%] md:w-[80%] lg:w-[60%] px-10 rounded-lg outline-none' name='phone' type="text" placeholder='Phone'  required />
                </div>
                <div className='relative mt-2'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={translate} alt="" /> 
                  </div>
                    <input className='py-2 w-[80%] md:w-[80%] lg:w-[60%] px-10 rounded-lg outline-none' name='source' type="text" placeholder='Source Language'  required />
                </div>
                <div className='relative mt-2'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={translate1} alt="" /> 
                  </div>
                    <input className='py-2 w-[80%] md:w-[80%] lg:w-[60%] px-10 rounded-lg outline-none' name='language' type="text" placeholder='To Language'  required />
                </div>
                <div className='relative mt-2'>
                  <div className='absolute'>
                    <img className='my-2 ml-2' src={delivery} alt="" /> 
                  </div>
                    <input className='py-2 w-[80%] md:w-[80%] lg:w-[60%] px-10 rounded-lg outline-none' name='delivery' type="text" placeholder='Delivery Options'  required />
                </div>
                <div className='relative mt-2'>
                  <div className='absolute'>
                    <img className='my-2 ml-2 ' src={file} alt="" /> 
                  </div>
                    <input className='py-2 w-[80%] md:w-[80%] lg:w-[60%] px-10 rounded-lg outline-none' name='message' type="text" placeholder='Your Message'  required />
                </div>
                <div>
                  <button type='submit' className='py-2 px-4 bg-[#3D65FF] rounded-full text-white mt-4 '>Send Message</button>
                </div>
            </div>
        </form>

        <div>
          <div className='w-[86%] md:w-[70%] lg:w-[80%] lg:text-left lg:mt-[-36%] lg:ml-[-8px] ml-[7%] md:ml-[15%] mt-10 text-center text-white'>
            <h3 className='text-[18px] md:text-[22px] lg:text-[28px] font-medium'>Tortor in ut nisi magna</h3>
            <p>Eget dui varius semper vel viverra. Rhoncus felis tristique nisl eget ultricies semper vitae. Turpis porta maecenas quis felis tempus sed nisl risus sit. Nam viverra lobortis arcu justo netus quis fringilla sed lacus.</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ml-[8%] md:ml-[15%] lg:ml-0 w-[90%] md:w-[80%] lg:w-[90%]'>
            <div className='h-[120px] w-[170px] mt-14 '>
                <img className='' src={icon1}  alt="" />
                <p className=' text-white mt-2'>Certified translation and notarisation</p>
            </div>
            <div className=' h-[120px] w-[170px] mt-14 '>
                <img className='' src={icon1}  alt="" />
                <p className=' text-white mt-2'>Certified translation and notarisation</p>
            </div>
            <div className=' h-[120px] w-[170px] mt-14 '>
                <img className='' src={icon1}  alt="" />
                <p className=' text-white mt-2'>Certified translation and notarisation</p>
            </div>
            <div className=' h-[120px] w-[170px] mt-7 '>
                <img className='' src={icon1}  alt="" />
                <p className=' text-white mt-2'>Certified translation and notarisation</p>
            </div>
            <div className=' h-[120px] w-[170px] mt-7 '>
                <img className='' src={icon1}  alt="" />
                <p className=' text-white mt-2'>Certified translation and notarisation</p>
            </div>
            <div className=' h-[120px] w-[170px] mt-7 '>
                <img className='' src={icon1}  alt="" />
                <p className=' text-white mt-2'>Certified translation and notarisation</p>
            </div>
          </div>
        </div>

    </div>




    </div>
  )
}

export default Section7
