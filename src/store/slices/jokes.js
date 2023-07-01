import { createSlice } from "@reduxjs/toolkit";

export const jokesSlice = createSlice({
  name: "jokes",
  initialState: {
    data: [],
  },
  reducers: {
    setJokes(state, { payload }) {
      state.data = payload;
    },
  },
});

export const { setJokes } = jokesSlice.actions;
export default jokesSlice.reducer;
