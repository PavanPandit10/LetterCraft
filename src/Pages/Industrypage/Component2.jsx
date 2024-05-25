import React from 'react'
import logo1 from '../../Assets/Logos/logo1.png'
import logo2 from '../../Assets/Logos/logo2.png'
import logo3 from '../../Assets/Logos/logo3.png'
import logo4 from '../../Assets/Logos/logo4.png'
import logo5 from '../../Assets/Logos/logo5.png'

const Component2 = () => {
  return (
    <div className='h-auto'>

            <div className=' w-[80%]  flex ml-10 py-10 md:ml-20 md:py-16 lg:ml-[18%] lg:py-24'>
                <div>
                    <img src={logo1} alt="" />
                </div>
                <div>
                    <img src={logo2} alt="" />
                </div><div>
                    <img src={logo3} alt="" />
                </div><div>
                    <img src={logo4} alt="" />
                </div>
                <div>
                    <img src={logo5} alt="" />
                </div>
               
            </div>

    </div>
  )
}

export default Component2
