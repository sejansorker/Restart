

import React from "react";
import Container from "./Container";
import { FaSwimmingPool, FaUtensils, FaSpa, FaDumbbell } from "react-icons/fa";
import Hotel from "../assets/hotel.jpg"
const LuxuryComfort = () => {
    return (
        <section className="py-20 bg-[#033238]">
            <Container>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/3 text-white flex flex-col justify-center">
                        <p className="uppercase text-xs tracking-[3px] text-[#C4995D]">
                            Luxury & Comfort
                        </p>
                        <h2 className="text-5xl leading-tight font-serif mt-3">
                            Relax. Refresh. Rejuvenate.
                        </h2>
                        <p className="mt-5 text-gray-300">
                            Enjoy premium amenities designed for your ultimate relaxation
                            and comfort.
                        </p>
                        <button className="mt-8 border border-white w-fit px-6 py-3 rounded-md">
                            Learn More
                        </button>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <img
                            src={Hotel}
                            alt=""
                            className="w-full h-full min-h-[350px] object-cover rounded-md"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 grid grid-cols-2 gap-1">
                        <div className="bg-white rounded-md flex flex-col justify-center items-center py-10">
                            <FaSwimmingPool className="text-[#C4995D] text-2xl" />
                            <p className="mt-3">Infinity Pool</p>
                        </div>
                        <div className="bg-white rounded-md flex flex-col justify-center items-center py-10">
                            <FaUtensils className="text-[#C4995D] text-2xl" />
                            <p className="mt-3">Fine Dining</p>
                        </div>
                        <div className="bg-white rounded-md flex flex-col justify-center items-center py-10">
                            <FaSpa className="text-[#C4995D] text-2xl" />
                            <p className="mt-3">Spa Center</p>
                        </div>
                        <div className="bg-white rounded-md flex flex-col justify-center items-center py-10">
                            <FaDumbbell className="text-[#C4995D] text-2xl" />
                            <p className="mt-3">Fitness Gym</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LuxuryComfort;