import React from "react";
import { Link } from "react-router-dom";

const Right = () => {
  return (
    <div className="flex items-center gap-8">

      <Link to="/courses" className="hover:text-indigo-400">
        Courses
      </Link>

      <Link to="/teach" className="hover:text-indigo-400">
        Teach
      </Link>

      <Link to="/community" className="hover:text-indigo-400">
        Community
      </Link>

      <Link to="/contact" className="hover:text-indigo-400">
        Contact Us
      </Link>

      <button className="border px-4 py-2 rounded">
        Login
      </button>

      <button className="bg-indigo-500 px-4 py-2 rounded">
        Sign Up
      </button>

    </div>
  );
};

export default Right;