import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

import Services from "../Components/Services";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";
import AboutUs from "../Components/AboutUs";
import StatsShowcase from "../Components/Plane";
import Example from "../Components/Page";
import ContactBanner from "../Components/ContactBanner";
import CustomerMarquee from "../Components/CustomerMarquee";
import AboutADLogistics from "../Components/AboutADLogistics";
import ITCapabilities from "../Components/It";
import FreightForwardingHighlights from "../Components/FreightForwardingHighlights";
import CustomConsultancy from "../Components/Custom";

const Home = () => {
  // Removed showApplyForm state and handleCloseApplyForm function as ApplyForm will be always visible

  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutADLogistics />
      <Services />

      <AboutUs />
      <CustomConsultancy/>
      <Example />

      <StatsShowcase />
      <FreightForwardingHighlights/>
      <ContactBanner />
<ITCapabilities/>
      {/* <CustomerMarquee /> */}

      <Faq />

      <Footer />
    </div>
  );
};

export default Home;
