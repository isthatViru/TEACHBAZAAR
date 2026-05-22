import React, { useState } from "react";
import demoVideo from '../../assets/video.mp4'
import videoimg from '../../assets/Logo/videoimg.png'
const CoursePreview = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">

      {/* Video / Thumbnail */}
      <div className="relative h-64 md:h-80 bg-gray-900">

        {!play ? (
          <>
            {/* Thumbnail */}
            <img
              src={videoimg}
              alt="Course preview"
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <div
              onClick={() => setPlay(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer hover:bg-black/50 transition"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl shadow-lg">
                ▶
              </div>
            </div>

            {/* Label */}
            <span className="absolute bottom-3 left-3 text-xs bg-black/70 text-white px-2 py-1 rounded">
              Preview this course
            </span>
          </>
        ) : (
          <video
            src={demoVideo}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Optional Course Info (Udemy feel) */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900">
          Build Your First Online Course
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Learn how to create and sell your course step-by-step
        </p>
      </div>

    </div>
  );
};

export default CoursePreview;