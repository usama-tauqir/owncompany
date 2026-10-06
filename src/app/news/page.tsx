import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "News",
  description: "Announcements, partnerships, expansions and milestones from across our global teams.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="news"
      copy={{
        eyebrow: "News",
        title: "What's new at the company",
        subtitle: "Announcements, partnerships, expansions and milestones from across our global teams.",
      }}
    />
  );
}
