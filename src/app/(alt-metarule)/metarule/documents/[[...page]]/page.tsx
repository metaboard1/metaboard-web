export const revalidate = 120;
export const dynamic = 'force-static'; 
export const dynamicParams = true;

import { HeroSection } from "@/components/alt/global";
import { DocumentListingSection } from "@/components/alt/local/test";
import { ScrollToTopBtn } from "@/components/global";
import { $crud } from "@/factory/crudFactory";
import dayjs from "dayjs";



const Documents = async ({
    params,
    searchParams
}: {
    params: Promise<{ page?: string }>;
    searchParams: Promise<{ q?: string }>
}) => {
    const { page: pageParam } = await params;
    const resolvedSearchParams = await searchParams;
    const { q = "" } = resolvedSearchParams || {};
    const page = pageParam?.[0] || "0";

    let documents: any = [];
    let recordsCount: number = 0;

    try {
        const { data: { rows, count } } = await $crud.retrieve(`metarule/documents?page=${page ?? 0}&limit=12&search=${q ?? ''}`);
        documents = rows;
        recordsCount = count;
    } catch (error) {
        console.error('Error fetching article:', error);
    }

    return (<>
        <div>
            {/* Article Hero */}
            <HeroSection
                page='document'
            />
            <p>Generated at: {dayjs().format('hh-m-s')}</p>
            {/* Article Content */}
            <DocumentListingSection
                preloadDocuments={documents}
                recordsCount={recordsCount}
                currentPage={+page}
                query={q}
            />
            <ScrollToTopBtn />
        </div>
    </>);
}
export default Documents;