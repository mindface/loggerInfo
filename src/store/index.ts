import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    postStore: postReducer,
    taskStore: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
