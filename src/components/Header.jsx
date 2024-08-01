import React, { useEffect, useState } from 'react'
import { NAV_ITEM_DATA } from '../common/Helper';
import CommonButton from '../common/Common_Button';
import logo from '../assets/image/webp/logo.webp'
const Header = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className='container mx-auto px-[12px] pt-[6px]'>
      <div className='flex justify-between items-center '>
        <div className="flex items-center">
          <a href="/"><img className='pointer-events-none' src={logo} alt="#" /></a>
        </div>
        <ul
          className={`flex flex-col lg:flex-row items-center gap-8 max-lg:fixed max-lg:justify-center top-0 max-lg:-left-full max-lg:z-[90] max-lg:h-screen max-lg:w-full max-lg:duration-300  max-lg:bg-hero_bg bg-cover bg-no-repeat bg-center ${show ? "" : " !start-0"}`}
        >
          {NAV_ITEM_DATA.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href.substring(1))}
                className={item.className}
              >
                {item.text}
              </a>
            </li>
          ))}
          <li className='lg:hidden flex'>
            <CommonButton buttonName="Get Started" />
          </li>
        </ul>
        <div className='lg:flex hidden'>
          <CommonButton buttonName="Get Started" />
        </div>
        <div
          className={`cursor-pointer relative z-[100] lg:hidden max-sm:scale-75 ${show ? "" : "cross"
            }`}
          onClick={() => setShow(!show)}
        >
          <span className="nav-toggle-items"></span>
          <span className="nav-toggle-items my-2"></span>
          <span className="nav-toggle-items"></span>
        </div>
      </div>
    </div>
  );
};
export default Header;

