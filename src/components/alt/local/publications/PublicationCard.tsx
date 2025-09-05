import { type FC } from "react";
import { Calendar, Download, ExternalLink, Share2, User } from "lucide-react";
import { Badge, Button, Card, DialogHeader } from "../../ui";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, } from '../../ui';
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { BASE_ASSETS_URL } from "@/constants";

type props = {
    data: PublicationInterface;
}

const PublicationCard: FC<props> = ({
    data
}) => {

    return (<>
        <Card className="glass-card overflow-hidden glass-hover group">
            <div>
                {/* Book Cover */}
                <div className="relative">
                    <img
                        src={`${data?.coverUrl}`}
                        alt='publication'
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                        loading='lazy'
                    />
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {data.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium line-clamp-1">
                                {data.subTitle}
                            </p>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {data.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-glass">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {dayjs(data.publicationDate).format("MM YYYY")}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="sm" variant="default" className="flex-1">
                                        Learn More
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background/95">
                                    <DialogHeader className="py-2 flex items-center">
                                        <DialogTitle className="font-bold text-2xl text-foreground mr-7 line-clamp-1">
                                            {data.title}
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        {/* Book Cover */}
                                        <div className="space-y-4">
                                            <div className="relative w-full h-[300px]">
                                                <Image
                                                    src={`${data.coverUrl}`}
                                                    alt="publication"
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <p><strong>Publisher:</strong> {data.publisher}</p>
                                                <p><strong>Pages:</strong> {data.pages}</p>
                                                <p><strong>ISBN:</strong> {data.isbn}</p>
                                                <p><strong>Price:</strong> <span className="text-primary font-semibold">₹{data.price}</span></p>
                                            </div>
                                            <div className="flex gap-2 flex-wrap">
                                                {
                                                    data.storeLink && <Link className="" href={data.storeLink} target="_blank">
                                                        <Button>
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            Store Link
                                                        </Button>
                                                    </Link>
                                                }
                                                {/* {
                                                    Object.entries(data.storeLinks).filter(([_, value]) => value).map(([key, value]) =>
                                                        <Link className="" href={value} target="_blank">
                                                            <Button>
                                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                                {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
                                                            </Button>
                                                        </Link>)
                                                } */}
                                                <Button variant="outline" className="border-glass">
                                                    <Share2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div className="md:col-span-2 space-y-6">
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Description</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {data.description}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Author</h4>
                                                <div className="space-y-4">
                                                    <ul className="list-disc text-sm text-muted-foreground ml-4">
                                                        {
                                                            data.authors.split(',').map((e, i) => <li>{e}</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <div className="flex gap-4">

                                                <Button variant="outline" className="border-glass ">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Sample Chapter
                                                </Button>
                                                <Button variant="outline" className="border-glass">
                                                    <User className="w-4 h-4 mr-2" />
                                                    Contact Author
                                                </Button>
                                            </div> */}
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <Button size="sm" variant='secondary' className="border-glass bg-black">
                                <span className="font-semibold"> ₹ {data.price}</span>
                            </Button>

                            <Button
                                size="sm"
                                variant='secondary'
                                // onClick={() => handleShare(publication)}
                                className="border-glass bg-black"
                            >
                                <Share2 className="w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </>);
}
export default PublicationCard;