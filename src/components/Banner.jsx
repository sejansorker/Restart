import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <div className='bg-[url(/banner.png)] w-full py-50 relative bg-no-repeat bg-cover after:absolute after:left-0 after:top-0 after:w-full after:bg-[rgba(0,0,0,0.3)] after:h-full z-1 after:z-[-1]'>
      <Container>
        <div className="flex justify-center">
          <div className="w-2/3 text-center">
            <h5 className='text-[20px] text-white font-main font-medium  '>PRINIOM HOTEL & RESORT</h5>
            <h1 className='text-[64px] text-white font-main font-bold leading-tight py-5'>DISCOVER LUXURY <span className='text-[#C4995D] '>BEYOND COMPARE</span></h1>
            <h4 className='text-[20px] text-white font-main font-medium lg:px-50 '>Unwind in elegance and comfort with world-class
              service and unforgettable experiences.</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner