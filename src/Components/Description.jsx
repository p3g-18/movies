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

      <div className="relative   flex items-center justify-start p-8">
        <img
          src={IMG_CDN_URL + poster_path}
          className="relative w-[20%] h-[50%] flex-shrink-0 rounded-2xl mt-20 shadow-md"
          alt="Poster"
        />

        <div className="ml-8 text-white mb-32">
          <div className="flex justify-end m-2 inset-0 bottom-24">
            <button className="bg-red-700 p-3 mb-34 rounded-2xl mr-10 fixed font-bold">
              <Link to="/browse">Home</Link>
            </button>
          </div>
          <div className="mt-20">
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
              className="p-4 m-4 mt-10 bg-blue-600 font-bold rounded-xl"
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
