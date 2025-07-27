'use client';

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FC } from "react"
import SearchBar from "./SearchBar";
import Image from "next/image";




const Header: FC<{ styles?: string; showNavLinks?: boolean }> = ({
    styles,
    showNavLinks
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

    return (<>
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'glass backdrop-blur-lg bg-black/20'
            : 'bg-transparent'
            } ${styles}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    <div className="flex items-center space-x-3">
                        <Link href="/">
                            <img
                                src="/assets/images/logo.webp"
                                alt="MetaBoard Logo"
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {
                            showNavLinks ?
                                (
                                    navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`transition-colors duration-300 text-base font-bold ${pathname === item.href
                                                ? 'text-red-500'
                                                : 'text-gray-400 hover:text-red-500'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))
                                )
                                :
                                <SearchBar />
                        }
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 glass rounded-2xl p-6">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`transition-colors duration-300 font-medium py-2 ${pathname === item.href
                                        ? 'text-red-500'
                                        : 'text-white hover:text-red-500'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    </>)
}

export default Header;