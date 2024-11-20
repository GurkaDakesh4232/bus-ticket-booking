

import React from 'react';
import { motion } from 'framer-motion';
import Search from './Search'; // Ensure this component is correctly imported

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: -800 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="w-full flex-1 h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/herobg.png)' }} // Ensure the image exists in the public folder
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
    >
      {/* Main Overlay for the image */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5"></div>

      {/* Content Below Navbar, Centered */}
      <div className="absolute top-[5ch] left-1/2 w-full transform -translate-x-1/2 text-center px-8 py-8 z-10">

        {/* Title Section */}
        <div className="space-y-2">
          <motion.p
            className="text-sm sm:text-lg font-bold text-gray-500"
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            Get Your Bus Tickets
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-1xl font-bold text-gray-800 capitalize"
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.85, ease: 'easeOut' }}
          >
            Find the best bus for you!
          </motion.h1>
<Search/>
          {/* Search Section */}
          
        </div>
    
      </div>
     
    </motion.div>
  );
};

export default Hero; 