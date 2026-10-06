import { createArticlePage } from "@/lib/article-page";

const { generateStaticParams, generateMetadata, Page } = createArticlePage("whitepaper");

export const dynamicParams = false;
export { generateStaticParams, generateMetadata };
export default Page;
