import React from 'react'

const Busimages = () => {
  return (
    <div className='w-full grid grid-cols-4 gap-5 items-center border-t border-neutral-300 pt-7 pb-2'>
         <div className="w-full rounded-xl overflow-hidden">
            <img src="/white.jpg" alt="" className="w-full aspect-video object-cover
             object-center rounded-xl border  border-neutral-300/50 bg-neutral-200/15" />
         </div>


         <div className="w-full rounded-xl overflow-hidden">
            <img src="/red.jpg" alt="" className="w-full aspect-video object-cover
             object-center rounded-xl border  border-neutral-300/50 bg-neutral-200/15" />
         </div>

         <div className="w-full rounded-xl overflow-hidden">
            <img src="/bu.jpg" alt="" className="w-full aspect-video object-cover
             object-center rounded-xl border  border-neutral-300/50 bg-neutral-200/15" />
         </div>

         <div className="w-full rounded-xl overflow-hidden">
            <img src="/bus3.jpg" alt="" className="w-full aspect-video object-cover
             object-center rounded-xl border  border-neutral-300/50 bg-neutral-200/15" />
         </div>
    </div>
  )
}

export default Busimages