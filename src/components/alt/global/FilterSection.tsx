'use client';

import { type FC, useEffect, useRef, useState } from "react";
import { Filter, Search } from "lucide-react";
import { Button, Badge } from "../ui";
import { $crud } from "@/factory/crudFactory";


type props = {
    totalRecords: number;
    filterTitle: string;
    showTagFilter?: boolean;
    defaultSearch?: string;
    onSearch: (search: string) => void;
}

const FilterSection: FC<props> = ({
    totalRecords,
    filterTitle,
    defaultSearch,
    showTagFilter,
    onSearch
}) => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [tags, setTags] = useState<{ name: string }[]>([]);

    useEffect(() => {
        retrieveTags();
    }, []);

    const retrieveTags = async () => {
        try {
            const { data: { rows } } = await $crud.retrieve('tags');
            setTags(() => rows);
        } catch (e) {
            console.error(e)
        }
    }
    const handleSearch = () => onSearch(searchRef?.current?.value ?? '');

    return (<>
        <section>
            <div className="flex flex-col sm:flex-row lg:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold">{filterTitle}s Library</h2>
                    <Badge variant='outline'>
                        {`${totalRecords} ${filterTitle}${totalRecords > 1 ? 's' : ''}`}
                    </Badge>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex border border-5 border-gray bg-white br-10 rounded-lg p-[3px] w-screen sm:w-auto">
                        <input
                            ref={searchRef}
                            name="search"
                            type="text"
                            defaultValue={decodeURIComponent(defaultSearch ?? '')}
                            placeholder={`Search for ${filterTitle.toLowerCase()}...`}
                            className="block min-w-0 grow py-1.5 pr-3 pl-3 bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm"
                        />
                        <Button
                            variant="default"
                            size="sm"
                            className="border-glass"
                            onClick={handleSearch}
                        >
                            <Search className="w-4 h-4" />
                            Search
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {
                    defaultSearch &&
                    <div className="flex items-center space-x-2 text-sm flex-wrap gap-2">
                        <span className="text-gray-600 font-bold">Search results for:</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium flex items-center max-w-32 sm:max-w-48 md:max-w-64 lg:max-w-80">
                            <span className="truncate">{decodeURIComponent(defaultSearch ?? '')}</span>
                            <button className="ml-2 text-red-600 hover:text-red-800 flex-shrink-0" onClick={() => onSearch('')}>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                }

                {
                    showTagFilter &&
                    <div className="flex flex-wrap gap-2">
                        {
                            tags.map((tag, index) => <Badge
                                key={index}
                                variant='outline'
                                className='cursor-pointer'
                                onClick={() => onSearch(`#${tag.name}`)}
                            >
                                # {tag.name}
                            </Badge>)
                        }
                        {/* <Badge
                            variant='outline'
                            className='cursor-pointer'
                            onClick={() => onSearch('')}
                        >
                            Show all
                        </Badge> */}
                    </div>
                }
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
export default FilterSection;