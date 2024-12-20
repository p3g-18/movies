import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ posterPath, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("NAvigating to", `/MovieDetails/${id}`);
    navigate(`/MovieDetails/${id}`);
  };

  if (!posterPath) return null;
  return (
    <div className="w-[30%] h-[20%] md:w-[15%] md:h-[25%] flex-shrink-0 m-4 ">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movieposter"
        className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 shadow-xl rounded-xl"
        loading="lazy"
        onClick={handleClick}
      />
    </div>
  );
};

export default MovieCard;
