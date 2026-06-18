import React from 'react'
import Container from './Container'
import Dulax from "../assets/delux.jpg"
import { FaArrowRight, FaUser } from 'react-icons/fa'
import { MdArrowRightAlt, MdBed } from 'react-icons/md'
import { LuDiameter } from 'react-icons/lu'
const Card = () => {
  return (
    <div className='py-25'>
      <Container>
        <div className="w-1/3 mx-auto text-center">
          <p className='font-main font-medium text-[20px] text-[#C4995D] pb-4'>ROOMS & SUITES</p>
          <h3 className='font-main font-semibold text-[38px] text-black pb-15'>Find Your Perfect Stay</h3>
        </div>
        <div className="">
          <div className="w-[31%] bg-white shadow-lg rounded-2xl">
            <div className="relative">
              <img className='w-full h-80 rounded-t-2xl' src={Dulax} alt="" />
              <div className="absolute top-5 right-5 rounded-[10px]  bg-[#C4995D]">
                <p className='px-7 py-3 text-[18px] font-main font-normal text-white'>From $120/night</p>
              </div>
            </div>
            <div className=" pl-5 pb-10">
              <h5 className='py-4 font-main font-medium text-[20px] text-black mt-3'>Deluxe Room</h5>
              <div className="flex gap-x-7 text-[16px] font-main font-normal text-[rgba(0,0,0,0.44)]">
                <h6 className='flex items-center gap-x-1'><i><FaUser /></i> 2 Guests</h6>
                <h6 className='flex items-center gap-x-1'><i><MdBed /></i> 1 Bed</h6>
                <h6 className='flex items-center gap-x-1'><i><LuDiameter /></i> 32 m</h6>
              </div>
              <p className='flex items-center text-[16px] gap-x-3 font-main font-medium text-black py-5 mt-3'>View Detalls <i className='text-[28px]'><MdArrowRightAlt /></i></p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Card