import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ComingSoonPage = () => {

  // Load Lottie CDN script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center mt-10 justify-center bg-gradient-to-br from-blue-50 to-white px-6">

      {/* Floating Illustration */}
      <div className="relative mb-10 animate-bounce">
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-4xl">🚀</span>
        </div>
        <div className="absolute inset-0 rounded-full bg-blue-400 blur-2xl opacity-30"></div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 animate-fadeIn">
        Under Construction
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center max-w-lg mb-8 animate-fadeIn delay-100">
        We’re building something powerful for you. This section is currently in progress.
      </p>

      {/* CTA Button */}
       <Link to='/'>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-300 animate-fadeIn delay-200">
        Go Back Home
      </button>
  </Link>
      {/* 🔥 Lottie Construction Animation */}
      <div className="mt-10">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_3rwasyjy.json"
          background="transparent"
          speed="1"
          style={{ width: "200px", height: "200px" }}
          loop
          autoplay
        ></lottie-player>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
            opacity: 0;
          }

          .delay-100 {
            animation-delay: 0.2s;
          }

          .delay-200 {
            animation-delay: 0.4s;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoonPage;