"use client";

import React, { useEffect, useState } from "react";

export default function Movies() {
  interface Movie {
    id: number;
    poster_path: string;
    title: string;
  }

  const [movieList, setMovieList] = useState<Movie[]>([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=39d396512e677f4de908f5d906b62daf",
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results as Movie[]));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);

  return (
    <div>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
