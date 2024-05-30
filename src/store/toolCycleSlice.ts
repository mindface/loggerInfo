import {
  configureStore,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import type { Method } from "./methodSlice";

export interface ToolCycle {
  id: number;
  title: string;
  body: string;
  taskId: string;
  methods: Method[];
  similarTag: string;
}

export interface ToolCycleState {
  isFetching: Boolean,
  toolCycles: ToolCycle[];
}

export const getToolCycle = createAsyncThunk("post/fetch", async (thunkAPI) => {
  return await fetch("http://localhost:3003/v1/tool_cycle").then((res) =>
    res.json(),
  );
});
export const sendToolCycle = createAsyncThunk("post/send", async (data: ToolCycle) => {
  return await fetch("http://localhost:3003/v1/tool_cycle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
});

const initialState: ToolCycleState = {
  isFetching: false,
  toolCycles: [
    {
      id: 1,
      title: "タスク情報01",
      body: "bodybodybodybodybodybodybodybodybodybodybody01",
      taskId: "",
      similarTag: "image_move_setting",
      methods:[]
    },
  ],
};

export const ToolCycleSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToolCycle.pending, (state, action) => {
      state.isFetching = true;
    }).addCase(getToolCycle.fulfilled, (state, action) => {
      state.toolCycles = action.payload;
    }).addCase(getToolCycle.rejected, (state, action) => {
      state.isFetching = false;
    });
    builder.addCase(sendToolCycle.pending, (state, action) => {
      state.isFetching = true;
    }).addCase(sendToolCycle.fulfilled, (state, action) => {
      state.toolCycles = [
        ...state.toolCycles,
        { ...action.payload.item, id: state.toolCycles.length + 1 },
      ];
    }).addCase(sendToolCycle.rejected, (state, action) => {
      state.isFetching = false;
    });;
  },
});

export const toolCycleStore = configureStore({
  reducer: ToolCycleSlice.reducer,
});

export default ToolCycleSlice.reducer;
