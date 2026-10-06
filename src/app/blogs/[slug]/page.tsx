import { createArticlePage } from "@/lib/article-page";

const { generateStaticParams, generateMetadata, Page } = createArticlePage("blog");

export const dynamicParams = false;
export { generateStaticParams, generateMetadata };
export default Page;
