import { Calendar, Download, ExternalLink, Filter, Grid, List, Share2, Star, User } from "lucide-react";
import { FC } from "react";
import { Badge, Button, Card, DialogHeader } from "../../ui";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, } from '../../ui';




const PublicationCard: FC = () => {
    const viewMode = 'grid';
    const publications = [
        {
            id: 1,
            title: "Legal Tech Revolution",
            subtitle: "Transforming Practice Management in the Digital Age",
            description: "A comprehensive guide to implementing technology solutions in modern law firms, covering everything from case management to client communications. This book provides practical insights for law firm partners and legal professionals looking to modernize their practice.",
            image: '/assets/images/article-thumb-1.jpg',
            publishDate: "March 2024",
            publisher: "Legal Innovation Press",
            type: "Book",
            status: "New Release",
            category: "Legal Technology",
            price: "$49.99",
            isbn: "978-1234567890",
            pages: 320,
            rating: 4.8,
            reviews: 127,
            tableOfContents: [
                "Chapter 1: The Digital Transformation of Law",
                "Chapter 2: Case Management Systems",
                "Chapter 3: Client Communication Platforms",
                "Chapter 4: Document Automation",
                "Chapter 5: Data Analytics in Legal Practice",
                "Chapter 6: Implementation Strategies",
                "Chapter 7: Measuring Success",
                "Chapter 8: Future Trends"
            ],
            sampleChapter: "#"
        },
        {
            id: 2,
            title: "AI & Legal Ethics",
            subtitle: "Navigating the Future of Artificial Intelligence in Law",
            description: "An in-depth exploration of ethical considerations and regulatory frameworks for AI implementation in legal practice. This essential guide addresses the complex intersection of artificial intelligence and legal ethics.",
            image: '/assets/images/article-thumb-1.jpg',
            publishDate: "November 2023",
            publisher: "TechLaw Publishing",
            type: "Research Paper",
            status: "Featured",
            category: "AI & Law",
            price: "$34.99",
            isbn: "978-0987654321",
            pages: 248,
            rating: 4.6,
            reviews: 89,
            tableOfContents: [
                "Introduction: AI in Legal Practice",
                "Chapter 1: Ethical Frameworks",
                "Chapter 2: Regulatory Landscape",
                "Chapter 3: Bias and Fairness",
                "Chapter 4: Transparency Requirements",
                "Chapter 5: Client Confidentiality",
                "Chapter 6: Professional Responsibility",
                "Conclusion: Best Practices"
            ],
            sampleChapter: "#"
        },
        {
            id: 3,
            title: "Cybersecurity for Legal Professionals",
            subtitle: "Protecting Client Data in the Digital Age",
            description: "Essential cybersecurity practices and protocols for law firms of all sizes. Learn how to implement robust security measures to protect sensitive client information.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=600&fit=crop",
            publishDate: "August 2023",
            publisher: "Legal Security Press",
            type: "Book",
            status: "Bestseller",
            category: "Practice Management",
            price: "$39.99",
            isbn: "978-1122334455",
            pages: 280,
            rating: 4.7,
            reviews: 203,

            tableOfContents: [
                "Part I: Understanding Cyber Threats",
                "Part II: Building Security Infrastructure",
                "Part III: Employee Training and Awareness",
                "Part IV: Incident Response Planning",
                "Part V: Compliance and Regulations"
            ],
            sampleChapter: "#"
        },
        {
            id: 4,
            title: "The Future of Legal Education",
            subtitle: "Preparing Law Students for Technology-Driven Practice",
            description: "How law schools are adapting their curricula to prepare students for the technology-driven legal landscape of tomorrow.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
            publishDate: "June 2023",
            publisher: "Academic Legal Press",
            type: "Research Paper",
            status: "Academic",
            category: "Legal Technology",
            price: "$29.99",
            isbn: "978-2233445566",
            pages: 180,
            rating: 4.4,
            reviews: 67,
            tableOfContents: [
                "Introduction: The Changing Legal Landscape",
                "Chapter 1: Technology in Legal Education",
                "Chapter 2: Practical Skills Training",
                "Chapter 3: Industry Partnerships",
                "Chapter 4: Assessment Methods",
                "Conclusion: Future Directions"
            ],
            sampleChapter: "#"
        }
    ];
    return (<>
        <section>
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                {publications.map((publication) => (
                    <Card key={publication.id} className="glass-card overflow-hidden glass-hover group">
                        <div>
                            {/* Book Cover */}
                            <div className="relative">
                                <img
                                    src={publication.image}
                                    alt={publication.title}
                                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3">
                                    <Badge
                                        variant={publication.status === 'New Release' ? 'default' : 'secondary'}
                                        className="glass text-xs"
                                    >
                                        {publication.status}
                                    </Badge>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <Badge variant="outline" className="text-xs border-glass">
                                        {publication.type}
                                    </Badge>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                            {publication.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground font-medium line-clamp-1">
                                            {publication.subtitle}
                                        </p>
                                    </div>


                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                        {publication.description}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-glass">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {publication.publishDate}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-primary text-primary" />
                                            {publication.rating} ({publication.reviews})
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
                                            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-lg border-glass">
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl font-bold text-foreground">
                                                        {publication.title}
                                                    </DialogTitle>
                                                </DialogHeader>

                                                <div className="grid md:grid-cols-3 gap-6">
                                                    {/* Book Cover */}
                                                    <div className="space-y-4">
                                                        <img
                                                            src={publication.image}
                                                            alt={publication.title}
                                                            className="w-full rounded-lg"
                                                        />
                                                        <div className="space-y-2 text-sm">
                                                            <p><strong>Publisher:</strong> {publication.publisher}</p>
                                                            <p><strong>Pages:</strong> {publication.pages}</p>
                                                            <p><strong>ISBN:</strong> {publication.isbn}</p>
                                                            <p><strong>Price:</strong> <span className="text-primary font-semibold">{publication.price}</span></p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Button className="flex-1">
                                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                                Buy Now
                                                            </Button>
                                                            <Button variant="outline" className="border-glass">
                                                                <Share2 className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {/* Details */}
                                                    <div className="md:col-span-2 space-y-6">
                                                        <div>
                                                            <h4 className="text-lg font-semibold mb-2">Description</h4>
                                                            <p className="text-muted-foreground leading-relaxed">
                                                                {publication.description}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-semibold mb-3">Author</h4>
                                                            <div className="space-y-4">
                                                                <div className="flex gap-4">
                                                                    {/* <Avatar className="w-12 h-12">
                                            <AvatarImage src={author.image} alt={author.name} />
                                            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                          </Avatar> */}
                                                                    <div className="flex-1">
                                                                        <h5 className="font-medium text-foreground">Dr. Sarah Mitchell</h5>
                                                                        <p className="text-sm text-primary">Legal Tech Research Director</p>
                                                                        <p className="text-sm text-muted-foreground mt-1">Dr. Sarah Mitchell is a leading expert in legal technology with over 15 years of experience in law firm innovation. She holds a JD from Harvard Law School and a PhD in Computer Science from MIT.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <Button variant="outline" className="border-glass">
                                                                <Download className="w-4 h-4 mr-2" />
                                                                Sample Chapter
                                                            </Button>
                                                            <Button variant="outline" className="border-glass">
                                                                <User className="w-4 h-4 mr-2" />
                                                                Contact Author
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>

                                        <Button size="sm" variant="outline" className="border-glass">
                                            <span className="font-semibold">{publication.price}</span>
                                        </Button>

                                        <Button
                                            size="sm"
                                            variant="outline"
                                            // onClick={() => handleShare(publication)}
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
        </section>
    </>);
}
export default PublicationCard;