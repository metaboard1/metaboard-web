import { HeroSection } from "@/components/alt/global";
import { DocumentListingSection } from "@/components/alt/local/test";
import { ScrollToTopBtn } from "@/components/global";
import { $crud } from "@/factory/crudFactory";



const Documents = async ({ params, searchParams }: { params: Promise<{ page: string }>; searchParams?: Promise<{ page: string }>; }) => {
    const { page } = await params;
    // @ts-ignore
    const { q } = await searchParams;

    let documents: any = [];
    let recordsCount: number = 0;
    try {
        const { data: { rows, count } } = await $crud.retrieve(`metarule/documents?page=${+page}&search=${decodeURIComponent(q) ?? ''}`);
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

            {/* Article Content */}
            <DocumentListingSection
                preloadDocuments={documents}
                recordsCount={recordsCount}
                currentPage={+page}
            />

            {/* <div className="lg:col-span-4 mt-12 lg:mt-0">
                <div className="sticky top-24 space-y-8">
                    <RelatedPosts />
                    <BrowseByTagSection />
                </div>
            </div> */}
            <ScrollToTopBtn />
        </div>
    </>);
}
export default Documents;