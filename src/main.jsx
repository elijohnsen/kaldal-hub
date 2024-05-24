import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/components/Navbar";
import NoFind from "./pages/NoFind";
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
    path: "/showroom",
    element: <Showroom />,
  },
  {
    path: "*",
    element: <NoFind />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className={"min-h-screen bg-black"}>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </main>
  </React.StrictMode>
);
