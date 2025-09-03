'use client';

import { FC, memo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useSearchArticle } from '@/context/SearchArticleContext';
import { debounce } from '@/helpers';


type props = {
    onSearch: (val: string) => void;
    defaultValue: string;
}
const SearchBar: FC<props> = ({
    onSearch,
    defaultValue
}) => {

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const searchDebounce = debounce((e) => onSearch(e), 500);

    return (
        <div
            className="relative h-12 w-[100%]"
        >
            <div
                className={`flex items-center gap-2 rounded-full transition-all duration-300 ease-in-out overflow-hidden h-full  bg-white pl-4  pr-2
                    ${isFocused
                        ? 'pl-6 pr-4 border-2 border-red-500 shadow-md '
                        : 'justify-center bg-transparent border'
                    }`}
            >
                <button
                    type="button"
                    className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                    aria-label="Search"
                >
                    <Search className="w-5 h-5" />
                </button>


                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search articles..."
                    defaultValue={decodeURIComponent(defaultValue ?? '')}
                    onChange={(e) => {
                        searchDebounce(e.target.value);
                    }}
                    onBlur={() => {
                        setTimeout(() => setIsFocused(false), 150);
                    }}
                    onFocus={() => setIsFocused(true)}
                    className={'bg-transparent text-gray-900 placeholder-gray-500 border-none outline-none w-full text-sm sm:text-base transition-all duration-300 ease-in-out opacity-100 ml-2'}
                />

                {isFocused && (
                    <button
                        // onClick={handleClear}
                        className="text-gray-400 hover:text-gray-600 transition flex-shrink-0"
                        aria-label="Clear search"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>


        </div>
    );
};

export default memo(SearchBar);