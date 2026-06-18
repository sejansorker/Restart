import React from 'react'
import Container from './Container'

const Discount = () => {
    return (
        <div className='bg-[#033238] py-15'>
            <Container>
                <div className="flex items-center">
                    <div className="w-[32%]">
                        <h5 className='text-[22px] text-[#C4995D] font-main font-medium pb-6'>EXCLUSIVE OFFERS</h5>
                        <h3 className='font-main font-semibold text-white text-[36px] pb-6'>Special Offers for Memorable Stays</h3>
                        <p className='text-[18px] text-[#fff] font-main font-normal pb-8'>Book diroratly on our webalte and unlock
                            escishe benfits and olscounts.</p>
                            <button className='bg-[#C4995D] py-3 px-6 text-black text-[18px] font-main font-normal rounded-[7px]'>View All Offers</button>
                    </div>
                    <div className="w-[32%]"></div>
                    <div className="w-[32%]"></div>
                </div>
            </Container>
        </div>
    )
}

export default Discount