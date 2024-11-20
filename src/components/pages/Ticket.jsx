import React from 'react'
import TopLayout from '../../layout/TopLayout'
import RouteLayout from '../../layout/RouteLayout'
import { motion } from 'framer-motion'
import Search from './Search'
import PriceRangeSlider from '../PriceRangeSlider'
import Filter from './Filter'
import Searchresult from './Searchresult'

const Ticket = () => {
  return (
    <div className='w-full space-y-12 pb-16'>
        {/* Top Layout */}
    

        <TopLayout
        
        bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
        title={"Reserve Your Ticket"}
        
        />
        <RouteLayout className="space-y-12 relative">
            {/* Search Section */}
            <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">

            <motion.h1
            className="text-3xl sm:text-xl font-semibold text-gray-700 "
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.85, ease: 'easeOut' }}
          >
            Want to change  the route?
          </motion.h1>
            {/*search  */}
          <Search/>
        </div>

            {/* Searched bus tickets */}
            <div className="w-full h-auto grid grid-cols-4 gap-16 relative ">

                {/* filter section */}
                <div className="col-span-1">
                    <Filter className="space-y-4 sticky top-52 z-20"/>
                </div>


                {/* search ticket */}
                <Searchresult/>
            </div>

        </RouteLayout>



    </div>
  )
}

export default Ticket