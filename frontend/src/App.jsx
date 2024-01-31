/* eslint-disable react/jsx-no-undef */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ShowPost from "./pages/ShowPost";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/blog/navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "post/:id/",
    element: <ShowPost />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
