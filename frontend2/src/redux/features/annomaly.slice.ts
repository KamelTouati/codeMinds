import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios.config";
import { IAnnomaly } from "../../utils/types";

interface AnnomalyState {
  loading: boolean;
  annomallies: IAnnomaly[];
  error: unknown;
}

const initialState: AnnomalyState = {
  loading: false, // ** Pending
  annomallies: [], // ** Success => fulfilled
  error: null, // ** Error => rejected
};

export const fetchAnnomaly = createAsyncThunk(
  "annomally/fetchAnnomaly",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.get(`/annomally`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnnomaly.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAnnomaly.fulfilled,
      (state, action: PayloadAction<IAnnomaly[]>) => {
        state.loading = false;
        state.annomallies = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchAnnomaly.rejected, (state, action) => {
      state.loading = false;
      state.annomallies = [];
      state.error = action.payload;
    });
  },
});

export default announcementSlice.reducer;
