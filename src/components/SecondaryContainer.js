import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // this also correct if you don't want
  // if (!movies.nowPlayingMovies) {
  //   return <h1>Loading movies...!</h1>;
  // }

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-10 relative z-20 text-white bg-gradient-to-r from-black">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          {/* 
        MovieList
          -moieCard*n
            -Popular
            -Trending
            -Now playing
            -Horror
      */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
