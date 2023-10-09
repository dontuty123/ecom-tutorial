/** @format */

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostType } from "src/types/post.type";
import http from "./../../utils/http";

interface PostsType {
  posts: PostType[];
}

const initialState: PostsType = {
  posts: [],
};

export const getPostList = createAsyncThunk(
  "post/getPostList",
  async (_, thunkAPI) => {
    const response = await http.get<PostType[]>("posts", {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

export const addPost = createAsyncThunk(
  "post/addPost",
  async (body: Omit<PostType, "id">, thunkAPI) => {
    const response = await http.post<PostType>("posts", body, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPostList.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export const {} = postSlice.actions;

const postReducer = postSlice.reducer;
export default postReducer;
