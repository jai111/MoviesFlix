import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'Store';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from 'Routes';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <Suspense fallback={<div>...loading</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  </Provider>
);
