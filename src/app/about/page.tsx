"use client";

import React from "react";
import {
    Users,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    Cog,
    Lightbulb,
    Award
} from "lucide-react";
import Link from "next/link";
import { HeroSection, ScrollToTopBtn } from "@/components/global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teamMembers } from "@/appData";


const AboutUs = () => {

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <HeroSection
                heading="We are"
                headingSpan="MetaBoard®"
                description="We're transforming how legal professionals work with cutting-edge technology, intelligent automation, and innovative solutions that drive efficiency and excellence."
                note=""
            />



            {/* about us section */}
            <section id="aboutUs" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="mx-auto">
                        <div className="text-center mb-16">
                            <h2 className={"text-4xl md:text-5xl font-bold text-black mb-6 "}>
                                About <span className="text-gradient">MetaBoard®</span>
                            </h2>
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p className="text-xl mb-6 text-gray-800 font-medium">
                                    <span className="text-red-600 font-bold">Metaboard®</span> is
                                    a pioneering platform dedicated to enriching minds and
                                    fostering expertise in the dynamic realms of law. Specializing
                                    in Technology, AI, Intellectual Property, and Data Laws, we
                                    stand at the forefront of legal education and innovation.
                                </p>

                                <p className="mb-6">
                                    Our core offering includes comprehensive online educational
                                    material and courses, meticulously designed for students,
                                    professionals, and government officials. Our platform is more
                                    than just an information repository; it's a bridge connecting
                                    theory with practical insights.
                                </p>

                                <p className="mb-6">
                                    Beyond online resources,{" "}
                                    <span className="text-red-600 font-semibold">Metaboard®</span>{" "}
                                    takes pride in delivering bespoke corporate training
                                    workshops, tailored to meet the specific needs of various
                                    entities. These interactive sessions are conducted offline,
                                    providing a hands-on learning experience.
                                </p>

                                <p className="mb-6">
                                    Our audience of learners is diverse and inclusive, ranging
                                    from curious students embarking on their legal journey, to
                                    seasoned professionals seeking to deepen their expertise, as
                                    well as government officials aiming to stay abreast of legal
                                    advancements.
                                </p>

                                <p className="text-lg font-medium text-gray-800">
                                    At <span className="text-red-600 font-bold">Metaboard</span>,
                                    we believe in empowering each individual with knowledge that's
                                    not just comprehensive but also relevant in today's rapidly
                                    evolving legal landscape.
                                </p>
                            </div>

                            {/* Key Highlights */}
                            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <BookOpen size={28} className="text-red-600" />
                                    </div>
                                    <h4 className={"font-bold text-black mb-2"}>
                                        Educational Excellence
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Comprehensive online courses and materials for legal
                                        professionals
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Users size={28} className="text-red-600" />
                                    </div>
                                    <h4 className={"font-bold text-black mb-2"}>
                                        Corporate Training
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Bespoke workshops tailored to specific organizational needs
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Lightbulb size={28} className="text-red-600" />
                                    </div>
                                    <h4 className={"font-bold text-black mb-2"}>
                                        Legal Innovation
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Specializing in Technology, AI, IP, and Data Laws
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* who are we? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mx-auto">
                        <div className="text-center mb-16">
                            <h2 className={"text-4xl md:text-5xl font-bold text-black mb-6 "}>
                                Who <span className="text-gradient">We Are</span>
                            </h2>
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p className="text-xl mb-6 text-gray-800 font-medium">
                                    <span className="text-red-600 font-bold">Metaboard®</span> was
                                    founded in 2004 by{" "}
                                    <span className="text-red-600 font-bold">
                                        Mr. Rodney D. Ryder
                                    </span>
                                    , a distinguished figure in the legal industry with over two
                                    decades of experience. Mr. Ryder, known for his profound
                                    expertise in technology, intellectual property, and corporate
                                    law, has established himself as a leading lawyer in these
                                    fields.
                                </p>

                                <p className="mb-6">
                                    His journey includes being a founding partner at Scriboard®, a
                                    full-service commercial law firm renowned for its
                                    specialization in technology, new media, and intellectual
                                    property laws. Mr. Ryder's commitment to law extends beyond
                                    practice; he is an acclaimed author, having penned influential
                                    books on cyber laws and intellectual property, including his
                                    work "Intellectual Property and the Internet," which was
                                    acknowledged by the Supreme Court of India.
                                </p>

                                <p className="mb-6">
                                    He has been an advisor to the Ministry of Communications and
                                    Information Technology, Government of India, on the
                                    implementation of the Information Technology Act, 2000. His
                                    achievements and contributions to the legal field have earned
                                    him recognition as a 'Leading Lawyer' in intellectual
                                    property, technology, communications, and media law by
                                    prestigious international publications such as Asia Law, Who's
                                    Who Legal, and Asia Legal 500.
                                </p>

                                <p className="mb-6">
                                    The inspiration behind{" "}
                                    <span className="text-red-600 font-semibold">Metaboard®</span>{" "}
                                    stems from Mr. Ryder's ambition to bridge the gap in legal
                                    education, particularly in technology and intellectual
                                    property law. His vision is to democratize access to
                                    high-quality legal education, making it more affordable and
                                    accessible.
                                </p>

                                <p className="text-lg font-medium text-gray-800">
                                    With{" "}
                                    <span className="text-red-600 font-bold">Metaboard®</span>,
                                    Mr. Ryder brings his wealth of knowledge and experience to the
                                    forefront, offering a platform that nurtures and empowers
                                    budding legal minds, professionals, and government officials
                                    in their quest for excellence in the legal domain.
                                </p>
                            </div>

                            {/* Key Milestones */}
                            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <div className="text-red-600 font-bold text-lg">2004</div>
                                    </div>
                                    <h4 className={"font-bold text-black mb-2"}>Founded in</h4>
                                    <p className="text-gray-600 text-sm">
                                        Established to bridge the gap in legal education
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Users size={28} className="text-red-600" />
                                    </div>
                                    <h4 className={"font-bold text-black mb-2"}>
                                        Mr. Rodney D. Ryder
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Founded by distinguished legal expert with 20+ years
                                        experience
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Award size={28} className="text-red-600" />
                                    </div>
                                    <h4 className={"font-bold text-black mb-2"}>
                                        Supreme Court of India
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Work acknowledged by the highest court of India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Profiles */}
            <section id="team" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={"text-4xl md:text-5xl font-bold text-black mb-4"}>
                            Our <span className="text-gradient">Team</span>
                        </h2>
                        <p
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            Meet the experts driving innovation in digital transformation and
                            legal technology.
                        </p>

                        {/* Mini Separator */}
                        <div className="flex justify-center mt-8">
                            <div className="w-16 h-0.5 bg-red-500"></div>
                        </div>
                    </div>



                    {/* Legal Team */}
                    <div className="relative max-w-7xl mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={{
                                nextEl: ".swiper-button-next-legal",
                                prevEl: ".swiper-button-prev-legal",
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: "swiper-pagination-bullet-custom",
                                bulletActiveClass: "swiper-pagination-bullet-active-custom",
                            }}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="team-carousel"
                        >
                            {teamMembers.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div
                                        className="relative rounded-2xl shadow-sm border-1 border-blue-600 hover:shadow-md transition-all duration-300 h-80 overflow-hidden mx-auto group bg-cover bg-center"
                                        style={{ backgroundImage: `url(${member.image})`, height: '400px', width: '300px' }}
                                    >
                                        {/* Bio Overlay - Shows on hover */}
                                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center flex-col justify-center p-4 pointer-events-none group-hover:pointer-events-auto">
                                            <div className="text-center text-white">
                                                <h3 className={"text-lg font-bold mb-2"}>
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm text-gray-300 mb-3">
                                                    {member.role}
                                                </p>
                                                <p className="text-sm leading-relaxed">
                                                    {member.bio}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-4 gap-3 z-10">
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
                                                    aria-label={`${member.name} LinkedIn`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-blue-600"
                                                    >
                                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                        <rect width="4" height="12" x="2" y="9" />
                                                        <circle cx="4" cy="4" r="2" />
                                                    </svg>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
                                                    aria-label={`${member.name} X/Twitter`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="text-white"
                                                    >
                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Member Info - Small overlay container at bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-1 border-blue-600 mx-2 mb-2 p-2 rounded-lg group-hover:opacity-0 transition-opacity duration-300">
                                            <div className="text-center">
                                                <h3
                                                    className={"text-base font-bold text-blue-600 mb-1"}
                                                >
                                                    {member.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons for Legal Team */}
                        <button
                            className="swiper-button-prev-legal hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
                            aria-label="Previous legal team member"
                            title="Previous legal team member"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            className="swiper-button-next-legal  hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
                            aria-label="Next legal team member"
                            title="Next legal team member"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Custom Styles for Swiper */}
                    <style jsx global>{`
            .team-carousel .swiper-pagination {
              bottom: -50px !important;
            }

            .swiper-pagination-bullet-custom {
              width: 12px;
              height: 12px;
              background: #d1d5db;
              border-radius: 50%;
              opacity: 1;
              margin: 0 6px;
              transition: all 0.3s ease;
            }

            .swiper-pagination-bullet-active-custom {
              background: #dc2626;
              transform: scale(1.2);
            }

            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
                </div>
            </section>



            {/* vision and mission section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="mx-auto">
                        <div className="text-center mb-16">
                            <h2 className={"text-4xl md:text-5xl font-bold text-black mb-6 "}>
                                Our Mission & <span className="text-gradient">Vision</span>
                            </h2>
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mission Card */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    {/* <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mr-4">
                    <Award size={32} className="text-red-600" />
                  </div> */}
                                    <h3 className={"text-2xl md:text-3xl font-bold text-black"}>
                                        Our Mission
                                    </h3>
                                </div>

                                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                    <p className="mb-4">
                                        At{" "}
                                        <span className="text-red-600 font-semibold">
                                            Metaboard®
                                        </span>
                                        , our mission is to redefine the landscape of legal
                                        education. We are committed to providing quality legal
                                        education that is not just comprehensive but also practical
                                        and accessible. Our focus extends beyond imparting
                                        knowledge; we aim to equip every learner, irrespective of
                                        their background or career stage, with the skills and
                                        confidence needed to excel in the legal field.
                                    </p>

                                    <p className="text-gray-800 font-medium">
                                        Central to our mission is the belief that quality education
                                        in law should be a right, not a privilege. We strive to
                                        remove barriers to legal education, making it more
                                        affordable and reachable. Our courses are designed to be
                                        flexible and relevant, ensuring that learning is not
                                        confined to textbooks but extends to real-world
                                        applications. By fostering an environment of continuous
                                        learning and professional development,{" "}
                                        <span className="text-red-600 font-semibold">
                                            Metaboard®
                                        </span>{" "}
                                        aims to empower a new generation of legal professionals who
                                        are ready to tackle the challenges of the modern legal
                                        landscape.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    {/* <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mr-4">
                    <TrendingUp size={32} className="text-blue-600" />
                  </div> */}
                                    <h3 className={"text-2xl md:text-3xl font-bold text-black"}>
                                        Our Vision
                                    </h3>
                                </div>

                                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                    <p className="mb-4">
                                        Our vision at{" "}
                                        <span className="text-red-600 font-semibold">
                                            Metaboard®
                                        </span>{" "}
                                        is to become a beacon of legal education globally. We aspire
                                        to create a world where every aspiring legal professional,
                                        student, or government official has access to the highest
                                        quality of legal education and training. Our goal is to not
                                        just educate but to inspire and empower our learners to
                                        become leaders and innovators in the field of law.
                                    </p>

                                    <p className="text-gray-800 font-medium">
                                        Looking to the future, we envision{" "}
                                        <span className="text-red-600 font-semibold">
                                            Metaboard®
                                        </span>{" "}
                                        as a platform where the boundaries of traditional legal
                                        education are pushed, and new ways of thinking are fostered.
                                        We aim to continuously evolve with the ever-changing legal
                                        landscape, incorporating the latest advancements in
                                        technology and law. Our vision is to cultivate a global
                                        community of learners and professionals who are not only
                                        well-versed in legal theory but are also adept at applying
                                        their knowledge in practical, impactful ways.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={"text-4xl md:text-5xl font-bold text-white mb-6"}>
                            Want to connect to us?
                        </h2>
                        <p className="text-red-100 text-xl mb-8 leading-relaxed">
                            Join hundreds of successful companies who have partnered with us
                            to achieve digital excellence. Let's discuss how we can help you
                            reach your goals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact#contact-form"
                                className="bg-white text-red-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                            >
                                <Users size={20} />
                                Contact Us
                            </Link>
                            <Link
                                href="/services"
                                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                            >
                                <Cog size={20} />
                                Know about our services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <ScrollToTopBtn />
            {/* <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Scroll to top"
            >
                <ChevronUp
                    size={20}
                    className="group-hover:-translate-y-0.5 transition-transform duration-300"
                />
            </button> */}
        </div>
    );
};

export default AboutUs;
