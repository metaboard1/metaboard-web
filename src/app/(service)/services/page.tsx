"use client";

import { HeroSection, ScrollToTopBtn } from "@/components/global";
import { Button } from "@/components/ui";
import { servicesData } from "@/appData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";


const Services = () => {

    return (
        <div className='min-h-screen bg-white'>

            <HeroSection
                heading="Our"
                headingSpan="Services"
                description='We empower your legal tech journey by delivering tailored consulting, expert education, and innovative solutions that drive transformation. Our services help law firms, legal departments, and startups streamline operations, enhance efficiency, and embrace the future of legal technology. With our deep expertise and forward-thinking approach, we ensure you stay ahead in a rapidly evolving industry.'
                note=""
            />

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2
                            className={`text-4xl md:text-5xl font-bold text-black mb-4 `}
                        >
                            Our <span className="text-gradient">Offerings</span>
                        </h2>
                        <p
                            className={`text-xl text-gray-600 mx-auto `}
                        >
                            Comprehensive services designed to transform your practice.
                        </p>

                        {/* Mini Separator */}
                        <div className="flex justify-center mt-8">
                            <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                className="group bg-white rounded-2xl p-6 shadow-sm border border-red-200 hover:border-red-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative flex flex-col h-full overflow-hidden"
                            >
                                {/* Hover Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Service Icon */}
                                    <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                                        <service.icon
                                            size={32}
                                            className="text-red-600 group-hover:text-red-700"
                                        />
                                    </div>

                                    {/* Service Title */}
                                    <h3
                                        className={`text-xl font-bold text-black mb-3 group-hover:text-red-700 transition-colors duration-300 `}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Service Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                                        {service.details}
                                    </p>

                                    {/* Service Features */}
                                    <div className="space-y-3 mb-6">
                                        {service.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 transform group-hover:translate-x-1 transition-transform duration-300"
                                            >
                                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:bg-red-700 transition-colors duration-300"></div>
                                                <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        <Button
                                            style={{ flex: 1 }}
                                        >
                                            Upcoming
                                        </Button>
                                        <Link
                                            href='/contact'
                                            style={{ flex: 1 }}
                                        >
                                            <Button
                                                className="w-full"
                                                variant='outline'
                                            >
                                                Enquire Now
                                            </Button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Scroll to Top Button */}
            <ScrollToTopBtn />
        </div>
    );
};

export default Services;
