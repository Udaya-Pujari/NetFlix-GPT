import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, trailerVideo: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailervideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
//now exporting actions
export const { addNowPlayingMovies, addTrailervideo } = moviesSlice.actions;

export default moviesSlice.reducer;
