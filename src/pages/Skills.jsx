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

const Skills = () => {
  return (
    <>
      <motion.div
        variants={Appeare}
        initial="hidden"
        animate="visible"
        className="flex flex-col relative w-full h-full"
      >
        <Link to="" className="fixed top-5 left-5 sm:left-16 z-30" to="/">
          <lord-icon
            src="https://cdn.lordicon.com/iiueiwdd.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
        </Link>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="h-screen bg-black flex items-center justify-center">
              <h1 className="text-white font-josefin text-5xl px-5 sm:text-7xl sm:px-14 lg:text-10xl lg:px-40">
                What do I offer to you?
              </h1>
            </div>
            <div className="bg-black items-center justify-center text-white font-josefin px-3 py-32 sm:px-14 lg:px-56 text-lg">
              <h1 className="text-4xl sm:text-6xl mb-4">Skills</h1>
              <p className="text-3xl text-primary">
                I estimate for, architect, build, optimise and launch
                client-side solutions that users love.
              </p>

              <br />
              <p>
                I'm equally happy interacting directly with clients or working
                alongside a Delivery Manager - every project is different.
              </p>
              <br />
              <p>
                Here is a selection of relevant technologies that I enjoy
                working with with:
              </p>
              <div className="mt-4">
                <p className="mb-4 ">HTML</p>
                <p className="mb-4 ">Css</p>
                <p className="mb-4 ">Sass</p>
                <p className="mb-4 ">JavaScript</p>
                <p className="mb-4 ">JQuery</p>
                <p className="mb-4 ">React Js</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <ContactMe />
    </>
  );
};

export default Skills;
