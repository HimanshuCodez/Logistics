import React, { Suspense, lazy } from "react";
import Spinner from "../Components/Spinner";

const HeroSection = lazy(() => import("../Components/HeroSection"));
const Navbar = lazy(() => import("../Components/Navbar"));
const Services = lazy(() => import("../Components/Services"));
const Footer = lazy(() => import("../Components/Footer"));
const Faq = lazy(() => import("../Components/Faq"));
const AboutUs = lazy(() => import("../Components/AboutUs"));
const StatsShowcase = lazy(() => import("../Components/Plane"));
const Example = lazy(() => import("../Components/Page"));
const ContactBanner = lazy(() => import("../Components/ContactBanner"));
const CustomerMarquee = lazy(() => import("../Components/CustomerMarquee"));
const AboutADLogistics = lazy(() => import("../Components/AboutADLogistics"));
const ITCapabilities = lazy(() => import("../Components/It"));
const FreightForwardingHighlights = lazy(() => import("../Components/FreightForwardingHighlights"));
const CustomConsultancy = lazy(() => import("../Components/Custom"));
const LogisticsFolioLogisticsServices = lazy(() => import("../Components/Service"));
const WhyADLogistics = lazy(() => import("../Components/Clearnace"));
const CustomClearanceHighlights = lazy(() => import("../Components/CustomClearanceHighlights"));
const FreightForwardingHighlightss = lazy(() => import("../Components/FreightForwardingHighlightss"));
const WhyADLogisticsConsultancy = lazy(() => import("../Components/WhyCustom"));
const WhyADLogisticsSurfaceTransportation = lazy(() => import("../Components/Surface"));
const SurfaceTransportationHighlights = lazy(() => import("../Components/SurfaceHighlights"));
const MissionVisionValues = lazy(() => import("../Components/Mission"));
const OurExperience = lazy(() => import("../Components/Capability"));
const EnquiryForm = lazy(() => import("../Components/EnquiryForm"));
const CustomsClearanceDocs = lazy(() => import("../Components/Expport"));
const CustomsImportDocs = lazy(() => import("../Components/Import"));
const ImportDocsComponent = lazy(() => import("../Components/Docs"));
const SeaAir = lazy(() => import("../Components/SeaAir"));
const SeaFreightForwarder = lazy(() => import("../Components/Fright"));
const WarehouseService = lazy(() => import("../Components/WarehouseService"));
const CustomsClearanceSteps = lazy(() => import("../Components/Steps"));

const Home = () => {
  return (
    <div className="w-full">
      <Suspense fallback={<Spinner/>}>
        <Navbar />
        <HeroSection />
        <SeaAir />
        <SeaFreightForwarder />
        <WarehouseService />
        <CustomsClearanceSteps />
        <Services />
        <AboutADLogistics />
        <LogisticsFolioLogisticsServices />
        <WhyADLogistics />
        <CustomClearanceHighlights />
        <FreightForwardingHighlightss />
        <WhyADLogisticsConsultancy />
        <CustomConsultancy />
        <WhyADLogisticsSurfaceTransportation />
        <SurfaceTransportationHighlights />
        <MissionVisionValues />
        <ITCapabilities />
        <OurExperience />
        <CustomsImportDocs />
        <CustomsClearanceDocs />
        <EnquiryForm />
        <AboutUs />
        <Example />
        <StatsShowcase />
        <ContactBanner />
        {/* <CustomerMarquee /> */}
        <Faq />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
