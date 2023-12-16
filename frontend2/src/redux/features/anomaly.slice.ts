import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios.config";
import { IAnomaly } from "../../utils/types";
import toast from "react-hot-toast";

interface AnnomalyState {
  loading: boolean;
  anomallies: IAnomaly[];
  error: unknown;
}

const initialState: AnnomalyState = {
  loading: false, // ** Pending
  anomallies: [], // ** Success => fulfilled
  error: null, // ** Error => rejected
};

export const fetchAnnomaly = createAsyncThunk(
  "annomally/fetchAnnomaly",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.get(`/anomaly`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAnomaly = createAsyncThunk(
  "anomally/addAnomaly",
  async (message: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.post(`/anomaly`, { message });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const anomalySlice = createSlice({
  name: "anomaly",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnomaly.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAnnomaly.fulfilled,
        (state, action: PayloadAction<IAnomaly[]>) => {
          state.loading = false;
          state.anomallies = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchAnnomaly.rejected, (state, action) => {
        state.loading = false;
        state.anomallies = [];
        state.error = action.payload;
      });

    builder
      .addCase(addAnomaly.pending, (_) => {
        toast.success("adding the anomaly...");
      })
      .addCase(
        addAnomaly.fulfilled,
        (state, action: PayloadAction<IAnomaly>) => {
          state.anomallies = [action.payload, ...state.anomallies];

          toast.success("Anomaly added successfully");
        }
      )
      .addCase(addAnomaly.rejected, (state, action) => {
        toast.error("Error in adding the anomaly" + action.payload);
      });
  },
});

export default anomalySlice.reducer;
