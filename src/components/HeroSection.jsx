import React from 'react'
import Header from './Header'
import CommonButton from '../common/Common_Button'
import power_Lifting from '../assets/image/webp/power_Lifting.webp'
import group_Line from '../assets/image/webp/group_Line.webp'
const HeroSection = () => {
    return (
        <div id='Home' className='bg-hero_Bg bg-cover bg-no-repeat bg-center relative'>
            <Header />
            <div className='container mx-auto px-[12px] lg:pt-36 md:pt-24 sm:pt-16 pt-12 lg:pb-[232px] md:pb-24 sm:pb-16 pb-12 relative '>
                <div className='flex flex-row flex-wrap -mx-3'>
                    <div className='lg:w-6/12 w-full px-3 z-20'>
                        <h1 className='font-bold lg:text-7xl sm:text-6xl text-5xl font-orbitron max-w-[490px] text-white lg:leading-[93px] sm:leading-[60px] leading-[50px] '>
                            Welcome to 1v2 Studio
                        </h1>
                        <p className='font-normal font-poppins sm:text-xl text-lg sm:leading-8 leading-7 text-white opacity-70 max-w-[465px] pt-4 md:pb-11 sm:pb-7 pb-5'>
                            Leading the Way in Creating Unique and Innovative Experiences on Roblox.
                        </p>
                        <CommonButton buttonName="Contact Us" />
                    </div>
                    <div className='w-6/12 px-3 '>
                    <img className='sm:opacity-100 opacity-50 w-full lg:max-w-[602px] md:max-w-[440px] sm:max-w-[350px] max-w-[300px] absolute right-[1%] z-[1] bottom-[10%]' src={power_Lifting} alt="#" />
                    </div>
                </div>
            </div>
            <img className='absolute 2xl:left-[5%] left-[1%] lg:flex hidden bottom-[4%] max-2xl:opacity-40' src={group_Line} alt="#" />
        </div>
    )
}

export default HeroSection
