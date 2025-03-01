import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "./Views/landing.jsx";
import About from "./Views/about.jsx";
import Contact from "./Views/contact.jsx";
import Navbar from "./components/navBar.jsx";
import Footer from "./components/footer.jsx";
import Projects from "./Views/project.jsx";
import ProjectDetail from "./components/projectDetail.jsx";

import "./styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loader, setLoader] = useState(true);
  
  setTimeout(() => {
    setLoader(false);
  }, 2000)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading-screen" // Clave única para la animación
            className="loading-screen"
            initial={{ x: 0 }} // Comienza en la posición normal
            animate={{ x: 0 }} // Se mantiene en su lugar mientras carga
            exit={{ x: "-100%" }} // Desliza hacia la izquierda al desaparecer
            transition={{ duration: 1.2, ease: "easeInOut" }} // Duración ajustada
          >
            <div className="loading-items" style={{ display: loader ? "flex" : "none" }}>
              <div className="loader"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="main-container">
          <Router>
            <Navbar />
            <Routes>
              <Route element={<Landing />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Projects />} path="/projects" />
              <Route element={<ProjectDetail />} path="/projects/:projectName" />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </div>

  );
}

export default App;
