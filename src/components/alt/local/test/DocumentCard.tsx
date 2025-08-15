'use client';

import { type FC } from "react";
import { Calendar, Clock, Download, Eye, FileText, User } from "lucide-react";
import { Button, Card } from "../../ui";
import dayjs from "dayjs";

type props = {
    data: DocumentInterface
}

const DocumentCard: FC<props> = ({
    data
}) => {

    // const handleShare = () => share(data.title, data.description, `${window.location.origin}/${window.location.pathname.split('/')[1]}/read-blog?id=${data.id}`);
    const calculateFileSize = (fileSize: number) => {
        const inKb = (fileSize / 1024).toFixed(2);
        const inMb = Math.floor((fileSize / 1024) / 1024);
        return inMb > 0 ? `${inMb} mb` : `${inKb} kb`
    }

    return (<>
        <Card className="glass-card overflow-hidden glass-hover group p-6">
            {/* <CardContent className=""> */}
            {/* PDF Icon and Title */}
            <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-lg leading-tight mb-2">
                        {data.title}
                    </h3>
                </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {data.description}
            </p>

            {/* Tags */}
            {/* <div className="flex flex-wrap gap-1 mb-4">
                  {pdf.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div> */}

            {/* Metadata */}
            <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{data.estimateReadTime} min</span>
                    </div>
                    {/* <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{pdf.author}</span>
                            <span>author</span>
                        </div> */}
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{dayjs().format('DD MMM YYYY')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        {/* <span>{pdf.downloadCount} downloads</span> */}
                        <span>0 downloads</span>
                    </div>
                </div>
                <div className="text-xs text-muted-foreground">
                    File size: {calculateFileSize(data.fileSize)}
                </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
                <Button variant="default" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                </Button>
            </div>
            {/* </CardContent> */}
        </Card>
        {/* ))} */}

    </>);
}
export default DocumentCard;