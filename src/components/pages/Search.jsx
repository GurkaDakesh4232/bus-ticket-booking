import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaExchangeAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Updated with FaExchangeAlt for the exchange arrow

const Search = () => {
  return (
    <motion.div
      className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-2 mt-2" // Ensure full-width container
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full"> {/* Full width for container */}
        {/* Search Input Section - From */}
        <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4"> {/* Full width for small screens, 1/4 for larger screens */}
          <input
            type="text"
            placeholder="From"
            className="w-full p-2 bg-white text-black border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pr-10 pl-10"
          />
          {/* Location Icon for 'From' */}
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
        </div>

        {/* Exchange Arrow Icon between From and To */}
        <div className="text-primary md:block hidden">
          <FaExchangeAlt className="text-2xl" /> {/* Using FaExchangeAlt for the exchange icon */}
        </div>

        {/* Search Input Section - To */}
        <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4"> {/* Full width for small screens, 1/4 for larger screens */}
          <input
            type="text"
            placeholder="To"
            className="w-full p-2 bg-white text-black border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pr-10 pl-10"
          />
          {/* Location Icon for 'To' */}
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
        </div>

        {/* Search Input Section - Date */}
        <div className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
          <input
            type="date"
            className="w-full p-2 bg-white text-black border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pr-10"
          />
        </div>

        {/* Search Button - beside Date */}
        <div className="md:w-1/5 flex justify-center p-2 md:justify-start mt-4 md:mt-0 w-full">
        <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center text-sm font-medium border-2 border-transparent transition-all duration-200 hover:bg-transparent hover:border-primary hover:text-primary">
  <FaSearch className="mr-2" />
   Search
</button>

        </div>
      </div>
    </motion.div>
  );
};

export default Search;
