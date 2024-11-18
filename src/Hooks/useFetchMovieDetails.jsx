import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import { Api_Options } from "../utils/Constants";

const useFetchMovieDetails = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          Api_Options
        );
        const data = await response.json();
        console.log("Fetched Movie Details:", data);
        dispatch(addMovieDetails(data));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    console.log("ID BHAI", id);

    if (id) {
      fetchMovieDetails();
    }
  }, [id, dispatch]);
};

export default useFetchMovieDetails;
