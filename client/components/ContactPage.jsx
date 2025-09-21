'use client';
import React, { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Navbar";


const ContactPage = () => {
  const form = useRef();
  const [result, setResult] = useState("");

  const shapes = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      width: 60 + Math.random() * 100,
      height: 60 + Math.random() * 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(form.current);
    formData.append("access_key", "2428512a-f0dc-41b9-b674-f28901f47325");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        toast.success("Message sent successfully! 🚀", { position: "top-right", autoClose: 3000, theme: "dark" });
        form.current.reset();
      } else {
        setResult("Failed to submit ❌");
        toast.error("Failed to send message. Please try again.", { position: "top-right", autoClose: 3000, theme: "dark" });
      }
    } catch (error) {
      setResult("Failed to submit ❌");
      toast.error("An error occurred. Please try again.", { position: "top-right", autoClose: 3000, theme: "dark" });
    }
  };

  // Dark gradient for this page
  const pageBg = "bg-gradient-to-br from-[#0a0f1f] via-[#101735] to-[#0a0f1f]";

  return (
    <div className={`relative overflow-hidden min-h-screen flex flex-col ${pageBg}`}>
      <ToastContainer />

      {/* Navbar with page-specific background */}
      <Navbar bg={pageBg} />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-20 blur-3xl"
            style={{
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              top: `${shape.top}%`,
              left: `${shape.left}%`,
            }}
            animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-2xl mx-auto mt-32 bg-[#0d1025]/90 p-10 rounded-2xl shadow-2xl border border-gray-700"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-pink-600">
            Gocart
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded" />
          <p className="text-gray-400 mt-3">
            Have questions about your orders, products, or partnership opportunities? Our GoCart team is here to help 🚀
          </p>
        </div>

        <form ref={form} onSubmit={onSubmit} className="flex flex-col space-y-5">
          <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
          <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
          <input type="text" name="subject" placeholder="Subject" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
          <textarea name="message" placeholder="Message" rows="4" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
          <motion.button type="submit" whileHover={{ scale: 1.05, opacity: 0.9 }} whileTap={{ scale: 0.95 }} className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md shadow-md transition">
            Send Message
          </motion.button>
        </form>

        <p className="text-center mt-4 text-gray-400">{result}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
          <div className="bg-[#131933] p-5 rounded-xl border border-gray-700">
            <h3 className="text-blue-400 font-semibold">Customer Support</h3>
            <p className="text-gray-300 mt-1">support@gocart.com</p>
          </div>
          <div className="bg-[#131933] p-5 rounded-xl border border-gray-700">
            <h3 className="text-blue-400 font-semibold">Phone</h3>
            <p className="text-gray-300 mt-1">+91 98765 43210</p>
          </div>
          <div className="bg-[#131933] p-5 rounded-xl border border-gray-700">
            <h3 className="text-blue-400 font-semibold">Head Office</h3>
            <p className="text-gray-300 mt-1">123 , New Street, Delhi, India</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
