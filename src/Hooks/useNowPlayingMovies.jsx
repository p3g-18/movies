import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  ///fetching the data from the api and dispatching the data to the store

  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      Api_Options
    );
    const json = await data.json();
    console.log("data", json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
