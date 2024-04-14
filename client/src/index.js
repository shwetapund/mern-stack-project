import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './views/Signup.js';
import Login from './views/Login.js';
import Registration from './views/Registration.js';
import PhotoCapture from './views/PhotoCapture.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/registration',
    element:<Registration/>
  },
  {
    path:'/photo-capture',
    element:<PhotoCapture/>
  }
])

root.render(
  <RouterProvider router={router} />
);

