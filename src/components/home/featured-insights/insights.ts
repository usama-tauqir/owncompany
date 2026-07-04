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
        image:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/677e26a1461d4ae7dc6f5f9f_Recurate%402x-100.avif",
        imagePosition: "center center",
      },
      {
        type: "Blogs",
        title:
          "How Cloud Computing Can Transform Small Businesses",
        href: "/articles/how-cloud-computing-can-transform-small-businesses",
        image:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67321c409e575f0f0e264d3f_linkedin-sales-solutions--AXDunSs-n4-unsplash.webp",
        imagePosition: "center center",
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
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/674703369b972f18df57ceb8_Custom%20Web%20Application%20Development.avif",
        imagePosition: "center center",
      },
      {
        type: "Blogs",
        title:
          "Trends of Mobile Design: What's Next for Your Business?",
        href: "/articles/trends-of-mobile-design-whats-next-for-your-business",
        image:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67470336706b2fbb2120631e_Trends%20of%20Mobile%20Design.avif",
        imagePosition: "center center",
      },
      {
        type: "Blogs",
        title:
          "How Generative AI is Transforming Business Operations",
        href: "/articles/how-generative-ai-is-transforming-business-operations",
        image:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/674703370ee5ac69d196b247_How%20Generative%20AI%20is%20Transforming%20Business%20Operations.avif",
        imagePosition: "center center",
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
        image:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67470336fba9bac4339373bb_Automated%20Financial%20.avif",
        imagePosition: "center center",
      },
      {
        type: "Case Study",
        title:
          "Pakistan Furniture Leader's Shopify Migration Drives 55% Growth",
        href: "/case-studies/interwood",
        image:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/68c19043519b29b3189a5978_compressed_interwood%20(1).webp",
        imagePosition: "center center",
      },
      {
        type: "Case Study",
        title:
          "US Fintech's AI Financial Modeling Secures $2M+ Funding",
        href: "/case-studies/financial-automation",
        image:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/677e2658c356ff9f607853a6_RMI%402x-100.avif",
        imagePosition: "center center",
      },
    ],
  },
];