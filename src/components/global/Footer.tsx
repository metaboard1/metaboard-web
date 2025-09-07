
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const quickLinks = [
        { name: 'Articles', href: '/articles' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'IP Policy', href: '/ip-policy' },
    ];

    return (
        <footer id="contact" className="bg-black text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src="/assets/images/logo-light.webp"
                                alt="MetaBoard Logo"
                                className="h-8 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            empowering legal professionals
                            with cutting-edge technology and innovative educational resources.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/company/metaboard%C2%AE/"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                            >
                                <Linkedin size={18} />
                            </Link>
                            <Link
                                href="https://x.com/MetaBoardDotCom"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                            >
                                <Image
                                    src="/assets/svg/x-logo.svg"
                                    alt="MetaBoard Logo"
                                    width={15}
                                    height={15}
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/_metaboard?igsh=MWRtOTJ5dWRmODQzbA%3D%3D"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                            >
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 list-none">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6">Legal</h3>
                        <ul className="space-y-3 list-none">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>

                        <div className="space-y-3 mb-6">
                            <a className="flex items-center gap-3 text-gray-400" href='mailto:info@metaboard.com'>
                                <Mail size={16} className="text-red-500" />
                                <span>info@metaboard.com</span>
                            </a>
                            <a className="flex items-center gap-3 text-gray-400" href='tel:+911166351542'>
                                <Phone size={16} className="text-red-500" />
                                <span>+91 11 6635 1542</span>
                            </a>
                            <a
                                className="flex items-center gap-3 text-gray-400"
                                href='https://maps.app.goo.gl/5Nmvot2CUkyP6TAE8'
                                target='_blank'
                            >
                                <MapPin size={16} className="text-red-500" />
                                <span>New Delhi, India</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 MetaBoard. All rights reserved. A division of Metarion Knowledge Solutions Private Limited.
                        </p>
                        <p className="text-gray-500 text-sm mt-2 md:mt-0">
                            Built with precision and innovation.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
