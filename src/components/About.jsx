import React from 'react'
import onehand_Lifting from '../assets/image/webp/onehand_Lifting.webp'
import CommonButton from '../common/Common_Button'
import about_Bg from '../assets/image/webp/about_Bg.webp'
import { AboutBottomline } from "../common/Icon"
import group_line from '../assets/image/webp/group_Line.webp'
const About = () => {
    return (
        <div id='AboutUs' className=' bg-black relative'>
            <div className='container mx-auto px-3 lg:pt-[125px] md:pt-24 sm:pt-16 pt-14 md:pb-24 sm:pb-16 pb-14 relative z-10'>
                <div className='flex justify-center pb-[97px]'>
                    <div className='relative inline-block'>
                        <h2 className='font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white max-w-[410px]'>
                            About 1v2 Studio
                        </h2>
                        <div className='absolute md:left-[-132%] sm:left-[-157%] left-[-190%] md:top-[16%] sm:top-[14%] top-[4%]'>
                            <AboutBottomline />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap -mx-3'>
                    <div className='lg:w-6/12 w-full px-3 '>
                        <div className='relative flex lg:justify-start justify-center '>
                            <img className='max-w-[517px] relative z-10 w-full' src={onehand_Lifting} alt="#" />
                            <div className='bg-darkRed blur-3xl sm:flex hidden max-w-[339px] w-full h-[339px] absolute lg:left-[9%] left-[26%] bottom-[16%] '>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-6/12 w-full px-3 flex lg:justify-end justify-center items-center relative lg:pt-0 pt-6'>
                        <div className='flex flex-col lg:items-start items-center'>
                            <h2 className='font-bold md:text-custom-38 sm:text-4xl text-custom-26 md:leading-[57px] sm:leading-10 leading-9 font-orbitron text-white max-w-[535px]'>
                                Pushing Boundaries in
                            </h2>
                            <h2 className='lg:ms-3 lg:ps-2 lg:pt-0 md:pt-1 pt-2 after:content-[""] after:absolute after:bg-gaming_Top_Border after:bg-no-repeat after:bg-full lg-after:top-[0%] lg:after:top-[8%] after:top-[10%] sm:after:left-[-8%] after:left-[-5%] md:after:w-[425px] sm:after:w-[400px] after:w-[280px] after:h-[21px] before:content-[""] before:absolute before:bg-gaming_Bottom_Border before:bg-no-repeat before:bg-full md:before:w-[425px] sm:before:w-[400px] before:w-[280px] before:h-[21px] md:before:bottom-[1%] before:bottom-[-8%] sm:before:right-[-10%] before:right-[-6%] relative font-bold md:text-custom-38 sm:text-4xl text-custom-26 md:leading-[57px] sm:leading-10 leading-9 font-orbitron text-white max-w-[420px]'>
                                Gaming Innovation
                            </h2>
                            <p className='font-poppins lg:text-start text-center text-lg leading-7 font-normal text-white opacity-70 max-w-[535px] pt-[18px] md:pb-[42px] sm:pb-7 pb-5'>
                                We are an indie game development studio dedicated to crafting innovative experiences on the Roblox platform. Our passion for creativity and excellence drives us to push the boundaries of what’s possible in gaming.
                            </p>
                            <CommonButton buttonName="Read More" />
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute right-0 top-[20%] max-w-[741px] w-full' src={about_Bg} alt="#" />
            <div className='bg-ellipse_gradient blur-3xl md:flex hidden max-w-[187px] w-full h-[187px] absolute right-[-6%] opacity-40 top-[-6%] '>
            </div>
            <div className='bg-ellipse_gradient blur-3xl flex max-w-[187px] w-full h-[187px] absolute left-[-9%] opacity-40 bottom-[-6%] '>
            </div>
            <img className='absolute 2xl:opacity-100 opacity-40 right-[5%] bottom-[16%]' src={group_line} alt="#" />
        </div>
    )
}

export default About
