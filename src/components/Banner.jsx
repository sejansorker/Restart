import React from 'react'
import Container from './Container'
import { useState } from "react";
const Banner = () => {
  const [checkIn, setCheckIn] = useState("2024-05-15");
  const [checkOut, setCheckOut] = useState("2024-05-16");
  const [guests, setGuests] = useState("1 Room, 2 Guests");
  return (
    <div className='bg-[url(/banner.png)] w-full lg:py-45 py-20 relative bg-no-repeat bg-cover after:absolute after:left-0 after:top-0 after:w-full after:bg-[rgba(0,0,0,0.3)] after:h-full z-1 after:z-[-1]'>
      <Container>
        <div className="flex justify-center">
          <div className="w-2/3 text-center">
            <h5 className='lg:text-[20px] text-[14px] text-white font-main lg:font-medium  font-normal'>PRINIOM HOTEL & RESORT</h5>
            <h1 className='lg:text-[64px] text-[34px] text-white font-main font-bold leading-tight lg:py-5 py-2'>DISCOVER LUXURY <span className='text-[#C4995D] '>BEYOND COMPARE</span></h1>
            <h4 className='lg:text-[20px] text-[14px] text-white font-main lg:font-medium  font-normal lg:px-50 '>Unwind in elegance and comfort with world-class
              service and unforgettable experiences.</h4>
              
                <div className="grid md:grid-cols-4 mt-10 bg-white">
              <div className="p-5 border-r border-gray-200">
                <label className="block text-sm text-gray-500 mb-2 flex justify-start">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full outline-none text-gray-800 font-semibold"
                />
              </div>
              <div className="p-5 border-r border-gray-200">
                <label className="block text-sm text-gray-500 mb-2 flex justify-start">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full outline-none text-gray-800 font-semibold"
                />
              </div>
              <div className="p-5 border-r border-gray-200">
                <label className="block text-sm text-gray-500 mb-2  flex justify-start">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full outline-none text-gray-800 font-semibold bg-transparent"
                >
                  <option>1 Room, 2 Guests</option>
                  <option>1 Room, 3 Guests</option>
                  <option>2 Rooms, 4 Guests</option>
                  <option>2 Rooms, 6 Guests</option>
                </select>
              </div>

              <button className="bg-[#003B4A] text-white font-semibold hover:bg-[#002f3b] transition-all duration-300">
                Check <br /> Availability
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner