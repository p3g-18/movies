import React, { useEffect } from "react";
import Header from "./Header";
import { Api_Options } from "../utils/Constants";

const Browse = () => {
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      Api_Options
    );
    const json = await data.json();
    console.log("data", json.results);
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);

  return (
    <div className="font-bold">
      <Header />
    </div>
  );
};

export default Browse;
