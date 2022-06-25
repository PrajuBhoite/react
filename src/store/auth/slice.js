import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const res = await axios.post(`http://localhost:3001/api/login`, user);
      dispatch(
        loginSuccess({ user: res.data.data.user, token: res.data.data.token })
      );
    } catch (error) {
      dispatch(loginFailure({ error: error.response.data }));
    }
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});
// loginStart = (data) => { type: 'auth/loginStart', payload: data }
export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
export const authReducer = authSlice.reducer;
