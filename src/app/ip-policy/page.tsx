
import React from "react";
import { Mail } from "lucide-react";
import { ScrollToTopBtn, HeroSection } from "@/components/global";
import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'IP Policy',
};


const IpPolicy = () => {
    return (<>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-100">
            {/* Hero Section */}
            <HeroSection
                heading="IP"
                headingSpan="Policy"
                description='This Intellectual Property Policy outlines how Metaboard®, a subsidiary of Metarion Knowledge Solutions Private Limited [Metarion®], recognizes, protects, and enforces the intellectual property rights associated with our products, services, and platform available through www.metaboard.com.'
                note="We value creativity and innovation, and are committed to safeguarding intellectual property rights in compliance with applicable laws and regulations."
            />
            {/* Privacy Policy Content */}
            <section className="py-20 bg-white/50">
                <div className="container mx-auto px-6">

                    <div className="mx-auto space-y-10">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-8 prose prose-lg max-w-none">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        1. Ownership of Intellectual Property
                                    </h2>
                                    <p className="text-gray-700">
                                        All intellectual property rights, including but not limited to copyrights, database rights, design rights, trademarks, trade names, service marks, domain names, logos, trade dress, inventions, patents, utility models, trade secrets, know-how, rights in computer software, data compilations, moral rights, rights of privacy, publicity rights, and all similar or equivalent rights, whether registered or unregistered, in any jurisdiction worldwide [collectively, “Intellectual Property Rights”] are and shall remain the exclusive property of Metarion® and/or its licensors.
                                    </p>
                                    <p className="text-gray-700">
                                        This includes, without limitation:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>
                                            The Metaboard® and Metarion® names, logos, branding, and design elements.
                                        </li>
                                        <li>
                                            The content, design, layout, look and feel, text, graphics, videos, audio, learning materials, assessments, training modules, and other content made available on or through the Metaboard® website, platform, or services [the <strong> “Content”</strong>].
                                        </li>
                                        <li>
                                            All software, source code, object code, databases, and proprietary algorithms that power Metaboard®’s online products and services.
                                        </li>
                                    </ul>
                                    <p className="text-gray-700">
                                        Except as expressly permitted under this Policy or by prior written authorization from Metarion®, no part of the Content, software, or Intellectual Property may be copied, reproduced, distributed, transmitted, displayed, performed, stored, modified, reverse engineered, or otherwise exploited in any manner.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        2. Trademarks and Brand Usage
                                    </h2>
                                    <p className="text-gray-700">
                                        The following are registered trademarks of Metarion® and its affiliates:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>Metaboard®</li>
                                        <li>Metarion®</li>
                                        <li>Scriboard®</li>
                                        <li>Metacept®</li>
                                    </ul>
                                    <p className="text-gray-700">
                                        Unauthorized use of these marks, or any confusingly similar names, marks, or logos, in connection with any product, service, business, or domain name is strictly prohibited.
                                    </p>
                                    <p className="text-gray-700">
                                        Users, partners, and affiliates may only use the above marks with prior written approval.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">3. User-Generated Content</h2>
                                    <p className="text-gray-700">
                                        Where Metaboard® provides users with the ability to contribute, upload, or publish content [such as comments, training submissions, assessments, or shared resources], users:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>Retain ownership of their contributions.</li>
                                        <li>Grant Metarion® a worldwide, non-exclusive, royalty-free, transferable, sub-licensable license to use, reproduce, adapt, distribute, publish, and display such content for the purpose of delivering and improving Metaboard® services.</li>
                                    </ul>
                                    <p className="text-gray-700">
                                        Users are solely responsible for ensuring that their submissions do not infringe third-party intellectual property rights.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        4. Permitted Use
                                    </h2>
                                    <p className="text-gray-700">
                                        Access to the Metaboard® platform, website, and services is granted strictly for personal, educational, or corporate training purposes in accordance with the applicable subscription or license agreement.
                                    </p>
                                    <p className="text-gray-700">
                                        Without prejudice to Section 1, users may:
                                    </p>

                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>
                                            View, stream, and interact with the Content for authorized educational or training purposes.
                                        </li>
                                        <li>
                                            Download or print extracts of Content solely for personal study, training, or internal organizational purposes, provided all copyright and proprietary notices are preserved.
                                        </li>
                                    </ul>
                                    <p className="text-gray-700">
                                        Users may not:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>
                                            Reproduce, republish, or redistribute Content to external parties.
                                        </li>
                                        <li>
                                            Modify, adapt, or create derivative works of Metaboard® Content without written authorization.
                                        </li>
                                        <li>
                                            Exploit Content for any commercial, promotional, or competitive purpose outside of the Metaboard® ecosystem.
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        5. Third-Party Intellectual Property
                                    </h2>
                                    <p className="text-gray-700">
                                        Metaboard® respects the intellectual property rights of others. From time to time, Metaboard® may incorporate third-party content, licensed images, open educational resources, or other external materials. Such materials remain the property of their respective owners and are used by Metaboard® in compliance with applicable licenses.
                                    </p>
                                    <p className="text-gray-700">
                                        Some images and media on the Metaboard® website may be sourced through Google Advanced Image Search or other open/free-to-use platforms. While Metaboard® makes reasonable efforts to ensure these are free to use, if you believe any content infringes your intellectual property rights, please notify us promptly.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl text-gray-900">
                                        6. Reporting Intellectual Property Concerns
                                    </h2>
                                    <p className="text-gray-700">
                                        If you believe that any content on the Metaboard® platform, website, or services infringes your copyright, trademark, or other intellectual property rights, please submit a detailed notice to:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                        <li>service.metaboard@gmail.com</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="text-center">
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <ScrollToTopBtn />
    </>
    );
};

export default IpPolicy;