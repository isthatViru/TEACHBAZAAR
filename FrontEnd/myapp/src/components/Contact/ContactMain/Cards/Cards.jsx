import React from "react";

const cardData = [
  {
    title: "Phone Support",
    desc: "Speak directly with our team. Available Mon–Sat, 9am to 6pm IST.",
    info: "+91 98765 43210",
    extra: "● Online now",
    icon: "fa-phone",
    color: "text-green-600",
  },
  {
    title: "Email Support",
    desc: "For course queries, billing issues, and general help.",
    info: "hello@teachbazaar.com",
    extra: "support@teachbazaar.com",
    icon: "fa-envelope",
    color: "text-gray-500",
  },
  {
    title: "Live Chat",
    desc: "Chat instantly with our support agents for quick help.",
    info: "Start Chat →",
    extra: "Available 24/7 with chatbot",
    icon: "fa-headset",
    color: "text-indigo-600",
  },
  {
    title: "Become an Instructor",
    desc: "Interested in teaching on TeachBazaar? Let’s collaborate.",
    info: "teach@teachbazaar.com",
    extra: "",
    icon: "fa-chalkboard-user",
    color: "text-indigo-600",
  },
];

const Cards = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="group p-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          {/* Top Section */}
          <div className="flex items-start gap-4">
            
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-100 transition">
              <i className={`fa-solid ${card.icon} text-blue-600 text-lg`}></i>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-4 pl-16 flex flex-col gap-1">
            <span className="font-medium text-gray-900">
              {card.info}
            </span>

            {card.extra && (
              <span className={`text-sm ${card.color}`}>
                {card.extra}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;