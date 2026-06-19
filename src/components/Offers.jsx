// import React from 'react'

// const Offers = () => {
//   return (
//     <div>Offers</div>
//   )
// }

// export default Offers

import React from "react";
import Container from "./Container";
import One from "../assets/one.jpg"
import Two from "../assets/two.jpg"
import Three from "../assets/three.jpg"
import Four from "../assets/four.jpg"
import {
    FaGift,
    FaWifi,
    FaPlaneDeparture,
    FaThLarge,
    FaSpa,
} from "react-icons/fa";

const offers = [
    {
        icon: <FaGift />,
        title: "Free Breakfast",
        desc: "Start your day with delicious complimentary breakfast",
    },
    {
        icon: <FaWifi />,
        title: "Free WiFi",
        desc: "High-speed internet access throughout your stay",
    },
    {
        icon: <FaPlaneDeparture />,
        title: "Airport Pickup",
        desc: "Complimentary pickup and drop services",
    },
    {
        icon: <FaThLarge />,
        title: "Room Service",
        desc: "24/7 in-room dining for your convenience",
    },
    {
        icon: <FaSpa />,
        title: "Spa & Wellness",
        desc: "Relax and recharge at our spa",
    },
];

const HotelShowcase = () => {
    return (
        <section className="bg-[#f8f6f3] py-20">
            <Container>
                <div className="text-center">
                    <p className="text-[#C4995D] uppercase tracking-widest text-[18px] font-main font-semibold">
                        Our Offer
                    </p>
                    <h2 className="text-4xl  font-semibold font-main text-[#000] mt-3">
                        Unmatched Comfort & Convenience
                    </h2>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-12">
                        {offers.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-8 hover:shadow-md duration-300"
                            >
                                <div className="flex justify-center text-[#C4995D] text-[28px] mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold font-main text-[20px] text-black">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-[16px] leading-6 mt-3">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-24 text-center">
                    <p className="text-[#C4995D] uppercase tracking-widest text-[18px] font-main font-semibold">
                        Our Gallery
                    </p>
                    <h2 className="text-4xl font-main font-semibold text-[#000] mt-3">
                        Glimpses of Our Hotel
                    </h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-12">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={One}
                                alt=""
                                className="w-full h-[280px] object-cover hover:scale-110 duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={Two}
                                alt=""
                                className="w-full h-[280px] object-cover hover:scale-110 duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={Three}
                                alt=""
                                className="w-full h-[280px] object-cover hover:scale-110 duration-500"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={Four}
                                alt=""
                                className="w-full h-[280px] object-cover hover:scale-110 duration-500"
                            />
                        </div>
                    </div>
                    <button className="mt-10 border border-[#9EB3BE] text-[#000] px-8 py-3 rounded-md hover:bg-[#C4995D] hover:text-white hover:border-[#C4995D] duration-300 text-[17px] font-bold font-main">
                        View Full Gallery
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default HotelShowcase;