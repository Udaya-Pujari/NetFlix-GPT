import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieName, movieResults } = gpt;
  //or u can subscribe like this also:   const { movieName, movieResults }= useSelector((store) => store.gpt);

  if (!movieName) return null;

  return (
    <div>
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          {movieName.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName[0]}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
