import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="bg-white h-screen ">
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Home />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </motion.div>
      <Navbar />
    </div>
  );
};

export default App;
