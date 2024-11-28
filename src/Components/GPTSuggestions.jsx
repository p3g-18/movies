import React from "react";
import { useSelector } from "react-redux";

import Categories from "./Categories";

const GPTSuggestions = () => {
  const { gemMovies, gemResults } = useSelector((store) => store.gpt);

  // Log the data to debug
  console.log("gemMovies:", gemMovies);
  console.log("gemResults:", gemResults);

  // Return null if gemMovies or gemResults are invalid
  if (!gemMovies || !Array.isArray(gemResults)) return null;

  return (
    <div className="p-2 m-0 md:m-4 bg-black md:opacity-90 text-white">
      <div className="opacity-90 ">
        {gemMovies.map((movieName, index) => (
          <Categories
            key={movieName}
            title={movieName}
            movies={gemResults[index] || []} // Provide fallback for movies
          />
        ))}
      </div>
    </div>
  );
};

export default GPTSuggestions;
