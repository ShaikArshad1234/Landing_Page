import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Home from './components/Home'; // Create this component if needed
import About from './components/About'; // Create this component if needed
import Contact from './components/Contact'; // Create this component if needed
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CallToAction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
