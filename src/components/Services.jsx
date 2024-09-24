import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import lang from "../utils/languages";

const Services = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <section className="flex flex-col items-center justify-center p-8 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">{lang[langKey]?.ourServices || "services"}</h2>

      <div className="flex space-x-6">
        {/* WhatsApp Button */}
        <button className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-300">
          {/* Add WhatsApp Icon */}
          {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" /> */}
        </button>
        
        {/* Phone Button */}
        <button className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300">
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </button>
        
        {/* Message Button */}
        <button className="flex items-center justify-center w-16 h-16 bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600 transition duration-300">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </button>
      </div>
    </section>
  );
};

export default Services;
