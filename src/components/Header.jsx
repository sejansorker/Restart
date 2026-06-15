import React from 'react'
import Container from './Container'
import Logo from "../assets/logoo.png"
import { MdAddIcCall } from 'react-icons/md'
const Header = () => {
  return (
    <div className='py-2 bg-white'>
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-1/6">
            <img src={Logo} alt="" />
          </div>
          <div className="w-3/6">
              <ul className='flex font-main text-[18px] text-black font-medium gap-x-12  justify-center '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Rooms</li>
                <li className='cursor-pointer'>Offers</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Contact</li>
              </ul>
          </div>
          <div className="w-2/6">
          <div className="flex items-center gap-x-5 justify-end ">
            <i className='font-main text-[18px] font-medium gap-x-12 text-black'><MdAddIcCall /></i>
           <p className=' font-main text-[18px] font-medium gap-x-12 text-black'>400173 464 799</p>
           <button className='px-8 py-3 bg-[#C4995D] rounded-2xl to-black font-main text-[16px] font-bold'>Book Now</button>
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header