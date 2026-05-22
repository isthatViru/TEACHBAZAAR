import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Curriculum = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState([
    {
      title: "Section 1: Introduction",
      lectures: ["Welcome to the course"],
    },
  ]);

  // ✅ Add Section
  const addSection = () => {
    setSections((prev) => [
      ...prev,
      {
        title: `Section ${prev.length + 1}: New Section`,
        lectures: [],
      },
    ]);
  };

  // ✅ Update Section Title
  const updateSectionTitle = (index, value) => {
    setSections((prev) =>
      prev.map((sec, i) =>
        i === index ? { ...sec, title: value } : sec
      )
    );
  };

  // ✅ Add Lecture
  const addLecture = (index) => {
    setSections((prev) =>
      prev.map((sec, i) =>
        i === index
          ? { ...sec, lectures: [...sec.lectures, "New Lecture"] }
          : sec
      )
    );
  };

  // ✅ Update Lecture
  const updateLecture = (sectionIndex, lectureIndex, value) => {
    setSections((prev) =>
      prev.map((sec, i) =>
        i === sectionIndex
          ? {
              ...sec,
              lectures: sec.lectures.map((lec, j) =>
                j === lectureIndex ? value : lec
              ),
            }
          : sec
      )
    );
  };

  // ✅ Delete Lecture
  const deleteLecture = (sectionIndex, lectureIndex) => {
    setSections((prev) =>
      prev.map((sec, i) =>
        i === sectionIndex
          ? {
              ...sec,
              lectures: sec.lectures.filter((_, j) => j !== lectureIndex),
            }
          : sec
      )
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto mt-20">

      {/* Heading */}
      <h1 className="text-xl font-extrabold text-gray-900 mb-1">
        Curriculum
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Structure your course by adding sections and lectures.
      </p>

      {/* Sections */}
      <div className="space-y-6">

        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >

            {/* Section Title */}
            <input
              value={section.title}
              onChange={(e) =>
                updateSectionTitle(sectionIndex, e.target.value)
              }
              className="w-full font-semibold text-gray-900 text-sm mb-4 outline-none"
            />

            {/* Lectures */}
            <div className="space-y-3 mb-4">
              {section.lectures.map((lecture, lectureIndex) => (
                <div key={lectureIndex} className="flex gap-2">

                  <input
                    value={lecture}
                    onChange={(e) =>
                      updateLecture(
                        sectionIndex,
                        lectureIndex,
                        e.target.value
                      )
                    }
                    className="flex-1 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2"
                  />

                  {/* Delete Button */}
                  <button
                    onClick={() =>
                      deleteLecture(sectionIndex, lectureIndex)
                    }
                    className="text-red-500 text-sm px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Add Lecture */}
            <button
              onClick={() => addLecture(sectionIndex)}
              className="text-blue-600 text-sm font-medium"
            >
              + Add Lecture
            </button>

          </div>
        ))}
      </div>

      {/* Add Section */}
      <button
        onClick={addSection}
        className="mt-6 px-5 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
      >
        + Add Section
      </button>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-10">

        {/* Back */}
        <button
          onClick={() => navigate("/courseupload")}
          className="text-gray-600 text-sm"
        >
          ← Back
        </button>

        {/* Continue */}
        <button
          onClick={() => navigate("/courseupload/media")} // next step (future)
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold"
        >
          Continue →
        </button>
      </div>

    </div>
  );
};

export default Curriculum;