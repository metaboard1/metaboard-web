'use client';

import { ChevronDown, ChevronUp, Linkedin, Mail, TwitterIcon } from "lucide-react";
import { Button, Card } from "../../ui"
import { useState } from "react";
import Link from "next/link";
import TwitterSVG from '../../../../assets/svg/XLogo';

const AuthorProfile = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/rodneydryder', label: 'LinkedIn' },
        { icon: TwitterSVG, href: 'https://x.com/Rodney_D_Ryder', label: 'Twitter' },
        { icon: Mail, href: 'mailto:rodney@scribboard.com', label: 'Email' },
    ];


    return (<>
        <Card className="glass-card p-6 mb-8 glass-hover">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <div className="relative group">
                        <img
                            src='/assets/images/rodney_d_ryder.webp'
                            alt="Dr. Sarah Mitchell"
                            className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-2 border-glass transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-red opacity-0 group-hover:opacity-10 transition-opacity" />
                    </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground mb-1">Rodney D Ryder</h2>
                        <p className="text-sm sm:text-md text-glass mb-2">Founding Partner, Scriboard [Advocates and Legal Consultants]</p>
                        {/* <p className="text-sm sm:text-md text-muted-foreground">Exceptional Lawyer in Technology, Data Privacy, Intellectual Property, and New Media Laws</p> */}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((social, index) => 
                            <Link
                                key={index}
                                href={social.href}
                                target="_blank"
                            >
                                <Button
                                    key={social.label}
                                    variant="secondary"
                                    size="sm"
                                    className="glass-hover border-glass"
                                >
                                    <social.icon className="w-4 h-4" />
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <Button
                        variant="link"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                Show Less
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                See More
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {/* Expanded Bio */}
            {isExpanded && (
                <div className="mt-6 pt-6 border-t border-glass space-y-4 animate-in slide-in-from-top-2">

                    <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                        • Founding Partner of Scriboard, a full-service commercial law firm specializing in technology, new media, and intellectual property laws.<br />
                        • Author of Guide to Cyber Laws: the Information Technology Act, 2000, E-Commerce, Data Protection and the Internet, the first section-wise analysis of the Indian Information Technology Act, 2000.<br />
                        • Advisor to the Ministry of Communications and Information Technology, Government of India on the implementation of the Information Technology Act, 2000.<br />
                        • Counsels a wide range of clients from start-ups to Fortune 100, representing them in litigation regarding technology law, data security, compliance with law enforcement, and intellectual property strategy.<br />
                        • Regularly interviewed and widely quoted by Indian and International media on technology, intellectual property, and new media laws.<br />
                        • Nominated as a 'Leading Lawyer' in intellectual property, technology, communications and media law by Asia Law, Who'sWhoLegal, Asia Legal 500, amongst other International publications.<br />
                        • Acknowledged as an authoritative work on domain name disputes by the Hon’ble Supreme Court of India.<br />
                        • Adjunct Professor / Visiting Faculty to various institutions, including the Campus Law Centre, Faculty of Law, University of Delhi, CBI Academy, Indian Institute of Management, Lucknow, Indian Institute of Technology, NALSAR, Hyderabad, the National Law School of India University, and the National Law University, Jodhpur.<br />
                    </p>

                </div>
            )}
        </Card>
    </>)
}

export default AuthorProfile;