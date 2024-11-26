import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  ///fetching the data from the api and dispatching the data to the store
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
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
    !nowPlaying && nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
