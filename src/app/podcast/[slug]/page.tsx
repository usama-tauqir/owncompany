import { createArticlePage } from "@/lib/article-page";

const { generateStaticParams, generateMetadata, Page } = createArticlePage("podcast");

export const dynamicParams = false;
export { generateStaticParams, generateMetadata };
export default Page;
