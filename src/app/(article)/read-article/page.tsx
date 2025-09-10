import { Metadata } from 'next';
import { ArticleHeroSection, ScrollToTopBtn } from '@/components/global';
import { ArticleContentSection, ExploreMoreSection, ArticleScrollProgress } from '@/components/local/read-article';
import { $crud } from '@/factory/crudFactory';

type PageProps = {
    searchParams: Promise<Record<string, string | string[]>>;
};

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
    title: 'Article |',
};

const Read = async ({ searchParams }: PageProps) => {

    let article: any = {};
    let relatedArticlesArr: RelatedArticleInterface[] = [];

    try {
        const resolvedSearchParams = await searchParams;
        const id = resolvedSearchParams?.id;
        if (id) {
            const { data: { articleDetails, relatedArticles } } = await $crud.retrieve(`article-details?id=${id}`);
            article = articleDetails;
            relatedArticlesArr = relatedArticles;
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
                data={article}
            />

            {/* Article Content */}
            <ArticleContentSection
                relatedArticles={relatedArticlesArr}
                articleHtml={article.contentHtml}
                articleCss={article.contentCss}
            />

            {/* Footer CTA */}
            <ExploreMoreSection />

            {/* Back to Top Button */}
            <ScrollToTopBtn />
        </div>
    );
};

export default Read;
