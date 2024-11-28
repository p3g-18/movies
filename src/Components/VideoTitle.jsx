import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal } from "../utils/movieSlice";
import Modal from "./Modal";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailer);
  console.log("Video ree", trailerVideo);
  const trailer = trailerVideo?.key;

  const handleMainVideo = () => {
    // mainContainer Trailer
    console.log("k");
    dispatch(openModal(trailer));
    console.log("i");
  };

  return (
    <div className=" pt-[30%] md:pt-[25%] px-2 md:px-20 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <div>
        <h1 className=" text-xl  md:text-6xl font-bold max-wd-md">{title}</h1>
        <p className=" max-w-md px-2 m-2 text-gray-500 hidden md:inline-block">
          {overview}
        </p>
      </div>
      <div className="p-2">
        <button
          className="bg-red-700 text-white p-2 md:p-4 m-0 md:m-2 rounded-lg  hover:opacity-75 text-opacity-85 "
          onClick={handleMainVideo}
        >
          Play Trailer
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
