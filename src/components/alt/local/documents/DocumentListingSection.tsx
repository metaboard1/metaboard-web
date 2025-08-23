'use client';

import { useRef, type FC } from "react";
import { Pagination, Pagination2 } from "@/components/ui";
import { FilterSection } from "../../global";
import DocumentCard from "./DocumentCard";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/global";

type props = {
    documentsData: DocumentInterface[];
    recordsCount: number;
    currentPage: number;
    query: string;
}

const DocumentListingSection: FC<props> = ({
    documentsData = [],
    recordsCount = 0,
    currentPage = 0,
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
        router.push(`/metarule/documents/${updatedPage}/${encodeURIComponent(query)}#st`);
    }

    const handleSearch = (value: string) => {
        startLoader();
        router.push(`/metarule/documents/0/${encodeURIComponent(value)}#st`);
    }

    return (<>
        <Loader ref={loaderRef} />

        <div id="blogListSection" className="container px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Controls */}
            <FilterSection
                filterTitle='PDF'
                totalRecords={recordsCount}
                onSearch={handleSearch}
                defaultSearch={query}
            />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {
                        documentsData.map((e, index) => <DocumentCard key={index} data={e} />)
                    }
                </div>
            </section>
            <Pagination2
                totalRecords={recordsCount}
                limit={12}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                query={query}
                navigationPath="metarule/documents"
            />
        </div>

    </>);
}
export default DocumentListingSection;