import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import jokesReducer from "./slices/jokes";

export default configureStore({
  reducer: {
    products: productsReducer,
    jokes: jokesReducer
  },
});
