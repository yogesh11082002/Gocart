// 'use client'
// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';

// const AboutPage = () => {
//   const heroRef = useRef(null);
//   const missionRef = useRef(null);

//   useEffect(() => {
//     // GSAP animation for hero text
//     gsap.from(heroRef.current, {
//       opacity: 0,
//       y: -50,
//       duration: 1,
//       ease: 'power3.out',
//     });

//     // Mission section animation on scroll
//     gsap.from(missionRef.current, {
//       scrollTrigger: {
//         trigger: missionRef.current,
//         start: 'top 80%',
//       },
//       opacity: 0,
//       x: -100,
//       duration: 1,
//       stagger: 0.2,
//     });
//   }, []);

//   return (
//     <div className='px-6 max-w-7xl mx-auto py-10 space-y-20'>
//       {/* Hero Section */}
//       <section className='flex flex-col md:flex-row items-center gap-10'>
//         <motion.div
//           ref={heroRef}
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className='flex-1'
//         >
//           <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500'>
//             About Printo
//           </h1>
//           <p className='mt-6 text-lg text-slate-700'>
//             Printo is your ultimate e-cart solution. Shop smarter, faster, and safer.
//           </p>
//         </motion.div>
//         <div className='flex-1'>
//           <Image src={assets.hero_model_img} alt='Printo Hero' className='rounded-xl' />
//         </div>
//       </section>

//       {/* Our Mission / Vision */}
//       <section ref={missionRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//         <motion.div whileHover={{ scale: 1.05 }} className='p-8 bg-green-100 rounded-2xl shadow-lg'>
//           <h3 className='text-xl font-semibold'>Our Mission</h3>
//           <p className='mt-4 text-slate-700'>Provide the best shopping experience to every customer.</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className='p-8 bg-blue-100 rounded-2xl shadow-lg'>
//           <h3 className='text-xl font-semibold'>Our Vision</h3>
//           <p className='mt-4 text-slate-700'>Revolutionize online shopping with innovation and trust.</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className='p-8 bg-orange-100 rounded-2xl shadow-lg'>
//           <h3 className='text-xl font-semibold'>Our Promise</h3>
//           <p className='mt-4 text-slate-700'>Quality, speed, and satisfaction guaranteed.</p>
//         </motion.div>
//       </section>

//       {/* CTA */}
//       <section className='text-center'>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className='bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold'
//         >
//           Explore Products
//         </motion.button>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;
 'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-20 space-y-16"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
            About Gocart
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Your one-stop e-commerce platform for gadgets, electronics, and more. We make shopping fast, safe, and delightful.
          </p>
        </div>

        {/* Features / Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Fast & Reliable Delivery",
              description:
                "We ensure your products reach you on time with top-notch logistics partners.",
            },
            {
              title: "Secure Shopping",
              description:
                "Your privacy and security are our top priorities. Shop with confidence on Printo.",
            },
            {
              title: "Best Prices",
              description:
                "We offer competitive prices on all our products, with regular deals and discounts.",
            },
            {
              title: "Customer Support",
              description:
                "Our support team is available 24/7 to help you with any questions or concerns.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-green-50 rounded-2xl shadow-md cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-3 text-green-700">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default AboutPage;
