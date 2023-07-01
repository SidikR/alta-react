import { createSlice } from "@reduxjs/toolkit";
import bagImg from "../../assets/img/bag.jpg";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [
      {
        id: 1,
        img: bagImg,
        title: "Casual Bag",
        price: 785000,
      },
      {
        id: 2,
        img: bagImg,
        title: "Pink Bag",
        price: 240000,
      },
      {
        id: 3,
        img: bagImg,
        title: "Yellow Bag",
        price: 125000,
      },
      {
        id: 4,
        img: bagImg,
        title: "Green Bag",
        price: 664000,
      },
    ],
    cartCounter: []
  },
  reducers: {
    addToCart(state,{payload}) {
      let sample = [...state.cartCounter];
      sample.push(payload)
      console.log(sample)
      state.cartCounter = sample;
    }   
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
