import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    // gptMovies: null,
    movieName: null,
    movieResults: null,
  },
  reducers: {
    togglegptSearchView: (state) => {
      //show gpt is true then it will become false and vice versa
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      // state.gptMovies = action.payload;
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
  },
});

export const { togglegptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
