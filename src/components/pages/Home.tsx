// Home.tsx
import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Hero from "../sections/hero/Hero";
import ServicesSection from "../sections/services/ServicesSection";
import AboutSection from "../sections/about/AboutSection";
import ContactSection from "../sections/contact/ContactSection";
import Loader from "../Loader";

const Home: React.FC = () => {
  useDocumentTitle("Home - Det-Car | Professionelle Auto Detailing");

  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Loader />
    </>
  );
};

export default Home;
