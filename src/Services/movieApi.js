import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL } from 'Utils/constants';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (data) => `?apikey=${API_KEY}&s=${data.query}&page=${data.page}`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `?apikey=${API_KEY}&i=${id}`,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieDetailsQuery } = movieApi;
