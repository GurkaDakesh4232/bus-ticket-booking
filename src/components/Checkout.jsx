import React from 'react'
import RouteLayout from '../layout/RouteLayout'
import TopLayout from '../layout/TopLayout'
import Passengerdetails from './pages/Passengerdetails'
import Bokingstatus from './pages/Bokingstatus'

const Checkout = () => {
    return (
        <div className='w-full space-y-12 pb-16 ' >
            {/* Top Layout */}


            <TopLayout

                bgImg={"/inter.jpg"}
                title={"Ckeckout"}

            />
            <RouteLayout className="space-y-12 w-full pb-16">
                <div className="w-full grid grid-cols-7 gap-44 relative">
                    {/* Passenger  details  */}
                    <Passengerdetails />


                    {/* Ticket  details  */}
                    <Bokingstatus />


                </div>


            </RouteLayout>

        </div>
    )
}

export default Checkout