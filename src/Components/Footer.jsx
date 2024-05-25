import React from 'react'
import icons from '../Assets/FooterImg/icons.png'
import Frame from '../Assets/FooterImg/Frame.png'
import logo from '../Assets/FooterImg/logo.png'

const Footer = () => {
    return (

           



            <body className="bg-black text-white font-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div  className='ml-6 lg:w-[75%]'>
                            <img className='' src={logo} alt="" />
                            <p className="mt-4">Elementum cras euismod sem in enim vel nunc nulla. At scelerisque tristique purus.</p>
                            <img className='mt-4' src={Frame} alt="" />
                            <div>
                                <img className='h-[80px] mt-5' src={icons} alt="" />
                            </div>
                        </div>

                    <div className=''>
                        <div  className=' ml-6 w-[40%] md:w-[75%]'>
                            <h3 className="text-lg font-semibold">Nam felis a</h3>
                            <p className="mt-4 text-[14px]">Enim maecenas facilisi amet amet dui. Namque massa urna vitae nullam fermentum. Posuere dis.</p>
                            <h3 className="text-lg font-semibold mt-8">Sit ut vitae</h3>
                            <p className="mt-4 text-[14px]">Lectus sapien sem massa libero bibendum. Purus placerat arcu diam ultrices. Non aliquet quam arcu proin.</p>
                        </div>
                    </div>

                        <div  className='ml-6 w-[40%] md:w-[75%]'>
                            <h3 className="text-lg font-semibold">Volutpat</h3>
                            <p className="mt-4 text-[14px]">Ultricies consequat tellus luctus vel morbi mattis vulputate. Eleifend dui enim.</p>
                            <h3 className="text-lg font-semibold mt-8">In libero enim</h3>
                            <p className="mt-4 text-[14px]">In cursus tellus non etiam volutpat massa varius libero justo. Eu ultrices donec leo diam.</p>
                        </div>


                        <div className='ml-6 w-[40%] md:w-[75%] '>
                            <h3 className="text-lg font-semibold">Adipiscing</h3>
                            <p className="mt-4 text-[14px]">Amet diam aliquet eget posuere tincidunt. Sed nunc feugiat pelentesque. Non tincidunt integer auctor feugiat in egestas in.</p>
                            <h3 className="text-lg font-semibold mt-8">Congue auctor</h3>
                            <p className="mt-4 text-[14px]">Nunc convallis consectetur nulla sollicitudin elementum sagittis gravida quisque. Aliquam eu tristique id sed placerat vel rhoncus.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[30px] lg:h-[40px] bg-[#697587]  '>
                        <p className='text-[10px] py-2 px-10 md:px-14 lg:py-3 lg:px-20 lg:text-[12px]'>© 2023 All rights reserved</p>
                </div>
            </body>



       
    )
}

export default Footer
