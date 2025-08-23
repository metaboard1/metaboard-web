export const dynamic = 'force-dynamic';

import { HeroSection } from '@/components/alt/global';
import { BlogListingSection } from '@/components/alt/local/blogs';
import { ScrollToTopBtn } from '@/components/global';
import { $crud } from '@/factory/crudFactory';



const Blogs = async ({
    params,
}: {
    params: Promise<{ params?: string[] }>;
}) => {

    const segments = (await params).params ?? [];
    const page = segments[0] ?? "0";
    const query = segments[1] ?? "";

    let blogsList: any = [];
    let recordsCount: number = 0;

    try {
        const { data: { rows, count } } = await $crud.retrieve(`metarule/blogs?page=${page}&limit=12&search=${query}`);
        blogsList = rows;
        recordsCount = count;
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
                blogsList={blogsList}
                recordsCount={recordsCount}
                currentPage={+page}
                query={query}
            />

            <ScrollToTopBtn />
        </div>
    );
};

export default Blogs;
