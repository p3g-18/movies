import React from "react";
import { useSelector } from "react-redux";
import useFetchMovieDetails from "../Hooks/useFetchMovieDetails";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constants";
import Layout from "../Layout";

const Description = () => {
  const { id } = useParams();
  useFetchMovieDetails(id);
  const details = useSelector((store) => store.movies.details);

  if (!details) {
    return <div>Loading movie details...</div>;
  }

  const {
    title,
    overview,
    release_date,
    poster_path,
    genres,
    tagline,
    backdrop_path,
    popularity,
    runtime,
  } = details;

  const genreList = genres ? genres.map((genre) => genre.name).join(", ") : "";
  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60); // Divide by 60 to get hours
    const mins = minutes % 60; // Get the remainder as minutes
    return `${hours}h ${mins}m`;
  }

  return (
    <div className="relative ">
      <img
        src={IMG_CDN_URL + backdrop_path}
        className="fixed w-[100%] h-[100%] object-cover filter blur-md"
        alt="Backdrop"
      />

      <div className="relative flex items-center justify-start p-8">
        <img
          src={IMG_CDN_URL + poster_path}
          className="relative w-[20%] h-[50%] flex-shrink-0 rounded-2xl  shadow-md"
          alt="Poster"
        />

        <div className="ml-8 text-white">
          <h1 className="text-4xl font-bold mb-4 p-2">{title}</h1>
          <span className="p-2">
            {convertMinutesToHoursAndMinutes(runtime)}
          </span>
          <span className="p-2">• {genreList}</span>
          <span>• {release_date.replace(/-/g, "/")}</span>
          <h3 className="mb-4 text-sm p-2">{tagline}</h3>
          <p className="text-lg top-2 p-2">{overview}</p>
          <button className="p-4 m-4 bg-blue-700 rounded-xl">
            Play Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
