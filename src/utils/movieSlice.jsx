import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    topRated: null,
    upcoming: null,
    details: null,
    isModalOpen: false,
    modalTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpComing: (state, action) => {
      state.upcoming = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.details = action.payload;
    },
    setModalTrailer: (state, action) => {
      state.modalTrailer = action.payload; // Save trailer key
    },
    openModal: (state) => {
      state.isModalOpen = true; // Open modal
    },
    closeModal: (state) => {
      state.isModalOpen = false; // Close modal
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addTopRated,
  addUpComing,
  addMovieDetails,
  setModalTrailer,
  openModal,
  closeModal,
} = movieSlice.actions;
export default movieSlice.reducer;
