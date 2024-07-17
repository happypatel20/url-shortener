import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Redirect from './components/Redirect';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:slug",
    element: <Redirect />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
