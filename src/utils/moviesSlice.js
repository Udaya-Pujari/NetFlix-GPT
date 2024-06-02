import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailervideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
//now exporting actions
export const { addNowPlayingMovies, addTrailervideo, addPopularMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
