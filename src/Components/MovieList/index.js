
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from 'Components/MovieCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from 'Components/Spinner';
import { useNavigate } from 'react-router-dom';
import { addToRead, addToWatchlist, removeFromRead, removeFromWatchlist } from 'Store/userSlice';
import NoData from 'Components/NoData';
import { responsive } from 'Utils/constants';


function MovieList({ page, handlePageChange, data, isLoading }) {
  const navigate = useNavigate();

  const movies = data?.Search || [];
  const totalResults = data?.totalResults || 0;
  const moviesPerPage = 10;
  const email = useSelector(state => state.user.email);
  let watchlist = useSelector(state => state.user.watchlist) || {};
  watchlist = watchlist[email] || [];
  let read = useSelector(state => state.user.Read) || {};
  read = read[email] || [];

  const dispatch = useDispatch();

  const handleClick = (movieId) => {
    navigate(`/${movieId}`);
  };

  const handleAdd = (e, movie) => {
    e.stopPropagation();
    dispatch(addToWatchlist(movie));
  };

  const handleRemove = (e, movie) => {
    e.stopPropagation();
    dispatch(removeFromWatchlist(movie.imdbID));
  };

  const handleRead = (e, movie) => {
    e.stopPropagation();
    dispatch(addToRead(movie));
  };

  const handleUnread = (e, movie) => {
    e.stopPropagation();
    dispatch(removeFromRead(movie.imdbID));
  };

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-[100px] flex-col'>
        <Spinner />
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={Math.ceil(totalResults / moviesPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    );
  }

  if (!isLoading && movies.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <div className='max-w-[100%] grid overflow-x-hidden'>
        <Carousel responsive={responsive}>
          {movies.map((movie, id) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              inWatchlist={watchlist?.some(w => w.imdbID === movie.imdbID)}
              handleClick={() => handleClick(movie?.imdbID)}
              handleAdd={(e) => handleAdd(e, movie)}
              handleRemove={(e) => handleRemove(e, movie)}
              handleRead={(e) => handleRead(e, movie)}
              handleUnread={(e) => handleUnread(e, movie)}
              inRead={read?.some(w => w.imdbID === movie.imdbID)}
            />
          ))}
        </Carousel>
      </div>

      <Stack spacing={2} alignItems="center">
        <Pagination
          count={Math.ceil(totalResults / moviesPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
}

export default MovieList;
