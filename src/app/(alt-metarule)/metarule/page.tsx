export const revalidate = 120;
export const dynamic = 'force-static';
export const dynamicParams = true;

import {
    AuthorProfile,
    BrowseByTagSection,
    HeroSection,
    LatestBlogsSection,
    NewDocumentsFloatingCard,
    PublicationSection,
} from "@/components/alt/local/home";
import { $crud } from "@/factory/crudFactory";
import { BookOpen, FileText } from "lucide-react";

const MetaRule = async () => {

    let recentPublications: any[] = [];
    let recentBlogs: any[] = [];
    let documentsList: any[] = [];

    try {
        const { data: { rows: publications } } = await $crud.retrieve('metarule/publications?limit=2');
        const { data: { rows: blogs } } = await $crud.retrieve('metarule/blogs?limit=3');
        const { data: { rows: documents } } = await $crud.retrieve('metarule/documents?limit=5');
        recentPublications = publications;
        recentBlogs = blogs;
        documentsList = documents;
    } catch (error) {
        console.error('Error fetching article:', error);
    }



    return (<>
        <div>
            {/* Hero Section */}
            <HeroSection />
            <div className="grid grid-cols-3 container">
                <div className="lg:col-span-2 col-span-3">

                    <section className="pb-12 lg:pb-20 text-gray-900 md:mr-5">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                About the{" "}
                                <span className="underline decoration-primary"> Founder</span>
                            </h2>
                            <p className="text-md sm:text-lg text-gray-600 mx-auto">
                                Meet the visionary behind MetaRule's legal technology
                                innovations
                            </p>
                        </div>

                        {/* Main Content Column */}
                        <div className="w-full space-y-2 lg:space-y-8">
                            <AuthorProfile />
                        </div>

                    </section>

                    {/* Main Content */}

                    <div className=" mx-auto md:mr-5">
                        {/* Main Content Column */}
                        <div className="w-full space-y-12 lg:space-y-16 ">

                            <section className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                    <h2 className="text-2xl font-bold">Published Works</h2>
                                </div>
                                <PublicationSection
                                    publicationsData={recentPublications}
                                />
                            </section>

                            {/* <div className="mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                        <div className="flex justify-center -mt-2">
                            <div className="bg-primary w-3 h-3 rounded-full opacity-75"></div>
                        </div>
                    </div> */}

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

                <div className="lg:col-span-1 col-span-3 mt-12  mb-12 lg:mt-0">
                    <div className="sticky top-24 space-y-8">
                        <NewDocumentsFloatingCard
                            documentsList={documentsList}
                        />
                        <BrowseByTagSection />
                    </div>
                </div>

            </div>

        </div>
    </>
    );
};

export default MetaRule;
