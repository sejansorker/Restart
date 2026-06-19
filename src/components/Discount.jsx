import React from 'react'
import Container from './Container'
import Fast from "../assets/fast.jpg"
import Sec from "../assets/sec.jpg"
const Discount = () => {
    return (
        <div className='bg-[#033238] py-15'>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="w-[32%]">
                        <h5 className='text-[22px] text-[#C4995D] font-main font-medium pb-6'>EXCLUSIVE OFFERS</h5>
                        <h3 className='font-main font-semibold text-white text-[36px] pb-6'>Special Offers for Memorable Stays</h3>
                        <p className='text-[18px] text-white font-main font-normal pb-8'>Book diroratly on our webalte and unlock
                            escishe benfits and olscounts.</p>
                            <button className='bg-[#C4995D] py-3 px-6 text-black text-[18px] font-main font-normal rounded-[7px]'>View All Offers</button>
                    </div>
                    <div className="w-[32%] ">
                        <div className="relative">
                            <img className='w-full h-100 rounded-lg' src={Fast} alt="" />
                            <div className="bg-[rgba(75,128,133,0.4)] absolute bottom-0 left-0 w-full py-8 pl-6">
                                <h6 className='font-main font-medium text-[20px] text-white '>Season Solo</h6>
                                <h4 className='font-main font-medium text-[28px] text-white py-2.5'>Up to 25% Off</h4>
                                <p className='font-main font-normal text-[18px] text-white pb-6'>On Selncled Rbomns</p>
                                <button className='py-2 px-4 border-2 border-white rounded-[7px] text-white text-[16px] '>Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[32%] ">
                        <div className="relative">
                            <img className='w-full h-100 rounded-lg' src={Sec} alt="" />
                            <div className="bg-[rgba(125,85,40,0.4)] absolute bottom-0 left-0 w-full py-8 pl-6">
                                <h6 className='font-main font-medium text-[20px] text-white '>Long Stsy Offer</h6>
                                <h4 className='font-main font-medium text-[28px] text-white py-2.5'>Up to 35% Off</h4>
                                <p className='font-main font-normal text-[18px] text-white pb-6'>On S Nghts or More</p>
                                <button className='py-2 px-4 border-2 border-white rounded-[7px] text-white text-[16px] '>Book Now</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Discount