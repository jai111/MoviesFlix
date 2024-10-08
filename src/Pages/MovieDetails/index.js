import React from 'react';
import { useParams, Link as RouterLink, useLocation } from 'react-router-dom';
import { useGetMovieDetailsQuery } from 'Services/movieApi';
import MovieDetailsSkeleton from 'Components/MovieDetailsSkeleton';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { data: movie, error, isLoading } = useGetMovieDetailsQuery(id);

  const fromPage = location.state?.refer || '/';
  console.log(fromPage, 'from');

  if (isLoading) return (
    <div className="flex flex-col items-center justify-center h-full font-mono">
      <div className="w-full max-w-4xl p-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} to={fromPage} color="inherit">
            {fromPage === '/favourites' ? 'Favorites' : 'Home'}
          </Link>
          <Typography color="textPrimary">Loading...</Typography>
        </Breadcrumbs>
        <MovieDetailsSkeleton />
      </div>
    </div>
  );

  if (error) return <div>Error loading movie details. Please try again.</div>;

  return (
    <div className="flex flex-col items-center justify-center  font-mono">
      <div className="w-full max-w-4xl p-4">
        <Breadcrumbs aria-label="breadcrumb" className="mb-4">
          <Link component={RouterLink} to={fromPage} color="inherit">
            {fromPage === '/favourites' ? 'Favorites' : 'Home'}
          </Link>
          <Typography color="textPrimary">{movie?.Title}</Typography>
        </Breadcrumbs>

        <div className="rounded-md bg-gray-800 shadow-lg p-4 overflow-hidden">
          <div className="md:flex leading-none">
            <div className="flex-none">
              <img
                src={movie?.Poster}
                alt="pic"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-md shadow-2xl border-4 border-gray-300 mx-auto md:mx-0"
              />
            </div>

            <div className="flex-col text-gray-300 md:ml-4 mt-4 md:mt-0">
              <p className="pt-4 text-2xl font-bold text-center md:text-left">
                {movie?.Title} ({movie?.Year})
              </p>
              <hr className="hr-text mt-4 mb-4" data-content="" />
              <div className="text-md flex justify-center md:justify-start px-4 my-2">
                <span className="font-bold">
                  {movie?.Runtime} | {movie?.Genre}
                </span>
              </div>
              <p className=" px-4 my-4 text-sm text-left">
                {movie?.Plot}
              </p>
              <p className="flex text-md px-4 my-2 mb-5">
                Rating: {movie?.imdbRating}
                <span className="font-bold px-2">|</span>
                Votes: {movie?.imdbVotes}
              </p>
              <p className="flex text-md px-4 my-2">
                Director: {movie?.Director}
              </p>
              <p className="flex text-md px-4 my-2 mb-5">
                Actors: {movie?.Actors}
              </p>
              {movie?.Ratings?.map((rating, id) => (
                <p className="flex text-md px-4 my-2" key={id}>
                  {rating.Source}: {rating?.Value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
