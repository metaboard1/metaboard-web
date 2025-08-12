import { type FC } from "react";
import { Badge } from "@/components/ui";
import { Button } from "../ui";

type HeroSectionTypes = {
    page: 'publications' | 'home' | 'blog'
}

const HeroSection: FC<HeroSectionTypes> = ({
    page
}) => {
    const content = {
        home: {
            badgeText: 'MetaRule Insights',
            cardTitle: 'Legal Technology',
            spanTitle: 'Book Publications Excellence',
            description: 'Empowering legal professionals with cutting-edge technology insights, comprehensive publications, and engaging podcast conversations that drive industry innovation.'
        },
        blog: {
            badgeText: 'MetaRule Insights',
            cardTitle: 'Stories That Matter and',
            spanTitle: 'Perspectives That Inspire',
            description: 'Discover meaningful stories and fresh perspectives that spark curiosity, ignite inspiration, and offer deeper understanding of the world around us.'
        },
        publications: {
            badgeText: 'MetaRule Insights',
            cardTitle: 'Book Publications',
            spanTitle: 'Excellence',
            description: 'Dive into a curated collection of impactful books, thought-provoking narratives, and insightful works that inspire, inform, and spark meaningful conversations.'
        },
    }
    return (<>
        <section className="relative py-20 overflow-hidden">
            {/* <div className="absolute inset-0">
                <img
                    src={'/assets/images/hero-workspace.jpg'}
                    alt="Legal Technology Workspace"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            </div> */}

            <div className="relative container px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="p-8 rounded-2xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground">
                            {content[page].badgeText}
                        </Badge>
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            <h1>
                                {content[page].cardTitle}{'\n'}
                            </h1>
                            <span className="text-primary">{content[page].spanTitle}</span>
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {content[page].description}
                        </p>
                        {/* <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="shadow-lg">
                                Explore Articles
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default HeroSection;