import React, { useEffect, useState } from "react";

const Errormessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000); // Adjusted to decrease every second (1000ms).
      return () => clearInterval(timer);
    } else {
      setIsVisible(false);
    }
  }, [countdown]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-28 right-4 transform -translate-x-1/2 p-3 max-w-xs w-full text-sm text-white bg-primary rounded-lg shadow-lg z-50">
      <div className="flex items-center justify-between">
        <span className="font-medium">{message}</span>
        <span className="ml-4 font-bold">{countdown}s</span>
      </div>
    </div>
  );
};

export default Errormessage;
