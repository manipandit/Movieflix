import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  if (!movies) return;

  return (
    <div className="px-6">
      <h1 className="py-6 text-3xl font-medium text-white">{title}</h1>

      <div className="flex overflow-x-scroll custom-scrollbar scroll-smooth">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
