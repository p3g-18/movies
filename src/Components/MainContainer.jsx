import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Video from "./Video";
import Modal from "./Modal";

import { useRef } from "react";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log("TMDB", Movies);
  const secondaryRef = useRef(null);

  if (!Movies || Movies.length === 0) {
    return (
      <div>
        <p>Loading Movies....</p>
      </div>
    );
  }

  const mainMovie = Movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie || {}; // Fallback in case mainMovie is undefined

  return (
    <div className="bg-black pt-[15%] md:pt-0">
      <VideoTitle
        title={original_title}
        overview={overview}
        secondaryRef={secondaryRef}
      />
      <Video movieId={id} />
      <Modal />
      <SecondaryContainer ref={secondaryRef} />
    </div>
  );
};

export default MainContainer;
