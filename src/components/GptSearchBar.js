import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //over here I will make an api call to GPT api and get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies , comma separated like the example result given ahead. Example Result: gadar, sholey, Don, KGF, koi mil gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          // placeholder="What would you like to watch today?"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 col-span-3 m-4 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {/* Search */}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
