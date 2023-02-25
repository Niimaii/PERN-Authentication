import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true;
    },
    unauthenticatedUser: (state) => {
      state.isAuth = false;
    },
  },
});

export const { authenticateUser, unauthenticatedUser } = authSlice.actions;

export default authSlice.reducer;
