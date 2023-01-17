import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    pending: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    firstName: (state, action) => {
      state.isLoading = false;
      state.firstName = action.payload;
      state.error = "";
    },
    lastName: (state, action) => {
      state.isLoading = false;
      state.lastName = action.payload;
      state.error = "";
    },
    logout: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.error = "";
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;

export const { pending, firstName, lastName, logout, error } = actions;

export default reducer;
