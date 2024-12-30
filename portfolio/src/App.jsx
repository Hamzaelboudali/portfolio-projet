import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import './styles/theme.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="App">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Certifications" element={<Certifications />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Statistics" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
