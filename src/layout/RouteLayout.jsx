import React, { useEffect } from 'react';

const RouteLayout = ({ children, className }) => {
  // Automatically scroll to the top when the page renders
  useEffect(() => {
    window.scrollTo(0, 0); // Correct method for scrolling
  }, []); // Add an empty dependency array to ensure this runs only on mount

  return (
    <div className={`w-full lg:px-24 md:px-16 sm:px-7 px-4 ${className}`}>
      {children}
    </div>
  );
};

export default RouteLayout;
