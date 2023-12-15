import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios.config";
import { IAnouncement } from "../../utils/types";

interface AnnouncementsState {
  loading: boolean;
  announcements: IAnouncement[];
  error: unknown;
}

const initialState: AnnouncementsState = {
  loading: false, // ** Pending
  announcements: [], // ** Success => fulfilled
  error: null, // ** Error => rejected
};

export const fetchAnnouncement = createAsyncThunk(
  "announcement/fetchAnnouncement",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.get(`/announcement`);
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
    builder.addCase(fetchAnnouncement.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAnnouncement.fulfilled,
      (state, action: PayloadAction<IAnouncement[]>) => {
        state.loading = false;
        state.announcements = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchAnnouncement.rejected, (state, action) => {
      state.loading = false;
      state.announcements = [];
      state.error = action.payload;
    });
  },
});

export default announcementSlice.reducer;
