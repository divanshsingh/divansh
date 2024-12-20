import React from "react";
import { RiMenu3Line } from "react-icons/ri";

const FixedFooter = () => {
  return (
    <div className='w-full flex justify-between bottom-0 items-center font-["Helvetica_Neue_LT_Pro"] fixed px-8 py-6 text-[#F2F2F2]'>
        <p className="text-[#F2F2F2] text-sm">© 2024 All rights reserved.</p>
      <nav className="md:flex hidden text-sm gap-3 text-[#F2F2F2]">
        <p>instagram,</p>
        <p>likedin,</p>
        <p>github,</p>
        <p>twitter</p>
      </nav>
    </div>
  );
};

export default FixedFooter;
