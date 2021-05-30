import React from "react";
import { Link } from "react-router-dom";
import ContactMe from "../components/ContactMe";
import { motion } from "framer-motion";

//images
import BackImg from "../images/1.png";
import BackImg2 from "../images/2.png";
import BackImg3 from "../images/3.png";
import BackImg4 from "../images/4.png";
import BackImg5 from "../images/5.png";
import BackImg6 from "../images/6.png";

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

const Projects = () => {
  return (
    <>
      <motion.div
        variants={Appeare}
        initial="hidden"
        animate="visible"
        className="flex flex-col bg-back-red w-full h-full"
      >
        <Link className="fixed top-5 left-5 sm:left-16 z-30" to="/">
          <lord-icon
            src="https://cdn.lordicon.com/iiueiwdd.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
        </Link>
        <div className="h-screen bg-back-red flex items-center justify-center">
          <h1 className="text-white font-josefin text-5xl px-5 sm:text-7xl sm:px-14 lg:text-10xl lg:px-40">
            The List of Projects I've done
          </h1>
        </div>
        <div className="relative pt-28 px-5 sm:px-24 lg:px-38 z-10 bg-black text-white">
          <div className="flex flex-col items-center justify-between lg:flex-row mb-24 z-10">
            <a
              href="https://listtodo-app.netlify.app"
              target="_blank"
              className="w-full lg:w-1/2 shadow-lg block mb-2"
            >
              <img src={BackImg} alt="" />
            </a>
            <div className="flex flex-col px-1 sm:px-2 lg:px-20 w-full lg:w-1/2">
              <h1 className="font-semibold font-amatic text-3xl sm:text-4xl">
                Todo list app
              </h1>
              <p className="font-josefin font-light text-lg sm:text-xl">
                The clone of web site "Todolist" where you can set up the things
                you need to do.
              </p>
              <a
                href="https://listtodo-app.netlify.app"
                target="_blank"
                className="mt-5"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wnkegycl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#08a88a"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row mb-24 z-10">
            <a
              href="https://playboii.netlify.app"
              target="_blank"
              className="w-full lg:w-1/2 shadow-lg block mb-2"
            >
              <img src={BackImg2} alt="" />
            </a>
            <div className="flex flex-col px-1 sm:px-2 lg:px-20 w-full lg:w-1/2">
              <h1 className="font-semibold font-amatic text-3xl sm:text-4xl">
                Playboy
              </h1>
              <p className="font-josefin font-light text-lg sm:text-xl">
                Web music player application where you can listen the calm and
                chill songs
              </p>
              <a
                href="https://playboii.netlify.app"
                target="_blank"
                className="mt-5"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wnkegycl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#08a88a"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row mb-24 z-10">
            <a
              href="https://notts.netlify.app/"
              target="_blank"
              className="w-full lg:w-1/2 shadow-lg block mb-2"
            >
              <img src={BackImg6} alt="" />
            </a>
            <div className="flex flex-col px-1 sm:px-2 lg:px-20 w-full lg:w-1/2">
              <h1 className="font-semibold font-amatic text-3xl sm:text-4xl">
                Notes App
              </h1>
              <p className="font-josefin font-light text-lg sm:text-xl">
                This is a note application where you can set the categories and
                put some notes inside.
              </p>
              <a
                href="https://notts.netlify.app/"
                target="_blank"
                className="mt-5"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wnkegycl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#08a88a"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row mb-24 z-10">
            <a
              href="https://pizzzzza.netlify.app"
              target="_blank"
              className="w-full lg:w-1/2 shadow-lg block mb-2"
            >
              <img src={BackImg3} alt="" />
            </a>
            <div className="flex flex-col px-1 sm:px-2 lg:px-20 w-full lg:w-1/2">
              <h1 className="font-semibold font-amatic text-3xl sm:text-4xl">
                Pizza
              </h1>
              <p className="font-josefin font-light text-lg sm:text-xl">
                The landing Page of Pizza website. Just simple and user friendly
                web page.
              </p>
              <a
                href="https://pizzzzza.netlify.app"
                target="_blank"
                className="mt-5"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wnkegycl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#08a88a"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row mb-24 z-10">
            <a
              href="https://portfolliio.netlify.app"
              target="_blank"
              className="w-full lg:w-1/2 shadow-lg block mb-2"
            >
              <img src={BackImg4} alt="" />
            </a>
            <div className="flex flex-col px-1 sm:px-2 lg:px-20 w-full lg:w-1/2">
              <h1 className="font-semibold font-amatic text-3xl sm:text-4xl">
                Portfolio
              </h1>
              <p className="font-josefin font-light text-lg sm:text-xl">
                Portfolio web app for photographers. Presented only in a dark
                mode.
              </p>
              <a
                href="https://portfolliio.netlify.app"
                target="_blank"
                className="mt-5"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wnkegycl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#08a88a"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row mb-24 z-10">
            <a
              href="https://binary-search-app.netlify.app"
              target="_blank"
              className="w-full lg:w-1/2 shadow-lg block mb-2"
            >
              <img src={BackImg5} alt="" />
            </a>
            <div className="flex flex-col px-1 sm:px-2 lg:px-20 w-full lg:w-1/2">
              <h1 className="font-semibold font-amatic text-3xl sm:text-4xl">
                Binary search (Math Project)
              </h1>
              <p className="font-josefin font-light text-lg sm:text-xl">
                This is a web application that shows the differences between two
                algorithms: Binary Search and Brute Force Search. You also can
                compete with these algorithms.
              </p>
              <a
                href="https://binary-search-app.netlify.app"
                target="_blank"
                className="mt-5"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wnkegycl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#08a88a"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <ContactMe />
    </>
  );
};

export default Projects;
