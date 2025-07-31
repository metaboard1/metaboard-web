'use client';

import { AltHeader, HeroSection } from '@/components/alt/global';
import { AuthorProfile, BrowseByTagSection, LatestArticlesSection, PublicationSection, RelatedPosts } from '@/components/alt/local/home';
import { PublicationListingSection } from '@/components/alt/local/publications';
import { Button } from '@/components/alt/ui';
import { Footer } from '@/components/global';
import { BookOpen, Briefcase, ExternalLink, FileText } from 'lucide-react';


const Publications = () => {

    return (<>
        <div className="min-h-screen gradient-primary">
            {/* Navigation Header */}
            <AltHeader />

            {/* Hero Section */}
            <HeroSection
                page='publications'
            />
            <PublicationListingSection />

          

            {/* Footer */}
            <Footer />
        </div>
    </>);
}
export default Publications;