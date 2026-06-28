import Footer from "@/components/layout/footer/Footer";
import HeroSection from "@/components/home/hero/HeroSection";
import ClientMarquee from "@/components/home/hero/client-marquee/ClientMarquee";
import ServicesSection from "../components/home/services/ServicesSection";
import IndustriesSection from "../components/home/Industries/IndustriesSection";
import CTASection  from "../components/home/cta/CTASection";
import AwardsSection from "@/components/home/awards/AwardsSection";
import PartnershipsSection from "@/components/home/partnerships/PartnershipsSection";
import FeaturedInsightsSection from "@/components/home/featured-insights/FeaturedInsightsSection";
import AchievementsSection from "@/components/home/achievements/AchievementsSection";
import CareersSection from "@/components/home/career/CareersSection";
import LeadershipSection from "@/components/home/leadership/LeadershipSection";
import ContactGlobalSection from "@/components/home/contact-global/ContactGlobalSection";


export default function Home() {
  return (
    <>

      <main>
        <HeroSection />
        <ClientMarquee />
        <ServicesSection />
        <IndustriesSection />
        <CTASection />
        <AwardsSection />
        <PartnershipsSection />
        <FeaturedInsightsSection />
        <AchievementsSection />
        <CareersSection />
        <LeadershipSection />
        <ContactGlobalSection />
      </main>
      <Footer />
    </>
  );
}