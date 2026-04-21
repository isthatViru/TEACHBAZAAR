import React from "react";
import Cards from "./Cards";
import ContactForm from "../ContactForm/ContactForm";

const CardsMain = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-2">
            We’re here to help. Choose your preferred way to connect with us.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Cards */}
          <Cards />

          {/* Form */}
          <ContactForm />

        </div>

      </div>
    </div>
  );
};

export default CardsMain;