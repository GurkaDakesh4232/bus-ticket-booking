import React from 'react'
import RouteLayout from '../layout/RouteLayout'
import Topsearchcard from './Topsearchcard';

const Topsearch = () => {
  return (
    <RouteLayout className="space-y-12">

         {/* top Search */}
         <div className="w-full flex items-center justify-center text-center mt-8">
            <h1 className="text-3xl text-neutral-800 font-bold">
                Top Search <span className="text-primary">Routes</span>
            </h1>
        </div>


        {/*Top Search card */}

    <div className="w-full grid grid-cols-3 gap-5">
        <Topsearchcard routeFrom={"Hyderabad"} routeTo={"Tirupathi"} timeDuration={"11Hrs"} price={"1200"}/>
        <Topsearchcard routeFrom={"Hyderabad"} routeTo={"Chennai"} timeDuration={"10Hrs"} price={"900"}/>
        <Topsearchcard routeFrom={"Vishakapatnam"} routeTo={"Hyderabad"} timeDuration={"13Hrs"} price={"1400"}/>
        <Topsearchcard routeFrom={"Hyderabad"} routeTo={"Vijayawada"} timeDuration={"6Hrs"} price={"800"}/>
        <Topsearchcard routeFrom={"Hyderabad"} routeTo={"Bangloore"} timeDuration={"10Hrs"} price={"900"}/>
        <Topsearchcard routeFrom={"Goa"} routeTo={"Hyderabad"} timeDuration={"16Hrs"} price={"1800"}/>




    </div>

    </RouteLayout>
  )
}

export default Topsearch;