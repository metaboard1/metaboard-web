'use client';

import { memo, useEffect, useState, type FC } from "react"
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

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
        { name: 'Home', href: '/', children: [] },
        { name: 'Knowledge center', href: '', children: [{ name: 'Articles', href: '/articles' }] },
        { name: 'MetaRule', href: '/metarule', children: [{ name: 'Home', href: '/metarule' }, { name: 'Blogs', href: '/metarule/blogs' }, { name: 'Publications', href: '/metarule/publications' }] },
        { name: 'Others', href: '', children: [{ name: 'About us', href: '/articles' }, { name: 'Contact us', href: '/contact' }] },
        { name: 'Services', href: '/services', children: [] },
    ];

    const isMetaruleSection = pathname.split('/')[1] === 'metarule';

    return (
        <>
            <header className={`${pathname !== '/read-article' ? 'fixed' : ''} top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
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

                        <NavigationMenu.Root className="hidden md:flex relative z-10 flex justify-center">
                            <NavigationMenu.List className="center m-0 flex items-center list-none">
                                {
                                    navItems.map(({ name, children, href }, index) => <>
                                        {
                                            !children.length ?
                                                <NavigationMenu.Item key={index}>
                                                    <NavigationMenu.Link
                                                        className="block select-none rounded-lg px-4 py-2.5 text-sm font-bold leading-none no-underline outline-none text-gray-300 hover:text-red-500 transition-colors duration-300"
                                                        href={href}
                                                    >
                                                        {name}
                                                    </NavigationMenu.Link>
                                                </NavigationMenu.Item>
                                                :
                                                <NavigationMenu.Item key={index}>
                                                    <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-1 rounded-lg px-4 py-2.5 text-sm font-bold leading-none outline-none text-gray-300 hover:text-red-500 transition-colors duration-300">
                                                        {name}
                                                        <ChevronDown
                                                            className="relative text-gray-400 transition-transform duration-300 ease-in-out group-data-[state=open]:-rotate-180 group-hover:text-red-500"
                                                            size={16}
                                                            aria-hidden
                                                        />
                                                    </NavigationMenu.Trigger>
                                                    <NavigationMenu.Content className="absolute left-0 top-0 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
                                                        <div className="w-[280px] p-4">
                                                            <div className="grid gap-2">
                                                                {
                                                                    children.map(({ name, href }, childIndex) =>
                                                                        <NavigationMenu.Link key={childIndex} asChild>
                                                                            <a
                                                                                className="group flex items-center gap-3 rounded-lg p-3 text-sm font-medium no-underline outline-none transition-all duration-200 hover:bg-red-500/10 hover:border-red-500/20 border border-transparent backdrop-blur-sm"
                                                                                href={href}
                                                                            >
                                                                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-red-500/20 to-red-600/20 group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-200">
                                                                                    <div className="h-3 w-3 rounded-sm bg-red-500 group-hover:bg-red-400 transition-colors duration-200"></div>
                                                                                </div>
                                                                                <div className="flex flex-col">
                                                                                    <div className={`${isMetaruleSection ? 'text-black' : 'text-white'} group-hover:text-red-400 font-semibold transition-colors duration-200`}>
                                                                                        {name}
                                                                                    </div>
                                                                                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                                                                        Explore {name.toLowerCase()}
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </NavigationMenu.Link>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </NavigationMenu.Content>
                                                </NavigationMenu.Item>
                                        }
                                    </>)}
                                <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
                                    <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-gradient-to-br from-gray-800 to-gray-900 border-t border-l border-red-500/20" />
                                </NavigationMenu.Indicator>
                            </NavigationMenu.List>

                            {/* Perspective container with dark theme styling */}
                            <div className="absolute left-0 top-full flex w-full justify-center [perspective:600px]">
                                <NavigationMenu.Viewport
                                    className={`
                                        ${!isMetaruleSection ? 'bg-gradient-to-br border-red-500/20' : 'gradient-primary'}
                                    relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl  from-gray-900/95 to-black/95 backdrop-blur-xl border  shadow-2xl shadow-red-500/10 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)] [perspective-origin:center_top]`}
                                />
                            </div>
                        </NavigationMenu.Root>



                        {/* <div className="hidden xs:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`transition-colors duration-300 text-sm font-bold whitespace-nowrap ${pathname === item.href
                                        ? 'text-red-500'
                                        : 'text-gray-400 hover:text-primary'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div> */}
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 glass rounded-2xl p-6 animate-in slide-in-from-top-2 duration-200">
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
                            </div>
                        </div>
                    )}
                </nav>
            </header >
        </>
    )
}

export default memo(Header);

