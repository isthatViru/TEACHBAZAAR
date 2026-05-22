import React from "react";
import { Outlet } from "react-router-dom";

const CourseUpload = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Outlet />
    </div>
  );
};

export default CourseUpload;