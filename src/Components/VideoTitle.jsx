import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[25%] px-20 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <div>
        <h1 className="text-6xl font-bold max-wd-md">{title}</h1>
        <p className="max-w-md px-2 m-2 text-gray-500">{overview}</p>
      </div>
      <div className="p-2">
        <button className="bg-red-700 text-white p-4 m-2 rounded-lg  hover:opacity-75 text-opacity-85">
          Play Trailer
        </button>
        <button className="bg-red-700 text-white p-4 m-2 rounded-lg  hover:opacity-75 text-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
