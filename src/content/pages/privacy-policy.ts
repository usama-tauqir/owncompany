import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const privacyPolicyPage: PageContent = {
  slug: "privacy-policy",
  metaTitle: `Privacy Policy | ${siteConfig.name}`,
  metaDescription: `How ${siteConfig.name} collects, uses, shares and protects personal information.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Legal",
      title: "Privacy Policy",
      subtitle: "How we collect, use and protect your personal information.",
      tone: "navy",
      art: "privacy-policy-hero",
    },
    {
      type: "richText",
      updated: "2026-01-01",
      sections: [
        {
          heading: "1. Introduction",
          paragraphs: [
            `This Privacy Policy explains how ${siteConfig.legalName} ("${siteConfig.name}", "we", "us" or "our") collects, uses, discloses and safeguards personal information when you visit our website, contact us, apply for a role or otherwise interact with us.`,
            "This document is a general template provided for convenience. It must be reviewed and adapted by qualified legal counsel to reflect our actual practices and the laws of each jurisdiction in which we operate before it is relied upon.",
          ],
        },
        {
          heading: "2. Information we collect",
          paragraphs: ["We may collect the following categories of information:"],
          bullets: [
            "Contact details you provide, such as your name, email address, phone number, company and job title.",
            "Information you submit through forms, including project enquiries, messages and attachments.",
            "Recruitment information, such as CVs, employment history, qualifications and references.",
            "Technical information, such as IP address, browser type, device information and pages visited.",
            "Information from cookies and similar technologies, as described below.",
          ],
        },
        {
          heading: "3. How we use your information",
          paragraphs: ["We use personal information for legitimate business purposes, including to:"],
          bullets: [
            "Respond to enquiries and provide information about our services.",
            "Evaluate job applications and manage our recruitment process.",
            "Operate, maintain, secure and improve our website.",
            "Send marketing communications where you have agreed to receive them.",
            "Comply with legal obligations and protect our rights.",
          ],
        },
        {
          heading: "4. Legal bases for processing",
          paragraphs: [
            "Where required by applicable law, we process personal information on the basis of your consent, the performance of a contract, compliance with a legal obligation or our legitimate interests, provided those interests are not overridden by your rights.",
          ],
        },
        {
          heading: "5. Cookies and analytics",
          paragraphs: [
            "We use cookies and similar technologies to make our website work, remember your preferences and understand how visitors use our site. You can control cookies through your browser settings. Disabling some cookies may affect how the website functions.",
          ],
        },
        {
          heading: "6. Sharing your information",
          paragraphs: [
            "We do not sell personal information. We may share it with affiliated companies, trusted service providers who process data on our behalf under appropriate contractual safeguards, professional advisers, and authorities where required by law or to protect our rights.",
          ],
        },
        {
          heading: "7. International transfers",
          paragraphs: [
            "Because we operate in several countries, your information may be transferred to and processed in countries other than your own. Where required, we put appropriate safeguards in place to protect information transferred internationally.",
          ],
        },
        {
          heading: "8. Data retention and security",
          paragraphs: [
            "We keep personal information only for as long as necessary for the purposes described in this policy or as required by law. We use administrative, technical and physical safeguards designed to protect personal information, although no method of transmission or storage is completely secure.",
          ],
        },
        {
          heading: "9. Your rights",
          paragraphs: [
            "Depending on where you live, you may have rights to access, correct, delete, restrict or object to the processing of your personal information, to withdraw consent and to request a copy of your data. You may also have the right to lodge a complaint with a data protection authority.",
          ],
        },
        {
          heading: "10. Contact us",
          paragraphs: [
            `If you have questions about this policy or wish to exercise your rights, please contact us at ${siteConfig.email.business}. We may update this policy from time to time and will post the revised version on this page with a new "last updated" date.`,
          ],
        },
      ],
    },
    {
      type: "cta",
      title: "Questions about your data?",
      subtitle: "Our team is happy to help with any privacy-related request.",
      cta: { label: "Contact us", href: "/contact" },
      tone: "teal",
    },
  ],
};
