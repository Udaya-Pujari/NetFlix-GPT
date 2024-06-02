import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies); //nowPlayingMovies     //nowPlayingMovies
  // console.log("==>", movies);

  if (movies === null) return; //or if(!movies) return
  const mianMovie = movies[0];
  // console.log(mianMovie);

  const { original_title, overview, id } = mianMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
