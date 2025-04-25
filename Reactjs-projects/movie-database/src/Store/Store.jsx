// Store/Store.js
import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./MoviesSlice"; // Import the MoviesSlice reducer

const store = configureStore({
  reducer: {
    movies: MoviesSlice, // Add the MoviesSlice reducer to the store
  },
});
export default store; 
