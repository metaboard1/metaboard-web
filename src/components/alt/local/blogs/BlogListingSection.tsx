'use client';

import { type FC } from "react";
import { Pagination2 } from "@/components/ui";
import { FilterSection } from "../../global";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";

type props = {
    blogsList: BlogInterface[];
    recordsCount: number;
    currentPage: number;
    query: string;
}


const BlogListingSection: FC<props> = ({
    blogsList,
    recordsCount,
    currentPage,
    query
}) => {

    const router = useRouter();

    const handlePageChange = (updatedPage: number) => {
        router.push(`/metarule/blogs/${updatedPage}/${encodeURIComponent(query)}#hero-para`);
    }

    const handleSearch = (value: string) => {
        router.push(`/metarule/blogs/0/${encodeURIComponent(value)}#hero-para`);
    }

    return (<>

        <div id="blogListSection" className="container px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Controls */}
            <FilterSection
                filterTitle='Blog'
                totalRecords={recordsCount}
                onSearch={handleSearch}
                defaultSearch={query}
                showTagFilter
            />
            <section>
                <div className='space-y-6'>
                    {
                        blogsList.map((e) => <BlogCard key={e.id} data={e} />)
                    }
                </div>
            </section>
            <Pagination2
                totalRecords={recordsCount}
                limit={10}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                query={query}
                navigationPath="metarule/blogs"
            />
        </div>

    </>);
}
export default BlogListingSection