import { createSlice } from "@reduxjs/toolkit";

const PreloaderSlice = createSlice({
  initialState: {
    loading: false,
  },

  name: "preloader",

  reducers: {
    openPreloader: (state) => {
      state.loading = true;
    },

    closePreloader: (state) => {
      state.loading = false;
    },
  },
});

export default PreloaderSlice;

export const { openPreloader, closePreloader } = PreloaderSlice.actions;
