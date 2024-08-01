import React from "react";
const CommonButton = ({ buttonName, buttonClass }) => {
  return (
    <div className={`bg-common_btnbg cursor-pointer bg-no-repeat bg-cover w-[151px] h-[47px] flex justify-center items-center hover:scale-105 custom_duration text-base font-normal leading-6 text-white font-poppins custom_duration ${buttonClass}`}>
      {buttonName}
    </div>
  );
};
export default CommonButton;