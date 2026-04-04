import React from "react";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <nav className="w-full bg-white  shadow-md h-16">
      <div className="flex items-center justify-between h-full px-6">
        <Left />
        <Right />
      </div>
    </nav>
  );
};

export default Navbar;