import React, { forwardRef } from "react"; // Use forwardRef to pass the ref to the component
import { useSelector } from "react-redux";
import Categories from "./Categories";

const SecondaryContainer = forwardRef((props, ref) => {
  const { nowPlayingMovies, topRated, upcoming } = useSelector(
    (store) => store.movies
  );

  return (
    <div className="bg-black" ref={ref}>
      <div className="m-0 md:-mt-42 relative z-20">
        <Categories title={"Now Playing"} movies={nowPlayingMovies} />
        <Categories title={"Top Rated"} movies={topRated} />
        <Categories title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  );
});

export default SecondaryContainer;
