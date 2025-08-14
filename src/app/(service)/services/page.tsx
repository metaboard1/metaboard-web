"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Monitor,
    Users,
    BookOpen,
    Zap,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Star,
    Award,
    Clock,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer, HeroSection } from "@/components/global";
// import Header from "@/components/local/services/header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Google Fonts
import { Playfair_Display, Raleway, Inter } from "next/font/google";
import { Button } from "@/components/ui";

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
});

const raleway = Raleway({
    subsets: ["latin"],
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

// import Header from "@components/local/services/header";
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Services = () => {
    const [expandedService, setExpandedService] = useState<number | null>(null);
    const [counts, setCounts] = useState({
        clients: 0,
        projects: 0,
        years: 0,
        satisfaction: 0,
    });
    const [isVisible, setIsVisible] = useState(false);
    const [typewriterText, setTypewriterText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const counterRef = useRef<HTMLDivElement>(null);

    const fullText = "Services";

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypewriterText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
                setShowCursor(false);
            }
        }, 150);

        return () => clearInterval(timer);
    }, []);

    // Cursor blinking effect
    useEffect(() => {
        if (showCursor) {
            const cursorTimer = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500);
            return () => clearInterval(cursorTimer);
        }
    }, [showCursor]);

    // Animated counter hook
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateCounters();
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateCounters = () => {
        const targets = {
            clients: 500,
            projects: 1200,
            years: 15,
            satisfaction: 98,
        };
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
                clients: Math.floor(targets.clients * easeOut),
                projects: Math.floor(targets.projects * easeOut),
                years: Math.floor(targets.years * easeOut),
                satisfaction: Math.floor(targets.satisfaction * easeOut),
            });

            if (step >= steps) {
                clearInterval(timer);
                setCounts(targets);
            }
        }, stepDuration);
    };

    const teamMembers = [
        {
            id: 1,
            name: "Orlando Diggs",
            role: "Co-Founder and COO",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "15+ years in legal tech innovation. Former Silicon Valley engineer turned legal technology evangelist.",
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "Chief Technology Officer",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Former law professor with expertise in legal pedagogy and technology integration.",
        },
        {
            id: 3,
            name: "Michael Torres",
            role: "Head of Education",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Leading researcher in legal ethics and digital privacy with extensive community experience.",
        },
        {
            id: 4,
            name: "Jessica Rodriguez",
            role: "Research Director",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Serial entrepreneur in the legal tech space with extensive innovation experience.",
        },
        {
            id: 5,
            name: "David Kim",
            role: "Innovation Strategist",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Full-stack developer specializing in AI-powered legal applications and cloud infrastructure.",
        },
        {
            id: 6,
            name: "Emily Watson",
            role: "Content Strategist",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Machine learning expert with focus on natural language processing for legal document analysis.",
        },
        {
            id: 7,
            name: "Alex Rivera",
            role: "Senior Software Architect",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Cloud infrastructure specialist ensuring scalable and secure legal technology deployments.",
        },
        {
            id: 8,
            name: "Lisa Martinez",
            role: "Technical Writer",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Legal communication expert crafting accessible content for complex legal technology concepts.",
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Managing Partner",
            company: "Johnson & Associates",
            image:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            content:
                "Metaboard transformed our practice completely. Their legal tech consulting helped us modernize our workflow and increase efficiency by 300%.",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Legal Director",
            company: "TechLaw Corp",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            content:
                "The educational programs provided by Metaboard kept our team ahead of emerging legal technologies. Outstanding expertise and support.",
            rating: 5,
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Senior Attorney",
            company: "Innovation Legal",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            content:
                "Their community building initiatives connected us with like-minded legal professionals. The networking opportunities have been invaluable.",
            rating: 5,
        },
    ];

    const stats = [
        { label: "Happy Clients", value: "clients", icon: Users, suffix: "+" },
        {
            label: "Projects Completed",
            value: "projects",
            icon: Award,
            suffix: "+",
        },
        { label: "Years Experience", value: "years", icon: Clock, suffix: "" },
        {
            label: "Client Satisfaction",
            value: "satisfaction",
            icon: TrendingUp,
            suffix: "%",
        },
    ];

    const faqs = [
        {
            id: 1,
            question: "How do you help law firms with technology adoption?",
            answer:
                "We provide comprehensive consulting services including technology assessment, vendor selection, implementation planning, and change management to ensure smooth technology adoption with minimal disruption to your practice.",
        },
        {
            id: 2,
            question: "What makes your educational programs different?",
            answer:
                "Our programs are designed by legal professionals for legal professionals. We focus on practical applications of emerging technologies like AI, blockchain, and digital ethics specifically tailored for the legal industry.",
        },
        {
            id: 3,
            question: "Do you offer ongoing support after implementation?",
            answer:
                "Yes, we provide continuous support including training updates, troubleshooting, performance optimization, and regular check-ins to ensure your technology investment continues to deliver value.",
        },
        {
            id: 4,
            question: "How long does a typical consulting engagement take?",
            answer:
                "Project timelines vary based on scope and complexity. Simple assessments may take 2-4 weeks, while full implementation projects can range from 3-12 months. We provide detailed timelines during our initial consultation.",
        },
    ];

    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [contactStep, setContactStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const toggleFaq = (faqId: number) => {
        setExpandedFaq(expandedFaq === faqId ? null : faqId);
    };

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (contactStep < 3) setContactStep(contactStep + 1);
    };

    const prevStep = () => {
        if (contactStep > 1) setContactStep(contactStep - 1);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const services = [
        {
            id: 1,
            slug: "legal-technology-consulting",
            icon: Monitor,
            title: "Legal Technology Consulting",
            brief: "Strategic guidance for law firms adopting new technologies",
            status: "Provided",
            details:
                "Our comprehensive consulting services help law firms navigate the complex landscape of legal technology. We provide strategic planning, vendor selection, implementation support, and change management to ensure successful technology adoption.",
            features: [
                "Technology Assessment",
                "Implementation Planning",
                "Change Management",
                "ROI Analysis",
            ],
        },
        {
            id: 2,
            slug: "educational-programs",
            icon: BookOpen,
            title: "Educational Programs",
            brief: "Comprehensive training courses for legal professionals",
            status: "Provided",
            details:
                "Cutting-edge educational programs designed to bridge the gap between traditional legal education and modern practice requirements. Our curriculum covers emerging technologies and practical applications.",
            features: [
                "AI & Machine Learning",
                "Digital Ethics",
                "Blockchain Law",
                "Legal Research Tools",
            ],
        },
        {
            id: 3,
            slug: "community-building",
            icon: Users,
            title: "Community Building",
            brief: "Networking and collaboration platforms for legal innovators",
            status: "Provided",
            details:
                "We foster a vibrant community of legal professionals, technologists, and innovators through networking events, online forums, and collaborative projects.",
            features: [
                "Networking Events",
                "Mentorship Programs",
                "Online Forums",
                "Startup Incubation",
            ],
        },
        {
            id: 4,
            slug: "innovation-labs",
            icon: Zap,
            title: "Innovation Labs",
            brief: "Research and development of next-generation legal tools",
            status: "Upcoming",
            details:
                "Our innovation labs are at the forefront of legal technology research and development. We work on prototype development and collaborate with industry partners.",
            features: [
                "Prototype Development",
                "Research Partnerships",
                "Technology Testing",
                "Innovation Workshops",
            ],
        },
    ];

    const toggleService = (serviceId: number) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

    return (
        <div className={`min-h-screen bg-white `}>

            {/* Services Intro */}

            <HeroSection
                heading="Our"
                headingSpan="Services"
                description='We empower your legal tech journey by delivering tailored consulting, expert education, and innovative solutions that drive transformation. Our services help law firms, legal departments, and startups streamline operations, enhance efficiency, and embrace the future of legal technology. With our deep expertise and forward-thinking approach, we ensure you stay ahead in a rapidly evolving industry.'
                note=""
            />

            {/* Testimonials Section */}

            {/* Section Separator */}
            <div className="py-8 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <div className="mx-6 flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>
                </div>
            </div>

            {/* Service Offerings */}
            <section className="py-20 bg-white">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {services.map((service) => (
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
                                        <Button
                                            style={{ flex: 1 }}
                                            variant='outline'
                                        >
                                            Enquire Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-4xl mx-auto mt-20">
                        <div className="text-center mb-12">
                            <h3
                                className={`text-3xl md:text-4xl font-bold text-black mb-4 `}
                            >
                                Frequently Asked{" "}
                                <span className="text-gradient">Questions</span>
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Get answers to common questions about our services and approach.
                            </p>

                            {/* Mini Separator */}
                            <div className="flex justify-center mt-6">
                                <div className="w-16 h-0.5 bg-red-500"></div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-white rounded-xl border border-gray-200 hover:border-red-200 transition-colors duration-300 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        <h4
                                            className={`font-semibold text-black pr-4 `}
                                        >
                                            {faq.question}
                                        </h4>
                                        <div className="flex-shrink-0">
                                            {expandedFaq === faq.id ? (
                                                <ChevronUp size={20} className="text-red-600" />
                                            ) : (
                                                <ChevronDown size={20} className="text-gray-400" />
                                            )}
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${expandedFaq === faq.id
                                            ? "max-h-48 opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="w-full h-px bg-gray-200 mb-4"></div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center my-12">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500"></div>
                            <div className="w-4 h-4 border-2 border-red-500 rounded-full bg-white"></div>
                            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500"></div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Scroll to top"
            >
                <ChevronUp
                    size={20}
                    className="group-hover:-translate-y-0.5 transition-transform duration-300"
                />
            </button>

        </div>
    );
};

export default Services;
