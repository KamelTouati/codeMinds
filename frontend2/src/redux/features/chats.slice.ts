import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IChat, IMessage } from "../../utils/types";
import { axiosInstance } from "../../api/axios.config";

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
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const { chat } = thunkAPI.getState() as { chat: { _id: string } }; // Adjust the state retrieval as needed
    const chatId = chat?._id;

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
  async (message: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const { chat } = thunkAPI.getState() as { chat: { _id: string } }; // Adjust the state retrieval as needed
    const chatId = chat?._id;

    console.log(chatId);

    if (!chatId) {
      return thunkAPI.rejectWithValue("Chat ID is missing."); // Reject if chatId is not available
    }

    try {
      const { data } = await axiosInstance.post(`/chats/${chatId}`, {
        message,
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
  reducers: {
    // addMessageLocaly(state, action: PayloadAction<IMessage>) {
    //   state.messages?.push(action.payload);
    // },
  },
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

    builder
      .addCase(
        addMessage.fulfilled,
        (state, action: PayloadAction<IMessage>) => {
          state.loading = false;
          state.messages?.push(action.payload);
          state.error = null;
        }
      )
      .addCase(addMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default chatSlice.reducer;
