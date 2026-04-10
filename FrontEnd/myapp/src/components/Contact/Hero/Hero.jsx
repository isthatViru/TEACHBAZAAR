import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#2563EB] py-30 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col md:w-1/2 space-y-2">

          <span className="text-[#DBEAFE] font-semibold tracking-wide uppercase">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            We'd love to hear from{" "}
            <span className="text-[#FCD34D] ">
              you
            </span>
          </h1>

          <p className="text-lg text-white max-w-lg">
            Have a question about a course, need help with your account, or want
            to become an instructor? Our support team usually replies within a
            few hours.
          </p>

          {/* Contact Info */}
          <div className="flex gap-10 pt-4">

            <div className="flex flex-col">
              <span className="font-semibold text-[#DBEAFE]">Email us</span>
              <span className="text-white">hello@teachbazaar.com</span>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-[#DBEAFE]">Call us</span>
              <span className="text-white">+91 98765 43210</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md">
              Send Message
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Browse Courses
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative md:w-1/2 flex justify-center">

          {/* Background Glow */}
          <div className="absolute w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

          {/* Main Card */}
          <div className="relative bg-white shadow-2xl rounded-3xl p-16">

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                We're here to help
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Our team responds quickly and solves issues fast.
              </p>
            </div>

          </div>

          {/* CARD 1 */}
          <div className="absolute -top-30 -left-8 bg-white shadow-xl rounded-2xl p-6 w-56">

            <p className="text-xs text-gray-400 mb-2">
              Average response time
            </p>

            <h2 className="text-3xl font-bold text-indigo-600">
              2 hrs
            </h2>

            <div className="mt-3 w-full bg-indigo-100 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full w-[70%]"></div>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              Faster than 95% platforms
            </p>

          </div>

          {/* CARD 2 */}
          <div className="absolute -bottom-30 -right-20 bg-indigo-600 text-white rounded-2xl p-6 w-56 shadow-xl">

            <p className="text-xs text-indigo-200 mb-2">
              Support tickets resolved
            </p>

            <h2 className="text-3xl font-bold text-yellow-300">
              98.4%
            </h2>

            <div className="flex gap-2 mt-4">
              <div className="w-2 h-6 bg-white/30 rounded"></div>
              <div className="w-2 h-8 bg-white/40 rounded"></div>
              <div className="w-2 h-5 bg-white/30 rounded"></div>
              <div className="w-2 h-9 bg-white/50 rounded"></div>
              <div className="w-2 h-10 bg-yellow-300 rounded"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;