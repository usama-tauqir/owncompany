import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "Podcast",
  description: "Listen in as practitioners unpack the decisions behind products that scale.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="podcast"
      copy={{
        eyebrow: "Podcast",
        title: "Conversations with builders and operators",
        subtitle: "Listen in as practitioners unpack the decisions behind products that scale.",
      }}
    />
  );
}
