// 'use client';
// import React, { useRef, useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Navbar from "@/components/Navbar";


// const ContactPage = () => {
//   const form = useRef();
//   const [result, setResult] = useState("");

//   const shapes = useMemo(() => {
//     return Array.from({ length: 12 }).map(() => ({
//       width: 60 + Math.random() * 100,
//       height: 60 + Math.random() * 100,
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//     }));
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setResult("Sending...");
//     const formData = new FormData(form.current);
//     formData.append("access_key", "2428512a-f0dc-41b9-b674-f28901f47325");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       if (data.success) {
//         setResult("Form Submitted Successfully ✅");
//         toast.success("Message sent successfully! 🚀", { position: "top-right", autoClose: 3000, theme: "dark" });
//         form.current.reset();
//       } else {
//         setResult("Failed to submit ❌");
//         toast.error("Failed to send message. Please try again.", { position: "top-right", autoClose: 3000, theme: "dark" });
//       }
//     } catch (error) {
//       setResult("Failed to submit ❌");
//       toast.error("An error occurred. Please try again.", { position: "top-right", autoClose: 3000, theme: "dark" });
//     }
//   };

//   // Dark gradient for this page
//   const pageBg = "bg-gradient-to-br from-[#0a0f1f] via-[#101735] to-[#0a0f1f]";

//   return (
//     <div className={`relative overflow-hidden min-h-screen flex flex-col ${pageBg}`}>
//       <ToastContainer />

//       {/* Navbar with page-specific background */}
//       <Navbar bg={pageBg} />

//       {/* Floating shapes */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {shapes.map((shape, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-blue-500 rounded-full opacity-20 blur-3xl"
//             style={{
//               width: `${shape.width}px`,
//               height: `${shape.height}px`,
//               top: `${shape.top}%`,
//               left: `${shape.left}%`,
//             }}
//             animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
//             transition={{
//               duration: 12 + Math.random() * 10,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut",
//               delay: shape.delay,
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Contact Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 w-full max-w-2xl mx-auto mt-32 bg-[#0d1025]/90 p-10 rounded-2xl shadow-2xl border border-gray-700"
//       >
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold text-pink-600">
//             Gocart
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded" />
//           <p className="text-gray-400 mt-3">
//             Have questions about your orders, products, or partnership opportunities? Our GoCart team is here to help 🚀
//           </p>
//         </div>

//         <form ref={form} onSubmit={onSubmit} className="flex flex-col space-y-5">
//           <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
//           <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
//           <input type="text" name="subject" placeholder="Subject" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
//           <textarea name="message" placeholder="Message" rows="4" required className="p-3 rounded-md bg-[#131933] text-white border border-gray-600 focus:outline-none focus:border-blue-500"/>
//           <motion.button type="submit" whileHover={{ scale: 1.05, opacity: 0.9 }} whileTap={{ scale: 0.95 }} className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md shadow-md transition">
//             Send Message
//           </motion.button>
//         </form>

//         <p className="text-center mt-4 text-gray-400">{result}</p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
//           <div className="bg-[#131933] p-5 rounded-xl border border-gray-700">
//             <h3 className="text-blue-400 font-semibold">Customer Support</h3>
//             <p className="text-gray-300 mt-1">support@gocart.com</p>
//           </div>
//           <div className="bg-[#131933] p-5 rounded-xl border border-gray-700">
//             <h3 className="text-blue-400 font-semibold">Phone</h3>
//             <p className="text-gray-300 mt-1">+91 98765 43210</p>
//           </div>
//           <div className="bg-[#131933] p-5 rounded-xl border border-gray-700">
//             <h3 className="text-blue-400 font-semibold">Head Office</h3>
//             <p className="text-gray-300 mt-1">123 , New Street, Delhi, India</p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactPage;
'use client';
import React, { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const form = useRef();
  const [result, setResult] = useState("");

  const shapes = useMemo(() => {
    const colors = ["#ff7eb9", "#7afcff", "#ffe700", "#ff8a65", "#9c27b0"];
    return Array.from({ length: 12 }).map(() => ({
      width: 60 + Math.random() * 100,
      height: 60 + Math.random() * 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
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
        toast.success("Message sent successfully! 🚀", { position: "top-right", autoClose: 3000, theme: "light" });
        form.current.reset();
      } else {
        setResult("Failed to submit ❌");
        toast.error("Failed to send message. Please try again.", { position: "top-right", autoClose: 3000, theme: "light" });
      }
    } catch (error) {
      setResult("Failed to submit ❌");
      toast.error("An error occurred. Please try again.", { position: "top-right", autoClose: 3000, theme: "light" });
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col bg-white">
      <ToastContainer />
      <Navbar bg="bg-white" />

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
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              backgroundColor: shape.color,
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

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-20 mb-10 px-4 sm:px-6 md:px-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Get in Touch
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Have questions about your orders, products, or partnership opportunities? Fill out the form or contact us directly.
        </p>
      </motion.div>

      {/* Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 mb-20"
      >
        {/* Left Card - Contact Info */}
        <div className="flex-1 bg-gradient-to-r from-slate-100 to-slate-100 p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between">
          <div className="space-y-6 sm:space-y-8 flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">Contact Information</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Reach out to us anytime. We are here to answer your questions, provide support for all your needs, and assist you with orders, partnerships, and feedback. Our GoCart team is committed to helping you succeed.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-4 sm:gap-5 mt-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-blue-600 font-semibold text-sm sm:text-lg">📧 Email:</span>
                <span className="text-gray-700 text-sm sm:text-base">support@gocart.com</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-green-600 font-semibold text-sm sm:text-lg">📞 Phone:</span>
                <span className="text-gray-700 text-sm sm:text-base">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-pink-600 font-semibold text-sm sm:text-lg">🏢 Address:</span>
                <span className="text-gray-700 text-sm sm:text-base">123 New Street, Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-purple-600 font-semibold text-sm sm:text-lg">⏰ Hours:</span>
                <span className="text-gray-700 text-sm sm:text-base">Mon - Fri: 9 AM - 6 PM</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-yellow-600 font-semibold text-sm sm:text-lg">🌐 Website:</span>
                <span className="text-gray-700 text-sm sm:text-base">www.gocart.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3 mt-4">
              <h3 className="text-base sm:text-xl font-semibold text-gray-800">Follow Us</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-600 font-semibold">Twitter</a>
                <a href="#" className="text-pink-500 hover:text-pink-700 font-semibold">Instagram</a>
                <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold hidden">LinkedIn</a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="flex-1 bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-400 flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Send a Message</h2>
          <form ref={form} onSubmit={onSubmit} className="flex flex-col gap-4 sm:gap-5 flex-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-sm sm:text-base"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-sm sm:text-base"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-sm sm:text-base"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, opacity: 0.95 }}
              whileTap={{ scale: 0.97 }}
              className="py-3 sm:py-4 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md text-base sm:text-lg transition"
            >
              Send Message
            </motion.button>
          </form>
          <p className="text-center mt-3 text-gray-500 text-sm sm:text-base">{result}</p>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
