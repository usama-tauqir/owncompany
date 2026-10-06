import { createArticlePage } from "@/lib/article-page";

const { generateStaticParams, generateMetadata, Page } = createArticlePage("case-study");

export const dynamicParams = false;
export { generateStaticParams, generateMetadata };
export default Page;
