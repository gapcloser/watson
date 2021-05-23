import React from "react";
import { Link } from "react-router-dom";
import ContactMe from "../components/ContactMe";
import { motion } from "framer-motion";

//images
import BackImg from "../images/1.jpg";

const Appeare = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const Contact = () => {
  return (
    <>
      <motion.div
        variants={Appeare}
        initial="hidden"
        animate="visible"
        className="flex flex-col relative w-full h-full"
      >
        <Link
          to=""
          className="fixed top-5 left-5 sm:left-16 z-30 w-10 h-10"
          to="/"
        >
          <lord-icon
            src="https://cdn.lordicon.com/iiueiwdd.json"
            trigger="hover"
            colors="primary:#000000"
            style={{ width: "100%", height: "100%" }}
          ></lord-icon>
        </Link>
        <div className="flex flex-col">
          <div className="h-screen bg-white flex items-center justify-center">
            <h1 className="text-black font-josefin text-5xl px-5 sm:text-7xl sm:px-14 lg:text-10xl lg:px-40">
              Let's make something great!
            </h1>
          </div>
          <div className="bg-black items-center justify-center text-white font-josefin px-3 py-32 sm:px-14 lg:px-56 text-lg">
            <h1 className="text-4xl sm:text-6xl mb-4">Contact</h1>
            <p className="text-md text-primary">
              I'm seeking out opportunities to collaborate with companies /
              agencies / individuals, not just work for them. I want to bring my
              collective design experience to the table where we can work
              together to solve real business-problems in a way that optimizes
              all of our respective experience and knowledge.
            </p>
            <br />
            <p>
              I want to avoid subjective pissing-matches, and favor open-minded
              collaborators where egos are out of the equation. If that all
              sounds about right, then lets for sure chat about how we can work
              together.
            </p>
            <br />
            <p>Feel free to reach out through any platforms bellow:</p>
            <br />
            <a
              className="block mb-5 transition-all duration-150 hover:translate-x-16 text-red py-2 transform"
              href="http://www.instagram.com/watts.en"
            >
              Instagram
            </a>

            <a
              className="block mb-5 transition-all duration-150 hover:translate-x-16 text-red py-2 transform"
              href="https://api.whatsapp.com/send?phone=<+996771390338>"
            >
              Whatsapp
            </a>

            <a
              className="block mb-5 transition-all duration-150 hover:translate-x-16 text-red py-2 transform"
              href="https://t.me/Lolip_o_p"
            >
              Telegram
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
