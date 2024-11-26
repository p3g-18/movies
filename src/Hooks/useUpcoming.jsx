import React, { useEffect } from "react";
import { Api_Options } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComing } from "../utils/movieSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies?.upcoming);

  const Upcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      Api_Options
    );
    const json = await data.json();
    console.log("upcoming movies", json.results);
    dispatch(addUpComing(json.results));
  };
  useEffect(() => {
    if (!upcomingMovies) Upcoming();
  }, []);
};

export default useUpcoming;
