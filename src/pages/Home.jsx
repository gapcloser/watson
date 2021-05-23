import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//images
import ProjectImg from "../images/1.jpg";
import ContactImg from "../images/2.jpg";
import MeImg from "../images/3.jpg";
import SkillsImg from "../images/4.jpg";

const Logo = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.9,
    },
  },
};

const Home = () => {
  return (
    <div className="w-full h-screen text-white overflow-hidden">
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 w-full h-full transform -rotate-6 scale-150">
        <motion.div
          initial={{ y: -400, x: -400 }}
          animate={{ y: 0, x: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ y: -400, x: -400, transition: { delay: 0, duration: 0.5 } }}
          className="w-full h-full cursor-pointer"
        >
          <Link
            to="/Projects"
            className="w-full h-full relative flex items-end justify-end overflow-hidden group"
          >
            <div className="bg-back-1 absolute w-full h-full z-10 group-hover:opacity-0 transition-all duration-500"></div>
            <div className="flex absolute w-full h-full">
              <div className="w-3/5 h-full bg-back-black"></div>
              <div className="w-2/5 h-full bg-back-red"></div>
            </div>
            <h1 className="transform rotate-6 text-white text-3xl font-amatic font-semibold absolute -translate-x-4 top-1/2">
              Projects
            </h1>
            <motion.span
              variants={Logo}
              initial="hidden"
              animate="visible"
              className="font-monton z-20 transition-all duration-500  transform rotate-6 text-4xl sm:text-6xl md:text-10xl -translate-x-2 translate-y-4 sm:translate-y-8 sm:translate-x-4 md:translate-y-16"
            >
              Wat
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 400, x: -400 }}
          animate={{ y: 0, x: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          exit={{ y: 400, x: -400, transition: { delay: 0, duration: 0.5 } }}
          className=" w-full h-full cursor-pointer"
        >
          <Link
            to="/Skills"
            className="relative flex items-center justify-center w-full h-full cursor-pointer group"
          >
            <div className="bg-back-2 absolute w-full h-full z-10 group-hover:opacity-0 transition-all duration-500"></div>
            <div className="flex absolute w-full h-full">
              <div className="w-3/5 h-full bg-black"></div>
              <div className="w-2/5 h-full bg-back-light-green"></div>
            </div>
            <h1 className="transform transition-all duration-500 rotate-6 text-white text-3xl font-amatic font-semibold">
              Skills
            </h1>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -400, x: 400 }}
          animate={{ y: 0, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          exit={{ y: -400, x: 400, transition: { delay: 0, duration: 0.5 } }}
          className="w-full h-full cursor-pointer"
        >
          <Link
            to="/AboutMe"
            className="relative flex items-end justify-start overflow-hidden w-full h-full cursor-pointer group"
          >
            <div className="bg-back-3 absolute w-full h-full z-10 group-hover:opacity-0 transition-all duration-500"></div>
            <div className="flex absolute w-full h-full">
              <div className="w-2/5 h-full bg-white"></div>
              <div className="w-3/5 h-full bg-black"></div>
            </div>
            <h1 className="transform rotate-6 text-black text-3xl font-amatic font-semibold absolute top-1/2 translate-x-6">
              About me
            </h1>

            <motion.span
              variants={Logo}
              initial="hidden"
              animate="visible"
              className="font-monton group-hover:text-black z-20 transition-all duration-500 transform rotate-6 text-4xl sm:text-6xl md:text-10xl translate-x-0 translate-y-5 sm:translate-y-8 md:translate-y-20"
            >
              S
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 400, x: 400 }}
          animate={{ y: 0, x: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          exit={{ y: 400, x: 400, transition: { delay: 0, duration: 0.5 } }}
          className="w-full h-full cursor-pointer"
        >
          <Link
            to="/Contact"
            className="relative flex items-start justify-start overflow-hidden w-full h-full cursor-pointer group"
          >
            <div className="bg-back-4 absolute w-full h-full z-10 group-hover:opacity-0 transition-all duration-500"></div>
            <div className="flex absolute w-full h-full">
              <div className="w-2/5 h-full bg-back-milky"></div>
              <div className="w-3/5 h-full bg-back-dark-milky"></div>
            </div>
            <h1 className="transform rotate-6 text-black text-3xl font-amatic font-semibold absolute top-1/2 translate-x-4">
              Contact Me
            </h1>

            <motion.span
              variants={Logo}
              initial="hidden"
              animate="visible"
              className="font-monton z-20 group-hover:text-black transition-all duration-500  transform rotate-6 text-4xl sm:text-6xl md:text-10xl translate-x-6 -translate-y-4 sm:-translate-y-8 sm:translate-x-10 md:translate-x-10 md:-translate-y-16"
            >
              ON
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
