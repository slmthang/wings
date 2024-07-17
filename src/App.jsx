
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './components/Layout.jsx';
import Login from './views/Login.jsx';
import Home from './views/Home.jsx';
import Plans from './views/Plans.jsx';
import Subscriptions from './views/Subscriptions.jsx';
import Stats from './views/Stats.jsx';
import Options from './views/Options.jsx';


// appRouter
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,

    children: [
      {
        path: '',
        element: <Login/>
      },

      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'plans',
        element: <Plans/>
      },
      {
        path: 'subscriptions',
        element: <Subscriptions/>
      },
      {
        path: 'stats',
        element: <Stats/>
      },
      
      {
        path: 'options',
        element: <Options/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
