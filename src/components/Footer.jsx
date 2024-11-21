import React from 'react'
import RouteLayout from '../layout/RouteLayout'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle, FaInstagram, FaRuler, FaSitemap, FaSith, FaWhatsapp } from 'react-icons/fa'
import { FaTowerObservation, FaWebAwesome, FaWebflow } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-neutral-950 py-12'>
        <RouteLayout className="space-y-10">
            {/* Footer Other content */}
           <div className="w-full grid grid-cols-5 gap-8">
               <div className="col-span-2 space-y-8 md:pr-10 pr-0">
                {/* Logo */}
                <Link to="/" className="text-6xl text-primary font-bold">
                    Bus
                   </Link>
                    
                    {/* some description */}
                    <p className="text-sm text-neutral-500 font-normal">
                    "Book bus tickets effortlessly with our user-friendly platform, offering reliable services and seamless travel planning.
                    Experience the convenience of secure online booking and enjoy your journey with trusted operators." 

                    </p>


                <div className="space-y3">

                </div>
                  {/* Social Links */}
                  <div className="w-full flex items-center gap-x-5">

                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaInstagram className='w-5 h-5 text-neutral-50'/>
                    </div>


                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaFacebook className='w-5 h-5 text-neutral-50'/>
                    </div>


                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaWhatsapp className='w-5 h-5 text-neutral-50'/>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                    <FaGoogle className='w-5 h-5 text-neutral-50'/>
                    </div>


                    

                  </div>

               </div>


                <div className="col-span-1 space-y-5">
                    <h1 className="text-lg text-neutral-100 font-semibold">
                        Quick Links
                    </h1>
                    <div className="space-y-2">
                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary 
                    font-normal ease-in-out duration-500'>
                            About us
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            My Account
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            Reserve your ticket
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            Create your Account
                        </Link>
                    </div>
                </div>

                <div className="col-span-1 space-y-5">


                <h1 className="text-lg text-neutral-100 font-semibold">
                        Top Reserverd Routes
                    </h1>
                    <div className="space-y-2">
                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            Hyderabad - Goa
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                        Tirupathi - Hyderabad
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            Vizag - Hyderabad
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            
                            Hyderabad - Bangloore
                        </Link>
                    </div>
                </div>

                <div className="col-span-1 space-y-5">


                <h1 className="text-lg text-neutral-100 font-semibold">
                Support Links 
                    </h1>
                    <div className="space-y-2">
                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            FaQs
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            Privacy Policy
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            Tearms & Conditions
                        </Link>


                        <Link to="/" className='block text-base text-neutral-500 hover:text-primary font-normal ease-in-out duration-500'>
                            Help & Support
                        </Link>
                    </div>
                </div>

           </div>

            {/*separarator */}
            <div className="w-full h-px bg-neutral-800/50"></div>


            {/* copyright */}
            <div className="w-full flex items-center justify-between">
                <p className="text-sm text-neutral-600 font-normal">
                    Copyright & Copy; 2024 . All rights Reserverd.
                </p>
                <p className="text-sm text-red-600 font-normal">
                    
                    Developed By D@kesh Yadav
                </p>

                <div className="flex items-center gap-x-2">
                    <div className="">
                        <img src="/creditcard.png" alt="" className="w-fit  h-9 object-contain object-center" />
                    </div>
                    <div className="">
                        <img src="/mastercard.png" alt="" className="w-fit  h-9 object-contain object-center" />
                    </div>

                    <div className="">
                        <img src="/paypal.png" alt="" className="w-fit  h-9 object-contain object-center" />
                    </div>
                </div>
            </div>

        </RouteLayout>

    </div>
  )
}

export default Footer