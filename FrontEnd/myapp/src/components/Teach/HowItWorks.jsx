import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Create your account",
    desc: "Sign up as an instructor for free. Fill in your profile and expertise areas.",
  },
  {
    id: "02",
    title: "Build your course",
    desc: "Upload videos, add quizzes, write descriptions, and set your price easily.",
  },
  {
    id: "03",
    title: "Submit for review",
    desc: "Our team reviews your course for quality. Most are approved within 48 hours.",
  },
  {
    id: "04",
    title: "Publish & earn",
    desc: "Go live and start earning as students enroll in your course.",
    highlight: true,
  },
];

// Container animation (stagger)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Each item animation
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-widest text-blue-600 uppercase mb-3">
          How it works
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Launch your course in{" "}
          <span className="border-b-4 border-amber-400">
            4 simple steps
          </span>
        </h2>
      </div>

      {/* Animated Steps */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={item}
            className="text-center relative group"
          >

            {/* Line */}
            {index !== steps.length - 1 && (
              <div className="hidden lg:block absolute top-7 left-[60%] w-full h-[2px] bg-gray-200"></div>
            )}

            {/* Circle */}
            <div
              className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full font-bold text-lg transition 
              ${
                step.highlight
                  ? "bg-amber-400 text-black shadow-lg"
                  : "bg-blue-50 text-blue-600 border-2 border-blue-500 group-hover:scale-110"
              }`}
            >
              {step.id}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed max-w-[220px] mx-auto">
              {step.desc}
            </p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default HowItWorks;