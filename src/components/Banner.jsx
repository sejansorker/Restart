import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <div className='bg-[url(/banner.png)] w-full lg:py-45 py-20 relative bg-no-repeat bg-cover after:absolute after:left-0 after:top-0 after:w-full after:bg-[rgba(0,0,0,0.3)] after:h-full z-1 after:z-[-1]'>
      <Container>
        <div className="flex justify-center">
          <div className="w-2/3 text-center">
            <h5 className='lg:text-[20px] text-[14px] text-white font-main lg:font-medium  font-normal'>PRINIOM HOTEL & RESORT</h5>
            <h1 className='lg:text-[64px] text-[34px] text-white font-main font-bold leading-tight lg:py-5 py-2'>DISCOVER LUXURY <span className='text-[#C4995D] '>BEYOND COMPARE</span></h1>
            <h4 className='lg:text-[20px] text-[14px] text-white font-main lg:font-medium  font-normal lg:px-50 '>Unwind in elegance and comfort with world-class
              service and unforgettable experiences.</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner