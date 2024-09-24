import React from "react";
import Logo from "../assets/WhiteLogo.png"; // Update with your logo path
import { useSelector } from "react-redux";
import lang from "../utils/languages";

const Footer = () => {

  const langKey = useSelector((store) => store.config.lang);


  return (
    <footer className="bg-green-800 text-gray-200 py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        {/* First Column: Logo */}
        <div className="flex items-center ml-8 justify-center md:justify-start">
          <img src={Logo} alt="Logo" className="h-32" />
        </div>

        {/* Second Column: About */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <div className="flex flex-col space-y-2 w-full max-w-xs">
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.aboutUs || "aboutUs"}</button>
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.contact || "contact"}</button>
          </div>
        </div>

        {/* Third Column: Services */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <div className="flex flex-col space-y-2 w-full max-w-xs">
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.plantIdenti || "plantIdenti"}</button>
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.govtScheme || "govtScheme"}</button>
          </div>
        </div>

        {/* Fourth Column: Support */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4">{lang[langKey]?.support || "support"}</h2>
          <div className="flex flex-col space-y-2 w-full max-w-xs">
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.whatsapp || "whatsapp"}</button>
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.calll || "calll"}</button>
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.sms || "sms"}</button>
          </div>
        </div>

        {/* Fifth Column: Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4">{lang[langKey]?.socials || "socials"}</h2>
          <div className="flex flex-col space-y-2 w-full max-w-xs">
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.linkedIn || "linkedIn"}</button>
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.twitter || "twitter"}</button>
            <button className="text-gray-300 hover:text-white w-full text-left">{lang[langKey]?.insta || "insta"}</button>
          </div>
        </div>
      </div>

      {/* White Border-like Div and Centered Heading */}
      <div className="mt-8 border-t border-white py-4 text-center">
        <h2 className="text-4xl font-semibold text-white">{lang[langKey]?.heading || "heading"}</h2>
      </div>
    </footer>
  );
};

export default Footer;
