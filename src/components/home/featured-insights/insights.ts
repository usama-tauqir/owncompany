export type InsightType = "Case Study" | "Blogs";

export interface InsightItem {
  type: InsightType;
  title: string;
  href: string;
  image: string;
  imagePosition?: string;
}

export interface InsightColumn {
  id: "first" | "second" | "third";
  items: InsightItem[];
}

export const insightColumns: InsightColumn[] = [
  {
    id: "first",
    items: [
      {
        type: "Case Study",
        title:
          "US Fashion Resale Platform Scales to 100K Monthly Transactions",
        href: "/case-studies/recurate",
        image: "/images/home/insights/fashion-resale.avif",
      },
      {
        type: "Blogs",
        title:
          "How Cloud Computing Can Transform Small Businesses",
        href: "/articles/how-cloud-computing-can-transform-small-businesses",
        image: "/images/home/insights/cloud-computing.webp",
      },
    ],
  },
  {
    id: "second",
    items: [
      {
        type: "Blogs",
        title:
          "Custom Web Application Development: Everything You Need to Know",
        href: "/articles/custom-web-app-development-what-you-need-to-know",
        image:
          "/images/home/insights/custom-web-development.avif",
      },
      {
        type: "Blogs",
        title:
          "Trends of Mobile Design: What's Next for Your Business?",
        href: "/articles/trends-of-mobile-design-whats-next-for-your-business",
        image: "/images/home/insights/mobile-design.avif",
      },
      {
        type: "Blogs",
        title:
          "How Generative AI is Transforming Business Operations",
        href: "/articles/how-generative-ai-is-transforming-business-operations",
        image: "/images/home/insights/generative-ai.avif",
      },
    ],
  },
  {
    id: "third",
    items: [
      {
        type: "Case Study",
        title:
          "Hospitality AI Platform Reconciles $300M+ in OTA Commissions Automatically",
        href: "/case-studies/empowering-xquic-for-automated-financial-accuracy",
        image: "/images/home/insights/hospitality-ai.avif",
      },
      {
        type: "Case Study",
        title:
          "Pakistan Furniture Leader's Shopify Migration Drives 55% Growth",
        href: "/case-studies/interwood",
        image:
          "/images/home/insights/furniture-shopify.webp",
      },
      {
        type: "Case Study",
        title:
          "US Fintech's AI Financial Modeling Secures $2M+ Funding",
        href: "/case-studies/financial-automation",
        image: "/images/home/insights/fintech-ai.avif",
      },
    ],
  },
];