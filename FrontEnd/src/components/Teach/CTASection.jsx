import React from "react";

const CTASection = () => {
  return (
    <section className="relative bg-blue-600 py-20 px-6 overflow-hidden w-full">

      {/* Glow Background */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-400/20 blur-[120px]"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to share what you know?
          </h2>

          <p className="text-blue-100 text-sm sm:text-base">
            Join 8,500+ instructors. Start for free — no upfront costs, no monthly fees.
          </p>
        </div>

        {/* RIGHT CTA */}
        <div className="flex flex-col items-center lg:items-end gap-3">

          <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-4 rounded-xl shadow-lg transition hover:scale-105">
            Create your course now →
          </button>

          <p className="text-blue-200 text-xs">
            No credit card required · Approved in 48 hrs
          </p>

        </div>
      </div>

    </section>
  );
};

export default CTASection;