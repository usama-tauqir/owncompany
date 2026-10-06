import ResourceListing from "@/components/templates/ResourceListing";

export const metadata = {
  title: "Blogs",
  description: "Hands-on perspectives from our engineers, designers and strategists on building software that lasts.",
};

export default function Page() {
  return (
    <ResourceListing
      kind="blog"
      copy={{
        eyebrow: "Blogs",
        title: "Ideas, engineering notes and practical guides",
        subtitle: "Hands-on perspectives from our engineers, designers and strategists on building software that lasts.",
      }}
    />
  );
}
