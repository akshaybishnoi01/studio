import React from 'react'
import CommonButton from '../common/Common_Button';
import news_Bg from '../assets/image/webp/news_Bg.webp'
import group_Line from '../assets/image/webp/group_Line.webp'
const Newsletter = () => {
  return (
    <div className=' bg-black mt-[-2px] relative pt-7'>
      <div className='container mx-auto px-3 flex justify-center relative z-10'>
        <div className='flex flex-col justify-center items-center bg-news_Card bg-no-repeat max-w-[900px] w-full min-h-[317px] bg-full md:p-[44px] sm:p-8 p-5'>
          <h4 className='after:content-[""] after:absolute sm:after:bg-news_Top_Border after:bg-no-repeat after:bg-full after:top-[12%] after:left-[45%] md:after:w-[373px] after:w-[260px] after:h-[22px] before:content-[""] before:absolute sm:before:bg-news_Bottom_Border before:bg-no-repeat before:bg-full md:before:w-[373px] before:w-[260px] before:h-[22px] before:bottom-[6%] before:right-[-2%] relative max-w-[660px] text-white font-bold md:text-custom-42 sm:text-3xl text-2xl text-center md:leading-[63px] sm:leading-[50px] leading-8 font-orbitron'>
            Subscribe to our newsletter
          </h4>
          <p className='max-w-[554px] text-center pt-3 sm:pb-9 pb-4  text-lg leading-7 font-normal font-poppins text-white opacity-70'>
            Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.
          </p>
          <div className='flex sm:flex-row flex-col  justify-center items-center sm:gap-4 mb-4 max-w-[489px] w-full sm:ps-4 p-[6px] border-[1px] border-lighterWhite'>
            <input type='email' aria-label='email input' placeholder='Enter your email' className='outline-0 bg-transparent text-lg leading-7 font-normal font-poppins text-white opacity-70 w-full' />
            <div className='sm:flex hidden'>
            <CommonButton buttonName="Submit Now" />
            </div>
          </div>
<div className='sm:hidden flex'>
<CommonButton buttonName="Submit Now" />
</div>

        </div>
      </div>
      <div className='bg-darkRed blur-3xl lg:flex hidden max-w-[155px] z-[1] w-full h-[155px] opacity-30 absolute left-[20%] bottom-[35%] '>
      </div>
      <div className='bg-darkRed blur-3xl lg:flex hidden max-w-[155px] z-[1] w-full h-[155px] opacity-30 absolute right-[20%] bottom-[30%] '>
      </div>
      <div className='bg-darkRed blur-3xl lg:flex hidden z-10 max-w-[155px] w-full h-[155px] opacity-30 absolute left-[-2%] top-[-14%] '>
      </div>
      <img className='lg:max-w-[510px] max-w-[460px] w-full absolute z-0 bottom-[0%] xl:left-[33%] md:left-[26%] sm:left-[18%] left-[0%]' src={news_Bg} alt="#" />
   <img className='absolute top-[-60%] left-[4%] lg:flex hidden' src={group_Line} alt="#" />
    </div>
  )
};

export default Newsletter
