import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login.slice";
import announcementSlice from "./features/announcements.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { login: loginSlice, announcement: announcementSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
