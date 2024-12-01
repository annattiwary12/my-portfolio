import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'; // Ensure this import
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDComponent from './components/ThreeDComponent'; // Import ThreeDComponent
import CardFlip from './components/CardFlip';

// Import your CSS file here

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<><Home /><ThreeDComponent /></>} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
