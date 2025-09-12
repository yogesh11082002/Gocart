// import React, { useState, useEffect } from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";

// const HeaderSlider = () => {
//   const sliderData = [
//     {
//       id: 1,
//       title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
//       offer: "Limited Time Offer 30% Off",
//       buttonText1: "Buy now",
//       buttonText2: "Find more",
//       imgSrc: assets.header_headphone_image,
//     },
//     {
//       id: 2,
//       title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
//       offer: "Hurry up only few lefts!",
//       buttonText1: "Shop Now",
//       buttonText2: "Explore Deals",
//       imgSrc: assets.header_playstation_image,
//     },
//     {
//       id: 3,
//       title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
//       offer: "Exclusive Deal 40% Off",
//       buttonText1: "Order Now",
//       buttonText2: "Learn More",
//       imgSrc: assets.header_macbook_image,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [sliderData.length]);

//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="overflow-hidden relative w-full">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentSlide * 100}%)`,
//         }}
//       >
//         {sliderData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
//           >
//             <div className="md:pl-8 mt-10 md:mt-0">
//               <p className="md:text-base text-orange-600 pb-1">{slide.offer}</p>
//               <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
//                 {slide.title}
//               </h1>
//               <div className="flex items-center mt-4 md:mt-6 ">
//                 <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
//                   {slide.buttonText1}
//                 </button>
//                 <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
//                   {slide.buttonText2}
//                   <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon} alt="arrow_icon" />
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center flex-1 justify-center">
//               <Image
//                 className="md:w-72 w-48"
//                 src={slide.imgSrc}
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center justify-center gap-2 mt-8">
//         {sliderData.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleSlideChange(index)}
//             className={`h-2 w-2 rounded-full cursor-pointer ${
//               currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeaderSlider;

// 'use client'
// import React, { useState, useEffect, useRef } from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import { ChevronRightIcon } from "lucide-react";

// const HeaderSlider = () => {
//   const sliderData = [1, 2, 3, 4]; // Repeat the same hero div 4 times

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const newsRef = useRef(null);
//   const headlineRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//     }, 4000); // change slide every 4s
//     return () => clearInterval(interval);
//   }, [sliderData.length]);

//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);
//   };

//   const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

//   return (
//     <div className="overflow-hidden relative w-full">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {sliderData.map((_, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row items-center justify-between bg-green-200 py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full relative"
//           >
//             {/* Left Text Content */}
//             <div className="md:pl-8 mt-10 md:mt-0 flex-1">
//               <div
//                 ref={newsRef}
//                 className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm mb-3"
//               >
//                 <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
//                   NEWS
//                 </span>
//                 Free Shipping on Orders Above $50!
//                 <ChevronRightIcon
//                   className="group-hover:ml-2 transition-all"
//                   size={16}
//                 />
//               </div>
//               <h2
//                 ref={headlineRef}
//                 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md"
//               >
//                 Gadgets you'll love. Prices you'll trust.
//               </h2>
//               <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
//                 <p>Starts from</p>
//                 <p className="text-3xl">{currency}4.90</p>
//               </div>
//               <button
//                 ref={buttonRef}
//                 className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition"
//               >
//                 LEARN MORE
//               </button>
//             </div>

//             {/* Right Image */}
//             <div className="flex items-center flex-1 justify-center relative">
//               <Image
//                 ref={imageRef}
//                 className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm"
//                 src={assets.hero_model_img}
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Slider Dots */}
//       <div className="flex items-center justify-center gap-2 mt-8">
//         {sliderData.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleSlideChange(index)}
//             className={`h-2 w-2 rounded-full cursor-pointer ${
//               currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeaderSlider;

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
