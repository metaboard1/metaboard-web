import { FC } from "react";
import { Badge, Card } from "../../ui";
import { Clock, FileText, Presentation, TrendingUp } from "lucide-react";
import Link from "next/link";



const NewDocumentsFloatingCard: FC<{ documentsList: DocumentInterface[]; }> = ({
    documentsList
}) => {

    return (
        <Card className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Documents</h3>
            </div>

            <div className="space-y-4">
                {documentsList.map((document) => (
                    <Link
                        href={`/metarule/documents/0/${encodeURIComponent(document.title)}#st`}
                        key={document.id}
                        className="group cursor-pointer p-3 rounded-lg transition-all"
                    >
                        <div className="flex justify-between">
                            <div className="flex gap-3  items-center">
                                <div className="relative flex-shrink-0">
                                    {
                                        document?.file?.split('.')?.[1] === 'pdf' ?
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-6 h-6 text-primary" />
                                        </div>
                                         :
                                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Presentation className="w-6 h-6 text-orange-700" />
                                        </div>
                                    }
                                </div>
                                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2 line-clamp-2">
                                    {document.title}
                                </h4>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-glass">
                                <Clock className="w-3 h-3" />
                                {document.estimateReadTime}min
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-glass">
                <Link
                    className="text-sm text-primary hover:text-primary-hover transition-colors font-medium"
                    href='/metarule/documents'
                >
                    View All Documents →
                </Link>
            </div>
        </Card>
    );
}
export default NewDocumentsFloatingCard;