import { type FC } from "react";
import { Badge } from "@/components/ui";

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
        <section className="flex items-center py-20 mt-[50px] sm:h-auto overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8">
                    <div className="sm:p-8 rounded-2xl sm:max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground">
                            {content[page].badgeText}
                        </Badge>
                        <div className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                            <h1>
                                {content[page].cardTitle}{'\n'}
                            </h1>
                            <span className="text-primary">{content[page].spanTitle}</span>
                        </div>

                        <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                            {content[page].description}
                        </p>
                        {/* <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="shadow-lg">
                                Explore Articles
                            </Button>
                        </div> */}
                    </div>
                </div>
        </section>
    </>);
}
export default HeroSection;