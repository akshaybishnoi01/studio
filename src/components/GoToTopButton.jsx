import React, { useState, useEffect } from 'react';
const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed z-50 bottom-4 right-4">
      {visible && (
        <button
          onClick={scrollToTop}
          className="text-white w-[50px] animate-bounce hover:animate-none h-[50px] rounded-full shadow-lg bg-darkRed transition duration-300"
        >
          <span className='text-3xl font-extrabold'>↑</span>
        </button>
      )}
    </div>
  );
};
export default GoToTopButton;
