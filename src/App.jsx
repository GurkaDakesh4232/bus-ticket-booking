import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Ticket from './components/pages/Ticket';
import Details from './components/Details';
import Checkout from './components/Checkout';
import Invoicecard from './components/pages/Invoicecard';


function App() {
  return (
    <Router>
      <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Routing */}
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/bus-tickets" element={<Ticket />} />
          <Route path="/bus-tickets/details" element={<Details />} />
          <Route path="/bus-tickets/checkout" element={<Checkout />} />
          <Route path="/bus-tickets/payment" element={<Invoicecard />} />
          {/* Add more routes here as needed */}
        </Routes>

        {/* Footer */}
      <Footer/>
      </main>
    </Router>
  );
}

export default App;
