import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { SiFoodpanda } from "react-icons/si";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex items-center gap-2">
        <SiFoodpanda className="text-[#FF6347] w-14 h-14" />
        <p className="text-[#34D399] font-poppins text-5xl font-bold">
          Foodigo
        </p>
      </div>

      <ul className="flex list-none gap-6 text-[#49557e] text-base font-medium">
        {["home", "menu", "mobile-app", "contact-us"].map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className={`cursor-pointer transition-colors duration-200
        hover:text-[#FF6347]  /* matches logo color on hover */
        ${
          menu === item
            ? "border-b-2 border-[#34D399] pb-[2px] text-[#FF6347]"
            : ""
        }
      `}
          >
            {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-10">
        <FaSearch className="text-[#49557e] text-xl cursor-pointer" />

        <div className="relative cursor-pointer">
          <CiShoppingBasket className="text-2xl text-[#49557e]" />
          <div className="absolute top-[-8px] right-[-8px] bg-[tomato] rounded-full w-[10px] h-[10px]" />
        </div>

        <button className="text-[#49667e] text-base border border-[tomato] px-7 py-2.5 rounded-full cursor-pointer transition duration-300 hover:bg-[#D1FAE5] bg-transparent">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
