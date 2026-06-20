import React, { useState } from "react";
import Container from "./Container";
import RoomImg from "../assets/delux.jpg";
import { FaCheckCircle } from "react-icons/fa";
const BookStay = () => {
    const [checkIn, setCheckIn] = useState("");
    const [room, setRoom] = useState("1 Room, 2 Guests");
    return (
        <section className="py-20 bg-[#F8F6F3]">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#FCF8F6]">
                    <div className="w-full lg:w-[35%]">
                        <p className="uppercase text-[#C4995D] text-sm font-semibold tracking-wider">
                            Plan Your Stay
                        </p>
                        <h2 className="text-[45px] lg:text-[55px] leading-tight font-serif mt-3">
                            Book Your Stay Today
                        </h2>
                        <p className="text-gray-500 mt-5 leading-7">
                            Ready to experience luxury and comfort?
                            Book now and enjoy unforgettable moments with us.
                        </p>
                        <div className="mt-8 space-y-5">
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#C4995D]" />
                                <p className="font-medium">Best Rate Guarantee</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#C4995D]" />
                                <p className="font-medium">Free Cancellation</p>
                            </div>
                        </div>
                        <button className="mt-8 bg-[#C4995D] text-white px-8 py-3 rounded-md hover:bg-[#b6894d] duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="w-full lg:w-[65%]">
                        <div className="relative pb-16">
                            <img
                                src={RoomImg}
                                alt="Room"
                                className="w-full h-[450px] object-cover rounded-2xl"
                            />
                            <div className="absolute w-full bottom-5 left-0 right-6 bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex-1 p-5 border-b md:border-b-0 md:border-r">
                                        <label className="block text-gray-500 text-sm mb-2">
                                            Check In
                                        </label>
                                        <input
                                            type="date"
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                            className="w-full outline-none"
                                        />
                                    </div>
                                    <div className="flex-1 p-5 border-b md:border-b-0 md:border-r">
                                        <label className="block text-gray-500 text-sm mb-2">
                                            Guests
                                        </label>
                                        <select
                                            value={room}
                                            onChange={(e) => setRoom(e.target.value)}
                                            className="w-full outline-none bg-transparent"
                                        >
                                            <option>1 Room, 1 Guest</option>
                                            <option>1 Room, 2 Guests</option>
                                            <option>1 Room, 3 Guests</option>
                                            <option>2 Rooms, 4 Guests</option>
                                            <option>2 Rooms, 6 Guests</option>
                                        </select>
                                    </div>
                                    <div className="w-full md:w-[220px] bg-[#073B4C] p-2">
                                        <button className="w-full h-full rounded-xl border border-[#C4995D] text-white font-medium hover:bg-[#0B4D61] duration-300 py-5">
                                            Check Availability
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BookStay;