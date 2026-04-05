import React from "react";
import logo from "../../assets/Logo/Logo.png";

const Left = () => {
  return (
    <div className="flex items-center h-40">
      <img
        src={logo}
        alt="logo"
        className="h-full w-auto object-cover"
      />
    </div>
  );
};

export default Left;