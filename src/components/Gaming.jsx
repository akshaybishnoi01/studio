import React from 'react'
import Slider from "react-slick";
import haven from '../assets/image/webp/haven.webp'
import roblox from '../assets/image/webp/roblox.webp'
import lavalogo from '../assets/image/svg/lavalogo.svg'
import dino from '../assets/image/webp/dino.webp'
import cat_washing from '../assets/image/webp/cat_washing.webp'
import tycoon from '../assets/image/webp/tycoon.webp'
const Gaming = () => {
    var settings = {
        dots: false,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
    };
    return (
        <div className='logo_slider bg-lightBlack md:py-[35px] sm:py-[30px] py-5 -my-[2px] z-20 relative'>
            <Slider {...settings}>
                <img className='cursor-pointer md:max-w-[151px] sm:max-w-[180px] max-w-[135px] w-full' src={haven} alt="#" />
                <img className='cursor-pointer md:max-w-[160px] sm:max-w-[180px] max-w-[135px] w-full' src={roblox} alt="#" />
                <img className='cursor-pointer md:max-w-[234px] sm:max-w-[180px] max-w-[135px] w-full' src={lavalogo} alt="#" />
                <img className='cursor-pointer md:max-w-[234px] sm:max-w-[180px] max-w-[135px] w-full ' src={dino} alt="#" />
                <img className='cursor-pointer md:max-w-[225px] sm:max-w-[180px] max-w-[135px] w-full' src={cat_washing} alt="#" />
                <img className='cursor-pointer md:max-w-[234px] sm:max-w-[180px] max-w-[135px] w-full' src={tycoon} alt="#" />
            </Slider>
        </div>
    )
}
export default Gaming
