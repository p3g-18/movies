import React, { useEffect } from "react";
import { Api_Options } from "../utils/Constants";
import { setModalTrailer } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useModalTrailer = (id) => {
  const dispatch = useDispatch();

  const modalMovies = useSelector((store) => store.movies?.modalTrailer);

  const modalMovieTrailers = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        Api_Options
      );
      const json = await response.json();
      console.log("HELoooo", json);

      // Filter for trailers
      const trailer = json.results.find((video) => video.type === "Trailer");
      console.log("trailer KEYYYYY", trailer);
      if (trailer) {
        dispatch(setModalTrailer(trailer)); // Dispatch trailer key
      } else {
        console.warn("No trailer found for this movie.");
        dispatch(setModalTrailer(null)); // Clear trailer key if none found
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    !modalMovies && modalMovieTrailers();
  }, [id]);
};

export default useModalTrailer;
