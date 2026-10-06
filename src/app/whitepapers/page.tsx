import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "Whitepapers",
  description: "In-depth papers on architecture, AI adoption, security and operating models.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="whitepaper"
      copy={{
        eyebrow: "Whitepapers",
        title: "Research-backed guidance for technology leaders",
        subtitle: "In-depth papers on architecture, AI adoption, security and operating models.",
      }}
    />
  );
}
