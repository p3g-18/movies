import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gemResults: null,
    gemMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    geminiMoviesResult: (state, action) => {
      const { gemMovies, gemResults } = action.payload;
      state.gemMovies = gemMovies;
      state.gemResults = gemResults;
    },
  },
});

export const { toggleGptSearchView, geminiMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
