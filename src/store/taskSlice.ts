import { configureStore, createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'

export interface Task {
  id: number;
  title: string;
  body: string;
}

export interface TaskState {
  tasks: Task[];
}

export const getTask = createAsyncThunk('post/fetch', async (thunkAPI) => {
  return await fetch("http://localhost:5173/vuejsons/posts.json").then((res) => res.json())
});
export const sendTask = createAsyncThunk('post/send', async (data: Task) => {
  console.log(data)
  return await fetch("http://localhost:3003/api/posts",{
    method: "POST",
    headers:{
      "Content-Type":"application/json;charset=UTF-8"
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
});

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      title: "t01",
      body: "body01",
    }
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.tasks = action.payload
    })
    builder.addCase(sendTask.fulfilled, (state, action) => {
      state.tasks = [...state.tasks,{...action.payload.item,id:state.tasks.length+1}];
    })
  },
})

export const taskStore = configureStore({
  reducer: taskSlice.reducer
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer