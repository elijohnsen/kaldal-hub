import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/components/Navbar";
import NoFind from "./pages/NoFind";
import Video from "./pages/Video";
import Showroom from "./pages/Showroom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/showroom",
    element: <Showroom/>,    
  },

  {
    path: "*",
    element: <NoFind />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className={'min-h-screen bg-cyan-800'}>

    <Navbar />
    <RouterProvider router={router}></RouterProvider>
    </section>
  </React.StrictMode>
);
