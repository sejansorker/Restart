import React, { useState } from 'react'
import Container from './Container'
import { IoArrowRedoOutline } from 'react-icons/io5'
import { MdDesignServices } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { TbSignatureOff } from 'react-icons/tb'
import Room from "../assets/room.png"
const About = () => {
  return (
    <div className='my-40'>
      <Container>
        <div className="flex justify-center gap-x-15">
          <div className="w-1/2">
            <img src={Room} className='w-full h-158 rounded-2xl' alt="" />
            <div className="w-50 h-50 bg-[#C4995D]"></div>
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
                <p className='text-[20px] font-main font-medium text-[#000] '>Luxury Accommodations</p>
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
      </Container>
    </div>
  )
}

export default About