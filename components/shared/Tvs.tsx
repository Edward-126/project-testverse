"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_API_URL = "https://api.themoviedb.org/3/search/tv?";

export default function Tvs() {
  interface Movie {
    adult: boolean;
    backdrop_path?: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    first_air_date?: string;
    name: string;
    vote_average: number;
    vote_count: number;
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
    <div className=" relative h-screen w-full">
      <div className=" absolute left-1/2 top-1/4 h-fit w-fit -translate-x-1/2 -translate-y-1/2">
        <input
          className=" m-1 mt-3 w-full rounded-lg border border-gray-400 bg-zinc-800/20 p-2 ring-red-600 focus:outline-none focus:ring-4"
          type="text"
          placeholder="Search for a Tv Series"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="m-8 flex flex-row flex-wrap items-center justify-between gap-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="h-fit max-w-xl overflow-hidden rounded-lg bg-white shadow-md"
          >
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="Card image"
            />
            <div className="px-6 py-4">
              <label htmlFor="name" className=" text-neutral-500">
                Name
              </label>
              <input
                name="name"
                className="mb-3 h-fit w-full text-2xl font-bold"
                value={movie.name}
              ></input>
              <label htmlFor="native" className=" text-neutral-500">
                Native Name
              </label>
              <input
                name="native"
                className="mb-3 h-fit w-full text-2xl font-bold"
                value={movie.original_name}
              ></input>
              <label htmlFor="overview" className=" text-neutral-500">
                Overview
              </label>
              <textarea
                name="overview"
                value={movie.overview}
                className=" h-fit w-full"
              ></textarea>
              <label htmlFor="nativeLanguage" className=" text-neutral-500">
                Language
              </label>
              <input
                name="nativeLanguage"
                className="mb-3 h-fit w-full text-2xl font-bold"
                value={movie.original_language}
              ></input>
              <label htmlFor="firstAir" className=" text-neutral-500">
                First Aired
              </label>
              <input
                name="firstAir"
                className="mb-3 h-fit w-full text-2xl font-bold"
                value={movie.first_air_date}
              ></input>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
