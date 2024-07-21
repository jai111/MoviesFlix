import React from 'react';
import { SearchIcon } from 'lucide-react';

function SearchBar({ handleQuery, query, handleSearch, isLoading }) {
  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0">
        <div className="relative flex w-full w-full">
          <SearchIcon className="absolute text-gray-400 mt-3 ml-2 w-[22px] h-[22px]" strokeWidth={1.5} />
          <input
            type="text"
            value={query}
            onChange={handleQuery}
            placeholder="Search for a movie..."
            className="w-full rounded-md border p-2 pl-10 outline-gray-500 border-gray-400"
            aria-label="Search for a movie"
          />
        </div>
        <button 
          type='submit' 
          className="w-full md:w-auto mt-4 md:mt-0 md:ml-4 rounded-md bg-primary p-2 text-white" 
          disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
