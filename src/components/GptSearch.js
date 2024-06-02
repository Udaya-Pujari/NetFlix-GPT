import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constatnts";

const GptSearch = () => {
 
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="bgimage" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
