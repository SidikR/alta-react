import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import { useState } from "react";
import Todo from "./components/pages/todo";
import Products from "./components/pages/products";
import { linkProducts } from "./helper/constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: linkProducts,
    element: <Products />,
  },
]);

function App() {
  const [isAuth, isAuthSet] = useState(true);
  return <RouterProvider router={router} />;
}

export default App;
