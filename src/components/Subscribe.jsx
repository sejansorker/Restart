import React from "react";
import Container from "./Container";

const Newsletter = () => {
    return (
        <section className="py-15 bg-[#033238]">
            <Container>
                <div className=" rounded-md p-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="uppercase text-[#C4995D] text-[18px] font-main font-normal">
                                Subscribe Newsletter
                            </p>
                            <h2 className="text-white text-[48px] font-main font-bold mt-3">
                                Get Exclusive Offers & Travel Inspiration
                            </h2>
                        </div>
                        <div className="flex border-1 border-white rounded-lg">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-5 py-4 rounded-l-md outline-none text-white text-[17px] font-main font-normal"
                            />
                            <button className="border-l-1 border-white text-[17px] font-main font-bold text-white px-8 rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default Newsletter;