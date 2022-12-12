import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AddMovieModalSliceTypes } from "../../types/slice/addMovieModalSlice.types";

const initialState: AddMovieModalSliceTypes = {
  addMovieModalToggle: false,
};

const addMovieModalSlice = createSlice({
  name: "addMovieModal",
  initialState,
  reducers: {
    handleAddMovieModalToggle(state) {
      state.addMovieModalToggle = !state.addMovieModalToggle;
    },
  },
});

export const selectAddMovieModalToggle = (state: RootState) =>
  state.addMovieModal.addMovieModalToggle;

export const { handleAddMovieModalToggle } = addMovieModalSlice.actions;

export default addMovieModalSlice.reducer;
