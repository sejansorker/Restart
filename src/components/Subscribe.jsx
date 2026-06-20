import React from "react";
import Container from "./Container";

const Newsletter = () => {
    return (
        <section className="py-20 bg-[#033238]">
            <Container>
                <div className="bg-[url('/newsletter-bg.jpg')] bg-cover bg-center rounded-md p-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="uppercase text-[#C4995D] text-xs">
                                Subscribe Newsletter
                            </p>
                            <h2 className="text-white text-5xl font-serif mt-3">
                                Get Exclusive Offers & Travel Inspiration
                            </h2>
                        </div>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-5 py-4 rounded-l-md outline-none text-white"
                            />
                            <button className="bg-[#0E3440] text-white px-8 rounded-r-md">
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