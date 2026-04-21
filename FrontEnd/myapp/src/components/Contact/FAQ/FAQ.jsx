import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is TeachBazaar?",
    answer:
      "TeachBazaar is a platform where students can discover courses and educators can share their knowledge.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "Simply browse available courses, select one you like, and click the enroll button to get started.",
  },
  {
    question: "Can I become an instructor?",
    answer:
      "Yes! You can apply as an instructor and start sharing your knowledge with thousands of learners.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes, we provide 24/7 support via chat, email, and phone to assist you anytime.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refund policies depend on the course provider. Please check course details for specific policies.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need to know about TeachBazaar.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden"
              >

                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>

                  {/* Animated Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-600 text-xl"
                  >
                    ⌄
                  </motion.span>
                </button>

                {/* Answer with animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600 text-sm">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;