import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login.slice";
import announcementSlice from "./features/announcements.slice";
import anomalySlice from "./features/anomaly.slice";
import { useDispatch } from "react-redux";
import chatSlice from "./features/chat.slice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    announcement: announcementSlice,
    anomaly: anomalySlice,
    chat: chatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
