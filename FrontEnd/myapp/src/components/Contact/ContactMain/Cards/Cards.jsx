import React from "react";

const Cards = () => {
  return (
    <div className="flex items-center flex-wrap w-full">
  <div className="flex items-center gap-8 mb-5">
    
      {/* Card 1 */}
      <div className="flex items-start gap-4 p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">

        <div className="w-8 h-10 flex items-center justify-center bg-blue-100 rounded-xl">
          <i className="fa-solid fa-phone text-blue-600 text-lg"></i>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-gray-900">
            Phone Support
          </h3>

          <p className="text-gray-600 text-sm">
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
      <div className="flex items-start gap-4 p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">

        <div className="w-8 h-10 flex items-center justify-center bg-blue-100 rounded-xl">
          <i className="fa-solid fa-envelope text-blue-600 text-lg"></i>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-gray-900">
            Email Support
          </h3>

          <p className="text-gray-600 text-sm">
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
      <div className="flex items-start gap-4 p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">

        <div className="w-8 h-10 flex items-center justify-center bg-blue-100 rounded-xl">
          <i className="fa-solid fa-headset text-blue-600 text-lg"></i>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-gray-900">
            Live Chat
          </h3>

          <p className="text-gray-600 text-sm">
            Chat instantly with our support agents for quick help.
          </p>

          <span className="text-indigo-600 font-medium">
            Start Chat →
          </span>
          
          <span className="text-gray-500 text-sm">
           We Are here for you 24/7 with our chat bot
          </span>
        </div>
        
      </div>

  </div>

      {/* Card 4 */}
      <div className="flex items-start gap-4 p-6 m-auto bg-white border rounded-2xl shadow-sm hover:shadow-md transition">

        <div className="w-8 h-10 flex items-center justify-center bg-blue-100 rounded-xl">
          <i className="fa-solid fa-chalkboard-user text-blue-600 text-lg"></i>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-gray-900">
            Become an Instructor
          </h3>

          <p className="text-gray-600 text-sm">
            Interested in teaching on TeachBazaar? Our partnerships team would love to hear from you.
          </p>

          <span className="text-indigo-600 font-medium">
            teach@teachbazaar.com
          </span>
        </div>

      </div>


    
    </div>
  );
};

export default Cards;