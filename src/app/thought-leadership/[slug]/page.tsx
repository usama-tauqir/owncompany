import { createArticlePage } from "@/lib/article-page";

const { generateStaticParams, generateMetadata, Page } = createArticlePage("thought-leadership");

export const dynamicParams = false;
export { generateStaticParams, generateMetadata };
export default Page;
