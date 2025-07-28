'use client';

import { useCallback, useEffect, useState, type FC } from "react"
import { BASE_ASSETS_URL } from "@/constants";
import dayjs from "dayjs";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { $crud } from "@/factory/crudFactory";
import { useSearchArticle } from "@/context/SearchArticleContext";


type props = {
    preloadedArticles: ArticleInterface[]
}

const ArticleCardsSection: FC<props> = ({ preloadedArticles }) => {

    const [listConfig, setListConfig] = useState<{
        data: ArticleInterface[],
        page: number;
        hasMore: boolean;
    }>({
        data: [],
        page: 1,
        hasMore: true
    });
    const { search, setData } = useSearchArticle();

    useEffect(() => {
        if (search) {
            retrieveArticles(0, search);
        } else {
            setListConfig((prev) => ({ ...prev, data: preloadedArticles, page: 1, hasMore: true }));
        }
    }, [search]);

    const retrieveArticles = useCallback(async (defaultPage = listConfig.page, defaultSearch = search) => {
        try {
            const { data: { rows } } = await $crud.retrieve(`articles?page=${defaultPage}&search=${defaultSearch}`);
            setListConfig((prev) => {
                const data = !defaultPage ? rows : [...prev.data, ...rows]
                return {
                    ...prev,
                    data,
                    hasMore: rows.length > 0,
                    page: (!defaultPage ? defaultPage : prev.page) + 1
                }
            });
            if (search && rows.length) {
                setData(rows);
            }
        } catch (e) {
            console.error(e);
        }
    }, [listConfig.page, search]);


    return (<>
        {/* <div className="md:col-span-2"> */}
        <div >
            {
                !!listConfig.data.length ?
                    <InfiniteScroll
                        dataLength={listConfig.data.length}
                        next={retrieveArticles}
                        hasMore={listConfig.hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        refreshFunction={retrieveArticles}
                        pullDownToRefresh
                        pullDownToRefreshThreshold={50}
                        pullDownToRefreshContent={
                            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                        }
                        releaseToRefreshContent={
                            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                        }
                        className="grid gap-8"
                    >
                        {listConfig.data.map((article, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 glass-hover group cursor-pointer"
                            >
                                <Link href={`/article-details/?id=${article.id}`} className="block">
                                    <div className="md:flex">
                                        <div className="md:w-1/3">
                                            <img
                                                src={BASE_ASSETS_URL + `/article-cover-images/${article.coverImage}`}
                                                alt={article.title}
                                                className="w-full h-48 md:h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6 md:w-2/3">
                                            <div className="mb-3">
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                                {article.title} #{article.id}
                                            </h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {article.description}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>By {article.author}</span>
                                                <span>{dayjs(article.publishedAt).format("DD MMMM YYYY")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </InfiniteScroll>
                    : <h3 className="text-center text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        No results found
                    </h3>
            }

        </div>
    </>)
}

export default ArticleCardsSection;