import React from "react";
import { IMG_CDN_URL } from "../utils/constatnts";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movies List" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
