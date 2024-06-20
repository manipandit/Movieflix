import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48 pr-3 hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-200">
      <img src={`${IMG_CDN_URL}/${posterPath}`} alt="poster-img" />
    </div>
  );
}

export default MovieCard;
