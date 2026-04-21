import React, { useState } from "react";

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
    <div className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">

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

        {/* FAQ List */}
        <div className="space-y-4">

          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden transition"
            >

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {item.question}
                </span>

                <span className="text-blue-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 pb-5 text-gray-600 text-sm transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default FAQ;