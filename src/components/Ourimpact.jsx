import React from 'react'
import { OurimpectBottomline } from '../common/Icon'
import ourimpact_img from '../assets/image/webp/ourimpact_img.webp'
import group_line from '../assets/image/webp/group_line.webp'
const Ourimpact = () => {
    return (
        <div id='portfolio' className='bg-ourimpact_bg relative bg-no-repeat bg-cover -mt-[2px] md:pb-[121px] sm:pb-20 pb-14'>
            <div className='container mx-auto px-[12px]'>
                <div className='flex justify-center sm:pb-28 pb-16'>
                    <div className='relative inline-block'>
                        <h2 className='font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white max-w-[258px]'>
                            Our Impact
                        </h2>
                        <div className='absolute md:left-[-236%] sm:left-[-286%] left-[-324%] sm:top-[16%] top-[4%]'>
                            <OurimpectBottomline />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap items-center -mx-3'>
                    <div className='lg:w-3/12 w-full px-3 flex lg:justify-start justify-center'>
                        <h3 className='font-bold md:text-custom-64 sm:text-5xl text-4xl text-white leading-[83px] font-orbitron'>
                            What 1v2 Studio
                        </h3>
                    </div>
                    <div className='lg:w-5/12 w-full px-3 flex lg:justify-end justify-center lg:py-0 sm:py-8 py-6'>
                        <img className='max-w-[445px] pointer-events-none relative z-10 w-full' src={ourimpact_img} alt="#" />
                        <div className='bg-darkRed blur-3xl sm:flex hidden max-w-[339px] w-full h-[339px] absolute xl:left-[34%] left-[30%] lg:bottom-[23%] bottom-[37%]'>
                        </div>
                    </div>
                    <div className='lg:w-4/12 w-full px-3'>
                        <div className='flex lg:justify-start lg:items-start justify-center items-center flex-col'>
                            <p className='font-semibold text-custom-26 leading-[41px] font-poppins text-white'>
                                <span className='text-4xl bg-clip-text text-transparent bg-text_gradient'>13</span> experiences
                            </p>
                            <p className='font-semibold text-custom-26 leading-[41px] font-poppins text-white py-[14px]'>
                                <span className='text-4xl bg-clip-text text-transparent bg-text_gradient'>10.8K</span> active now
                            </p>
                            <p className='font-semibold text-custom-26 leading-[41px] font-poppins text-white'>
                                <span className='text-4xl bg-clip-text text-transparent bg-text_gradient'>1.086 </span>billion visits
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-ellipse_gradient blur-3xl lg:flex hidden max-w-[187px] w-full h-[187px] absolute left-[-6%] opacity-40 top-[-15%] '>
            </div>
            <div className='bg-ellipse_gradient z-10 lg:flex hidden blur-3xl max-w-[187px] w-full h-[187px] absolute right-[-8%] opacity-40 bottom-[-4%] '>
            </div>
            <img className='absolute lg:flex hidden 2xl:left-[5%] left-[1%] bottom-[2%] max-2xl:opacity-40' src={group_line} alt="#" />
        </div>
    )
}
export default Ourimpact
