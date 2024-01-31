/* eslint-disable react/jsx-no-undef */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ShowPost from "./pages/ShowPost";
import ErrorPage from "./pages/ErrorPage";

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
  {
    path: "/signin",
    element: <h1>Sign in</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <h1>Log in</h1>,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
