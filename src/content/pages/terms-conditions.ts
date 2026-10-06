import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const termsConditionsPage: PageContent = {
  slug: "terms-conditions",
  metaTitle: `Terms & Conditions | ${siteConfig.name}`,
  metaDescription: `The terms and conditions that govern your use of the ${siteConfig.name} website.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Legal",
      title: "Terms & Conditions",
      subtitle: "The rules that apply when you use our website.",
      tone: "navy",
      art: "terms-conditions-hero",
    },
    {
      type: "richText",
      updated: "2026-01-01",
      sections: [
        {
          heading: "1. Acceptance of terms",
          paragraphs: [
            `These Terms and Conditions govern your access to and use of the website operated by ${siteConfig.legalName} ("${siteConfig.name}", "we", "us" or "our"). By using this website, you agree to these terms. If you do not agree, please do not use the website.`,
            "This document is a general template provided for convenience. It must be reviewed and adapted by qualified legal counsel before it is relied upon.",
          ],
        },
        {
          heading: "2. Use of the website",
          paragraphs: ["You agree to use the website only for lawful purposes. In particular, you must not:"],
          bullets: [
            "Attempt to gain unauthorised access to the website, its servers or related systems.",
            "Introduce viruses, malware or other harmful code.",
            "Use automated tools to scrape or harvest content without our written permission.",
            "Use the website in any way that could damage our reputation or interfere with other users.",
          ],
        },
        {
          heading: "3. Intellectual property",
          paragraphs: [
            "All content on this website, including text, graphics, logos, designs and software, is owned by or licensed to us and is protected by intellectual property laws. You may view and print content for personal, non-commercial use, but you may not reproduce, distribute or modify it without our prior written consent.",
          ],
        },
        {
          heading: "4. Information on this website",
          paragraphs: [
            "Content on this website is provided for general information only. It does not constitute professional advice or an offer to provide services. Any engagement for services is governed by a separate written agreement.",
          ],
        },
        {
          heading: "5. Third-party links",
          paragraphs: [
            "The website may contain links to third-party websites. These links are provided for convenience only. We do not control and are not responsible for the content, policies or practices of third-party websites.",
          ],
        },
        {
          heading: "6. Disclaimer of warranties",
          paragraphs: [
            "The website is provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, we make no warranties, express or implied, regarding the accuracy, completeness, availability or fitness for purpose of the website or its content.",
          ],
        },
        {
          heading: "7. Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special or consequential losses arising from your use of, or inability to use, the website. Nothing in these terms limits liability that cannot be limited under applicable law.",
          ],
        },
        {
          heading: "8. Privacy",
          paragraphs: [
            "Your use of the website is also governed by our Privacy Policy, which explains how we collect and use personal information.",
          ],
        },
        {
          heading: "9. Changes to these terms",
          paragraphs: [
            "We may update these terms from time to time. The updated version will be posted on this page with a revised \"last updated\" date. Continued use of the website after changes are posted means you accept the revised terms.",
          ],
        },
        {
          heading: "10. Governing law and contact",
          paragraphs: [
            "These terms are governed by the laws of the jurisdiction in which the contracting entity is established, unless otherwise required by applicable law.",
            `If you have any questions about these terms, please contact us at ${siteConfig.email.business}.`,
          ],
        },
      ],
    },
    {
      type: "cta",
      title: "Have a question about these terms?",
      subtitle: "Reach out and our team will be glad to help.",
      cta: { label: "Contact us", href: "/contact" },
      tone: "teal",
    },
  ],
};
