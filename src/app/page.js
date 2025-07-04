import Head from "next/head";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";
import ClientWrapper from "@/components/ClientWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
          rel="stylesheet"
        />
      </Head>
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
