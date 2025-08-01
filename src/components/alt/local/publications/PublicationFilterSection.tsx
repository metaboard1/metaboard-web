import { Filter, Grid, List } from "lucide-react";
import { FC } from "react";
import { Badge, Button } from "../../ui";




const PublicationFilterSection: FC = () => {
    return (<>
        <section className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">Publications Library</h2>
                    <Badge variant="secondary" className="glass">
                        4 publications
                        {/* {filteredPublications.length} {filteredPublications.length === 1 ? 'publication' : 'publications'} */}
                    </Badge>
                </div>

                <div className="flex items-center gap-4">
                    {/* <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-glass border border-glass rounded-md px-3 py-2 text-sm text-foreground"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-background">
                                {option.label}
                            </option>
                        ))}
                    </select> */}

                    
                </div>
            </div>

            {/* Category Filter */}
            {/* <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="border-glass"
                    >
                        {category}
                    </Button>
                ))}
            </div> */}
        </section>
    </>);
}
export default PublicationFilterSection;