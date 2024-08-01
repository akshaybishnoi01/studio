import React, { useEffect, useState } from 'react';
const PreLoader = () => {
  const [visible, setvisible] = useState(true);
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    const timer = setTimeout(() => {
      setvisible(false);
      document.body.classList.remove('overflow-hidden');
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-hidden');
    }
  }, []);
  if (!visible) return null;
  return (
    <div className="flex flex-col gap-4 bg-black items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-darkRed"></div>
      <p className='font-bold lg:text-7xl animate-bounce sm:text-6xl text-5xl font-orbitron max-w-[490px] bg-clip-text text-transparent bg-text_gradient lg:leading-[93px] sm:leading-[60px] leading-[50px] '>
        1v2 Studio
      </p>
    </div>
  );
};
export default PreLoader;
