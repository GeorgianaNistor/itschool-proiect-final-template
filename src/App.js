import React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
