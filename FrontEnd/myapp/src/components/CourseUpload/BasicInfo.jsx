import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const BasicInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8">

      {/* Title */}
      <h1 className="text-xl font-extrabold text-gray-900 mb-1 mt-20">
        Basic Information
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Set the foundation of your course. This helps students discover and understand your course.
      </p>

      {/* Course Title */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Course title
        </label>
        <input
          type="text"
          placeholder="e.g. Complete React Developer Course 2025"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="text-xs text-gray-400 mt-2">
          Keep it clear and specific. Max 60 characters.
        </p>
      </div>

      {/* Description */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Course description
        </label>
        <textarea
          rows="4"
          placeholder="Describe what students will learn in this course..."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <p className="text-xs text-gray-400 mt-2">
          A strong description improves conversions.
        </p>
      </div>

      {/* Category + Level */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 grid md:grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Category
          </label>
          <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm">
            <option>Select category</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Business</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Level
          </label>
          <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm">
            <option>Select level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

      </div>

      {/* Thumbnail Upload */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <label className="text-sm font-medium text-gray-700 mb-3 block">
          Course thumbnail
        </label>

        <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 text-center bg-blue-50 cursor-pointer">
          <p className="text-sm text-blue-600 font-medium">
            Click to upload thumbnail
          </p>
          <p className="text-xs text-gray-400 mt-1">
            1280×720px recommended · JPG or PNG
          </p>
        </div>
      </div>

      {/* Language */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Course language
        </label>
        <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm">
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-gray-600">
          Save draft
        </button>
  <button
  onClick={() => navigate("/courseupload/curriculum")} 
  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg"
>
  Continue →
</button>
      </div>

    </div>
  );
};

export default BasicInfo;