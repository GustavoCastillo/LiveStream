import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => ({ message: "Hello Data Router!" }),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => ({ message: "Hello Data Router!" }),
      },
      {
        path: "/movie/:id",
        element: <Movie />,
        loader: () => ({ message: "Hello Data Router!" }),
      },
      {
        path: "/search",
        element: <Search />,
        loader: () => ({ message: "Hello Data Router!" }),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () => ({ message: "Hello Data Router!" }),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
