import React from "react";

const testimonials = [
  {
    name: "Arvind",
    role: "Front End Developer , Nashik",
    initials: "VB",
    text: `"Went from zero to landing a frontend job in 4 months. The course quality and the forum community were absolute game-changers for me."`
  },
  {
    name: "Ravi Kumar",
    role: "Full Stack Developer , Pune",
    initials: "RK",
    text: `"The structured learning path and mentor support helped me switch my career into web development."`
  },
  {
    name: "Neha Singh",
    role: "UI Developer , Mumbai",
    initials: "NS",
    text: `"Loved the hands-on projects. Building real applications made me confident during interviews."`
  }
];

const Lower = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-evenly ">

      {testimonials.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start  w-1/4 gap-7 px-5 py-9 rounded-3xl h-[50vh] bg-[#1E293B]"
        >

          {/* Stars */}
          <div className="flex items-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
              </svg>
            ))}

            {/* last star */}
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
            </svg>
          </div>

          {/* Text */}
          <p className="text-white">{item.text}</p>

          {/* User */}
          <div className="flex justify-between items-start">
            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center font-semibold text-[#94A3B8]">
                {item.initials}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-[#94A3B8]">
                  {item.role}
                </p>
              </div>

            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Lower;