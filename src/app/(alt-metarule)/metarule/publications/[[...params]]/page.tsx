export const revalidate = 120;
export const dynamic = 'force-static';
export const dynamicParams = true;

import { Metadata } from 'next';
import { HeroSection } from '@/components/alt/global';
import { PublicationListingSection } from '@/components/alt/local/publications';
import { ScrollToTopBtn } from '@/components/global';
import { $crud } from '@/factory/crudFactory';


export const metadata: Metadata = {
    title: 'MetaRule | Publications',
};

const Publications = async ({
    params,
}: {
    params: Promise<{ params?: string[] }>;
}) => {

    const segments = (await params).params ?? [];
    const page = segments[0] ?? "0";
    const query = decodeURIComponent(segments[1] ?? "");

    let publicationList: any = [];
    let recordsCount: number = 0;

    try {
        const { data: { rows, count } } = await $crud.retrieve(`metarule/publications?page=${page}&limit=12&search=${query}`);
        publicationList = rows;
        recordsCount = count;
    } catch (e) {
        console.error(e)
    }
    return (<>
        <div className="min-h-screen gradient-primary">
            <HeroSection
                page='publications'
            />
            <PublicationListingSection
                publicationList={publicationList}
                recordsCount={recordsCount}
                currentPage={+page}
                query={query}
            />
            <ScrollToTopBtn />
        </div>
    </>);
}
export default Publications;