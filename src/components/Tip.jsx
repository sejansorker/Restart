import React from "react";
import Container from "./Container";
import Five from "../assets/five.jpg"
import Six from "../assets/six.jpg"
import Seven from "../assets/seven.jpg"
const News = () => {
  const articles = [
    {
      image: Five,
      title: "Top 10 Beach Destinations You Must Visit",
    },
    {
      image: Six,
      title: "How to Pack for a Luxury Vacation",
    },
    {
      image: Seven,
      title: "Top 5 Romantic Getaways for Couples",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F6F3]">
      <Container>
        <div className="text-center">
          <p className="text-[#C4995D] uppercase text-[18px]">
            News & Articles
          </p>

          <h2 className="text-5xl font-main font-semibold mt-3">
            Travel Stories & Tips
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {articles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-[24px] font-main font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4 text-[16px] font-main font-normal">
                  May 10, 2024 • Travel
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border px-8 py-3 rounded-md cursor-pointer text-[17px] font-bold font-main">
            View All Articles
          </button>
        </div>
      </Container>
    </section>
  );
};

export default News;