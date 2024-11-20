import React from 'react'
import TopLayout from '../layout/TopLayout'
import RouteLayout from '../layout/RouteLayout'
import { Link } from 'react-router-dom'
import Warning from './Warning'
import BusSeats from './pages/BusSeats'
import Togglebutton from './pages/Togglebutton'
import Amenities from './pages/Amenities'
import Reservationpolicy from './pages/Reservationpolicy'
import Busimages from './pages/Busimages'

const Details = () => {

    //show the warning message box
    const message=(
        <>
        One individual only can book 10 seats . If you want to book more than 10 seats please--
        <Link to={"/support-team"} className='text-red-500 font-medium'>Contact our  support team.</Link>

    </>

    );

    
    return (


        <div className='w-full space-y-12 pb-16'>
            {/* Top Layout */}


            <TopLayout

                bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
                title={"Bus Details"}

            />
            <RouteLayout className="space-y-12 w-full pb-16">
             {/* seat selection and selection action details  */}
            <div className="w-full space-y-8">

                {/* warning message  */}
                  <Warning message={message}/>

                {/* seat layout */}
                <BusSeats/>
            </div>


             {/* Bus details */}
             <div className="w-full flex items-center justify-center flex-col gap-8 text-center">
                {/* short description about the bus */}
                <p className="taxt-base text-neutral-500 font-normal text-justify">
                A bus is a large vehicle designed for transporting passengers, 
                often used in public or private transit systems. It operates on
                 fixed routes and schedules, accommodating various types like city buses,
                  long-distance coaches, or luxury sleepers. Buses offer features like seating configurations,
                   air conditioning, and real-time tracking for convenience and comfort.
                   <span className="text-lg text-neutral-600 font-medium ml-2 ">
                    Want to see more about the bus?
                   </span>
                </p>

                {/* button */}
                <div className="w-full flex items-center justify-center gap-6 flex-col">

                    <Togglebutton 
                     buttonText={"See more details"}
                     buttonTextHidden={"Hide bus details"}
                    >

                        <div className="w-full space-y-10">

                            {/* Reservation policy and amentities */}
                               <div className="w-full grid grid-cols-7 gap-20">
                                   {/* amentities  */}
                                       <Amenities/>
                                   {/* Revervations policy */}
                                   <Reservationpolicy/>


                               </div>


                            {/* bus images */}
                            <Busimages/>
                        </div>

                    </Togglebutton>
                </div>


             </div>

            </RouteLayout>
        </div>
    )
}

export default Details