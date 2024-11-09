import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log("langkey", langKey);

  return (
    <div className=" pt-[10%] flex justify-center  ">
      <form className="bg-gradient-to-r from-blue-800 to-slate-900 p-4 w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-2 col-span-9 m-2 outline-blue-500"
        />
        <button className="bg-teal-400  col-span-3 rounded-lg  m-2  text-white font-bold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
