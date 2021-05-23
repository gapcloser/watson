import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="bg-back-1 py-20 flex flex-col items-center justify-center">
      <h1 className="font-semibold font-amatic text-4xl sm:text-6xl">
        Ready to work together?
      </h1>
      <p className="font-josefin text-base sm:text-xl text-center">
        I am more than happy to discuss any project, any size, at any time
      </p>
      <div className="flex flex-col sm:flex-row mt-2 items-center justify-center font-josefin text-base sm:text-xl">
        <Link
          to="/Contact"
          className="block mb-2 sm:mb-0 py-5 px-10 bg-black text-white hover:bg-transparent border border-black transition-all duration-150"
        >
          Get in touch
        </Link>
        <span className="mx-5 mb-2 sm:mb-0">or call</span>
        <a className="text-white" href="tel:+996771390338">
          +996(771)-390-338
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
