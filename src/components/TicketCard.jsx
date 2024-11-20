import React from 'react';
import { FaBus, FaStar } from 'react-icons/fa';
import { MdOutlineChair } from 'react-icons/md';
import { RiVipFill } from 'react-icons/ri';
import { TbAirConditioning } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const TicketCard = ({
  icon: Icon,
  busName,
  routeFrom,
  routeTo,
  arrivalTime,
  price,
  departureTime,
  availableSeats,
}) => {
  return (
    <div className="w-full rounded-xl p-5 border border-neutral-300 shadow-md bg-white space-y-5">
      {/* Bus and Route Information */}
      <div className="space-y-5 border-b border-neutral-300/60 pb-4">
        {/* Bus Information */}
        <div className="flex justify-between items-center">
          {/* Bus Name */}
          <div className="flex items-center gap-3">
            <FaBus className="h-6 w-6 text-primary" />
            <p className="text-lg font-semibold text-neutral-700">{busName}</p>
          </div>

          {/* Bus Features */}
          <div className="flex items-center gap-3">
            {/* AC Feature */}
            <div className="flex items-center gap-1 bg-neutral-200 px-2 py-1 rounded-full">
              <TbAirConditioning className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium text-neutral-600">AC</p>
            </div>
            {/* Rating */}
            <div className="flex items-center gap-1 bg-neutral-200 px-2 py-1 rounded-full">
              <FaStar className="h-4 w-4 text-yellow-500" />
              <p className="text-xs font-medium text-yellow-500">4.5</p>
            </div>
            {/* VIP Sofa */}
            <div className="flex items-center gap-1 bg-neutral-200 px-2 py-1 rounded-full">
              <RiVipFill className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium text-primary">Sofa</p>
            </div>
            {/* Available Seats */}
            <div className="flex items-center gap-1 bg-neutral-200 px-2 py-1 rounded-full">
              <MdOutlineChair className="h-4 w-4 text-primary" />
              <p className="text-xs font-medium text-primary">{availableSeats} seats</p>
            </div>
          </div>
        </div>

        {/* Route Details */}
        <div className="space-y-5">
          {/* Route Timing */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-neutral-700">{arrivalTime}</h1>
            <div className="flex-1 border-dashed border border-neutral-300 relative mx-3">
              <div className="absolute w-14 h-14 p-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-neutral-400 rounded-full flex items-center justify-center bg-white">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-neutral-700">{departureTime}</h1>
          </div>
          {/* Locations */}
          <div className="flex justify-between text-neutral-500 text-sm font-medium">
            <p>{routeFrom}</p>
            <p>{routeTo}</p>
          </div>
        </div>
      </div>

      {/* Price and Reserve Button */}
      <div className="flex justify-between items-center">
        {/* Price */}
        <h1 className="text-xl font-bold text-neutral-800">
          ₹{price}
          <span className="text-sm font-normal text-neutral-500"> / per seat</span>
        </h1>


        <h1 className="text-sm text-neutral-600 font-normal flex items-center justify-center gap-x-1.5">

        <span className="text-lg text-green-700 font-bold pt-0.5">{availableSeats}</span>seats avaliable
        </h1>
        {/* Reserve Button */}
        <Link
          to="/bus-tickets/details"
          className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg border-2 border-primary transition duration-200 hover:bg-transparent hover:text-primary"
        >
          Reserve Seat
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
