import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [published, setPublished] = useState(false);

  const handlePublish = () => {
    // later: API call
    setPublished(true);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto mt-20">

      {!published ? (
        <>
          {/* Heading */}
          <h1 className="text-xl font-extrabold text-gray-900 mb-1">
            Publish Course
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Review your course and make it live.
          </p>

          {/* Checklist */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 space-y-3 text-sm">
            <p>✅ Basic info added</p>
            <p>✅ Curriculum structured</p>
            <p>✅ Media uploaded</p>
            <p>✅ Pricing set</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-10">

            <button
              onClick={() => navigate("/courseupload/pricing")}
              className="text-gray-600 text-sm"
            >
              ← Back
            </button>

            <button
              onClick={handlePublish}
              className="bg-amber-400 text-black px-6 py-2 rounded-lg font-semibold"
            >
              Publish Course 🚀
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-20">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎉 Course Published!
          </h2>

          <p className="text-gray-500 mb-6">
            Your course is now live and ready for students.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Publish;