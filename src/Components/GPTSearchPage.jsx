import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { GPT_BG_Image } from "../utils/Constants";

const GPTSearch = () => {
  return (
    <div>
      <div className=" hidden md:block  fixed inset-0 -z-10 ">
        <img
          src={GPT_BG_Image}
          alt="backgroundImage"
          className="  w-full h-full object-cover "
        />
      </div>
      <GPTSearchBar /> <GPTSuggestions />
    </div>
  );
};

export default GPTSearch;
