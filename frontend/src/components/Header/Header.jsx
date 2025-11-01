import React from "react";
import headerImg from "/header_img.png"; // make sure this path is correct

const Header = () => {
  return (
    <div
      className="relative mx-auto mt-8 h-[34vw] bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="absolute bottom-[10%] left-[6vw] flex flex-col items-start gap-[1.5vw] max-w-[50%] animate-fadeIn">
        <h2 className="text-white font-medium text-[max(4.5vw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time
        </p>
        <button className="px-[2.3vw] py-[1vw] bg-white text-[#747474] rounded-[50px] text-[max(1vw,13px)] border-none">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
