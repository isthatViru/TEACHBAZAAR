import React from "react";
import Cards from "./Cards/Cards";
import ContactForm from "./ContactForm/ContactForm";
import FAQ from "../FAQ/FAQ";

const ContactMain = () => {
  return (
   <div>
    <Cards/>
    <ContactForm/>
    <FAQ/>
   </div>
  );
};

export default ContactMain;