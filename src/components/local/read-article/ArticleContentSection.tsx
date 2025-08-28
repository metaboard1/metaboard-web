import { type FC } from "react";
import Link from "next/link";
import dayjs from "dayjs";

type props = {
    articleHtml: string;
    articleCss: string;
    relatedArticles: RelatedArticleInterface[];
    renderForBlog?: boolean;
}

const ArticleContentSection: FC<props> = ({
    articleHtml,
    articleCss,
    relatedArticles,
    renderForBlog
}) => {
    return (<>
        <section className="py-12 gradient-primary">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className={`${relatedArticles.length ? 'lg:col-span-2' : 'lg:col-span-3'}`}>

                        <div className="article-content text-white">
                            <style dangerouslySetInnerHTML={{ __html: articleCss }} />
                            <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
                        </div>

                    </div>

                    {/* Sidebar */}
                    {
                        !!relatedArticles.length &&
                        <div className="col-span-1">
                            <div className="sticky top-24">
                                <div className="rounded-2xl p-6 border-[2px] border-primary">
                                    <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b border-gray-200">
                                        Related Reads
                                    </h3>
                                    <div className="space-y-4">
                                        {relatedArticles.map((relatedArticle: RelatedArticleInterface) => (
                                            <Link
                                                key={relatedArticle.id}
                                                href={`${renderForBlog ? '/metarule/read-blog' : '/read-article'}?id=${relatedArticle.id}`}
                                                className="group block"
                                            >
                                                <div className="flex space-x-3  rounded-lg p-3 ">
                                                    <img
                                                        src={`${relatedArticle.coverUrl}`}
                                                        alt={relatedArticle.title}
                                                        className="w-16 h-16 object-cover rounded-lg"
                                                        loading="lazy"
                                                    />
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm mb-1 leading-tight">
                                                            {relatedArticle.title}
                                                        </h4>
                                                        <p className="text-xs text-gray-500">{dayjs(relatedArticle.publishedAt).format('DD MMM YYYY')}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    </>)
}

export default ArticleContentSection;