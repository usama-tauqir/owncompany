import { IndustriesCatalog } from "@/components/templates/Catalog";
import PageTemplate from "@/components/templates/PageTemplate";
import { pages } from "@/content/pages";

const content = pages["industry"];

export const metadata = { title: content.metaTitle, description: content.metaDescription };

export default function IndustriesIndexPage() {
  return (
    <PageTemplate blocks={content.blocks} insertAfter={0}>
      <IndustriesCatalog />
    </PageTemplate>
  );
}
