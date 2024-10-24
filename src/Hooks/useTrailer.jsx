import { Api_Options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";

const getTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      Api_Options
    );
    const json = await data.json();
    console.log("Trailer", json.results);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    console.log("Filert", filterData);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default getTrailer;
