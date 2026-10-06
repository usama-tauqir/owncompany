import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleTemplate from "@/components/templates/ArticleTemplate";
import { resources } from "@/content/resources";
import type { ResourceKind } from "@/content/types";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Shared static params, metadata and page component for resource detail routes. */
export function createArticlePage(kind: ResourceKind) {
  const items = resources.filter((item) => item.kind === kind);
  const find = (slug: string) => items.find((item) => item.slug === slug);

  function generateStaticParams() {
    return items.map((item) => ({ slug: item.slug }));
  }

  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const item = find((await params).slug);
    return item ? { title: item.title, description: item.excerpt } : {};
  }

  async function Page({ params }: Props) {
    const item = find((await params).slug);
    if (!item) notFound();
    return <ArticleTemplate resource={item} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
