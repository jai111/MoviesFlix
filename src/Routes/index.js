import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from 'react';
import App from "App";


const Home = lazy(() => import('Pages/Home'));

const MovieDetails  = lazy(()=>import('Pages/MovieDetails'))
const Login = lazy(()=>import('Pages/Login'))
const FavouriteList = lazy(()=>import('Pages/FavouriteList'))
const SideBarLayout = lazy(()=>import('Layouts/SideBarLayout'))

export const routes = createBrowserRouter([
    {
      element: <App/>,
      children: [
        {
          element: <SideBarLayout/>,
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
      ]
    }
        
  ]);