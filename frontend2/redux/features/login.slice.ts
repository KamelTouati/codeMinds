import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../src/api/axios.config";
import CookieService from "../../src/services/CookieService";
import { toast } from "react-hot-toast";

interface UserState {
  loading: boolean;
  data: unknown;
  error: unknown;
}

const initialState: UserState = {
  loading: false, // ** Pending
  data: null, // ** Success => fulfilled
  error: null, // ** Error => rejected
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.post(`/auth/login`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      const date = new Date();
      const IN_DAYS = 5;
      const EXPIRES_IN_DAYS = 1000 * 60 * 60 * 24 * IN_DAYS;
      date.setTime(date.getTime() + EXPIRES_IN_DAYS);
      const options = { path: "/", expires: date };
      CookieService.set("jwt", action.payload.jwt, options);
      toast.success("Logged in successfully");

      setTimeout(() => {
        document.location.href = "/dashboard";
      }, 2000);
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
      toast.error("Make sure you have the correct Email or Password");
    });
  },
});

export const selectLogin = ({ login }) => login;
export default loginSlice.reducer;
