import { createArticlePage } from "@/lib/article-page";

const { generateStaticParams, generateMetadata, Page } = createArticlePage("playbook");

export const dynamicParams = false;
export { generateStaticParams, generateMetadata };
export default Page;
