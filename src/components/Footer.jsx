import React from 'react'
import logo from '../assets/image/webp/logo.webp'
import { Discord, Twitter } from '../common/Icon'
import group_Line from '../assets/image/webp/group_Line.webp'
const Footer = () => {
    return (
        <div id='ContactUs' className='bg-footer_Bg bg-no-repeat bg-cover -mt-[2px] pt-12 relative'>
            <div className='container px-3 mx-auto flex justify-center pb-11'>
                <div className='flex flex-col items-center'>
                    <img className='w-full max-w-[86px]' src={logo} alt="#" />
                    <p className='max-w-[538px] font-poppins font-normal text-lg leading-6 text-white opacity-70 text-center pt-4 pb-5'>
                        Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.
                    </p>
                    <div className='flex gap-5'>
                        <a className='hover:scale-90 custom_duration' href="https://x.com/?lang=en" target='blank'>
                            <Twitter/>
                        </a>
                        <a className='hover:scale-90 custom_duration' href="https://discord.com/" target='blank'>
                            <Discord/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='border-[2px] border-footerBorder'></div>
            <p className='font-poppins font-medium text-base leading-6 text-center text-white opacity-50 pt-[22px] pb-4'>
            Copyright@2024 All right reserved
            </p>
            <img className='absolute bottom-[24%] right-[4%] lg:flex hidden' src={group_Line} alt="#" />
            <div className='bg-darkRed blur-3xl lg:flex hidden max-w-[155px] z-[1] w-full h-[155px] opacity-30 absolute right-[-2%]  bottom-[55%] '>
            </div>
        </div>
    )
}

export default Footer
