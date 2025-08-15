'use client';

import { FC, useCallback, useState } from "react";
import { $crud } from "@/factory/crudFactory";
import { Pagination } from "@/components/ui";
import { FilterSection } from "../../global";
import DocumentCard from "./DocumentCard";
import { useRouter } from "next/navigation";

type props = {
    preloadDocuments: BlogInterface[];
    recordsCount: number;
    currentPage: number;
}

const DocumentListingSection: FC<props> = ({
    preloadDocuments = [],
    recordsCount = 0,
    currentPage = 0 
}) => {

    const router = useRouter();

    console.log(preloadDocuments)
    // const [blogListData, setBlogListData] = useState<{
    //     data: BlogInterface[],
    //     page: number;
    //     search: string;
    //     count: number;
    // }>({
    //     data: preloadDocuments,
    //     page: 0,
    //     search: '',
    //     count: totalRecords
    // });
    // const [isLoading, setIsLoading] = useState(false);

    // const retrieveBlogs = useCallback(async (defaultPage: number, defaultSearch: string = '') => {
    //     try {
    //         setIsLoading(true);
    //         const { data: { rows, count } } = await $crud.retrieve(`metarule/blogs?page=${defaultPage}&search=${encodeURIComponent(defaultSearch)}`);
    //         setBlogListData((prev) => ({
    //             ...prev,
    //             page: defaultPage,
    //             data: rows,
    //             search: defaultSearch,
    //             count
    //         }));
    //         document.getElementById("blogListSection")?.scrollIntoView({ behavior: "smooth" });
    //     } catch (e) {
    //         console.error(e);
    //     }finally{
    //         setIsLoading(false);
    //     }
    // }, []);


    const handlePageChange = (updatedPage: number) => {
        router.push(`/test/page/${updatedPage}?q=${''}`);

        // retrieveBlogs(updatedPage, blogListData.search);
    }

    const handleSearch = (value: string) => {
        console.log(value)
        router.push(`/test/page/${currentPage}?q=${encodeURIComponent(value)}`);
        // retrieveBlogs(0, value);
    }

    return (<>
        {/* {
            isLoading &&
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-40 backdrop-blur-[2px]  z-[999]">
                <div className="spinner"></div>
            </div>
        } */}
        <div id="blogListSection" className="container px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Controls */}
            <FilterSection
                filterTitle='PDF'
                totalRecords={recordsCount}
                onSearch={handleSearch}
            />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {
                        preloadDocuments.map((e) => <DocumentCard key={e.id} data={e} />)
                    }
                </div>
            </section>
            <Pagination
                totalRecords={recordsCount}
                limit={10}
                // currentPage={blogListData.page}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>

    </>);
}
export default DocumentListingSection;