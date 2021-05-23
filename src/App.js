import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  const location = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [location]);
  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/AboutMe" exact component={AboutMe} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Skills" exact component={Skills} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
