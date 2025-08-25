export const dynamic = 'force-dynamic';

import { ArticleHeroSection, ScrollToTopBtn } from '@/components/global';
import { ArticleContentSection, ArticleScrollProgress } from '@/components/local/read-article';
import { $crud } from '@/factory/crudFactory';

type PageProps = {
    searchParams: Promise<Record<string, string | string[]>>;
};


const Read = async ({ searchParams }: PageProps) => {

    let blogs: any = {};
    let relatedBlogsArr: RelatedArticleInterface[] = [];

    try {
        const resolvedSearchParams = await searchParams;
        const id = resolvedSearchParams?.id;
        if (id) {
            const { data: { blogDetails, relatedBlogs } } = await $crud.retrieve(`metarule/blog-details?id=${id}`);
            blogs = blogDetails;
            relatedBlogsArr = relatedBlogs;
        }
    } catch (error) {
        console.error('Error fetching article:', error);
    }


    return (
        <div className="min-h-screen bg-background">
            {/* Progress Bar */}
            <ArticleScrollProgress />

            {/* Article Hero */}
            <ArticleHeroSection
                data={blogs}
            />

            {/* Article Content */}
            <ArticleContentSection
                relatedArticles={relatedBlogsArr}
                articleHtml={blogs.contentHtml}
                articleCss={blogs.contentCss}
                renderForBlog
            />


            {/* Back to Top Button */}
            <ScrollToTopBtn />
        </div>
    );
};

export default Read;
