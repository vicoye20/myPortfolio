import React from "react";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
