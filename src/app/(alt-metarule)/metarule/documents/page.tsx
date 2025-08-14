import { HeroSection } from "@/components/alt/global";
import { DocumentListingSection } from "@/components/alt/local/documents";
import { ScrollToTopBtn } from "@/components/global";



const Documents = () => {
    return (<>
        <div>
            {/* Article Hero */}
            <HeroSection
                page='document'
            />

            {/* Article Content */}
            <DocumentListingSection
                preloadBlogs={[]}
                totalRecords={0}
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