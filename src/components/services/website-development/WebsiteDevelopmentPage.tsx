import FeaturedInsightsSection from "@/components/home/featured-insights";
import DigitalPresenceCTA from "./digital-presence-cta";
import EnterpriseWebDevelopment from "./enterprise-development";
import WebsiteDevelopmentHero from "./hero/WebsiteDevelopmentHero";
import WebIndustriesFocus from "./industries-focus";
import WebsiteOverviewSection from "./overview";
import WebDevelopmentProcess from "./process-diagram";
import ScalableWebSolutionsCTA from "./scalable-cta";
import WebTechStack from "./tech-stack";
import ContactGlobalSection from "@/components/home/contact-global";
import Footer from "@/components/layout/footer";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <WebsiteDevelopmentHero />
      <WebsiteOverviewSection />
      <ScalableWebSolutionsCTA />
      <EnterpriseWebDevelopment />
      <WebDevelopmentProcess />
      <DigitalPresenceCTA />
      <WebIndustriesFocus />
      <WebTechStack />
      <FeaturedInsightsSection/>
      <ContactGlobalSection/>
      <Footer/>
    </>
  );
}