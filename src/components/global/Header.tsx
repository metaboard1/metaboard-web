'use client';

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useState, type FC } from "react"
import SearchBar from "./SearchBar";

type props = {
    styles?: string;
    showNavLinks?: boolean;
}

const Header: FC<props> = ({
    styles,
    showNavLinks,
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Articles', href: '/articles' },
        { name: 'Services', href: '/services' },
        { name: 'MetaRules', href: '/services' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass backdrop-blur-lg bg-black/20'
                : 'bg-transparent'
                } ${styles}`}>
                <nav className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between min-h-[48px]">
                        
                        {/* Logo Section */}
                        <div className="flex items-center space-x-3 flex-shrink-0">
                            <Link href="/">
                                <img
                                    src="/assets/images/logo.webp"
                                    alt="MetaBoard Logo"
                                    className="h-8 w-auto transition-all duration-300"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        {showNavLinks ? (
                            <div className="hidden md:flex items-center space-x-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`transition-colors duration-300 text-base font-bold whitespace-nowrap ${
                                            pathname === item.href
                                                ? 'text-red-500'
                                                : 'text-gray-400 hover:text-red-500'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            /* Search Bar Section - Desktop & Mobile */
                            <div className="flex justify-end flex-1 min-w-0">
                                <SearchBar />
                            </div>
                        )}
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && showNavLinks && (
                        <div className="md:hidden mt-4 glass rounded-2xl p-6 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`transition-colors duration-300 font-medium py-2 ${
                                            pathname === item.href
                                                ? 'text-red-500'
                                                : 'text-white hover:text-red-500'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                
                                {/* Mobile Search Bar in Menu */}
                                <div className="pt-4 border-t border-gray-700">
                                    <SearchBar />
                                </div>
                                
                                <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default memo(Header);