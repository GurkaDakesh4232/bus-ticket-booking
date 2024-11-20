import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsVisible(scrollPosition > currentScrollPosition || currentScrollPosition < 10);
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <nav
      className={`w-full fixed h-[8ch] top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="text-4xl text-primary font-bold">
          Bus
        </Link>

        {/* Hamburger Section */}
        <div
          className="w-fit md:hidden flex items-center justify-center cursor-pointer text-neutral-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links and Button */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex absolute md:static top-[8ch] left-0 md:left-auto w-full md:w-auto bg-transparent shadow-md md:shadow-none flex-col md:flex-row items-start md:items-center md:gap-8 gap-4 text-lg text-neutral-600 font-normal z-40`}
        >
          {/* NavLinks */}
          <ul className="list-none w-full md:w-auto flex flex-col md:flex-row md:gap-8 gap-4 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="hover:text-primary ease-in-out duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-primary ease-in-out duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/bus-tickets"
                className="hover:text-primary ease-in-out duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Tickets
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary ease-in-out duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Sign-Up Button */}
          <div className="p-4 md:p-0">
            <Link
              to="/signup"
              className="bg-primary text-white px-6 py-2 rounded-lg flex items-center text-sm font-medium border-2 border-transparent transition-all duration-200 hover:bg-transparent hover:border-primary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
