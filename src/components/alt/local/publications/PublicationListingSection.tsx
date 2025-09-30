'use client';

import { useRef, type FC } from "react";
import PublicationCard from "./PublicationCard";
import { Pagination } from "@/components/ui";
import { FilterSection } from "../../global";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/global";
import Image from "next/image";

type props = {
    publicationList: PublicationInterface[];
    recordsCount: number;
    currentPage: number;
    query: string;
}


const PublicationListingSection: FC<props> = ({
    publicationList,
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
        router.push(`/metarule/publications/${updatedPage}/${encodeURIComponent(query)}#hero-para`);
    }

    const handleSearch = (value: string) => {
        startLoader();
        router.push(`/metarule/publications/0/${encodeURIComponent(value)}#hero-para`);
    }

    return (<>

        <Loader ref={loaderRef} />

        <div id="publicationListSection" className="container px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Controls */}
            <FilterSection
                filterTitle='Publication'
                totalRecords={recordsCount}
                onSearch={handleSearch}
                defaultSearch={query}
            />
            <section>
                {
                    publicationList.length ?
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                publicationList.map((e, index) => <PublicationCard key={e.id} data={e} />)
                            }
                        </div>
                        :
                        <div className="flex flex-col items-center gap-5 py-5">
                            <Image
                                alt="no-data-found"
                                src='/assets/images/no_list_found.webp'
                                height={200}
                                width={200}
                            />
                            <span className="text-md font-bold">No data found!</span>
                        </div>
                }

            </section>
            <Pagination
                totalRecords={recordsCount}
                limit={12}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                query={query}
                navigationPath="metarule/publications"
            />
        </div>

    </>);
}
export default PublicationListingSection