'use client';

import { FC, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current?.focus();
    };

    return (
        <div className="relative h-12">
            <div
                className={`flex items-center gap-2  rounded-full transition-all duration-300 ease-in-out overflow-hidden h-full 
          ${isFocused ? 'w-80 pl-4 pr-2 border-2 border-red-500 shadow-md bg-white' : 'w-12 justify-center hover:border-gray-400 bg-transparent ' }`}
            >
                <button
                    type="button"
                    onClick={() => {
                        setIsFocused(true);
                        setTimeout(() => inputRef.current?.focus(), 10);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                >
                    <Search className="w-5 h-5" />
                </button>

                {
                    isFocused &&
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search articles..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onBlur={() => setIsFocused(false)}
                        className={`bg-transparent text-gray-900 placeholder-gray-500 border-none outline-none w-full
            transition-all duration-300 ease-in-out
            ${isFocused ? 'opacity-100 ml-2' : 'opacity-0 ml-0 pointer-events-none'}`}
                    />
                }

                {isFocused && searchValue && (
                    <button
                        onClick={handleClear}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>

            {isFocused && (
                <div className="absolute top-full mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-30 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-300">
                    <div className="p-3 text-sm text-gray-600 border-b border-gray-100">
                        {searchValue ? (
                            <>
                                Search results for{' '}
                                <span className="font-semibold text-gray-800">
                                    "{searchValue}"
                                </span>
                            </>
                        ) : (
                            <span className="text-gray-500">Start typing to search...</span>
                        )}
                    </div>

                    {searchValue && (
                        <div className="py-2 max-h-48 overflow-y-auto">
                            {[
                                `${searchValue} - Popular search`,
                                `${searchValue} trends`,
                                `Latest ${searchValue} updates`,
                                `${searchValue} guide`,
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="px-4 py-3 flex items-center space-x-2 hover:bg-gray-50 cursor-pointer text-sm border-b border-gray-50 last:border-b-0"
                                >
                                    <Search className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
