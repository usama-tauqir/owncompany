import { ServicesCatalog } from "@/components/templates/Catalog";
import PageTemplate from "@/components/templates/PageTemplate";
import { pages } from "@/content/pages";

const content = pages["services"];

export const metadata = { title: content.metaTitle, description: content.metaDescription };

export default function ServicesIndexPage() {
  return (
    <PageTemplate blocks={content.blocks} insertAfter={0}>
      <ServicesCatalog />
    </PageTemplate>
  );
}
