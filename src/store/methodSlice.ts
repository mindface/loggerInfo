import {
  configureStore,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export interface Method {
  id: number;
  title: string;
  body: string;
  status?: string;
}

export interface MethodState {
  isFetching: Boolean,
  methods: Method[];
}

export const getMethod = createAsyncThunk("method/fetch", async (thunkAPI) => {
  return await fetch("http://localhost:3003/v1/method_infos").then((res) =>
    res.json(),
  );
});
export const sendMethod = createAsyncThunk("method/send", async (data: Method) => {
  return await fetch("http://localhost:3003/v1/method_infos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
});

const initialState: MethodState = {
  isFetching: false,
  methods: [
    {
      id: 1,
      title: "タスク情報01",
      body: "bodybodybodybodybodybodybodybodybodybodybody01",
      status: "run"
    },
    {
      id: 2,
      title: "タスク情報02",
      body: "bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody02",
      status: "run"
    },
  ],
};

export const methodSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMethod.pending, (state, action) => {
      state.isFetching = true;
    }).addCase(getMethod.fulfilled, (state, action) => {
      state.methods = action.payload;
    }).addCase(getMethod.rejected, (state, action) => {
      state.isFetching = false;
    });
    builder.addCase(sendMethod.pending, (state, action) => {
      state.isFetching = true;
    }).addCase(sendMethod.fulfilled, (state, action) => {
      state.methods = [
        ...state.methods,
        { ...action.payload.item, id: state.methods.length + 1 },
      ];
    }).addCase(sendMethod.rejected, (state, action) => {
      state.isFetching = false;
    });;
  },
});

export const taskStore = configureStore({
  reducer: methodSlice.reducer,
});

export default methodSlice.reducer;
