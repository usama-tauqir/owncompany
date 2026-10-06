import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "Perspective",
  description: "Opinionated takes from our leadership on markets, platforms and the future of work.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="perspective"
      copy={{
        eyebrow: "Perspective",
        title: "Points of view on where technology is heading",
        subtitle: "Opinionated takes from our leadership on markets, platforms and the future of work.",
      }}
    />
  );
}
