'use client';

import { type FC } from "react";
import { Calendar } from "lucide-react";
import { Card } from "../../ui";
import dayjs from "dayjs";
import Link from "next/link";

type props = {
    data: BlogInterface
}

const BlogCard: FC<props> = ({
    data
}) => {

    return (<>
        <Card className="glass-card overflow-hidden glass-hover group">
            <div className="flex flex-col sm:gap-6 sm:p-3 md:p-5  sm:flex-row">
                {/* Book Cover */}
                <div className="sm:block sm:relative sm:flex-shrink-0">
                    <img
                        src={`${data.coverUrl}`}
                        alt='Blog'
                        className="w-full h-[130px] sm:w-32 sm:h-[120px] object-cover rounded-lg transition-transform group-hover:scale-105"
                        loading='lazy'
                    />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2 p-4 sm:p-0">
                    <Link
                        href={`/metarule/read-blog?id=${data.id}`}
                    >
                        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {data.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium  line-clamp-3 ">
                            {data.description}  {data.description}
                        </p>
                    </Link>

                    <div className="text-black text-xs space-y-2  text-glass">
                        <div className="grid gap-1 md:flex md:items-center md:gap-4">
                            <div className="space-x-1 col-span-1">
                                <span>•</span>
                                <span>{data.author}</span>
                            </div>
                            <div className="flex gap-4 col-span-1">
                                <div className="space-x-1">
                                    <span>•</span>
                                    <span>{data.estimateReadTime} min</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>•</span>
                                    <Calendar className="w-3 h-3" />
                                    {dayjs(data.publishedAt).format("DD MMM YYYY")}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex gap-2">
                        <Link
                            href={`${window.location.origin}/${window.location.pathname.split('/')[1]}/read-blog?id=${data.id}`}
                        >
                            <Button size="sm" variant="default" className="border-glass">
                                <ExternalLink className="w-3 h-3 mr-1" />
                            </Button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </Card>
    </>);
}
export default BlogCard;