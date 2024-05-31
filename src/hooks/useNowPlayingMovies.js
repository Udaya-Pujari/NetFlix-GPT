import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //in this component what we are doing is we are trying to fetch TNDB api and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);

    //now i need to add this json into my movieSlice,so to do this i have to dispatch an action
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
