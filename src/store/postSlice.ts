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
  status: string;
}

export interface PostState {
  isFetching: Boolean,
  posts: Post[];
}

export const getPost = createAsyncThunk("post/fetch", async (thunkAPI) => {
  return await fetch("http://localhost:5173/vuejsons/posts.json").then((res) =>
    res.json(),
  );
});
export const sendPost = createAsyncThunk("post/send", async (data: Post) => {
  return await fetch("http://localhost:3003/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
});

const initialState: PostState = {
  isFetching: false,
  posts: [
    {
      id: 1,
      title: "body01",
      body: "body01",
      status: "run"
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // addPost: (state, action: PayloadAction<Post>) => {
    //   state.posts.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.isFetching = true;
    })
    .addCase(getPost.fulfilled, (state, action) => {
      state.posts = action.payload;
    })
    .addCase(getPost.rejected, (state, action) => {
      state.isFetching = false;
    });
    builder.addCase(sendPost.pending, (state, action) => {
      state.isFetching = true;
    })
    .addCase(sendPost.fulfilled, (state, action) => {
      state.posts = [
        ...state.posts,
        { ...action.payload.item, id: state.posts.length + 1 },
      ];
    })
    .addCase(sendPost.rejected, (state, action) => {
      state.isFetching = false;
    });
  },
});

export const store = configureStore({
  reducer: postSlice.reducer,
});

// export const { addPost } = postSlice.actions;

export default postSlice.reducer;
