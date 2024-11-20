import React, { useEffect, useState } from 'react'
import { GiSteeringWheel } from 'react-icons/gi'
import busSeatData from './BusSeatsdata';
import { MdOutlineChair } from 'react-icons/md';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Errormessage from './Errormessage';

const BusSeats = () => {
  // Trace seat selection
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showError, setShowError] = useState(false);

  // Toggle seat selection
  const handleSeatClick = (seatId) => {
    // Find the seat being clicked
    const selectedSeat = busSeatData.find((seat) => seat.id === seatId);

    // Ignore click if the seat is already booked
    if (selectedSeat.status === 'booked') {
      return;
    }

    // Update seat selection
    setSelectedSeats((prevSelectedSeats) => {
      // Check if the seat is already selected
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((seat) => seat !== seatId); // Deselect seat
      } else {
        // Show error if more than 10 seats are selected
        if (prevSelectedSeats.length >= 10) {
          setShowError(true);
          return prevSelectedSeats; // Do not add more seats
        } else {
          return [...prevSelectedSeats, seatId]; // Add the new seat
        }
      }
    });
  };

  // Hide error message after 10 seconds
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  // Function to determine seat class based on status
  const getSeatName = (seat) => {
    if (seat.status === 'booked') {
      return 'text-primary cursor-not-allowed'; // Booked seats
    }
    if (selectedSeats.includes(seat.id)) {
      return 'text-yellow-600 cursor-pointer'; // Selected seats
    }
    return 'text-neutral-500 cursor-pointer'; // Available seats
  };


  return (
    <div className='w-full grid grid-cols-5 gap-10 '>
      



      {/* seat layout */}
      <div className="col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
        <div className="w-full space-y-7">
          <p className="text-base text-neutral-600  font-medium text-center">
            Click on the avaliable seats to reserve your seat.
          </p>
          {/* Seat Layout */}
          <div className="w-full flex items-center gap-x-3">
            {/* Steering Wheel */}
            <div className="w-10 flex justify-center">
              <GiSteeringWheel className="text-3xl mt-2 text-primary -rotate-90" />
            </div>

            {/* Seat Rows */}
            <div className="flex-1 border-l border-dashed border-neutral-300 px-4 py-2">
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-9 gap-2">
                  {busSeatData.slice(0, 9).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-2"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      {/* Seat ID displayed on the left of the seat */}
                      <h6 className="text-xs text-neutral-600 font-bold">{seat.id}</h6>
                      <MdOutlineChair
                        className={`text-2xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-9 gap-2">
                  {busSeatData.slice(9, 18).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-2"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-xs text-neutral-600 font-bold">{seat.id}</h6>
                      <MdOutlineChair
                        className={`text-2xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-9 gap-2">
                  <div className="col-span-8 flex items-center justify-end pr-2">

                  </div>
                  {busSeatData.slice(18, 19).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-2"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-xs text-neutral-600 font-bold">{seat.id}</h6>
                      <MdOutlineChair
                        className={`text-2xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-9 gap-2">
                  {busSeatData.slice(19, 28).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-2"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-xs text-neutral-600 font-bold">{seat.id}</h6>
                      <MdOutlineChair
                        className={`text-2xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-9 gap-2">
                  {busSeatData.slice(28, 37).map((seat) => (
                    <div
                      key={seat.id}
                      className="flex items-center gap-x-2"
                      onClick={() => handleSeatClick(seat.id)}
                    >
                      <h6 className="text-xs text-neutral-600 font-bold">{seat.id}</h6>
                      <MdOutlineChair
                        className={`text-2xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>




          {/* reservation info  */}
          <div className="w-full flex items-center justify-center gap-6 border-t border-neutral-200 pt-5">
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className='text-xl text-neutral-500 -rotate-90' />
              <p className="text-sm text-neutral-500 font-medium">Avaliable</p>
            </div>

            <div className="flex items-center gap-x-2">
              <MdOutlineChair className='text-xl text-primary -rotate-90' />
              <p className="text-sm text-neutral-500 font-medium">Booked</p>
            </div>

            <div className="flex items-center gap-x-2">
              <MdOutlineChair className='text-xl text-yellow-600 -rotate-90' />
              <p className="text-sm text-neutral-500 font-medium">Selected</p>
            </div>


            <div className="flex items-center gap-x-2">
              <RiMoneyRupeeCircleFill className='text-xl text-neutral-600 ' />
              <p className="text-sm text-neutral-500 font-medium">NPR. 1600</p>
            </div>
          </div>
        </div>
      </div>

      {/*seat selection action */}
      <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border  border-neutral-200 shadow-sm">

        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg text-neutral-600 font-medium">
              Your Destination
            </h1>
            <Link to={"/bus-tickets"} className='text-sm text-primary font-normal'>
              Change route
            </Link>
          </div>

          <div className="space-y-0.5 w-full">
            <div className="w-full flex items-center justify-between gap-x-5">
              <p className="text-sm text-neutral-400 font-normal">
                From <span className="text-xs">(Hyderabad)</span>
              </p>

              <p className="text-sm text-neutral-400 font-normal">
                To<span className="text-xs">(Goa)</span>
              </p>
            </div>

            <div className="w-full flex items-center justify-between gap-x-4">
              <h1 className="text-sm text-neutral-600  font-normal">
                CBS<span className=" font-medium">(03:00 PM)</span>
              </h1>
              <div className="flex-1  border-t-2 border-dashed border-neutral-300"></div>
              <h1 className="text-sm text-neutral-600  font-normal">
                Nanchi<span className=" font-medium">(03:00 PM)</span>
              </h1>

            </div>
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg text-neutral-600 font-medium">
              Selected Seats
            </h1>

            <div className="bg-primary/20 rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase">
              Non-Refubdable
            </div>

          </div>



          {
            selectedSeats.length > 0
              ?
              <div className='w-full flex items-center gap-x-3'>
                {selectedSeats.map((seatId) => {
                  return (
                    <div kay={seatId} className='w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold '>
                      {seatId}
                    </div>
                  )
                })}

              </div>
              :
              <div className='w-full flex items-center gap-x-3'>
                <p className="text-sm text-neutral-500 font-normal">No seats selected</p>
              </div>
          }



        </div>

        <div className="w-full space-y-2">

          <h1 className="text-lg text-neutral-600 font-medium">
            Fare Details
          </h1>

          <div className="w-full flex items-center justify-between border-dashed border-[1.5px] border-neutral-400 pl-2">
            <h3 className="text-sm text-neutral-500 font-medium">Basic Fare:</h3>
            <p className="text-sm text-neutral-600 font-medium">NPR. 1600</p>


          </div>


          <div className="flex items-center justify-between gap-x-4">
            <div className="flex gap-y-0.5 flex-col ">
              <h3 className="text-base text-neutral-500 font-medium">Total Price:</h3>
              <span className="text-xs text-neutral-500 font-normal">
                (Including all taxes)
              </span>
            </div>


            {/* calculate the total price  */}
            <p className="text-base text-neutral-600 font-semibold">
              NPR {""}
              {selectedSeats.reduce((total, seatId) => {
                const seat = busSeatData.find(busSeat => busSeat.id === seatId);
                return total + (seat ? seat.price : 0);
              }, 0)}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
  {selectedSeats.length > 0 ? (
    <Link
      to="/bus-tickets/checkout"
      className="w-full bg-primary hover:bg-primary/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition"
    >
      Proceed to checkout
    </Link>
  ) : (
    <div className="w-full space-y-0.5 flex flex-col items-center">
      <button
        disabled
        className="w-full bg-red-500 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition cursor-not-allowed opacity-70"
      >
        Proceed to checkout
      </button>
      <small className="text-xs text-neutral-600 font-normal px-1 mt-2 text-center">
        Please select atleast 1 seat to proceed  the checkout page.
      </small>
    </div>
  )}
</div>



    </div>


            {/* show the errormessage if more than 10 seats are selected */ }
            {showError &&<Errormessage message={"You can't select more than 10 seats !."}/>}

        </div >
    )
}

export default BusSeats