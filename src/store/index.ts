import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import toolCycleReducer from "./toolCycleSlice";
import methodReducer from "./methodSlice";

export const store = configureStore({
  reducer: {
    postStore: postReducer,
    toolCycleStore: toolCycleReducer,
    methodStore: methodReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
