export const revalidate = 120;
export const dynamic = 'force-static';
export const dynamicParams = true;

import { HeroSection } from "@/components/alt/global";
import { DocumentListingSection } from "@/components/alt/local/documents";
import { ScrollToTopBtn } from "@/components/global";
import { $crud } from "@/factory/crudFactory";


const Documents = async ({
    params,
}: {
    params: Promise<{ params?: string[] }>;
    // searchParams: Promise<{ q?: string }>
}) => {

    const segments = (await params).params ?? [];
    const page = segments[0] ?? "0";
    const query = decodeURIComponent(segments[1] ?? "");

    let documents: any = [];
    let recordsCount: number = 0;

    try {
        const { data: { rows, count } } = await $crud.retrieve(`metarule/documents?page=${page}&limit=12&search=${query}`);
        documents = rows;
        recordsCount = count;
    } catch (error) {
        console.error('Error fetching article:', error);
    }

    return (<>
        <div>
            {/* Article Hero */}
            <HeroSection
                page='MetaRule Insights'
            />
            {/* Article Content */}
            <DocumentListingSection
                documentsData={documents}
                recordsCount={recordsCount}
                currentPage={+page}
                query={query}
            />
            <ScrollToTopBtn />
        </div>
    </>);
}
export default Documents;