import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from 'Services/movieApi';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

