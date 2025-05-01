import React from 'react';

const MovieCard = ({ movie, removeMovie, addToWatchList }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Year:</strong> {movie.releaseYear}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
      <button onClick={() => removeMovie(movie.title)}></button>
      <button onClick={() => addToWatchList(movie.title)}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
