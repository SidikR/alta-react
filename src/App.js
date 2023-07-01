import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import { useState } from "react";
import Todo from "./components/pages/todo";
import Products from "./components/pages/products";
import { linkProducts } from "./helper/constants";
import Comments from "./components/pages/comments";
import store from "./store";
import { Provider } from "react-redux";
import ContextWrapper from "./context";

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
  {
    path: "/comments",
    element: <Comments />,
  },
]);

function App() {
  const [isAuth, isAuthSet] = useState(true);
  return (
    <Provider store={store}>
      <ContextWrapper>
        <RouterProvider router={router} />
      </ContextWrapper>
    </Provider>
  );
}

export default App;
