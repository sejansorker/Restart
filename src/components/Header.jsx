import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
const Header = () => {
  return (
    <div>
      <Container>
        <div className="flex">
          <div className="w-1/6">
            <img src={Logo} alt="" />
          </div>
          <div className="w-3/6">
            <div className="">
              <ul>
                <li>Home</li>
                <li>Booking</li>
                <li>Offers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="w-2/6">
          <div className="">
           <p>-400173 464 799</p>
           <button>Book Now</button>
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header