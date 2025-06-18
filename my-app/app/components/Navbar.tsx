'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Dropdown = ({ label }: { label: string }) => (
  <div className="relative group inline-block text-left">
    <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
      {label}
      <img
        src="/arrow.png"
        alt="Down arrow"
        className="ml-1 w-4 h-4 object-contain transition-transform group-hover:rotate-180" 
      />
    </button>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute hidden group-hover:block mt-2 w-40 bg-white shadow-lg  z-10"
    >
      <ul className="py-1 text-sm text-gray-700">
        <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition">Option 1</li>
        <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition">Option 2</li>
        <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition">Option 3</li>
      </ul>
    </motion.div>
  </div>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-black flex items-center justify-between px-4 sm:px-8 lg:px-16 py-3 transition-all duration-300">

      <div className="text-xl sm:text-2xl font-extrabold bg-gray-200 text-black px-4 py-1 font-robotoCondensed">
        LOGO
      </div>

      <div className="hidden md:flex gap-6 font-robotoCondensed text-[#1959AC]">
        <Dropdown label="Lorem Ipsum" />
        <Dropdown label="Lorem Ipsum" />
        <Dropdown label="Lorem Ipsum" />
      </div>

      <button className="bg-white text-black font-semibold px-6 sm:px-9 py-2 active:scale-95 transition duration-300 ease-in-out rounded">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;

