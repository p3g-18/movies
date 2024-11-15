import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GPT_KEY } from "../utils/Constants";
import { Api_Options } from "../utils/Constants";
import { geminiMoviesResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log("langkey", langKey);
  const dispatch = useDispatch();

  const searchText = useRef(null);

  //TMDB api
  const searchTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Api_Options
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchButton = async () => {
    //getting data using gemini api
    console.log(searchText.current.value);

    const genAI = new GoogleGenerativeAI(GPT_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Act as a movie recommendation system and suggest some movies for the prompt :" +
      searchText.current.value +
      "only give me names of 10 movies,comma separated";

    const result = await model.generateContent(prompt);

    const GeminiMovies =
      result?.response?.candidates?.[0]?.content?.parts[0]?.text.split(","); //converting the received data into an array
    console.log(GeminiMovies);

    //for each movie searching in tmdb

    const promiseData = GeminiMovies.map((movie) => {
      // here we will get promises because it's an async function and js waits for none
      return searchTmdb(movie);
    });

    const finalData = await Promise.all(promiseData);
    console.log(finalData);

    dispatch(
      geminiMoviesResult({ gemMovies: GeminiMovies, gemResults: finalData })
    );
  };

  return (
    <div className=" pt-[10%] flex justify-center  ">
      <form
        className="bg-gradient-to-r from-blue-800 to-slate-900 p-4 w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-2 col-span-9 m-2 outline-blue-500"
        />
        <button
          className="bg-teal-400  col-span-3 rounded-lg  m-2  text-white font-bold"
          onClick={handleSearchButton}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
