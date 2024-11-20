import React from 'react'
import RouteLayout from '../../layout/RouteLayout'
import Servicecard from '../Servicecard';
import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri';
import { PiHeadsetFill } from 'react-icons/pi';

const Serivces = () => {
  return (
    <RouteLayout className="space-y-12">
        {/*Tag */}
        <div className="w-full flex items-center justify-center text-center mt-8">
            <h1 className="text-3xl text-neutral-800 font-bold">
                Our <span className="text-primary">Services</span>
            </h1>
        </div>



{/*Services card */}

    <div className="w-full grid grid-cols-3 gap-10">
    <Servicecard icon={RiSecurePaymentLine} title={"Secure Payment"} desc={"Integrate secure payment gateway for users to pay for their tickets"}/>
    <Servicecard icon={RiRefund2Line} title={"Refund Policy"} desc={"Offer option for the users to purchase refundable tickets with clear terms"}/>
    <Servicecard icon={PiHeadsetFill} title={"24/7 Support"} desc={"Get assistance anytime through chat,email or call"}/>
    </div>

   
    </RouteLayout>
  )
}

export default Serivces