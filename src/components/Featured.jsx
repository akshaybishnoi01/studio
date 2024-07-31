import React from 'react'
import { FeaturedBottomline } from '../common/Icon'
import featured_Sliderimg1 from '../assets/image/webp/featured_Sliderimg1.webp'
import featured_Sliderimg2 from '../assets/image/webp/featured_Sliderimg2.webp'
import featured_Sliderimg3 from '../assets/image/webp/featured_Sliderimg3.webp'
import featured_Sliderimg4 from '../assets/image/webp/featured_Sliderimg4.webp'
import featured_Sliderimg5 from '../assets/image/webp/featured_Sliderimg5.webp'
import featured_Sliderimg6 from '../assets/image/webp/featured_Sliderimg6.webp'
import Slider from 'react-slick'
const Featured = () => {
    var settings1 = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    valiableWidth: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    valiableWidth: false,
                }
            }
        ],
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
        ),
    };
    return (
        <div className='bg-featured_Bg bg-no-repeat bg-cover -mt-[2px] lg:pb-[177px] md:pb-28 pb-20 '>
            <div id='Services' className=' flex justify-center lg:pb-24 pb-16'>
                <div className='relative inline-block'>
                    <h2 className='font-bold md:text-custom-42 sm:text-4xl text-custom-32 text-center md:leading-[54px] sm:leading-10 leading-8 font-orbitron text-white max-w-[440px]'>
                        Featured Projects
                    </h2>
                    <div className='absolute md:left-[-119%] sm:left-[-146%] left-[-170%] sm:top-[16%] top-[12%]'>
                        <FeaturedBottomline />
                    </div>
                </div>
            </div>
            <div className='featured_slider'>
                <Slider {...settings1}>
                    <div className='bg-slider_Boxbg bg-no-repeat bg-full 2xl:min-h-[461px] min-h-[476px] max-w-[364px] w-full p-[20px]'>
                        <img className=' max-w-[324px] w-full' src={featured_Sliderimg1} alt="#" />
                        <p className=' max-w-[229px] font-poppins text-sm leading-[18px] font-normal opacity-70 text-white pt-3'>
                            <span className='font-bold text-darkBlue opacity-100 pe-[6px]'>300+</span>
                            Active Players
                            <span className='font-bold text-darkBlue opacity-100 px-2'>800+</span>
                            Visits
                        </p>
                        <p className='font-bold font-orbitron text-white text-2xl leading-8 pt-4 pb-3'>
                            Lava Land
                        </p>
                        <p className='text-lg font-normal font-poppins leading-7 text-white opacity-70'>
                            Embark on thrilling adventures in a volcanic world, featuring unique challenges and excitement, crafted exclusively for Roblox players.
                        </p>
                    </div>
                    <div className='bg-slider_Boxbg bg-no-repeat bg-full 2xl:min-h-[461px] min-h-[476px] max-w-[364px] w-full p-[20px]'>
                        <img className='max-w-[324px] w-full' src={featured_Sliderimg2} alt="#" />
                        <p className='max-w-[229px] font-poppins text-sm leading-[18px] font-normal opacity-70 text-white pt-3'>
                            <span className='font-bold text-darkBlue opacity-100 pe-[6px]'>300+</span>
                            Active Players
                            <span className='font-bold text-darkBlue opacity-100 px-2'>800+</span>
                            Visits
                        </p>
                        <p className='font-bold font-orbitron text-white text-2xl leading-8 pt-4 pb-3'>
                            3D Maze
                        </p>
                        <p className='text-lg font-normal font-poppins leading-7 text-white opacity-70'>
                            Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.
                        </p>
                    </div>
                    <div className='bg-slider_Boxbg bg-no-repeat bg-full 2xl:min-h-[461px] min-h-[476px] max-w-[364px] w-full p-[20px]'>
                        <img className='max-w-[324px] w-full' src={featured_Sliderimg3} alt="#" />
                        <p className='max-w-[229px] font-poppins text-sm leading-[18px] font-normal opacity-70 text-white pt-3'>
                            <span className='font-bold text-darkBlue opacity-100 pe-[6px]'>400+</span>
                            Active Players
                            <span className='font-bold text-darkBlue opacity-100 px-2'>700+</span>
                            Visits
                        </p>
                        <p className='font-bold font-orbitron text-white text-2xl leading-8 pt-4 pb-3'>
                            Dino Island
                        </p>
                        <p className='text-lg font-normal font-poppins leading-7 text-white opacity-70'>
                            Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.
                        </p>
                    </div>
                    <div className='bg-slider_Boxbg bg-no-repeat bg-full 2xl:min-h-[461px] min-h-[476px] max-w-[364px] w-full p-[20px]'>
                        <img className='max-w-[324px] w-full' src={featured_Sliderimg4} alt="#" />
                        <p className='max-w-[235px] font-poppins text-sm leading-[18px] font-normal opacity-70 text-white pt-3'>
                            <span className='font-bold text-darkBlue opacity-100 pe-[6px]'>700+</span>
                            Active Players
                            <span className='font-bold text-darkBlue opacity-100 px-2'>1000+</span>
                            Visits
                        </p>
                        <p className='font-bold font-orbitron text-white text-2xl leading-8 pt-4 pb-3'>
                            Fireplace
                        </p>
                        <p className='text-lg font-normal font-poppins leading-7 text-white opacity-70'>
                            Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.
                        </p>
                    </div>
                    <div className='bg-slider_Boxbg bg-no-repeat bg-full 2xl:min-h-[461px] min-h-[476px] max-w-[364px] w-full p-[20px]'>
                        <img className='max-w-[324px] w-full' src={featured_Sliderimg5} alt="#" />
                        <p className='max-w-[235px] font-poppins text-sm leading-[18px] font-normal opacity-70 text-white pt-3'>
                            <span className='font-bold text-darkBlue opacity-100 pe-[6px]'>800+</span>
                            Active Players
                            <span className='font-bold text-darkBlue opacity-100 px-2'>1200+</span>
                            Visits
                        </p>
                        <p className='font-bold font-orbitron text-white text-2xl leading-8 pt-4 pb-3'>
                            Cat Washing Tycoon
                        </p>
                        <p className='text-lg font-normal font-poppins leading-7 text-white opacity-70'>
                            Dive into the adorable world of cat care! Build and manage your own cat washing business, upgrade your facilities.
                        </p>
                    </div>
                    <div className='bg-slider_Boxbg bg-no-repeat bg-full 2xl:min-h-[461px] min-h-[476px] max-w-[364px] w-full p-[20px]'>
                        <img className=' max-w-[324px] w-full' src={featured_Sliderimg6} alt="#" />
                        <p className=' max-w-[229px] font-poppins text-sm leading-[18px] font-normal opacity-70 text-white pt-3'>
                            <span className='font-bold text-darkBlue opacity-100 pe-[6px]'>300+</span>
                            Active Players
                            <span className='font-bold text-darkBlue opacity-100 px-2'>800+</span>
                            Visits
                        </p>
                        <p className='font-bold font-orbitron text-white text-2xl leading-8 pt-4 pb-3'>
                            Fireplace
                        </p>
                        <p className='text-lg font-normal font-poppins leading-7 text-white opacity-70'>
                            "Phone Factory: Dive into the exciting world of manufacturing in this Roblox game.
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    )
};

export default Featured
