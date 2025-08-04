"use client";

import React, { useState } from "react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Header, Footer } from "@/components/global";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/alt/ui";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

// Form data interface
interface FormData {
    name: string;
    email: string;
    company: string;
    service: string;
    budget: string;
    timeline: string;
    message: string;
}

// Services data
const services = [
    {
        id: 1,
        title: "Legal Document Automation",
        slug: "legal-document-automation",
    },
    { id: 2, title: "Contract Analysis", slug: "contract-analysis" },
    { id: 3, title: "Legal Research Platform", slug: "legal-research-platform" },
    { id: 4, title: "Compliance Management", slug: "compliance-management" },
    { id: 5, title: "Case Management System", slug: "case-management-system" },
    { id: 6, title: "Custom Legal Solutions", slug: "custom-legal-solutions" },
];

const ContactUs = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You can add your form submission logic here
    };
    return (
        <>
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                                <Mail className="w-8 h-8 text-red-600" />
                            </div>
                            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                                Contact
                                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                                    {" "}
                                    Us
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Ready to transform your legal practice? Get in touch with our
                                team to discuss how Metaboard® can help streamline your legal
                                operations with cutting-edge technology solutions.
                            </p>
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-red-100">
                                <p className="text-sm text-gray-700">
                                    We're here to help you navigate the future of legal
                                    technology. Reach out to us for consultations, support, or to
                                    learn more about our services.
                                </p>
                                <div className="mt-3 flex items-center justify-center space-x-2">
                                    <Mail className="w-4 h-4 text-red-600" />
                                    <span className="text-sm text-gray-600">
                                        Email us at: hello@metaboard.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-6 py-12">
                    <div
                        id="contact-form"
                        className="max-w-6xl mx-auto my-20  rounded-3xl border border-red-100 shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col-reverse lg:flex-row">
                            {/* Left Side - Form Content */}
                            <div className="p-6 lg:p-8 lg:w-1/2">
                                <div className="mb-6">
                                    <h3
                                        className={`text-2xl font-bold text-black mb-3`}
                                    >
                                        Get In <span className="text-red-600">Touch</span>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Ready to transform your legal practice? Let's discuss how
                                        our innovative solutions can help you achieve your goals.
                                    </p>
                                </div>

                                {/* Form Separator */}
                                <div className="flex items-center my-6">
                                    <div className="flex-1 border-t border-gray-200"></div>
                                    <div className="mx-4">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                    </div>
                                    <div className="flex-1 border-t border-gray-200"></div>
                                </div>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* Basic Information Section */}
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your full name"
                                                    className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your email address"
                                                    className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">
                                                Company/Firm Name
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder="Enter your company or firm name"
                                                className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">
                                                Service Interest *
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                title="Select a service"
                                                aria-label="Service Interest"
                                                className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service.id} value={service.slug}>
                                                        {service.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your project requirements, goals, or any specific questions..."
                                                rows={3}
                                                className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                                            ></textarea>
                                        </div>
                                    </div>


                                    {/* Submit Button */}
                                    <div>
                                        <Button
                                            variant='default'
                                            className="w-full"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>

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
                                                <Mail />
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
                                                <MapPin />
                                                {/* <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg> */}
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
        </>);
};

export default ContactUs;
