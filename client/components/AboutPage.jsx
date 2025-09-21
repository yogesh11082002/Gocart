'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const AboutPage = () => {
  // Generate floating background shapes
  const shapes = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      size: 50 + Math.random() * 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0a0f1f] via-[#101735] to-[#0a0f1f] overflow-hidden text-white">
      <Navbar bg="bg-transparent" />

      {/* Floating shapes */}
      <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute bg-purple-600 rounded-full opacity-20 blur-3xl"
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              top: `${shape.top}%`,
              left: `${shape.left}%`,
            }}
            animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: shape.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-28 text-center relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          About <span className="text-pink-400">GoCart</span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
          Your one-stop e-commerce platform for gadgets, electronics, and more. We make shopping fast, safe, and delightful.
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20"
      >
        {[
          {
            title: "Fast & Reliable Delivery",
            description:
              "We ensure your products reach you on time with top-notch logistics partners.",
            color: "from-pink-500 to-purple-500",
          },
          {
            title: "Secure Shopping",
            description:
              "Your privacy and security are our top priorities. Shop with confidence.",
            color: "from-blue-500 to-indigo-500",
          },
          {
            title: "Best Prices",
            description:
              "We offer competitive prices on all our products, with regular deals and discounts.",
            color: "from-green-400 to-teal-500",
          },
          {
            title: "Customer Support",
            description:
              "Our support team is available 24/7 to help you with any questions or concerns.",
            color: "from-yellow-400 to-orange-500",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg cursor-pointer`}
          >
            <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-gray-100">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
 
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative z-10 text-center py-16"
>
  <Link href="/shop">
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl"
    >
      Explore Products
    </motion.button>
  </Link>
</motion.div>

    </div>
  );
};

export default AboutPage;
