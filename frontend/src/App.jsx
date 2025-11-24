import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from "./Pages/Contact";
import OurServicesPage from './Components/OurServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="/our-services" element={<OurServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;