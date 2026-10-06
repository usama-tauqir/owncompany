import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "Playbooks",
  description: "Battle-tested playbooks distilled from hundreds of delivery engagements.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="playbook"
      copy={{
        eyebrow: "Playbooks",
        title: "Step-by-step frameworks you can reuse",
        subtitle: "Battle-tested playbooks distilled from hundreds of delivery engagements.",
      }}
    />
  );
}
