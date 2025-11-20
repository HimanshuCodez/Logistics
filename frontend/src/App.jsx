import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsuranceLanding from './Pages/Home';

import ContactUs from "./Pages/Contact";
import OurServicesPage from './Components/OurServicesPage';


function App() {


  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<InsuranceLanding />} />
        <Route path="/contact" element={<ContactUs />} />
     
        <Route path="/our-services" element={<OurServicesPage />} />
 
      </Routes>
    </Router>
  );
}

export default App;
