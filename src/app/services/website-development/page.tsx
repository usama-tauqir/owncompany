import type { Metadata } from "next";

import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { getService } from "@/content/services";

/*
 * Rendered with the shared service template so it matches every other
 * service page. The earlier hand-built version still lives in
 * src/components/services/website-development (unused).
 */
const service = getService("website-development")!;

export const metadata: Metadata = {
  title: `${service.name} Services`,
  description: service.summary,
};

export default function Page() {
  return <ServiceTemplate service={service} />;
}
