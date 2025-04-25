// Store/Store.js
import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./MoviesSlice"; // Import the MoviesSlice reducer

const store = configureStore({
  reducer: {
    movies: MoviesSlice, 
  },
});
export default store; 
