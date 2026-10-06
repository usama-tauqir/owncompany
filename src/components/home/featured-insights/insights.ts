import { resources } from "@/content/resources";
import { resourceHref } from "@/lib/resources";

export type InsightType = "Case Study" | "Blogs";

export interface InsightItem {
  type: InsightType;
  title: string;
  href: string;
  /** optional cover image; generated artwork is used when empty */
  image: string;
  imagePosition?: string;
}

export interface InsightColumn {
  id: "first" | "second" | "third";
  items: InsightItem[];
}

/* Latest case studies and blogs from src/content/resources, split into three columns. */
const latest = resources
  .filter((item) => item.kind === "case-study" || item.kind === "blog")
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 8)
  .map<InsightItem>((item) => ({
    type: item.kind === "case-study" ? "Case Study" : "Blogs",
    title: item.title,
    href: resourceHref(item),
    image: "",
  }));

export const insightColumns: InsightColumn[] = [
  { id: "first", items: latest.slice(0, 2) },
  { id: "second", items: latest.slice(2, 5) },
  { id: "third", items: latest.slice(5, 8) },
];
