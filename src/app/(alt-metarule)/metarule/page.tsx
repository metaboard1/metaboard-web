export const revalidate = 120;
export const dynamic = 'force-static';
export const dynamicParams = true;

import {
    AuthorProfile,
    HeroSection,
    LatestBlogsSection,
    PublicationSection,
} from "@/components/alt/local/home";
import { $crud } from "@/factory/crudFactory";
import { BookOpen, FileText } from "lucide-react";

const MetaRule = async () => {

    let recentPublications: any[] = [];
    let recentBlogs: any[] = [];

    try {
        const { data: { rows: publications } } = await $crud.retrieve('metarule/publications?limit=2');
        const { data: { rows: blogs } } = await $crud.retrieve('metarule/blogs?limit=3');
        recentPublications = publications;
        recentBlogs = blogs;
    } catch (error) {
        console.error('Error fetching article:', error);
    }

    console.log(recentBlogs)

    return (<>
        <div>
            {/* Hero Section */}
            <HeroSection />

            <section className="container py-12 lg:py-20 text-gray-900 overflow-hidden">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        About the{" "}
                        <span className="underline decoration-primary"> Founder</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the visionary behind MetaRule's legal technology
                        innovations
                    </p>
                </div>

                {/* Main Content Column */}
                <div className="w-full space-y-2 lg:space-y-8">
                    <AuthorProfile />
                </div>

            </section>

            <div className="mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="flex justify-center -mt-2">
                    <div className="bg-primary w-3 h-3 rounded-full opacity-75"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-7xl">
                {/* Main Content Column */}
                <div className="w-full space-y-12 lg:space-y-16">

                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Published Works</h2>
                        </div>
                        <PublicationSection
                            publicationsData={recentPublications}
                        />
                    </section>

                    <div className="mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                        <div className="flex justify-center -mt-2">
                            <div className="bg-primary w-3 h-3 rounded-full opacity-75"></div>
                        </div>
                    </div>

                    {/* Blog Feed */}
                    <section>
                        <div className="flex items-center gap-3 mb-6 lg:mb-8">
                            <FileText className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl lg:text-3xl font-bold">
                                Latest Articles
                            </h2>
                        </div>
                        <LatestBlogsSection 
                            blogsData={recentBlogs}
                        />
                    </section>
                </div>
            </div>


        </div>
    </>
    );
};

export default MetaRule;
