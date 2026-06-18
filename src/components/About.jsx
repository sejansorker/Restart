import React, { useState } from 'react'
import Container from './Container'
import { IoArrowRedoOutline } from 'react-icons/io5'
import { MdDesignServices } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { TbSignatureOff } from 'react-icons/tb'
import Room from "../assets/room.png"
const About = () => {
  return (
    <div className='py-30 bg-[rgba(196,153,93,0.13)]'>
      <Container>
        <div className="flex justify-center gap-x-15">
          <div className="w-1/2 relative">
            <img src={Room} className='w-full h-158 rounded-2xl' alt="" />
            <div className="w-50 h-50 bg-[#C4995D] grid place-content-center absolute text-center -bottom-[100px] left-0 rounded-2xl">
              <h2 className='text-[40px] text-white font-bold '>12+</h2>
              <p className='text-[22px] px-5 text-white font-medium font-main'>Year of Experience </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="">
              <h5 className='text-[20px] font-main font-medium text-[#C4995D] pb-5'>ABOUT US</h5>
              <h2 className='text-[52px] font-main font-semibold text-[#000] pb-5'>Experience Hospitality
                Like Never Before</h2>
              <p className='text-[18px] font-main font-normal text-[#000] pb-10'>We combine lusury, comfort and personalised service to
                create memorable stays for our guests. Your perfect
                getonoy awaits.</p>
              <div className="flex items-center gap-x-5 pb-6">
                <div className="bg-[#C4995D] p-4 w-fit rounded-[8px]">
                  <i className='text-[22px] font-bold'><IoArrowRedoOutline /></i>
                </div>
                <p className='text-[20px] font-main font-medium text-[#000] '>Luxury Accommodations</p>
              </div>
              <div className="flex items-center gap-x-5 pb-6">
                <div className="bg-[#C4995D] p-4 w-fit rounded-[8px]">
                  <i className='text-[22px] font-bold'><MdDesignServices />
                  </i>
                </div>
                <p className='text-[20px] font-main font-medium text-[#000] '>Personallced Service</p>
              </div>
              <div className="flex items-center gap-x-5 pb-6">
                <div className="bg-[#C4995D] p-4 w-fit rounded-[8px]">
                  <i className='text-[22px] font-bold'><FaRegUser />
                  </i>
                </div>
                <p className='text-[20px] font-main font-medium text-[#000] '>Best Price Guaranteo</p>
              </div>
              <div className="flex  gap-x-5 pt-4">
                <i className='text-[44px]'><TbSignatureOff /></i>
                <div className="">
                  <h5 className='text-[19px] font-main font-semibold text-[#000] pb-1.5'>Janet William</h5>
                  <p className='text-[18px] font-main font-normal text-[#000]'>Oererall Manage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-40 flex items-center justify-between gap-x-2">
          <div className="w-1/4">
          <div className="bg-white border-1 rounded-[8px] text-center border-gray-500 py-7">
             <h2 className='text-[48px] font-main font-semibold text-black '>150+</h2>
             <p className='text-[22px] text-black font-main font-medium '>Luxury Rooms</p>
          </div>
          </div>
          <div className="w-1/4">
          <div className="bg-white border-1 rounded-[8px] text-center border-gray-500 py-7">
             <h2 className='text-[48px] font-main font-semibold text-black '>85K+</h2>
             <p className='text-[22px] text-black font-main font-medium '>Happy Guests</p>
          </div>
          </div>
          <div className="w-1/4">
          <div className="bg-white border-1 rounded-[8px] text-center border-gray-500 py-7">
             <h2 className='text-[48px] font-main font-semibold text-black '>28+</h2>
             <p className='text-[22px] text-black font-main font-medium '>Top Destinitions</p>
          </div>
          </div>
          <div className="w-1/4">
          <div className="bg-white border-1 rounded-[8px] text-center border-gray-500 py-7">
             <h2 className='text-[48px] font-main font-semibold text-black '>24/7</h2>
             <p className='text-[22px] text-black font-main font-medium '>Concierge Service</p>
          </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}

export default About