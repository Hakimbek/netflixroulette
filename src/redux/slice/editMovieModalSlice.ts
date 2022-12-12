import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { EditMovieModalSliceTypes } from "../../types/slice/editMovieModalSlice.types";

const initialState: EditMovieModalSliceTypes = {
  editMovieModalToggle: false,
};

const editMovieModalSlice = createSlice({
  name: "editMovieModal",
  initialState,
  reducers: {
    handleEditMovieModalToggle(state) {
      state.editMovieModalToggle = !state.editMovieModalToggle;
    },
  },
});

export const selectEditMovieModalToggle = (state: RootState) =>
  state.editMovieModal.editMovieModalToggle;

export const { handleEditMovieModalToggle } = editMovieModalSlice.actions;

export default editMovieModalSlice.reducer;
