import React from 'react'
import Paymentmethod from './Paymentmethod'

const Passengerdetails = () => {
  return (
    <div className=' w-full col-span-4 py-4 space-y-6'>
        <h1 className="text-xl text-neutral-700 font-semibold">
            Pasenger Information
        </h1>
        <div className="space-y-7">
            <div className="w-full space-y-2">
                <label htmlFor="fullname"  className="text-sm text-neutral-500 font-medium">Full Name</label>
                <input type="text" placeholder='e.g. Dakesh yadav' className="w-full h-14 px-4 bg-neutral-100/40    focus:bg-neutral-100/70 border
                 border-e-neutral-400/50 text-neutral-600 rounded-xl focus:border-neutral-400  
                 focus:outline-none text-base font-normal placeholder:text-neutral-400" />
            </div>

            <div className="w-full space-y-2">
                <label htmlFor="email"  className="text-sm text-neutral-500 font-medium">Email Address</label>
                <input type="email" placeholder='e.g. abc@example.com' className="w-full h-14 px-4 bg-neutral-100/40    focus:bg-neutral-100/70 border
                 border-e-neutral-400/50 text-neutral-600 rounded-xl focus:border-neutral-400  
                 focus:outline-none text-base font-normal placeholder:text-neutral-400" />
            </div>

            <div className="w-full space-y-2">
                <label htmlFor="number"  className="text-sm text-neutral-500 font-medium">Phone</label>
                <input type="number" placeholder='e.g.+91 98787-90899' className="w-full h-14 px-4 bg-neutral-100/40    focus:bg-neutral-100/70 border
                 border-e-neutral-400/50 text-neutral-600 rounded-xl focus:border-neutral-400  
                 focus:outline-none text-base font-normal placeholder:text-neutral-400" />
            </div>


            <div className="w-full space-y-2">
                <label htmlFor="altnumber"  className="text-sm text-neutral-500 font-medium">Alternative phone number</label>
                <input type="altnumber" placeholder='e.g.+91 0909-91097' className="w-full h-14 px-4 bg-neutral-100/40    focus:bg-neutral-100/70 border
                 border-e-neutral-400/50 text-neutral-600 rounded-xl focus:border-neutral-400  
                 focus:outline-none text-base font-normal placeholder:text-neutral-400" />
            </div>


            <div className="w-full space-y-2">
                <label  className="text-sm text-neutral-500 font-medium">Pickup Location</label>
                <select 
                className="w-full h-14 px-4 bg-neutral-100/40    focus:bg-neutral-100/70 border
                 border-e-neutral-400/50 text-neutral-600 rounded-xl focus:border-neutral-400  
                 focus:outline-none text-base font-normal placeholder:text-neutral-400"
                >
                 <option selected disabled>Choose your nearest pickup Location

                 </option>
                 <option value="jbs">JBS</option>
                 <option value="lb nagar">LB Nagar</option>
                 <option value=" uppal"> Uppal</option>
                 <option value="cbs"> CBS</option>

                </select>
                
            </div>
        </div>
           
           {/*Payment Method  */}
           <Paymentmethod/>

    </div>
  )
}

export default Passengerdetails