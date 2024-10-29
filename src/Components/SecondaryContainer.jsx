import React from "react";
import Categories from "./Categories";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { nowPlayingMovies, topRated, upcoming } = useSelector(
    (store) => store.movies
  );

  return (
    <div className="bg-black">
      <div className="-mt-42 relative z-20">
        <Categories title={"Now Playing"} movies={nowPlayingMovies} />
        <Categories title={"Top Rated"} movies={topRated} />
        <Categories title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
