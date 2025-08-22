'use client';

import { type FC } from "react";
import PublicationCard from "./PublicationCard";
import { Pagination2 } from "@/components/ui";
import { FilterSection } from "../../global";
import { useRouter } from "next/navigation";

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

    const router = useRouter();

    const handlePageChange = (updatedPage: number) => {
        router.push(`/metarule/publications/${updatedPage}/${encodeURIComponent(query)}#hero-para`);
    }

    const handleSearch = (value: string) => {
        router.push(`/metarule/publications/0/${encodeURIComponent(value)}#hero-para`);
    }

    return (<>

        <div id="publicationListSection" className="container px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            {/* Controls */}
            <FilterSection
                filterTitle='Publication'
                totalRecords={recordsCount}
                onSearch={handleSearch}
                defaultSearch={query}
            />
            <section>
                <div className={true ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                    {
                        publicationList.map((e) => <PublicationCard key={e.id} data={e} />)
                    }
                </div>
            </section>
            <Pagination2
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