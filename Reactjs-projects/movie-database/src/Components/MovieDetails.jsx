// components/MovieDetails.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieAction, deleteMovieAction, updateMovieAction } from "../Store/MoviesSlice";

const MovieDetails = () => {
  const { movies } = useSelector((state) => state.movies);
  const [movie, setMovie] = useState({ id: "", title: "", director: "", releaseYear: "", genre: "", rating: "", actors: [] });
  const [index, setIndex] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newMovie = { ...movie };
    newMovie[e.target.name] = e.target.value;
    setMovie(newMovie);
  };

  const handleAddMovie = () => {
    dispatch(addMovieAction(movie));
    setMovie({ id: "", title: "", director: "", releaseYear: "", genre: "", rating: "", actors: [] });
  };

  const handleEdit = (mov, i) => {
    setMovie(mov);
    setIndex(i);
  };

  const handleUpdateMovie = () => {
    dispatch(updateMovieAction({ id: movie.id, movie }));
    setMovie({ id: "", title: "", director: "", releaseYear: "", genre: "", rating: "", actors: [] });
    setIndex(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteMovieAction({ id }));
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <input type="text" name="title" value={movie.title} onChange={handleChange} /><br />
        <label>Director</label>
        <input type="text" name="director" value={movie.director} onChange={handleChange} /><br />
        <label>Release Year</label>
        <input type="text" name="releaseYear" value={movie.releaseYear} onChange={handleChange} /><br />
        <label>Genre</label>
        <input type="text" name="genre" value={movie.genre} onChange={handleChange} /><br />
        <label>Rating</label>
        <input type="text" name="rating" value={movie.rating} onChange={handleChange} /><br />
        <label>Actors (comma separated)</label>
        <input type="text" name="actors" value={movie.actors.join(", ")} onChange={(e) => setMovie({ ...movie, actors: e.target.value.split(",") })} /><br />
        {index === null ? (
          <button type="button" onClick={handleAddMovie}>Add Movie</button>
        ) : (
          <button type="button" onClick={handleUpdateMovie}>Update Movie</button>
        )}
      </form>

      <table border={1} style={{ width: "80%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Release Year</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Actors</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((mov, i) => (
            <tr key={mov.id}>
              <td>{mov.title}</td>
              <td>{mov.director}</td>
              <td>{mov.releaseYear}</td>
              <td>{mov.genre}</td>
              <td>{mov.rating}</td>
              <td>{mov.actors.join(", ")}</td>
              <td>
                <button onClick={() => handleEdit(mov, i)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(mov.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
  
};

export default MovieDetails;
