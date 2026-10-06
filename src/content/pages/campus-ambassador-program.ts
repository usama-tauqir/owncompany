import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const campusAmbassadorProgramPage: PageContent = {
  slug: "campus-ambassador-program",
  metaTitle: `Campus Ambassador Program | ${siteConfig.name}`,
  metaDescription: `Represent ${siteConfig.name} at your university, build leadership skills and get a head start on your tech career with our Campus Ambassador Program.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Campus Ambassador Program",
      title: "Lead on campus. Launch your career.",
      subtitle: `Become the bridge between your university and ${siteConfig.name}. Organise events, build your network and gain experience that sets you apart.`,
      cta: { label: "Apply now", href: "/contact" },
      secondaryCta: { label: "Explore careers", href: "/career" },
      tone: "purple",
      art: "campus-ambassador-hero",
    },
    {
      type: "intro",
      eyebrow: "About the program",
      title: "For students who love technology and community",
      paragraphs: [
        "Campus ambassadors represent our company at their universities. You'll help fellow students discover careers in technology, organise workshops and hackathons, and share feedback that shapes how we engage with young talent.",
        "In return, you'll get mentorship from our engineers and leaders, exclusive learning opportunities and a fast track into our internship and graduate programmes.",
      ],
      highlights: [
        "Open to undergraduate and postgraduate students",
        "Flexible commitment that fits around your studies",
        "Certificate of completion and recommendation letters",
      ],
      art: "campus-ambassador-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "What you'll do",
      title: "Your role as an ambassador",
      columns: 3,
      items: [
        { icon: "megaphone", title: "Spread the word", description: "Share opportunities, events and content with your campus community." },
        { icon: "users", title: "Host events", description: "Organise tech talks, workshops and coding challenges with our support." },
        { icon: "message", title: "Be the voice of students", description: "Share feedback and ideas that shape our campus engagement." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "What you'll get",
      title: "Perks and opportunities",
      columns: 4,
      tone: "light",
      items: [
        { icon: "compass", title: "Mentorship", description: "A dedicated mentor from our engineering or people teams." },
        { icon: "rocket", title: "Fast-track hiring", description: "Priority consideration for internships and graduate roles." },
        { icon: "book", title: "Exclusive learning", description: "Access to internal workshops and certification resources." },
        { icon: "gift", title: "Rewards", description: "Stipends, merchandise and recognition for top performers." },
      ],
    },
    {
      type: "process",
      eyebrow: "How to apply",
      title: "Four steps to becoming an ambassador",
      steps: [
        { title: "Submit your application", description: "Tell us about yourself, your university and why you want to be an ambassador." },
        { title: "Short video introduction", description: "Record a two-minute video sharing an idea for an event on your campus." },
        { title: "Conversation with our team", description: "A relaxed chat with our campus team to get to know you better." },
        { title: "Onboarding", description: "Join your cohort for a kick-off session and receive your ambassador toolkit." },
      ],
    },
    {
      type: "stats",
      title: "Program impact",
      tone: "teal",
      items: [
        { value: 50, suffix: "+", label: "Partner universities" },
        { value: 300, suffix: "+", label: "Campus events hosted" },
        { value: 40, suffix: "%", label: "Of ambassadors who join us after graduation" },
      ],
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        { question: "Who is eligible to apply?", answer: "Any currently enrolled student with an interest in technology, leadership and community building. You don't need to study computer science." },
        { question: "How much time does it take?", answer: "Most ambassadors spend around four to six hours a month. Activities are planned around your academic calendar." },
        { question: "Is the program paid?", answer: "Ambassadors receive a stipend for organised events, plus rewards and recognition for outstanding contributions." },
        { question: "How long does the program last?", answer: "Each cohort runs for one academic year. Strong ambassadors are invited to return as senior ambassadors." },
        { question: "When are applications open?", answer: `Applications open at the start of each academic term. Email ${siteConfig.email.careers} to be notified when the next cohort opens.` },
      ],
    },
    {
      type: "cta",
      title: "Ready to represent your campus?",
      subtitle: "Apply for the next cohort and start building your future today.",
      cta: { label: "Apply now", href: "/contact" },
      tone: "navy",
    },
    { type: "contact" },
  ],
};
