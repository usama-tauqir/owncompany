import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "Case Studies",
  description: "See how we partner with organisations to modernise platforms, launch products and grow revenue.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="case-study"
      copy={{
        eyebrow: "Case Studies",
        title: "Real problems. Measurable outcomes.",
        subtitle: "See how we partner with organisations to modernise platforms, launch products and grow revenue.",
      }}
    />
  );
}
