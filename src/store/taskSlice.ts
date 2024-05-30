import {
  configureStore,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  body: string;
}

export interface TaskState {
  isFetching: Boolean,
  tasks: Task[];
}

export const getTask = createAsyncThunk("post/fetch", async (thunkAPI) => {
  return await fetch("http://localhost:5173/vuejsons/posts.json").then((res) =>
    res.json(),
  );
});
export const sendTask = createAsyncThunk("post/send", async (data: Task) => {
  return await fetch("http://localhost:3003/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
});

const initialState: TaskState = {
  isFetching: false,
  tasks: [
    {
      id: 1,
      title: "タスク情報01",
      body: "bodybodybodybodybodybodybodybodybodybodybody01",
    },
    {
      id: 2,
      title: "タスク情報02",
      body: "bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody02",
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.pending, (state, action) => {
      state.isFetching = true;
    }).addCase(getTask.fulfilled, (state, action) => {
      state.tasks = action.payload;
    }).addCase(getTask.rejected, (state, action) => {
      state.isFetching = false;
    });
    builder.addCase(sendTask.pending, (state, action) => {
      state.isFetching = true;
    }).addCase(sendTask.fulfilled, (state, action) => {
      state.tasks = [
        ...state.tasks,
        { ...action.payload.item, id: state.tasks.length + 1 },
      ];
    }).addCase(sendTask.rejected, (state, action) => {
      state.isFetching = false;
    });
  },
});

export const taskStore = configureStore({
  reducer: taskSlice.reducer,
});

export default taskSlice.reducer;
