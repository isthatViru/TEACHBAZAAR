import React from "react";
import CoursePreview from "./CoursePreview";
const WhyTeachBazaar = () => {
  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE (VIDEO) */}
        <div className="relative">

          {/* Soft glow */}
          <div className="absolute -top-6 -left-6 w-60 h-60 bg-amber-100 blur-3xl rounded-full"></div>

          {/* Video */}
         <div className="relative">
  {/* Soft glow */}
  <div className="absolute -top-6 -left-6 w-60 h-60 bg-amber-100 blur-3xl rounded-full"></div>

    <CoursePreview/>
</div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <p className="text-xs tracking-widest text-blue-600 uppercase mb-3">
            Why TeachBazaar
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            See how easy it is to start <br />
            <span className="text-amber-500">teaching online</span>
          </h2>

          <p className="text-gray-600 mb-6 text-sm max-w-md">
            Watch a free lecture preview and discover how instructors are building, launching, and earning on TeachBazaar.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 mt-2 rounded-full"></div>
              <p className="text-gray-700 text-sm">
                Reach 500k+ learners instantly
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 mt-2 rounded-full"></div>
              <p className="text-gray-700 text-sm">
                Earn up to 70% revenue share
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 mt-2 rounded-full"></div>
              <p className="text-gray-700 text-sm">
                Simple course creation tools
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-500 mt-2 rounded-full"></div>
              <p className="text-gray-700 text-sm">
                Built-in analytics & growth tracking
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyTeachBazaar;