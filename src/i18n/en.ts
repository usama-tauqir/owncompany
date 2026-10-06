/*
 * UI strings for the site chrome (navbar, footer, shared buttons).
 * Every locale dictionary must satisfy the `Dictionary` type.
 */

export const en = {
  nav: {
    whatWeDo: "What we do",
    whoWeHelp: "Who we help",
    whoWeAre: "Who We Are",
    howWeDeliver: "How we deliver",
    join: "Join",
    letsTalk: "Let's Talk",
    letsTalkBusiness: "Let's Talk Business",
    menu: "Menu",
    close: "Close",
    region: "Region",
  },
  menuSections: {
    digitalTransformation: "Digital Transformation",
    businessApplications: "Business Applications",
    shopify: "Shopify",
    emergingTechnologies: "Emerging Technologies",
    gaming: "Gaming",
    cloud: "Cloud",
    studiosAdvisory: "Studios & Advisory",
    industries: "Industries",
    company: "Company",
    resources: "Resources",
    careers: "Careers",
    locations: "Locations",
    viewAllServices: "View all services",
    viewAllIndustries: "View all industries",
  },
  footer: {
    company: "Company",
    industries: "Industries We Serve",
    services: "Services and Solutions",
    resources: "Resources",
    home: "Home",
    about: "About",
    careers: "Careers",
    blogs: "Blogs",
    caseStudies: "Case Studies",
    terms: "Terms and Conditions",
    privacy: "Privacy Policy",
    rights: "All rights reserved.",
    visitUs: "Visit us on",
  },
  common: {
    readMore: "Read more",
    learnMore: "Learn more",
    viewAll: "View all",
    getInTouch: "Get in Touch",
    applyNow: "Apply now",
    all: "All",
    minRead: "min read",
    backTo: "Back to",
    relatedServices: "Related services",
    relatedIndustries: "Industries we serve",
    faq: "Frequently asked questions",
  },
} as const;

type DeepString<T> = { [K in keyof T]: T[K] extends string ? string : DeepString<T[K]> };

export type Dictionary = DeepString<typeof en>;
