// import React from 'react'

// import Container from './Container'
// import Logo from "../assets/logoo.png"
// import { MdAddIcCall } from 'react-icons/md'
// const Header = () => {
//   return (
//     <div className='py-2 bg-white'>
//       <Container>
//         <div className="flex items-center justify-between">
//           <div className="w-1/6">
//             <img src={Logo} alt="" />
//           </div>
//           <div className="w-3/6">
//             <ul className='flex font-main text-[18px] text-black font-medium gap-x-12  justify-center '>
//               <li className='cursor-pointer'>Home</li>
//               <li className='cursor-pointer'>Rooms</li>
//               <li className='cursor-pointer'>Offers</li>
//               <li className='cursor-pointer'>Blog</li>
//               <li className='cursor-pointer'>Contact</li>
//             </ul>
//           </div>
//           <div className="w-2/6">
//             <div className="flex items-center gap-x-5 justify-end ">
//               <i className='font-main text-[18px] font-medium gap-x-12 text-black cursor-pointer'><MdAddIcCall /></i>
//               <p className=' font-main text-[18px] font-medium gap-x-12 text-black cursor-pointer'>400173 464 799</p>
//               <button className='px-8 py-3 bg-[#C4995D] rounded-2xl to-black font-main text-[16px] font-bold cursor-pointer'>Book Now</button>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Header


import React, { useState } from "react";
import Container from "./Container";
import Logo from "../assets/logoo.png";
import { MdAddIcCall } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-4 bg-white shadow-sm relative">
      <Container>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="w-[120px] md:w-[150px]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-12 font-main text-[18px] font-medium">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Rooms</li>
              <li className="cursor-pointer">Offers</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-x-5">
            <MdAddIcCall className="text-[22px]" />
            <p className="font-main text-[18px] font-medium">
              400173 464 799
            </p>
            <button className="px-8 py-3 bg-[#C4995D] rounded-2xl text-[16px] font-bold cursor-pointer">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col items-center py-5 gap-y-5 font-main text-[18px] font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Rooms</li>
            <li className="cursor-pointer">Offers</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>

            <div className="flex items-center gap-x-3">
              <MdAddIcCall className="text-[20px]" />
              <p>400173 464 799</p>
            </div>

            <button className="px-8 py-3 bg-[#C4995D] rounded-2xl text-[16px] font-bold">
              Book Now
            </button>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;