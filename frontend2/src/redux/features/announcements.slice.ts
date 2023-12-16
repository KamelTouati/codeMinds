import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios.config";
import { IAddAnnouncement, IAnouncement } from "../../utils/types";
import toast from "react-hot-toast";

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
export const addAnnouncement = createAsyncThunk(
  "announcement/addAnnouncement",
  async (payload: IAddAnnouncement, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.post(`/announcement`, payload);
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

    builder
      .addCase(addAnnouncement.pending, (_) => {
        toast.success("adding the announcement...");
      })
      .addCase(
        addAnnouncement.fulfilled,
        (state, action: PayloadAction<IAnouncement>) => {
          state.announcements = [action.payload, ...state.announcements];

          toast.success("Announcement added successfully");
        }
      )
      .addCase(addAnnouncement.rejected, (state, action) => {
        toast.error("Error in adding the announcement" + action.payload);
      });
  },
});

export default announcementSlice.reducer;
