import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "Thought Leadership",
  description: "Strategic thinking on digital transformation, AI and the next era of business.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="thought-leadership"
      copy={{
        eyebrow: "Thought Leadership",
        title: "Insight that shapes better decisions",
        subtitle: "Strategic thinking on digital transformation, AI and the next era of business.",
      }}
    />
  );
}
