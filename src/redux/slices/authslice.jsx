import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.user = action.payload;
    },
    loginSuccess: (state, action) => { 
      state.isUserLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout, loginSuccess } = authSlice.actions; 
export default authSlice.reducer;
