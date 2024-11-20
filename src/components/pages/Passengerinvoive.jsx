import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoCloseCircle } from 'react-icons/io5'

const Passengerinvoive = () => {
    return (
        <div className='w-full col-span-4 rounded-3xl relative '>

            {/* Top bus details */}
            <div className="w-full flex items-center justify-between bg-primary px-6 py-3  rounded-tl-3xl">
                <div className="flex items-center gap-x-3">
                    <img src={'/bus.png'} alt="image" className="w-auto h-12 object-cover object-center" />
                    <h1 className="text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">
                        garuda super luxary
                    </h1>
                </div>


                <div className="flex items-center gap-x-2">
                    <p className="text-xl text-neutral-50 font-bold">
                        <span className="text-lg ">(Bus No.)</span>HY.TS2286
                    </p>
                </div>

            </div>


            <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-7 mb-7 ">
                <div className="col-span-4 space-y-3.5">

                    {/* billno per seat and date */}
                    <div className="w-full  flex items-center justify-between
         border-dashed border-b-2 border-neutral-200 pb-3">
                        <p className="text-base text-neutral-500 font-normal">
                            Bill No:6654
                        </p>

                        <p className="text-base text-neutral-500 font-normal">
                            NPR 1600 <span className="text-xs">/seat</span>
                        </p>

                        <p className="text-base text-neutral-500 font-normal">
                            Date: 2024-12-02
                        </p>
                    </div>


                    {/* passenger details */}
                    <div className="w-full flex items-center justify-between">
                        <div className="span-y-1.5">
                            <p className="text-base text-neutral-500 font-normal">
                                Name of Passenger:<span className="font-medium">Murali</span>
                            </p>


                            <p className="text-base text-neutral-500 font-normal">
                                Total Seat No:<span className="font-medium">A1, A2, B5, B6</span>
                            </p>



                            <p className="text-base text-neutral-500 font-normal">
                                Pickup Station:<span className="font-medium">CBS</span>
                            </p>


                        </div>



                        <div className="space-y-4 flex items-center justify-center flex-col">
                            <div className="space-y-1 text-center">
                                <p className="text-base text-neutral-500 font-normal">
                                    Total Price
                                </p>
                                <h1 className="text-xl text-neutral-600 font-bold ">
                                    NPR 6400
                                </h1>

                            </div>

                            <div className="w-fit px-3 rounded-full py-1 bg-green-500/5
             border-green-600 text-green-600  border border-dashed text-sm 
             font-medium flex items-center justify-center gap-2 ">
                                <FaCircleCheck size={16} />
                                <span>Bill paid</span>
                            </div>


                            {/* <div className="w-fit px-3 rounded-full py-1 bg-red-500/5
             border-red-600 text-red-600  border border-dashed text-sm 
             font-medium flex items-center justify-center gap-2 ">
             <IoCloseCircle size={16}/>
             <span>pending</span>
            </div>*/}

                        </div>
                    </div>




                    {/*route details */}
                    <div className="w-full  flex items-center justify-between
         border-dashed border-t-2 border-neutral-200 pt-3">

                        <p className="text-base text-neutral-600 font-normal">
                            Hyderabad:<span className="text-neutral-400 px-2">--------</span>
                            Vizag
                        </p>

                        <p className="text-base text-neutral-600 font-normal">
                            Arrived at 08:30 PM

                        </p>


                        <p className="text-base text-neutral-600 font-normal">
                            Departure at 02:30 AM

                        </p>



                    </div>


                </div>
               <div className="col-span-1 border border-neutral-200 rounded-xl  shadow-sm p-1 ">
                <img src={'/qrcode.jpg'} alt="qrcode" className="w-full aspect-square object-cover object-center rounded-xl" />
               </div>


            </div>


            {/* left bottom  section */}
            <div className="w-full  bg-primary absolute bottom-0 left-0
             rounded-bl-3xl flex items-center justify-between">
                <p className="text-xs text-neutral-100 font-light px-5 py-1.5">
                    Note: 40% charge for cancellation price 24 hours of programme
                </p>

                <div className="flex items-center gap-x-2">
                    <FaPhone className=' w-3 h-3 text-neutral-100'/>
                    <p className="text-xs text-neutral-100 font-light px-4 py-1.5">
                    +91 09009-98889 ,+91 88880-99999
                </p>
                </div>
            </div>


        </div>
    )
}

export default Passengerinvoive