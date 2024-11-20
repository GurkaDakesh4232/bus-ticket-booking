import React from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'

const Paymentcard = ( {
    selectedpayment,
    value,
    onChange,
    cardholderName,
    cardNumber,
    cardImage,


})=>{
  return (
    <label 
    className={`w-full items-end px-4 py-2 border-2 ${

        selectedpayment === value ? "border-indigo-500/80 bg-indigo-500/15" :"border-x-neutral-300 bg-neutral-100/40 "} rounded-xl relative cursor-pointer
    `}
    >
        <div className="w-full flex items-center justify-between gap-7">
            <div className="flex items-center gap-x-3">
                <div className="w-full h-16 rounded-lg">
                    <img src={cardImage} alt="payment image" className="w-full h-full object-contain object-center rounded-lg" />
                </div>

                <div className="space-y-0.5">
                    <h1 className="text-base text-neutral-600 font-medium">{cardholderName}</h1>
                    <p className="text-neutral-500 text-sm font-normal">
                    <span>
  {cardNumber
    ? `******${cardNumber.toString().slice(-4)}`
    : "Invalid Card Number"}
</span>


                    </p>
                </div>
            </div>

            <div className="flex items-center gap-x-3">
                {selectedpayment==value ?(
                   <IoMdRadioButtonOn className='w-7 h-7 text-indigo-500'/>
                ):(
                    <IoMdRadioButtonOff className='w-7 h-7 text-neutral-500'/>
                )
            }
            </div>
        </div>



        <input type="radio" 
         value={value} 
        checked={selectedpayment===value} 
        onChange={onChange} className="hidden" />

    </label>
  )
}

export default Paymentcard