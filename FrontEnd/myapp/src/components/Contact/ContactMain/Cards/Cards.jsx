import React from "react";

const Cards = () => {
  return (
    <div className="w-full flex justify-center px-4 py-10 bg-gray-50">
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl w-full">

        {/* Card 1 */}
        <div className="flex items-start gap-4 p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition duration-300 h-full">

          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0">
            <i className="fa-solid fa-phone text-blue-600 text-lg"></i>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Phone Support
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Speak directly with our team. Available Mon–Sat, 9am to 6pm IST.
            </p>

            <p className="font-medium text-gray-900">
              +91 98765 43210
            </p>

            <span className="text-green-600 text-sm font-medium">
              ● Online now
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition duration-300 h-full">

          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0">
            <i className="fa-solid fa-envelope text-blue-600 text-lg"></i>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Email Support
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              For course queries, billing issues, and general help.
            </p>

            <p className="font-medium text-gray-900">
              hello@teachbazaar.com
            </p>

            <span className="text-gray-500 text-sm">
              support@teachbazaar.com
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition duration-300 h-full">

          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0">
            <i className="fa-solid fa-headset text-blue-600 text-lg"></i>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Live Chat
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Chat instantly with our support agents for quick help.
            </p>

            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
              Start Chat →
            </span>

            <span className="text-gray-500 text-sm">
              Available 24/7 with chatbot
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-4 p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition duration-300 h-full">

          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0">
            <i className="fa-solid fa-chalkboard-user text-blue-600 text-lg"></i>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Become an Instructor
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Interested in teaching on TeachBazaar? Our partnerships team would love to hear from you.
            </p>

            <span className="text-indigo-600 font-medium">
              teach@teachbazaar.com
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;