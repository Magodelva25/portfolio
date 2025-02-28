import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './Views/landing.jsx';
import About from './Views/about.jsx';
import Contact from './Views/contact.jsx';
import Navbar from './components/navBar.jsx';
import Footer from './components/footer.jsx';
import Projects from './Views/project.jsx';
import ProjectDetail from './components/projectDetail.jsx';

import './styles/App.css';

function App() {
  return (
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
  );
}

export default App;
