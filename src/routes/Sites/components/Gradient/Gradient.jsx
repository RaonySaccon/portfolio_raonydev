import React from "react";

const Gradient = ({ children }) => {
  return (
    <span className="from-gray-600 to-white bg-gradient-to-r text-transparent bg-clip-text">
      {children}
    </span>
  );
};

export default Gradient;
