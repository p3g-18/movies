import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const Browse = () => {
  useNowPlayingMovies(); //calling our custom hooks
  useTopRated(); //calling our custom hooks
  useUpcoming(); //calling our custom hooks

  return (
    <div className="font-bold">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
