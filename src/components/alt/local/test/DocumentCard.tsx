'use client';

import { type FC } from "react";
import { Calendar, Clock, Download, Eye, FileText, Presentation, User } from "lucide-react";
import { Button, Card } from "../../ui";
import dayjs from "dayjs";
import { BASE_ASSETS_URL, BASE_URL } from "@/constants";

type props = {
    data: DocumentInterface
}

const DocumentCard: FC<props> = ({
    data
}) => {

    const calculateFileSize = (fileSize: number) => {
        const inKb = (fileSize / 1024).toFixed(2);
        const inMb = Math.floor((fileSize / 1024) / 1024);
        return inMb > 0 ? `${inMb} mb` : `${inKb} kb`
    }

    const onPreview = () => window.open(data.file?.split('.')?.[1] === 'pdf' ? BASE_ASSETS_URL + `/documents/${data.file}` : `https://docs.google.com/gview?url=https://api.metaboard.in/uploads/documents/file-c3eb8e282edc3838d9f4634a71bddf7817554514284871.pptx`, "_blank", "noopener,noreferrer");

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `${BASE_ASSETS_URL}/documents/${data.file}`;
        link.setAttribute("download", data.file);
        document.body.appendChild(link);
        link.click();
        link.remove();
    };


    return (<>
        <Card className="glass-card overflow-hidden glass-hover group p-6">

            <div className="flex items-start space-x-3 mb-4">
                {
                    data?.file?.split('.')?.[1] === 'pdf' ?
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-primary" />
                        </div> :
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Presentation className="w-6 h-6 text-orange-700" />
                        </div>
                }
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

            {/* Metadata */}
            <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{data.estimateReadTime} min</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{dayjs().format('DD MMM YYYY')}</span>
                    </div>
                    {/* <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>0 downloads</span>
                    </div> */}
                </div>
                <div className="text-xs text-muted-foreground">
                    File size: {calculateFileSize(data.fileSize)}
                </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">

                <Button variant="default" size="sm" className="flex-1" onClick={onPreview}>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                </Button>
                <Button variant="outline" size="sm" className="flex-1" onClick={handleDownload}>
                    {/* <a
                        href={`${BASE_URL}/uploads/documents/${data.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="w-full flex justify-center items-center"
                    > */}
                    <Download className="w-4 h-4 mr-2" />
                    Download
                    {/* </a> */}
                </Button>
            </div>
        </Card>

    </>);
}
export default DocumentCard;