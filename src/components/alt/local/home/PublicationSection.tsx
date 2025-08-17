'use client';

import { type FC } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { Calendar, ExternalLink, Share2 } from "lucide-react";
import { Badge, Button, Card } from "../../ui";


const PublicationSection: FC<{
    publicationsData: PublicationInterface[];
}> = ({
    publicationsData
}) => {

        const handleShare = (publication: PublicationInterface) => {
            if (navigator.share) {
                navigator.share({
                    title: publication.title,
                    text: publication.description,
                    url: window.location.href,
                });
            }
        };

        return (
            <div className="grid md:grid-cols-2 gap-6">
                {publicationsData.map((publication) => (
                    <Card key={publication.id} className="glass-card overflow-hidden glass-hover group">
                        <div className="flex flex-col sm:flex-row h-full">
                            {/* Book Cover */}
                            <div className="relative flex-shrink-0 sm:w-32 lg:w-40">
                                <div className="relative w-full sm:w-32 lg:w-40 h-48 sm:h-full overflow-hidden rounded-lg">
                                    <Image
                                        src={publication.coverImage}
                                        alt={publication.title}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>

                                <div className="absolute top-3 left-3">
                                    <Badge
                                        className=" text-xs"
                                    >
                                        Recent
                                    </Badge>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6">
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {publication.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground font-medium">
                                            {publication.subTitle}
                                        </p>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                        {publication.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-glass">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {dayjs(publication.publicationDate).format('DD MMM YYYY')}
                                        </div>
                                        <span>•</span>
                                        <span>{publication.publisher}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 pt-2">
                                        <Button size="sm" variant="default" className="flex-1">
                                            <ExternalLink className="w-3 h-3 mr-1" />
                                            Learn More
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => handleShare(publication)}
                                            className="border-glass"
                                        >
                                            <Share2 className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }
export default PublicationSection;