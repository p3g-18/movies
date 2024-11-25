import React from "react";
import Layout from "../Layout";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useModalTrailer from "../Hooks/useModalTrailer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate;

  const handleClick = () => {
    navigate(`/MovieDetails/:id`);
  };

  useNowPlayingMovies(); //calling our custom hooks
  useTopRated(); //calling our custom hooks
  useUpcoming(); //calling our custom hooks

  //we will show gptsearch when we click on it or eles browse page

  return (
    <div className="font-bold">
      <Layout />
      {showGptSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer onClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default Browse;
