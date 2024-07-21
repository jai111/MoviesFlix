import { createSlice } from '@reduxjs/toolkit';
import { saveState, loadState } from 'Utils/storage';

const initialState = loadState('user') || {
  email: null,
  users: [], 
  watchlist: {},
  Read: {},  
  query: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      saveState('user', state);
    },

    signup: (state, action) => {
      state.users.push(action.payload);
      saveState('user', state);
    },

    logout: (state) => {
      state.email = null;
      saveState('user', state);
    },

    addToWatchlist: (state, action) => {
      const id = action.payload
      const watchlist = {...state.watchlist}
      if(state.email in watchlist){
        watchlist[state.email]?.push(id)
      }
      else{
        watchlist[state.email] = [id]
      }
     
      state.watchlist = watchlist
      saveState('user', state);
    },

    removeFromWatchlist: (state, action) => {
      const id = action.payload
      state.watchlist[state.email] = state.watchlist[state.email].filter(movie => movie.imdbID !== action.payload);
      saveState('user', state);
    },

    removeMultipleFromWatchlist: (state, action) => {
      state.watchlist[state.email] = state.watchlist[state.email].filter(movie => !action.payload.includes(movie.imdbID));
      saveState('user', state);
    },

    addToRead: (state, action) => {
      const id = action.payload
      const Read = {...state.Read}
      if(state.email in Read){
        Read[state.email]?.push(id)
      }
      else{
        Read[state.email] = [id]
      }
      state.Read = Read
      saveState('user', state);
    },

    removeFromRead: (state, action) => {
      
      state.Read[state.email] = state.Read[state.email].filter(movie => movie.imdbID !== action.payload);
      saveState('user', state);
    },

    Query: (state, action) => {
      state.query = action.payload;
      saveState('user', state)
    },
  },
});

export const { 
  login, 
  signup, 
  logout, 
  addToWatchlist, 
  removeFromWatchlist, 
  removeMultipleFromWatchlist, 
  addToRead, 
  removeFromRead, 
  Query 
} = userSlice.actions;

export default userSlice.reducer;
