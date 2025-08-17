export const dynamic = 'force-dynamic';

import { HeroSection } from '@/components/alt/global';
import { BlogListingSection } from '@/components/alt/local/blogs';
import { BrowseByTagSection, RelatedPosts } from '@/components/alt/local/home';
import { ScrollToTopBtn } from '@/components/global';
import { $crud } from '@/factory/crudFactory';

type PageProps = {
    searchParams: Promise<Record<string, string | string[]>>;
};


const Blogs = async ({ searchParams }: PageProps) => {

    let blogs: any = [];
    let totalRecords: number = 0;

    try {
        const { data: { rows, count } } = await $crud.get('retrieve/web/metarule/blogs');
        blogs = rows;
        totalRecords = count;
    } catch (error) {
        console.error('Error fetching article:', error);
    }

    return (
        <div>
            {/* Article Hero */}
            <HeroSection
                page='blog'
            />

            {/* Article Content */}
            <BlogListingSection
                preloadBlogs={blogs}
                totalRecords={totalRecords}
            />

            <ScrollToTopBtn />
        </div>
    );
};

export default Blogs;
