'use client'
import React, { useState, useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

const HeaderSlider = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  const sliderData = [
    {
      id: 1,
      title: "Gadgets you'll love. Prices you'll trust.",
      offer: "Free Shipping on Orders Above $50!",
      price: "4.90",
      imgSrc: assets.hero_model_img,
      bgColor: "bg-green-200",
    },
    {
      id: 2,
      title: "Upgrade Your Workspace - Premium Keyboards",
      offer: "Limited Time Offer 20% OFF",
      price: "9.99",
      imgSrc: assets.product_img5,
      bgColor: "bg-orange-200",
    },
    {
      id: 3,
      title: "Next-Level Sound - Crystal Clear Earbuds",
      offer: "Hurry! Only Few Left",
      price: "12.50",
      imgSrc: assets.product_img6,
      bgColor: "bg-blue-200",
    },
    {
      id: 4,
      title: "Smartwatch Collection - Stay Connected",
      offer: "Special Offer 15% Off",
      price: "15.00",
      imgSrc: assets.product_img7,
      bgColor: "bg-purple-200",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => setCurrentSlide(index);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide) => (
          <div
            key={slide.id}
            className={`relative flex-1 flex flex-col ${slide.bgColor} rounded-3xl xl:min-h-100 group min-w-full`}
          >
            <div className="p-5 sm:p-16">
              {/* Offer bar */}
              <div className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm">
                <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
                  NEWS
                </span>{" "}
                {slide.offer}{" "}
                <ChevronRightIcon
                  className="group-hover:ml-2 transition-all"
                  size={16}
                />
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md">
                {slide.title}
              </h2>

              {/* Price */}
              <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
                <p>Starts from</p>
                <p className="text-3xl">{currency}{slide.price}</p>
              </div>

              {/* Button */}
              <button className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition">
                LEARN MORE
              </button>
            </div>

            {/* Image */}
            <div className="flex items-end flex-1 justify-end sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm">
              <Image
                className="object-contain w-full sm:w-auto"
                src={slide.imgSrc}
                alt={`Slide ${slide.id}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
