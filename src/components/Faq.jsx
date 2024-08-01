import React, { useState } from 'react'
import { FaqBottomline } from '../common/Icon'
import { FAQS } from '../common/Helper';
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='bg-faq_bg bg-no-repeat bg-full -mt-[2px] md:pt-[100px] sm:pt-16 pt-20 lg:pb-[120px] md:pb-24 sm:pb-20 pb-16'>
            <div className='container mx-auto px-3'>
                <div className='flex justify-center '>
                    <div className='relative inline-block'>
                        <h2 className='font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white max-w-[105px]'>
                            FAQ
                        </h2>
                        <div className='absolute md:left-[-640%] sm:left-[-756%] left-[-861%] sm:top-[16%] top-[12%]'>
                            <FaqBottomline />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container max-w-[1164px] px-3'>
                <div className='max-w-[480px] sm:max-w-[576px] md:max-w-[768px] lg:max-w-[884px] mx-auto lg:pt-20 md:pt-16 pt-14'>
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden ease-linear duration-300 ${activeIndex === index ? " border-[1px] border-skyBlue bg-accordian_gradient shadow_border" : "border-transparent border-[1px]"} mt-6`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`${activeIndex === index ? "p-[8px_8px_0px_8px] lg:p-[21px_20px_0px_20px] border-transparent" : "p-2 lg:p-[21px_20px]"} w-full text-left bg-blurBlack backdrop-blur-lg flex items-center justify-between border-[1px] border-gray transition duration-300 ease-in-out  `}
                            >
                                <span className="font-orbitron font-medium text-base leading-6 sm:text-lg md:text-[20px] md:leading-[26px] lg:text-2xl lg:leading-9 text-white">{faq.question}</span>
                                <span className="float-right">
                                    <svg width="40" className={`${activeIndex === index && "transform rotate-180 hidden"} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V18.9999L13 18.9999C12.4477 18.9999 12 19.4476 12 19.9999C12 20.5522 12.4477 20.9999 13 20.9999L19 20.9999V27C19 27.5523 19.4477 28 20 28C20.5523 28 21 27.5523 21 27V20.9999L27 20.9999C27.5523 20.9999 28 20.5522 28 19.9999C28 19.4476 27.5523 18.9999 27 18.9999L21 18.9999V13Z" fill="white" />
                                    </svg>
                                    <svg className={`${activeIndex === index ? "block" : "hidden"} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M13 19L19 19H21L27 19C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21L21 21L19 21L13 21C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19Z" fill="white" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden ease-linear duration-300 ${activeIndex === index ? "h-auto" : "max-h-0"
                                    }`}
                            >
                                <div className="font-poppins font-normal text-[15px] leading-[20px] lg:text-[18px] lg:leading-[28px] opacity-70 text-white max-w-[759px] p-[2px_8px_8px_8px] lg:p-[6px_20px_17px_20px]">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Faq


