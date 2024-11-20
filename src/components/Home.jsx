import React from 'react'
import Hero from './pages/Hero'
import Serivces from './pages/Serivces'
import Topsearch from './Topsearch';

function Home() {
  return (
    <div className='space-y10 w-full min-h-screen pb-16'>

    {/*Hero */}
    <Hero/>
 {/*services */}
 <Serivces/>
        {/*Top searches */}
        <Topsearch/>
        
    </div>
  )
}

export default Home