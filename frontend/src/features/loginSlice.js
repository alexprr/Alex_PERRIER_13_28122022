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
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isLogged = true;
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions, reducer } = loginSlice;

export const { loginPending, loginSuccess, loginError } = actions;

export default reducer;
