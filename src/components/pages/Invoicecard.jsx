import React, { useRef } from 'react';
import TopLayout from '../../layout/TopLayout';
import RouteLayout from '../../layout/RouteLayout';
import { toPng } from 'html-to-image'; // Ensure you have this dependency installed
import download from 'downloadjs'; // Ensure you have this dependency installed
import Passengerinvoive from './Passengerinvoive';

import Companyinvoice from '../Companyinvoice';


const Invoicecard = () => {
  const invoiceRef = useRef(null);

  const handleDownload = async () => {
    if (invoiceRef.current === null) return;

    try {
      // Convert invoice card to image
      const dataUrl = await toPng(invoiceRef.current);

      // Download the image
      download(dataUrl, 'g-reserve-invoice-report.png');
    } catch (error) {
      console.error('Error downloading invoice', error);
    }
  };

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Layout */}
      <TopLayout bgImg="/inter.jpg" title="Collect your invoice" />

      <RouteLayout className="space-y-12 w-full pb-16">
        <div className="w-full flex items-center justify-center">
            {/*invoice card */}
          <div
            ref={invoiceRef}
            className="w-[90%] grid grid-cols-5 bg-white rounded-3xl border
             border-neutral-200 shadow-sm  relative"
          >
        
        
              {/* Left side for passenger */}
              <Passengerinvoive/>

              {/* Left side for company */}
              <Companyinvoice/>
              

              {/* Cut circle */}
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 
              rounded-full bg-neutral-50 border border-neutral-50"
              ></div>

<div className="absolute -bottom-3 right-[18.8%] h-6 w-6 
              rounded-full bg-neutral-50 border border-neutral-50"
              ></div>

            
          </div>

          
        </div>
        {/* Download card */}
        <div className="w-full flex justify-center items-center">
            <button onClick={handleDownload}className="w-fit px-5 py-1.5 bg-primary 
            text-neutral-50 font-bold text-lg rounded-lg">
                Download Invoice
            </button>
          </div>
      </RouteLayout>
    </div>
  );
};

export default Invoicecard;
