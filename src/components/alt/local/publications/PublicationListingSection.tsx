import { FC } from "react";
import PublicationFilterSection from "./PublicationFilterSection";
import PublicationCard from "./PublicationCard";




const PublicationListingSection: FC = () => {
    return (<>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Controls */}
            <PublicationFilterSection/>
            <PublicationCard/>
            {/* Publications Grid/List */}
            
        </div>
    </>);
}
export default PublicationListingSection