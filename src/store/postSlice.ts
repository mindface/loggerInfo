import {
  configureStore,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
}

export const getPost = createAsyncThunk("post/fetch", async (thunkAPI) => {
  return await fetch("http://localhost:5173/vuejsons/posts.json").then((res) =>
    res.json(),
  );
});
export const sendPost = createAsyncThunk("post/send", async (data: Post) => {
  console.log(data);
  return await fetch("http://localhost:3003/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
});

const initialState: PostState = {
  posts: [
    {
      id: 1,
      title: "body01",
      body: "body01",
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(sendPost.fulfilled, (state, action) => {
      state.posts = [
        ...state.posts,
        { ...action.payload.item, id: state.posts.length + 1 },
      ];
    });
  },
});

export const store = configureStore({
  reducer: postSlice.reducer,
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
