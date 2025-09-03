'use client';

import { useRef, type FC } from "react";
import { Pagination2 } from "@/components/ui";
import { useRouter } from "next/navigation";
import { Loader, SearchBar } from "@/components/global";
import dayjs from "dayjs";
import Link from "next/link";

type props = {
    articlesList: ArticleInterface[];
    recordsCount: number;
    currentPage: number;
    query: string;
}

const ArticleListingSection: FC<props> = ({
    articlesList = [],
    recordsCount = 0,
    currentPage = 0,
    query
}) => {

    const loaderRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const startLoader = () => {
        if (loaderRef.current) {
            loaderRef.current.classList.remove('hidden');
            loaderRef.current.classList.add('flex');
        }
    }
    const handlePageChange = (updatedPage: number) => {
        startLoader();
        router.push(`/articles/${updatedPage}/${encodeURIComponent(query)}#st`);
    }

    const handleSearch = (value: string) => {
        startLoader();
        router.push(`/articles/0/${encodeURIComponent(value)}#st`);
    }

    return (<>
        <Loader ref={loaderRef} />

        <div className="flex flex-col gap-10">
            <div className="space-y-5">
                <SearchBar
                    onSearch={handleSearch}
                    defaultValue={query}
                />
                {
                    query &&
                    <div className="flex items-center space-x-2 text-sm flex-wrap gap-2">
                        <span className="text-gray-600 font-bold">Search results for:</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium flex items-center max-w-32 sm:max-w-48 md:max-w-64 lg:max-w-80">
                            <span className="truncate">{decodeURIComponent(query ?? '')}</span>
                            <button className="ml-2 text-red-600 hover:text-red-800 flex-shrink-0" onClick={() => handleSearch('')}>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                }
            </div>

            {
                articlesList.length ?
                    (<>
                        {articlesList.map((article, index) =>
                            <article
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 glass-hover group cursor-pointer"
                            >
                                <Link href={`/read-article/?id=${article.id}`} className="block">
                                    <div className="md:flex">
                                        <div className="md:w-1/3">
                                            <img
                                                src={article.coverUrl}
                                                alt={article.title}
                                                className="w-full h-48 md:h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6 md:w-2/3">
                                            <div className="mb-3">
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                                {article.description}
                                            </p>
                                            <div className="flex items-center justify-between flex-wrap gap-2 text-sm text-gray-500">
                                                <span>By {article.author}</span>
                                                <span>{dayjs(article.publishedAt).format("DD MMMM YYYY")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        )}
                    </>)
                    :
                    <h3 className="text-center text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        No results found
                    </h3>
            }
            <Pagination2
                totalRecords={recordsCount}
                limit={10}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                query={query}
                navigationPath="articles"
            />

        </div>

    </>);
}
export default ArticleListingSection;