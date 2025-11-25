import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from "./Pages/Contact";
import OurServicesPage from './Components/OurServicesPage';

import Privacy from './Pages/Privacy';

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Terms from "./Pages/terms";

function App() {
  return (
    <>
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;