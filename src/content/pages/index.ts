import type { PageContent } from "@/content/types";

import { aboutUsPage } from "./about-us";
import { leadershipPage } from "./leadership";
import { geographiesPage } from "./geographies";
import { awardsRecognitionPage } from "./awards-recognition";
import { mediaInvestorRelationsPage } from "./media-investor-relations";
import { esgValuesPage } from "./esg-values";
import { codeOfConductValuesPage } from "./code-of-conduct-values";
import { clientTestimonialsPage } from "./client-testimonials";
import { careerPage } from "./career";
import { culturePage } from "./culture";
import { diversityEquityAndInclusionPage } from "./diversity-equity-and-inclusion";
import { employeeSuccessPage } from "./employee-success";
import { benefitsPage } from "./benefits";
import { campusAmbassadorProgramPage } from "./campus-ambassador-program";
import { contactPage } from "./contact";
import { privacyPolicyPage } from "./privacy-policy";
import { termsConditionsPage } from "./terms-conditions";
import { servicesIndexPage } from "./services-index";
import { industriesIndexPage } from "./industries-index";

const allPages: PageContent[] = [
  aboutUsPage,
  leadershipPage,
  geographiesPage,
  awardsRecognitionPage,
  mediaInvestorRelationsPage,
  esgValuesPage,
  codeOfConductValuesPage,
  clientTestimonialsPage,
  careerPage,
  culturePage,
  diversityEquityAndInclusionPage,
  employeeSuccessPage,
  benefitsPage,
  campusAmbassadorProgramPage,
  contactPage,
  privacyPolicyPage,
  termsConditionsPage,
  servicesIndexPage,
  industriesIndexPage,
];

/** All static content pages, keyed by slug. */
export const pages: Record<string, PageContent> = Object.fromEntries(
  allPages.map((page) => [page.slug, page]),
);
