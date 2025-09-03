export const revalidate = 120;
export const dynamic = 'force-static';
export const dynamicParams = true;

import React from 'react';
import { ArticleListingSection, BrowseByTagsSection } from '@/components/local/articles';
import { $crud } from '@/factory/crudFactory';
import { ArticleHeroSection as FeaturedArticle, Footer, Header, ScrollToTopBtn, SearchBar } from '@/components/global';
import { SearchArticleProvider } from '@/context/SearchArticleContext';

const Articles = async ({
    params,
}: {
    params: Promise<{ params?: string[] }>;
}) => {

    const segments = (await params).params ?? [];
    const page = segments[0] ?? "0";
    const query = segments[1] ?? "";

    let articlesList: any = [];
    let recordsCount: number = 0;
    let featuredArticle = {};

    try {
        const { data: { featuredArticle: fArticle, rows, count } } = await $crud.retrieve(`articles?page=${page}&limit=10&search=${query}`);
        articlesList = rows;
        recordsCount = count;
        featuredArticle = fArticle;
    } catch (error) {
        console.error('Error fetching article:', error);
    }


    return (
        <SearchArticleProvider>
            <div className="min-h-screen bg-background">
                <FeaturedArticle
                    data={featuredArticle}
                    showReadBtn
                />

                <section className="py-12 bg-gray-50" id='st'>
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Main Articles Column */}
                            <div className='md:col-span-2 flex flex-col gap-5'>
                                <ArticleListingSection
                                    articlesList={articlesList}
                                    recordsCount={recordsCount}
                                    currentPage={+page}
                                    query={query}
                                />
                            </div>

                            <BrowseByTagsSection/>
                        </div>
                    </div>
                </section>
                {/* Back to Top Button */}
                <ScrollToTopBtn />
            </div>
        </SearchArticleProvider>
    );
};

export default Articles;
