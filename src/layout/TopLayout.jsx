import React from 'react'
import { motion } from 'framer-motion'
import RouteLayout from './RouteLayout';

const TopLayout = ({bgImg,title,className}) => {

        const variants = {
          hidden: { opacity: 0, y: -800 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        };

  return (
    <motion.div
      className={`w-full bg-cover h-[30vh] bg-no-repeat bg-center relative ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}

      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
    >
        <RouteLayout className="absolute top-0 left-0 w-full h-full pb-10 pt-[9ch] bg-gradient-to-b from-neutral-200/90 via-neutral-500/60 to-neutral-900/70 flex items-center justify-end flex-col gap-3">
        <motion.h1
            className="text-3xl sm:text-1xl font-bold text-gray-50 capitalize"
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.85, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>
        </RouteLayout>
   
    </motion.div>
  )
}

export default TopLayout