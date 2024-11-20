import React from 'react'
import TicketCard from '../TicketCard'
import { FaBus } from 'react-icons/fa'
import { GrRefresh } from 'react-icons/gr'

const Searchresult = () => {
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>
        <div className="space-y-6">
            <TicketCard 
            icon={FaBus}
            busName={"Yadadri Deluxe"}
            routeFrom={"Hyderabad"}
            routeTo={"Yagadari"}
            arrivalTime={"02:03 PM"}
            departureTime={"01:00 AM"}
            price={"900"}
            availableSeats={"8"}
             />


           <TicketCard 
            icon={FaBus}
            busName={" Deluxe"}
            routeFrom={"Vizag"}
            routeTo={"Goa"}
            arrivalTime={"01:03 PM"}
            departureTime={"08:00 AM"}
            price={"1800"}
            availableSeats={"4"}
             />


           <TicketCard 
            icon={FaBus}
            busName={"Super Luxary"}
            routeFrom={"Hyderabad"}
            routeTo={"Goa"}
            arrivalTime={"06:03 PM"}
            departureTime={"04:00 AM"}
            price={"1300"}
            availableSeats={"1"}
             />



           <TicketCard 
            icon={FaBus}
            busName={"Sworgadwari Deluxe"}
            routeFrom={"Hyderabad"}
            routeTo={"bangloore"}
            arrivalTime={"06:03 PM"}
            departureTime={"04:00 AM"}
            price={"1100"}
            availableSeats={"2"}
             />



        
        </div>
        <div className="w-full flex items-center justify-center">
        <button
  className="flex items-center justify-center gap-2 px-7 py-3 bg-primary text-white font-medium text-base rounded-2xl border-2 border-primary transition duration-200 hover:bg-transparent hover:text-primary"
  type="button"
  aria-label="Load More"
>
  <GrRefresh className="w-5 h-5" />
  Load More
</button>

        </div>

    </div>
  )
}

export default Searchresult