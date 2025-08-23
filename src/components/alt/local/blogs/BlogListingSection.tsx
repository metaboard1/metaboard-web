'use client';

import { useRef, type FC } from "react";
import { Pagination2 } from "@/components/ui";
import { FilterSection } from "../../global";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/global";

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

    const loaderRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const startLoader = () => {
        if (loaderRef.current) {
            loaderRef.current.classList.remove('hidden');
            loaderRef.current.classList.add('flex');
        }
    }
    const handlePageChange = (updatedPage: number) => {
        startLoader();
        router.push(`/metarule/blogs/${updatedPage}/${encodeURIComponent(query)}#st`);
    }

    const handleSearch = (value: string) => {
        startLoader();
        router.push(`/metarule/blogs/0/${encodeURIComponent(value)}#st`);
    }

    return (<>
    
        <Loader ref={loaderRef} />

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