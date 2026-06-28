import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/home/HeroSection";
import ClientLogos from "@/sections/home/ClientLogos";
import ServicesSection from "@/sections/home/ServicesSection";
import Navbar from "@/components/layout/navbar/Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <HeroSection />
        <ClientLogos />
        <ServicesSection />
      </main>

      <Footer />
    </>
  );
}