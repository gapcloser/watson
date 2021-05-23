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

const AboutMe = () => {
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
                I design & create digital products
              </h1>
            </div>
            <div className="bg-black items-center justify-center text-white font-josefin px-3 py-32 sm:px-14 lg:px-56 text-lg">
              <h1 className="text-4xl sm:text-6xl mb-4">About</h1>
              <p className="text-3xl text-primary">
                Hi, I’m Baistan. I'm a multi-talented human who wants to create
                a billion of cool web pages.
              </p>
              <br />
              <p>
                Since childhood, I have shown interest in creating something
                new, which will be really interesting and convenient for others.
                Over time, I learnedhow to create web sites and became very
                interested in this occupation. Now, I have already completed
                some projects that helped me learn more and delve into the Web
                development.
              </p>
              <br />
              <p>
                I don’t like to define myself by the work I’ve done. I define
                myself by the work I want to do. Skills can be taught,
                personality is inherent. I prefer to keep learning, continue
                challenging myself, and do interesting things that matter.
              </p>
              <br />
              <p>
                Fueled by high energy levels and boundless enthusiasm, I’m
                easily inspired and more then willing to follow my fascinations
                wherever they take me. I’m passionate, expressive,
                multi-talented spirit with a natural ability to entertain and
                inspire. I’m never satisfied to just come up with ideas. Instead
                I have an almost impulsive need to act on them.
              </p>
              <br />
              <p>
                I like to develop expertise in a number of areas over the course
                of my life and career.
              </p>
            </div>
          </div>
        </div>
        <ContactMe />
      </motion.div>
    </>
  );
};

export default AboutMe;
