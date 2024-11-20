import React, { useState } from 'react'
import Paymentcard from './Paymentcard';
import mastercard from '../../../public/mastercard.png';
import creditcard from '../../../public/creditcard.png';
import { FaPlus } from 'react-icons/fa';



const Paymentmethod = () => {

    const [selectedpaymentmethod,setselectedPaymentMethod]= useState('');

    const handleChange = (e) =>{
        setselectedPaymentMethod(e.target.value);
    }
  return (
    <div className='w-full space-y-3'>
        <h6 className="text-sm text-neutral-500 font-medium">
            Select Payment Method
        </h6>
        <div className="w-full grid grid-cols-2 gap-10">
            <Paymentcard
            selectedpayment={selectedpaymentmethod}
            value={mastercard}
            onChange={handleChange}
            cardholderName={'Sonu'}
            cardNumber={123209997867576789}
            cardImage={'/mastercard.png'}
            />
            
            <Paymentcard
            selectedpayment={selectedpaymentmethod}
            value={creditcard}
            onChange={handleChange}
            cardholderName={'Munnidar'}
            cardNumber={123209997867576789}
            cardImage={'/creditcard.png'}
            />
           
        </div>


       
        <div className="w-full flex justify-end">
        <div className="w-fit flex items-center  justify-center gap-x-2 cursor-pointer text-base font-normal  text-primary">
            <FaPlus/>
            <p className="capitalize">Add New Card</p>
        </div>
        </div>

    </div>
  )
}

export default Paymentmethod