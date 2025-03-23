import { createSlice } from "@reduxjs/toolkit";

const IncomponentPreloaderSlice = createSlice({
  initialState: {
    loading: false,
  },

  name: "incomponent",

  reducers: {
    openPreloader: (state) => {
      state.loading = true;
    },

    closePreloader: (state) => {
      state.loading = false;
    },
  },
});

export default IncomponentPreloaderSlice;

export const { openPreloader, closePreloader } = IncomponentPreloaderSlice.actions;
