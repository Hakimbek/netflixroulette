import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  toggle: false,
  title: "",
  text: "",
};

const infoModalSlice = createSlice({
  name: "successModal",
  initialState,
  reducers: {
    handleInfoToggle(state) {
      state.toggle = !state.toggle;
    },
    setInfoTitle(state, action: { payload: string }) {
      state.title = action.payload;
    },
    setInfoText(state, action: { payload: string }) {
      state.text = action.payload;
    },
  },
});

export const selectInfoToggle = (state: RootState) => state.infoModal.toggle;
export const selectInfoTitle = (state: RootState) => state.infoModal.title;
export const selectInfoText = (state: RootState) => state.infoModal.text;

export const { handleInfoToggle, setInfoTitle, setInfoText } =
  infoModalSlice.actions;

export default infoModalSlice.reducer;
