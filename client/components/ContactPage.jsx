'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden">
        {/* Background floating shapes */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-200 rounded-full opacity-30"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
              transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto px-6 py-20 space-y-16 z-10"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-gray-700 text-lg sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Have questions or need support? Reach out to us and we’ll get back to you as soon as possible.
            </motion.p>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 gap-6"
          >
            {['name', 'email', 'message'].map((field, i) => (
              <motion.input
                key={i}
                as={field === 'message' ? 'textarea' : 'input'}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                whileFocus={{ scale: 1.02, borderColor: "#34D399" }}
                className={`p-4 border rounded-xl outline-none text-gray-700 ${field === 'message' ? 'resize-none h-36' : ''}`}
                required
              />
            ))}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#10B981" }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white py-3 rounded-xl font-medium transition"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Email", value: "support@printo.com" },
              { title: "Phone", value: "+91 98765 43210" },
              { title: "Address", value: "123 Printo Street, Ghaziabad, Utar pradesh " },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="p-6 bg-green-50 rounded-2xl text-center cursor-pointer transition-all"
              >
                <h2 className="text-lg font-semibold text-green-700 mb-2">{info.title}</h2>
                <p className="text-gray-600">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
