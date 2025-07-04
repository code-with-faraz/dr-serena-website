// page.js (NO Navbar/Footer here)

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";
import ClientWrapper from "@/components/ClientWrapper";

export default function Home() {
  return (
    <>
      <ClientWrapper>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </ClientWrapper>
    </>
  );
}
