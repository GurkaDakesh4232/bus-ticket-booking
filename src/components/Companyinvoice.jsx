import React from 'react'
import { FaPhone } from 'react-icons/fa'

const Companyinvoice = () => {
  return (
    
    <div className='w-full col-span-1  border-dashed border-l-2 
    border-neutral-400 relative  '>
        <div className="w-full bg-primary px-4 py-5 rounded-tr-3xl">
            <h1 className=" w-full text-2xl text-neutral-50 font-bold text-center">
                Bus Ticket
            </h1>
        </div>


        <div className="w-full px-4 py-7 space-x-2">
            <p className="text-sm text-neutral-600  font-normal">
                Bill No:2727
            </p>

            <p className="text-sm text-neutral-600  font-normal">
                Date:2024-12-20
            </p>

            <p className="text-sm text-neutral-600  font-normal">
                Name:Murali
            </p>

            <p className="text-sm text-neutral-600  font-normal">
                From <span className='text-xs'>(Hyderabad)</span>
            </p>

            <p className="text-sm text-neutral-600  font-normal">
                To<span className='text-xs'>(Vizag)</span>
                
            </p>


            <p className="text-sm text-neutral-600  font-normal">
                Dept. Time:08:22 PM
            </p>

            <p className="text-sm text-neutral-600  font-normal">
                Seat No:277
            </p>

            <p className="text-sm text-neutral-600  font-normal">
                Total passengers:04 only
            </p>

            <p className="text-sm text-neutral-600  font-normal">
                Total price:6400/-
            </p>




        </div>




        {/*Right bottom section */}
        <div className="w-full  bg-primary absolute bottom-0 right-0
             rounded-br-3xl flex items-center justify-center">
             <div className="flex items-center gap-x-2">
                    <FaPhone className=' w-3 h-3 text-neutral-100 '/>
                    <p className="text-xs text-neutral-100 font-light px-4 py-1.5">
                    +91 09009-98889 
                </p>
                </div>
            </div>

    </div>
  
  )
}

export default Companyinvoice