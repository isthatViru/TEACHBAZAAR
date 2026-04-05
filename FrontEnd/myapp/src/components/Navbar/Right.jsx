import React from "react";
import { Link } from "react-router-dom";

const Right = () => {
  return (
    <div className="flex items-center gap-8 text-[#475569]">

  <Link to="/" className="hover:text-indigo-400 active:bg-[#EFF6FF]">
        Home
      </Link> 

      <Link to="/courses" className="hover:text-indigo-400  active:bg-[#EFF6FF]">
        Courses
      </Link>

      <Link to="/teach" className="hover:text-indigo-400 active:bg-[#EFF6FF]">
        Teach
      </Link>

      <Link to="/community" className="hover:text-indigo-400 active:bg-[#EFF6FF]">
        Community
      </Link>

      <Link to="/contact" className="hover:text-indigo-400 active:bg-[#EFF6FF]">
        Contact Us
      </Link>

      <button className="border px-4 py-2  bg-white text-[#1D4ED8] border-[#1D4ED8] rounded-xl">
        Login
      </button>

      <button className="bg-[#1D4ED8] text-white font-medium px-4 py-2 rounded-xl">
        Sign Up
      </button>

    </div>
  );
};

export default Right;