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

    const prompt = `
Act as a movie recommendation system. 
1. If the input is a genre (e.g., "horror", "action", "romantic"), recommend 10 popular movies from that genre. 
2. If the input is the name of a specific movie, find that movie and recommend 9 similar movies based on its genre or theme.
3. If the input is unclear or the movie is not found, recommend 10 popular movies from the general genre closest to the input. 
Input: "${searchText.current.value}".
Output: Provide a comma-separated list of 10 movie names only. No extra text.`;

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
    <div className="pt-[18%] md:pt-[10%] flex justify-center  ">
      <form
        className="bg-gradient-to-r from-blue-800 to-slate-900 p-4 w-screen md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="w-full p-2 col-span-9 m-2 outline-none pr-30"
        />

        <button
          className="bg-teal-400  hover:bg-teal-300 col-span-3 rounded-lg  m-2 -ml-4 text-white font-bold "
          onClick={handleSearchButton}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
