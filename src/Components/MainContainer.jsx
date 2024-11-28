import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Video from "./Video";
import Modal from "./Modal";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log("TMDB", Movies);

  if (!Movies || Movies.length === 0) {
    return <div>Loading...</div>;
  }

  const mainMovie = Movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie || {}; // Fallback in case mainMovie is undefined

  return (
    <div className="bg-black pt-[15%] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <Video movieId={id} />
      <Modal />
    </div>
  );
};

export default MainContainer;
