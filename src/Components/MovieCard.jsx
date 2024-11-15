import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-[15%] h-[25%] flex-shrink-0 m-4 ">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movieposter"
        className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 shadow-xl rounded-xl"
      />
    </div>
  );
};

export default MovieCard;
