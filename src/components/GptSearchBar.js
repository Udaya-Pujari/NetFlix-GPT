import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constatnts";
import { addGptMovieResult } from "../utils/gptSlice";
// import openai from "../utils/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //the following function will Search the movies from TMDB api
  const SearchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //over here I will make an api call to GPT api and get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies , comma separated like the example result given ahead. Example Result: gadar, sholey, Don, KGF, koi mil gaya";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = gptQuery;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    if (!text) return null;

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
    const gptMovies = text.split(",");
    console.log(gptMovies); //['Andaz Apna Apna', ' Chupke Chupke', ' Hera Pheri', ' Golmaal', '  Jaane Bhi Do Yaaron \n']

    // Here I will have to search each movie from TMDB api
    // basically for each gptMovies I will map each (movie) and return my SearchMovieTMDB() API
    const promiseArray = gptMovies.map((movie) => SearchMovieTMDB(movie));
    //the result for the above promiseArray is an array of 5 promises [Promise,Promise,Promise,Promise,Promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    //the blolow line add ths tmdbresults i.e searched movie results to the gptsliceStore
    // dispatch(addGptMovieResult(tmdbResults)); //this is adding single action results
    dispatch(
      //passing multiple actions into the gptslice
      addGptMovieResult({ movieName: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
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
