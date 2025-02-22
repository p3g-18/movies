import React from "react";
import { useSelector } from "react-redux";
import getTrailer from "../Hooks/useTrailer";

const Video = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailer);
  console.log("trailer Videos", trailerVideo);
  getTrailer(movieId);
  return (
    <div className=" md:w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Video;
