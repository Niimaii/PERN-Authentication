import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth');

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }
  return false;
};

const initialState = {
  isAuth: userAuthFromLocalStorage(),
};

export const authSlice = createSlice({
  name: 'auth',
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
