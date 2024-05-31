import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // you are fetching movies from API, so it takes few seconds to fetch from server
  // Even before getting movies, this componenent will start loading, so movies.nowPlayingMovies will be null by defulat that you set in the store, 
  // so when we don't have movies we should display Shimmer UI
  if(!movies.nowPlayingMovies) {
    return <h1>Loading movies...!</h1>
  }
  return (
    <div className="text-white bg-gradient-to-r from-black">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
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
  );
};

export default SecondaryContainer;
