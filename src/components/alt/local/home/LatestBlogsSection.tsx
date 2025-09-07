'use client';

import { type FC } from "react";
import { Badge, Button, Card } from "../../ui";
import { ArrowRight, Bookmark, Calendar, Clock, Share2 } from "lucide-react";
import dayjs from "dayjs";
import Link from "next/link";



const LatestBlogsSection: FC<{
    blogsData: BlogInterface[];
}> = ({
    blogsData
}) => {

        const handleBookmark = (blogId: number) => {
            console.log('Bookmarked blog:', blogId);
        };

        // const handleShare = (blog: typeof blogs[0]) => {
        //     if (navigator.share) {
        //         navigator.share({
        //             title: blog.title,
        //             text: blog.excerpt,
        //             url: window.location.href,
        //         });
        //     }
        // };

        return (
            <div className="space-y-8">
                {/* Regular blogs Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {blogsData.map((blog) => (
                        <Card key={blog.id} className="glass-card overflow-hidden glass-hover group">
                            <div className="relative">
                                <Badge className="text-xs absolute absolute top-3 left-3">
                                    Recent
                                </Badge>
                                <img
                                    src={blog.coverUrl}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="space-y-3">
                                    <div>
                                        {/* <div className="flex gap-2 flex-wrap">
                                            {
                                                blog.tags.slice(0,3).map((e, i) => <Badge key={i} variant="outline" className="mb-2 text-xs">
                                                    # {e}
                                                </Badge>)
                                            }
                                        </div> */}

                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                            {blog.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                        {blog.description}
                                    </p>

                                    <div className="flex items-center gap-3 text-xs text-glass">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {dayjs(blog.publishedAt).format('DD MMM YYYY')}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {blog.estimateReadTime} min
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <Link
                                            href={`metarule/read-blog?id=${blog.id}`}
                                            className="flex-1"
                                        >
                                            <Button size="sm" variant="default" className="w-full">
                                                Read More
                                            </Button>
                                        </Link>

                                        {/* <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => handleBookmark(blog.id)}
                                            className="border-glass"
                                        >
                                            <Bookmark className="w-3 h-3" />
                                        </Button> */}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
export default LatestBlogsSection;