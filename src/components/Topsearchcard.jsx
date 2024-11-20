import React from 'react';
import { FaSearch, FaWifi } from 'react-icons/fa';
import { GiCharging, GiWaterBottle } from 'react-icons/gi';
import { IoTv } from 'react-icons/io5';

const Topsearchcard = ({ routeFrom, routeTo, timeDuration, price }) => {
  return (
    <div className="w-full rounded-xl p-5 border border-neutral-300 shadow-sm space-y-6 bg-white">
      {/* Route Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-400 font-medium">From</p>
          <p className="text-sm text-neutral-400 font-medium">To</p>
        </div>

        <div className="flex items-center justify-between gap-x-3">
          {/* From */}
          <h1 className="text-lg text-neutral-700 font-semibold">{routeFrom}</h1>

          {/* Duration */}
          <div className="flex-1 border-dashed border border-neutral-400 relative">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 px-3 h-6 rounded-full text-xs text-neutral-500 font-medium border">
              {timeDuration}
            </p>
          </div>

          {/* To */}
          <h1 className="text-lg text-neutral-700 font-semibold">{routeTo}</h1>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="flex items-center gap-4">
        {/* Wifi */}
        <div className="flex items-center gap-x-1">
          <FaWifi className="w-4 h-4 text-neutral-500" />
          <p className="text-xs text-neutral-600 font-medium">Internet</p>
        </div>

        {/* Snacks */}
        <div className="flex items-center gap-x-1">
          <GiWaterBottle className="w-4 h-4 text-neutral-500" />
          <p className="text-xs text-neutral-600 font-medium">Snacks</p>
        </div>

        {/* TV */}
        <div className="flex items-center gap-x-1">
          <IoTv className="w-4 h-4 text-neutral-500" />
          <p className="text-xs text-neutral-600 font-medium">TV</p>
        </div>

        {/* Mobile Charging */}
        <div className="flex items-center gap-x-1">
          <GiCharging className="w-4 h-4 text-neutral-500" />
          <p className="text-xs text-neutral-600 font-medium">Mobile Charging</p>
        </div>
      </div>

      {/* Price and Reserve Button Section */}
      <div className="flex items-center justify-between">
        {/* Price */}
        <h1 className="text-xl text-neutral-800 font-bold">₹{price}</h1>

        {/* Reserve Button */}
        <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center text-sm font-medium border-2 border-transparent transition-all duration-200 hover:bg-transparent hover:border-primary hover:text-primary">

  Reserve Seat
</button>

      </div>
    </div>
  );
};

export default Topsearchcard;
