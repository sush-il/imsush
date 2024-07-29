import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllProjects from "./pages/allProjects.tsx";
import BuildMedia from "./pages/buildMedia.tsx";
import AllBuilds from "./pages/allBuilds.tsx";
import Extras from "./pages/extras.tsx";
import AdminPage from "./pages/adminPage.tsx";
import { DataProvider } from "./utils/dataContext.tsx";
import UniModuleList from "./pages/uniModuleList.tsx";
import Login from "./pages/login.tsx";
import ShowCV from "./pages/showCV.tsx";
import ExperiencePage from "./pages/experience.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/allProjects",
    element: <AllProjects />,
  },
  {
    path: "/builds",
    element: <BuildMedia />,
  },
  {
    path: "/allBuilds",
    element: <AllBuilds />,
  },
  {
    path: "extras",
    element: <Extras />,
  },
  {
    path: "uni",
    element: <UniModuleList />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: <AdminPage />,
  },
  {
    path: "cv",
    element: <ShowCV />,
  },
  {
    path: "experience",
    element: <ExperiencePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
