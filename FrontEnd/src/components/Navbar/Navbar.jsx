import React from "react";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md h-16 border border-[#E2E8F0] z-50">
      <div className="flex items-center justify-between h-full px-6">
        <Left />
        <Right />
      </div>
    </nav>
  );
};

export default Navbar;