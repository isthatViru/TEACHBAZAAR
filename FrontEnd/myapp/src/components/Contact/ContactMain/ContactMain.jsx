import React from "react";
import Cards from "./Cards/Cards";
import ContactForm from "./ContactForm/ContactForm";
import FAQ from "../FAQ/FAQ";

const ContactMain = () => {
  return (
   <div className="flex flex-col px-6 py-8 gap-8 bg-linear-to-b from-gray-50 to-white">
    <Cards/>
    <ContactForm/>
    <FAQ/>
   </div>
  );
};

export default ContactMain;