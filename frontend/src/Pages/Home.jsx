import React, { Suspense, lazy } from "react";


const HeroSection = lazy(() => import("../Components/HeroSection"));

const Services = lazy(() => import("../Components/Services"));

const Faq = lazy(() => import("../Components/Faq"));
const AboutUs = lazy(() => import("../Components/AboutUs"));
const StatsShowcase = lazy(() => import("../Components/Plane"));
const Example = lazy(() => import("../Components/Page"));
const ContactBanner = lazy(() => import("../Components/ContactBanner"));

const AboutADLogistics = lazy(() => import("../Components/AboutADLogistics"));
const ITCapabilities = lazy(() => import("../Components/It"));

const CustomConsultancy = lazy(() => import("../Components/Custom"));

const WhyADLogistics = lazy(() => import("../Components/Clearnace"));
const CustomClearanceHighlights = lazy(() => import("../Components/CustomClearanceHighlights"));


const MissionVisionValues = lazy(() => import("../Components/Mission"));
const OurExperience = lazy(() => import("../Components/Capability"));
const EnquiryForm = lazy(() => import("../Components/EnquiryForm"));

const WarehouseService = lazy(() => import("../Components/WarehouseService"));


const Home = () => {
  return (
    <div className="w-full">
      
       
        <HeroSection />
        <AboutADLogistics />
        {/* <SeaAir />
        <SeaFreightForwarder /> */}
        <Services />
        <WhyADLogistics />
        <WarehouseService />
        <AboutUs />
       
        {/* <LogisticsFolioLogisticsServices /> */}
        <EnquiryForm />
        <CustomClearanceHighlights />
      
        {/* <WhyADLogisticsSurfaceTransportation /> */}
        {/* <WhyADLogisticsConsultancy /> */}
        <Example />
        <CustomConsultancy />
   
        <MissionVisionValues />
        <ITCapabilities />
        <OurExperience />
        
        <StatsShowcase />
        <ContactBanner />
        {/* <CustomerMarquee /> */}
        <Faq />
       
   
    </div>
  );
};

export default Home;
