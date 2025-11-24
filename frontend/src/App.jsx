import React, { Suspense, lazy } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./Components/Spinner";

const InsuranceLanding = lazy(() => import('./Pages/Home'));
const ContactUs = lazy(() => import("./Pages/Contact"));
const OurServicesPage = lazy(() => import('./Components/OurServicesPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<InsuranceLanding />} />
          <Route path="/contact"element={<ContactUs />} />
          <Route path="/our-services" element={<OurServicesPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
