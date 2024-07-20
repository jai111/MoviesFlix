import React from 'react';
import { SearchIcon } from 'lucide-react';

function SearchBar({ handleQuery, query, handleSearch, isLoading }) {
  return (
    <div className="flex items-center mt-6">
      <div className="flex w-full">
        <SearchIcon className="pointer-events-none w-8 h-8 absolute text-gray-400 mt-[9px] ml-2 w-[22px] h-[22px]" strokeWidth={1.5} />
        <input
          type="text"
          value={query}
          onChange={handleQuery}
          placeholder="Search for a movie..."
          className="w-full rounded-md border p-2 outline-gray-500 border-gray-400 pl-[40px]"
          aria-label="Search for a movie"
        />
      </div>
      <button onClick={handleSearch} className="ml-4 rounded-md bg-primary p-2 text-white" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
}

export default SearchBar;
