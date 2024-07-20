import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchMoviesQuery } from 'Services/movieApi';
import SearchBar from 'Components/SearchBar';
import MovieList from 'Components/MovieList';
import { BookmarkPlus } from 'lucide-react';
import { Query } from 'Store/userSlice';

function Home() {
  const initialQuery = useSelector((state) => state.user.query);
  const [query, setQuery] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { data, error, isLoading , isFetching} = useSearchMoviesQuery({ query: searchTerm, page });

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(Query(query.trim()));
      setSearchTerm(query.trim());
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="rounded-md bg-white p-4 border-2 border-primary text-[15px]">
        <h2 className="text-3xl">
          Welcome to <span className="text-primary">Watchlists</span>
        </h2>
        <p className="mt-4">
          Browse movies, add them to watchlists and share them with friends.
          <br />
          <div className="flex flex-wrap items-center">
            <span>Just click the&nbsp;</span>
            <span className="flex items-center">
              <BookmarkPlus fill="black" className="text-white" size={32} />
            </span>
            <span>&nbsp;to add a movie, click on the card to see more details or to mark the movie as watched.</span>
          </div>
        </p>
      </div>

      <SearchBar
        query={query}
        handleSearch={handleSearch}
        handleQuery={(e) => setQuery(e.target.value)}
        isLoading={isFetching}
      />
      <MovieList
        page={page}
        handlePageChange={handlePageChange}
        data={data}
        isLoading={isFetching}
      />
    </>
  );
}

export default Home;
