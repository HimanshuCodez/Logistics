import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsuranceLanding from './Pages/Home';
import Personal from './Pages/Personal';
import Corporate from './Pages/Corporate';
import ContactUs from "./Pages/Contact";
import OurServicesPage from './Components/OurServicesPage';

import SocialHandles from "./Components/SocialHandles";

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
