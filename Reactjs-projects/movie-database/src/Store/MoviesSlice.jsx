
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: 1, title: "Inception", director: "Christopher Nolan", releaseYear: 2010, genre: "Sci-Fi", rating: 8.8, actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"] },
    { id: 2, title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, genre: "Action", rating: 9.0, actors: ["Christian Bale", "Heath Ledger"] },
    { id: 3, title: "Interstellar", director: "Christopher Nolan", releaseYear: 2014, genre: "Sci-Fi", rating: 8.6, actors: ["Matthew McConaughey", "Anne Hathaway"] }
  ]
};

const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    deleteMovieAction: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
    },
    addMovieAction: (state, action) => {
      state.movies.push(action.payload);
    },
    updateMovieAction: (state, action) => {
      const { id, movie } = action.payload;
      const index = state.movies.findIndex(m => m.id === id);
      if (index !== -1) {
        state.movies[index] = movie;
      }
    }
  }
});

export default MoviesSlice.reducer;
export const { deleteMovieAction, addMovieAction, updateMovieAction } = MoviesSlice.actions;
