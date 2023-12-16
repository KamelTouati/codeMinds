import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IChat, IMessage } from "../../utils/types";
import { axiosInstance } from "../../api/axios.config";
import { RootState } from "../store";
import toast from "react-hot-toast";

interface ChatState {
  loading: boolean;
  chat?: IChat;
  messages?: IMessage[];
  error: unknown;
}

const initialState: ChatState = {
  loading: false, // ** Pending
  chat: undefined,
  messages: undefined,
  error: null, // ** Error => rejected
};

export const fetchChat = createAsyncThunk(
  "chat/fetchChat",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.get(`/chats`);
      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const state = thunkAPI.getState() as RootState; // Adjust the state retrieval as needed
    const chatId = state.chat.chat?._id;

    console.log(chatId);

    if (!chatId) {
      return thunkAPI.rejectWithValue("Chat ID is missing."); // Reject if chatId is not available
    }

    try {
      const { data } = await axiosInstance.get(`/chats/${chatId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addMessage = createAsyncThunk(
  "chat/addMessage",
  async (message: { message: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const state = thunkAPI.getState() as RootState; // Adjust the state retrieval as needed
    const chatId = state.chat.chat?._id;

    if (!chatId) {
      return thunkAPI.rejectWithValue("Chat ID is missing."); // Reject if chatId is not available
    }

    try {
      const { data } = await axiosInstance.post(`/chats/${chatId}`, {
        message: message.message,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchChat.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchChat.fulfilled, (state, action: PayloadAction<IChat>) => {
        state.loading = false;
        state.chat = action.payload;
        state.error = null;
      })
      .addCase(fetchChat.rejected, (state, action) => {
        state.loading = false;
        state.chat = undefined;
        state.error = action.payload;
      });

    builder
      .addCase(
        fetchMessages.fulfilled,
        (state, action: PayloadAction<IMessage[]>) => {
          state.messages = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.messages = undefined;
        state.error = action.payload;
      });

    builder.addCase(addMessage.rejected, (state) => {
      state.loading = false;
      toast.error("Failed to send message.");
    });
  },
});

export default chatSlice.reducer;
