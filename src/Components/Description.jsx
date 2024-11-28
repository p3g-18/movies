import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchMovieDetails from "../Hooks/useFetchMovieDetails";
import useModalTrailer from "../Hooks/useModalTrailer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import { openModal } from "../utils/movieSlice";
import Modal from "./Modal";

const Description = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useFetchMovieDetails(id);
  useModalTrailer(id);

  const details = useSelector((store) => store.movies.details);
  const trailer = useSelector((store) => store.movies.modalTrailer);
  console.log("trauelr", trailer);
  // Trailer key from Redux

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
    runtime,
  } = details;

  const genreList = genres ? genres.map((genre) => genre.name).join(", ") : "";

  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  }

  const handleClick = () => {
    if (trailer) {
      console.log("button clicked");
      dispatch(openModal());
      console.log("modal should", trailer);
    } else {
      console.warn("No trailer available to play.");
    }
  };

  return (
    <div className="relative">
      <Modal />
      <img
        src={IMG_CDN_URL + backdrop_path}
        className="fixed w-[100%] h-[100%] object-cover filter blur-md"
        alt="Backdrop"
      />
      <div className="ml-8 text-white mb-32">
        {/* Home Button fixed at top-right corner */}
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-red-700 p-3 rounded-2xl font-bold">
            <Link to="/browse">Home</Link>
          </button>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center lg:items-start p-8">
          <img
            src={IMG_CDN_URL + poster_path}
            className="w-[90%] md:w-[25%]  rounded-2xl shadow-md mb-2 mt-20 lg:mb-0 lg:mt-20 lg:m-2 z-10"
            alt="Poster"
          />

          <div className="mt-auto md:mt-20 mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 p-2">{title}</h1>
            <span className="p-2">
              {convertMinutesToHoursAndMinutes(runtime)}
            </span>
            <span className="p-2">• {genreList}</span>
            <span>• {release_date.replace(/-/g, "/")}</span>
            <h3 className="mb-4 text-sm p-2">{tagline}</h3>
            <p className="text-lg shadow-xl rounded-lg p-4 bg-black bg-opacity-50">
              {overview}
            </p>
            <button
              className="p-4 m-4 mt-10 bg-blue-600 font-bold rounded-xl mx-auto"
              onClick={handleClick}
            >
              Play Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
