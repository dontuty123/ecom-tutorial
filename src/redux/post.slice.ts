/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { postData } from "src/mockdata/post";
import { PostType } from "src/types/post.type";

interface PostsType {
  posts: PostType[];
}

const initialState: PostsType = {
  posts: postData,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      const publishPost = action.payload;
      state.posts.push(publishPost);
    },
  },
});

export const { addPost } = postSlice.actions;

const postReducer = postSlice.reducer;
export default postReducer;
