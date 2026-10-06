import type { Resource, ResourceKind } from "@/content/types";

/** Listing route for each resource kind (mirrors the "How we deliver" menu). */
export const resourceRoutes: Record<ResourceKind, string> = {
  blog: "/blogs",
  "case-study": "/case-studies",
  news: "/news",
  whitepaper: "/whitepapers",
  playbook: "/playbooks",
  perspective: "/perspective",
  podcast: "/podcast",
  "thought-leadership": "/thought-leadership",
};

const labels: Record<ResourceKind, string> = {
  blog: "Blog",
  "case-study": "Case Study",
  news: "News",
  whitepaper: "Whitepaper",
  playbook: "Playbook",
  perspective: "Perspective",
  podcast: "Podcast",
  "thought-leadership": "Thought Leadership",
};

export function resourceKindLabel(kind: ResourceKind): string {
  return labels[kind];
}

export function resourceHref(resource: Pick<Resource, "kind" | "slug">): string {
  return `${resourceRoutes[resource.kind]}/${resource.slug}`;
}

export function formatDate(iso: string, locale = "en-US"): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
