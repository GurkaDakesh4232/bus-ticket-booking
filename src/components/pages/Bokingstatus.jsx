import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Bookingstatus = ({ selectedSeats, busSeatData }) => {
  return (
    <div className="w-full col-span-3 sticky top-20 space-y-7">
      <div className="w-full bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm space-y-5">
        <h1 className="text-lg text-neutral-700 font-bold text-center border-b border-neutral-200 pb-4">
          Your Ticket Report Status
        </h1>

        <div className="space-y-5">
          {/* Destination Info */}
          <div className="space-y-2 w-full">
            <h1 className="text-base text-neutral-700 font-medium">Your Destination</h1>
            <div className="space-y-0.5 w-full">
              <div className="w-full flex items-center justify-between gap-x-5">
                <p className="text-sm text-neutral-400 font-normal">
                  From <span className="text-xs">(Hyderabad)</span>
                </p>
                <p className="text-sm text-neutral-400 font-normal">
                  To <span className="text-xs">(Goa)</span>
                </p>
              </div>
              <div className="w-full flex items-center justify-between gap-x-4">
                <h1 className="text-sm text-neutral-600 font-normal">
                  Hyderabad<span className="font-medium">(03:00 PM)</span>
                </h1>
                <div className="flex-1 border border-dashed border-neutral-300"></div>
                <h1 className="text-sm text-neutral-600 font-normal">
                  Chennai<span className="font-medium">(03:00 PM)</span>
                </h1>
              </div>
              <div className="w-full flex items-center justify-between gap-x-4 !mt-1.5">
                <h1 className="text-sm text-neutral-600 font-normal">Bus No:</h1>
                <h1 className="text-sm text-neutral-700 font-normal">(HY.TS229709)</h1>
              </div>
            </div>
          </div>

          {/* Seat Info */}
          <div className="space-y-2 w-full">
            <h1 className="text-base text-neutral-700 font-medium">Your Seats</h1>
            <div className="w-full flex items-center gap-x-3">
                 <div
                  className="w-9 h-9 bg-neutral-200/80 rounded-lg 
                  flex items-center justify-center text-base text-neutral-700
                   font-semibold">
                    A2
                   </div>



                   <div
                  className="w-9 h-9 bg-neutral-200/80 rounded-lg 
                  flex items-center justify-center text-base text-neutral-700
                   font-semibold">
                    A3
                   </div>
        


                   <div
                  className="w-9 h-9 bg-neutral-200/80 rounded-lg 
                  flex items-center justify-center text-base text-neutral-700
                   font-semibold">
                    B6
                   </div>
                   


                   <div
                  className="w-9 h-9 bg-neutral-200/80 rounded-lg 
                  flex items-center justify-center text-base text-neutral-700
                   font-semibold">
                    B7
                   </div>
        
        
            </div>
          </div>

          {/* Fare Info */}
          <div className="space-y-2 w-full">
            <h1 className="text-base text-neutral-700 font-medium">Total Fare Price</h1>
            <div className="flex items-center justify-between gap-x-4">
              <div className="flex flex-col gap-y-0.5">
                <h3 className="text-base text-neutral-500 font-medium">Total Price:</h3>
                <span className="text-xs text-neutral-500 font-normal">(Including all taxes)</span>
              </div>
              <p className="text-base text-neutral-600 font-semibold">
                NPR{"6400 "}
                
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-1.5">
      <Link
      to="/bus-tickets/payment"
      className="w-full bg-primary hover:bg-primary/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition"
    >
      Processed To Pay
      <FaArrowRightLong/>
    </Link>
      </div>
    </div>
  );
};

export default Bookingstatus;