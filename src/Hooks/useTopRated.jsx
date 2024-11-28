import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../utils/Constants";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  // const topRatedMovies = useSelector((store) => store.movies?.topRated);

  const dispatch = useDispatch();

  const topRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      Api_Options
    );
    const json = await data.json();
    console.log("Top Rated", json);
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    topRated();
  }, []);
};

export default useTopRated;
