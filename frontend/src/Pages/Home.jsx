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
import LogisticsFolioLogisticsServices from "../Components/Service";
import WhyADLogistics from "../Components/Clearnace";
import CustomClearanceHighlights from "../Components/CustomClearanceHighlights";
import FreightForwardingHighlightss from "../Components/FreightForwardingHighlightss";
import WhyADLogisticsConsultancy from "../Components/WhyCustom";
import WhyADLogisticsSurfaceTransportation from "../Components/Surface";
import SurfaceTransportationHighlights from "../Components/SurfaceHighlights";
import MissionVisionValues from "../Components/Mission";
import OurExperience from "../Components/Capability";
import EnquiryForm from "../Components/EnquiryForm";
import CustomsClearanceDocs from "../Components/Expport";
import CustomsImportDocs from "../Components/Import";
import ImportDocsComponent from "../Components/Docs";

const Home = () => {
  // Removed showApplyForm state and handleCloseApplyForm function as ApplyForm will be always visible

  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutADLogistics />
<LogisticsFolioLogisticsServices/>
<WhyADLogistics/>
<CustomClearanceHighlights/>/

      <FreightForwardingHighlights/>
      <FreightForwardingHighlightss/>
      <WhyADLogisticsConsultancy/>
      <CustomConsultancy/>
      <WhyADLogisticsSurfaceTransportation/>
      <SurfaceTransportationHighlights/>
      <MissionVisionValues/>
<ITCapabilities/>
<OurExperience/>

<CustomsImportDocs/>
<CustomsClearanceDocs/>
      <EnquiryForm/>

      <AboutUs />
      <Example />

      <StatsShowcase />
      <ContactBanner />
      {/* <CustomerMarquee /> */}

      <Faq />

      <Footer />
    </div>
  );
};

export default Home;
