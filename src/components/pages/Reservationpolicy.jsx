import React from 'react'

const Reservationpolicy = () => {
  return (
    <div className=' col-span-4 w-full border-l border-dashed border-neutral-400 pl-5'>
        <div className="w-full space-y-3 text-left ">
            <h1 className="text-lg text-neutral-600 font-medium text-start">
                Reservation Policies
            </h1>
            <ul className="w-full list-disc list-outside space-y-2.5 px-4">
                <li className="text-sm text-neutral-500 font-normal">Please not this ticket is not refundable</li>
                <li className="text-sm text-neutral-500 font-normal">Passengers must keep their tickets until the journey is ends; Otherwise they will need to purchase new one</li>
                <li className="text-sm text-neutral-500 font-normal">Tickets can be canclled 24 hours before the departure time for a 50% fee</li>
                <li className="text-sm text-neutral-500 font-normal">Bus services are may be cancelled , resheduled ,or delayed due to natural disasters or other unforeseen circumstances</li>
                <li className="text-sm text-neutral-500 font-normal">Passengers must arrive at the bording point 30 minutes before the departure time. The company is not responsible for missed busses due to late arrivals</li>
            </ul>
        </div>


    </div>
  )
}

export default Reservationpolicy