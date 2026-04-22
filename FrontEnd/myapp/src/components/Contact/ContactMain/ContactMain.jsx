import React from "react";
import Cards from "./Cards/Cards";
import ContactForm from "./ContactForm/ContactForm";
import FAQ from "../FAQ/FAQ";
import Map from "../Map/map";

const ContactMain = () => {
  return (
   <div className="flex flex-col px-6 py-8 gap-8 bg-gradient-to-b ✅ from-gray-50 to-white">
    <Cards/>
    <ContactForm/>
    <FAQ/>
       
   
        <Map/>
     

   
   </div>
  );
};

export default ContactMain;