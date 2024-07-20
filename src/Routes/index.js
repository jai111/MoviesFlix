import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from 'react';
import App from "App";


const Home = lazy(() => import('Pages/Home'));

const MovieDetails  = lazy(()=>import('Pages/MovieDetails'))
const Login = lazy(()=>import('Pages/Login'))
const FavouriteList = lazy(()=>import('Pages/FavouriteList'))

export const routes = createBrowserRouter([
    {
      element: <App/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/favourites',
          element: <FavouriteList/>
        },
        {
          path: '/:id',
          element: <MovieDetails/>
        }
        
      ]
    },
    {
      path: '/login',
      element: <Login/>
    }
        
  ]);