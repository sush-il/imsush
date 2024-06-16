import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import AllProjects from './pages/allProjects.tsx';
import BuildMedia from './pages/buildMedia.tsx';
import AllBuilds from './pages/allBuilds.tsx';
import Extras from './pages/extras.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/allProjects",
    element: <AllProjects />
  },
  {
    path:"/builds",
    element: <BuildMedia />
  },
  {
    path:"/allBuilds",
    element: <AllBuilds />
  },
  {
    path:"extras",
    element: <Extras />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


