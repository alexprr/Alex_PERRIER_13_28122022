import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  isLoading: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    pending: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    success: (state) => {
      state.isLoading = false;
      state.isLogged = true;
      state.error = "";
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.error = "";
    },
  },
});

export const { actions, reducer } = loginSlice;

export const { pending, success, error, logout } = actions;

export default reducer;
