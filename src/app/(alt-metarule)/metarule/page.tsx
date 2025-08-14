"use client";

import {
    AuthorProfile,
    LatestArticlesSection,
    PublicationSection,
} from "@/components/alt/local/home";
import { FileText } from "lucide-react";

const MetaRule = () => {
    return (
        <>
            <div>
                {/* Hero Section */}
                <section
                    className="relative min-h-screen text-gray-900/80 overflow-hidden gradient-primary"
                >
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
                    
                        {/* Main Content Area */}
                        <div className="flex-1 flex items-center  justify-center">
                            <div className="w-full mx-auto">
                               
                                {/* Content Section */}
                                <div className="text-center space-y-10 lg:space-y-8 relative z-20">
                                    {/* Quote Section */}
                                    <div className="space-y-6 mb-12 rounded-2xl  border border-white/20 ">
                                        <blockquote className="p-5 md:p-10 bg-[hsl(35,44%,93%)] border rounded-lg xl:text-5xl text-center italic">
                                            <span className="text-2xl sm:text-3xl lg:text-6xl text-primary ">
                                                "
                                            </span>
                                            <span
                                                className="font-bold text-lg sm:text-3xl lg:text-3xl text-gray-900 italic"
                                                style={{
                                                    fontFamily: "Georgia, 'Times New Roman', serif",
                                                }}
                                            >
                                                <span>
                                                    The real problem of humanity is the following:
                                                </span>
                                                We have Paleolithic emotions, medieval institutions and
                                                godlike technology. And it is terrifically dangerous,
                                                and it is now approaching a point of crisis overall.
                                            </span>
                                            <span className="text-2xl sm:text-3xl lg:text-5xl text-primary">
                                                "
                                            </span>
                                            <cite className="block text-sm lg:text-sm text-primary not-italic text-end mt-4">
                                                — Edward O. Wilson
                                            </cite>
                                        </blockquote>
                                    </div>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Section - Navigating Legal Technology Excellence */}
                <section className="container py-12 lg:py-20 text-gray-900 overflow-hidden">
                    {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> */}
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

                        <div className="w-full">
                            {/* Main Content Column */}
                            <div className="space-y-2 lg:space-y-8">
                                <AuthorProfile />
                            </div>
                        </div>

                        {/* Related Posts within the same container */}
                        {/* <div className="mt-8 lg:mt-12">
                            <RelatedPosts />
                        </div> */}
                    {/* </div> */}
                </section>
                <div className="mb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    <div className="flex justify-center -mt-2">
                        <div className="bg-primary w-3 h-3 rounded-full opacity-75"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-7xl">
                    <div className="w-full">
                        {/* Main Content Column */}
                        <div className="space-y-12 lg:space-y-16">
                            {/* Latest Publications Section */}
                            <section>
                                <PublicationSection />
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
                                <LatestArticlesSection />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MetaRule;
