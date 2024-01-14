"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_API_URL = "https://api.themoviedb.org/3/search/person?";

export default function Actors() {
  interface Movie {
    id: number;
    poster_path: string;
    profile_path: string;
    title: string;
    backdrop_path: string;
    overview: string;
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === "") return;

    const options = {
      method: "GET",
      url: `${BASE_API_URL}&query=${encodeURIComponent(searchTerm)}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWQzOTY1MTJlNjc3ZjRkZTkwOGY1ZDkwNmI2MmRhZiIsInN1YiI6IjY1YTNlYmQyYmMyY2IzMDBjMDAyM2Q3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vlKyKfaXgl7qDYaXvVBgnjf5z2IJ5Za7b0eMXMTkWUI",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an Actor..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {movies.map((movie) => (
        <ul key={movie.id}>
          <li className=" text-2xl">{movie.title}</li>
          <li>{movie.overview}</li>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`}
            alt=""
          />
        </ul>
      ))}
    </div>
  );
}
