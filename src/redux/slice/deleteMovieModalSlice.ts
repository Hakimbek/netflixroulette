import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DeleteMovieModalSliceTypes } from "../../types/slice/deleteMovieModalSlice.types";

const initialState: DeleteMovieModalSliceTypes = {
  deleteMovieModalToggle: false,
};

const deleteMovieModalSlice = createSlice({
  name: "deleteMovieModal",
  initialState,
  reducers: {
    handleDeleteMovieModalToggle(state) {
      state.deleteMovieModalToggle = !state.deleteMovieModalToggle;
    },
  },
});

export const selectDeleteMovieModalToggle = (state: RootState) =>
  state.deleteMovieModal.deleteMovieModalToggle;

export const { handleDeleteMovieModalToggle } = deleteMovieModalSlice.actions;

export default deleteMovieModalSlice.reducer;
