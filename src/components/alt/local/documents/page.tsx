import { HeroSection } from "@/components/alt/global";
import { DocumentListingSection } from "@/components/alt/local/test";
import { ScrollToTopBtn } from "@/components/global";
import { $crud } from "@/factory/crudFactory";



const Documents = async ({ params, searchParams }: { params: { page: string }; searchParams?: { q: string } }) => {
    const { page } =  params;
    // @ts-ignore
    const { q = '' } = searchParams;

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

            {/* Article Content */}
            <DocumentListingSection
                preloadDocuments={documents}
                recordsCount={recordsCount}
                currentPage={+page}
                query={q}
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