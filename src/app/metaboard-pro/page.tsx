
import React from "react";
import { Mail } from "lucide-react";
import { ScrollToTopBtn, HeroSection } from "@/components/global";
import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'MetaBoard Pro',
};


const MetaBoardPro = () => {
    return (<>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-100">
            {/* Hero Section */}
            <HeroSection
                heading="MetaBoard"
                headingSpan="Pro"
                description='MetaBoard Pro is a platform dedicated to advancing expertise in the field of legal education and training. Our mission is to provide rigorous, practical training that bridges the gap between legal theory and real-world application. We cater to a diverse audience, from aspiring legal students and seasoned professionals to government officials seeking to stay at the forefront of legal advancements.'
                note=""
            />
            {/* Privacy Policy Content */}
            <section className="py-20 bg-white/50">
                <div className="container mx-auto px-6">

                    <div className="mx-auto space-y-10">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-8 prose prose-lg max-w-none">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        1. Our Programs and Methodology
                                    </h2>
                                    <p className="text-gray-700">
                                        Our curriculum is meticulously designed to provide a comprehensive and practical learning experience. Our courses are informed by decades of professional insight, ensuring that our content is not only academically sound but also directly relevant to the demands of the modern legal landscape.                                    </p>
                                    <p className="text-gray-700">
                                        We offer a range of professional development opportunities, including:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li><strong>Online Educational Courses:</strong> Our online programs provide a flexible learning environment, combining live interactive sessions with on-demand content. This format allows participants to manage their professional and academic commitments while gaining specialized knowledge.</li>
                                        <li><strong>Offline Corporate Training Workshops:</strong> We provide bespoke training solutions for corporate entities as well. These specialized workshops are tailored to address the unique legal challenges and learning objectives of an organization, delivered through a direct and impactful on-site format.</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        2. Strategic Alliances and Resources
                                    </h2>
                                    <p className="text-gray-700">
                                        We have established strategic alliances with leading legal institutions to enhance the quality and scope of our training. These collaborations provide exclusive access to a network of experts and specialized resources, ensuring that our participants receive an education that is both current and comprehensive. Our commitment to these partnerships guarantees that our programs remain at the cutting edge, providing a significant competitive advantage to our learners.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        3. Investment in Professional Growth
                                    </h2>
                                    <p className="text-gray-700">
                                        We are committed to making high-quality legal education accessible. Our programs, while offered for a fee, are structured to provide substantial value and a strong return on investment in your professional development. We believe in empowering individuals with the skills and knowledge necessary to excel, and our services are designed to facilitate this growth.
                                    </p>
                                    <p className="text-gray-700">
                                        For further details on our course offerings and to determine which program best aligns with your professional goals, we invite you to explore our website.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Quick Actions */}
                        {/* <div className="text-center">
                            <div className="bg-primary rounded-xl p-8 text-white">
                                <h3 className="text-2xl mb-4">
                                    Questions About Your Privacy?
                                </h3>
                                <p className="text-red-100 mb-6">
                                    Our team is committed to transparency and protecting your
                                    data. Contact us for any privacy-related questions or to
                                    exercise your data rights.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href='/contact'
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                                    >
                                        <Mail className="w-5 h-5 mr-2" />
                                        Email Support
                                    </Link>
                                    <Link
                                        href="/terms"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200"
                                    >
                                        View Terms of Service
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
        <ScrollToTopBtn />
    </>
    );
};

export default MetaBoardPro;