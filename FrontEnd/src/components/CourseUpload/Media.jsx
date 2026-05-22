import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Media = () => {
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto mt-20">

      {/* Heading */}
      <h1 className="text-xl font-extrabold text-gray-900 mb-1">
        Course Media
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Upload videos and resources for your course lectures.
      </p>

      {/* Upload Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">

        <label className="text-sm font-medium text-gray-700 mb-3 block">
          Upload Lecture Video
        </label>

        {/* Upload Box */}
        <label className="border-2 border-dashed border-blue-200 rounded-lg p-8 text-center bg-blue-50 cursor-pointer block">
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideoUpload}
          />

          <p className="text-sm text-blue-600 font-medium">
            Click to upload video
          </p>
          <p className="text-xs text-gray-400 mt-1">
            MP4 recommended · Max 500MB
          </p>
        </label>

        {/* Preview */}
        {preview && (
          <div className="mt-4">
            <video
              src={preview}
              controls
              className="w-full rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Resource Upload */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">

        <label className="text-sm font-medium text-gray-700 mb-3 block">
          Attach Resources (Optional)
        </label>

        <input
          type="file"
          className="text-sm"
        />

        <p className="text-xs text-gray-400 mt-2">
          PDFs, notes, or downloadable files
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-10">

        {/* Back */}
        <button
          onClick={() => navigate("/courseupload/curriculum")}
          className="text-gray-600 text-sm"
        >
          ← Back
        </button>

        {/* Continue */}
        <button
          onClick={() => navigate("/courseupload/pricing")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold"
        >
          Continue →
        </button>
      </div>

    </div>
  );
};

export default Media;