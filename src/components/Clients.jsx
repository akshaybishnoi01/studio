import React from 'react'
import { ClientsBottomline, FiveStar } from "../common/Icon"
import group_Line from '../assets/image/webp/group_Line.webp'
import the_Women from '../assets/image/webp/the_Women.webp'
import Slider from 'react-slick'
const Clients = () => {
    var settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    bottom: "-48px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ul style={{ margin: "0" }} className="custom-dots2">
                    {dots}
                </ul>
            </div>
        )
    };
    return (
        <div id='Testimonial' className='bg-clients_Bg bg-no-repeat relative bg-full -mt-[2px] lg:pb-[70px] sm:pb-[20px]'>
            <div className='container mx-auto px-3'>
                <div className='flex justify-center pb-[120px]'>
                    <div className='relative inline-block'>
                        <h2 className='font-bold md:text-custom-42 sm:text-4xl text-[29px] text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white max-w-[489px]'>
                            Clients Testimonials
                        </h2>
                        <div className='absolute md:left-[-103%] sm:left-[-130%] left-[-170%] sm:top-[16%] top-[12%]'>
                            <ClientsBottomline />
                        </div>
                    </div>
                </div>
                <div className='sm:max-w-[576px] md:max-w-[768px] lg:max-w-[1041px] mx-auto'>
                    <Slider {...settings2}>
                        <div className='bg-clients_Cardbg bg-no-repeat bg-full lg:p-[40px_60px] sm:p-[40px_30px] p-[40px_12px] min-h-[411px] mx-auto max-w-[576px] md:max-w-[768px] lg:max-w-[1041px] w-full '>
                            <div className='flex lg:flex-row flex-wrap -mx-3'>
                                <div className='lg:w-8/12 w-full px-3'>
                                    <h3 className='after:content-[""] lg:text-start lg:inline-block after:absolute lg:after:bg-clients_Top_Border after:bg-no-repeat after:bg-full md:after:top-[-1%] sm:after:top-[-4%] after:top-[-12%] md:after:left-[-10%] after:left-[-6%] md:after:w-[425px] sm:after:w-[348px] after:w-[318px] after:h-[21px]  before:content-[""] before:absolute lg:before:bg-clients_Bottom_Border before:bg-no-repeat before:bg-full md:before:w-[425px] sm:before:w-[348px] before:w-[318px] before:h-[21px] md:before:bottom-[-5%] sm:before:bottom-[-10%] before:bottom-[-30%] md:before:right-[-9%] before:right-[-6%] relative font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white'>
                                        Debbie Hagenes
                                    </h3>
                                    <div className='flex flex-col lg:items-start items-center'>
                                        <p className='font-poppins lg:text-start text-center md:text-2xl sm:text-xl text-base lg:leading-9 leading-7 font-normal text-white opacity-70 max-w-[621px] pt-5'>
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.
                                        </p>
                                        <div className='flex gap-1 lg:pt-6 pt-3'>
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-4/12 w-full px-3 flex lg:justify-start justify-center lg:pt-0 pt-6'>
                                    <img className='lg:max-w-[289px] sm:max-w-[350px] max-w-[280px] w-full' src={the_Women} alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-clients_Cardbg bg-no-repeat bg-full lg:p-[40px_60px] sm:p-[40px_30px] p-[40px_12px] min-h-[411px] mx-auto max-w-[576px] md:max-w-[768px] lg:max-w-[1041px] w-full '>
                            <div className='flex lg:flex-row flex-wrap -mx-3'>
                                <div className='lg:w-8/12 w-full px-3'>
                                    <h3 className='after:content-[""] lg:text-start lg:inline-block after:absolute lg:after:bg-clients_Top_Border after:bg-no-repeat after:bg-full md:after:top-[-1%] sm:after:top-[-4%] after:top-[-12%] after:left-[-6%]  after:w-[300px] after:h-[21px]  before:content-[""] before:absolute lg:before:bg-clients_Bottom_Border before:bg-no-repeat before:bg-full before:w-[300px] before:h-[21px] md:before:bottom-[-5%] sm:before:bottom-[-10%] before:bottom-[-30%] md:before:right-[-9%] before:right-[-6%] relative font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white'>
                                    Dino Island
                                    </h3>
                                    <div className='flex flex-col lg:items-start items-center'>
                                        <p className='font-poppins lg:text-start text-center md:text-2xl sm:text-xl text-base lg:leading-9 leading-7 font-normal text-white opacity-70 max-w-[621px] pt-5'>
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.
                                        </p>
                                        <div className='flex gap-1 lg:pt-6 pt-3'>
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-4/12 w-full px-3 flex lg:justify-start justify-center lg:pt-0 pt-6'>
                                    <img className='lg:max-w-[289px] sm:max-w-[350px] max-w-[280px] w-full' src={the_Women} alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-clients_Cardbg bg-no-repeat bg-full lg:p-[40px_60px] sm:p-[40px_30px] p-[40px_12px] min-h-[411px] mx-auto max-w-[576px] md:max-w-[768px] lg:max-w-[1041px] w-full '>
                            <div className='flex lg:flex-row flex-wrap -mx-3'>
                                <div className='lg:w-8/12 w-full px-3'>
                                    <h3 className='after:content-[""] lg:text-start lg:inline-block after:absolute lg:after:bg-clients_Top_Border after:bg-no-repeat after:bg-full md:after:top-[-1%] sm:after:top-[-4%] after:top-[-12%] after:left-[-6%] after:w-[300px] after:h-[21px]  before:content-[""] before:absolute lg:before:bg-clients_Bottom_Border before:bg-no-repeat before:bg-full before:w-[300px] before:h-[21px] md:before:bottom-[-5%] sm:before:bottom-[-10%] before:bottom-[-30%] before:right-[-6%] relative font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white'>
                                    Lava Land
                                    </h3>
                                    <div className='flex flex-col lg:items-start items-center'>
                                        <p className='font-poppins lg:text-start text-center md:text-2xl sm:text-xl text-base lg:leading-9 leading-7 font-normal text-white opacity-70 max-w-[621px] pt-5'>
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.
                                        </p>
                                        <div className='flex gap-1 lg:pt-6 pt-3'>
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-4/12 w-full px-3 flex lg:justify-start justify-center lg:pt-0 pt-6'>
                                    <img className='lg:max-w-[289px] sm:max-w-[350px] max-w-[280px] w-full' src={the_Women} alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-clients_Cardbg bg-no-repeat bg-full lg:p-[40px_60px] sm:p-[40px_30px] p-[40px_12px] min-h-[411px] mx-auto max-w-[576px] md:max-w-[768px] lg:max-w-[1041px] w-full '>
                            <div className='flex lg:flex-row flex-wrap -mx-3'>
                                <div className='lg:w-8/12 w-full px-3'>
                                    <h3 className='after:content-[""] lg:text-start lg:inline-block after:absolute lg:after:bg-clients_Top_Border after:bg-no-repeat after:bg-full md:after:top-[-1%] sm:after:top-[-4%] after:top-[-12%] md:after:left-[-10%] after:left-[-6%] md:after:w-[425px] sm:after:w-[348px] after:w-[318px] after:h-[21px]  before:content-[""] before:absolute lg:before:bg-clients_Bottom_Border before:bg-no-repeat before:bg-full md:before:w-[425px] sm:before:w-[348px] before:w-[318px] before:h-[21px] md:before:bottom-[-5%] sm:before:bottom-[-10%] before:bottom-[-30%] md:before:right-[-9%] before:right-[-6%] relative font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white'>
                                        Debbie Hagenes
                                    </h3>
                                    <div className='flex flex-col lg:items-start items-center'>
                                        <p className='font-poppins lg:text-start text-center md:text-2xl sm:text-xl text-base lg:leading-9 leading-7 font-normal text-white opacity-70 max-w-[621px] pt-5'>
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.
                                        </p>
                                        <div className='flex gap-1 lg:pt-6 pt-3'>
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                            <FiveStar />
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-4/12 w-full px-3 flex lg:justify-start justify-center lg:pt-0 pt-6'>
                                    <img className='lg:max-w-[289px] sm:max-w-[350px] max-w-[280px] w-full' src={the_Women} alt="#" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='bg-ellipse_gradient blur-3xl md:flex hidden max-w-[187px] w-full h-[187px] absolute left-[-5%] opacity-40  bottom-[-25%] '>
            </div>
            <div className='bg-ellipse_gradient blur-3xl md:flex hidden max-w-[187px] w-full h-[187px] absolute right-[-5%] opacity-40  bottom-[-24%] '>
            </div>
            <img className='absolute right-[3%] lg:flex hidden bottom-[-26%] max-2xl:opacity-40' src={group_Line} alt="#" />

        </div>
    )
};

export default Clients
