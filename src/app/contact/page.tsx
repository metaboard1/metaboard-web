"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { HeroSection, ScrollToTopBtn } from "@/components/global";
import { Button } from "@/components/ui";
import { ContactForm } from "@/components/local/contact";
// import { Button } from "@/components/alt/ui";






const ContactUs = () => {
  
    return (
        <>
            <div className="min-h-screen">
                {/* Hero Section */}
                <HeroSection
                    RenderTopIcon={Mail}
                    heading="Contact"
                    headingSpan="Us"
                    description="Ready to transform your legal practice? Get in touch with our team to discuss how Metaboard® can help streamline your legal operations with cutting-edge technology solutions."
                    note="We're here to help you navigate the future of legal technology. Reach out to us for consultations, support, or to learn more about our services."
                />

                <section className="container mx-auto px-6 py-12">
                    <div
                        id="contact-form"
                        className="max-w-6xl mx-auto my-20  rounded-3xl border border-red-100 shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col-reverse lg:flex-row">
                            {/* Left Side - Form Content */}
                            <ContactForm/>
                          

                            {/* Right Side - Contact Info */}
                            <div className="bg-primary from-red-500 to-red-600 p-6 lg:p-8 text-white lg:w-1/2">
                                <div className="h-full flex flex-col justify-center">
                                    <h4
                                        className={`text-xl font-bold mb-4`}
                                    >
                                        Let's Start a Conversation
                                    </h4>

                                    {/* Contact Info Separator */}
                                    <div className="w-12 h-0.5 bg-white/30 mb-6"></div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <Phone
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">Phone</h5>
                                                <p className="text-red-100 text-sm">
                                                    +1 (555) 123-4567
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <Mail
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">Email</h5>
                                                <p className="text-red-100 text-sm">
                                                    hello@metaboard.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                <MapPin
                                                    size={20}
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-1 text-sm">Address</h5>
                                                <p className="text-red-100 text-sm">
                                                    123 Legal Tech Ave
                                                    <br />
                                                    Innovation District, NY 10001
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/20">
                                        <p className="text-red-100 text-xs">
                                            We typically respond within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ScrollToTopBtn />
        </>);
};

export default ContactUs;
