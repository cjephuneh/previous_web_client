import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: null,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogInformation: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogInformation } = blogsSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectBlogInformation = (state) => state.blogs.blogs;

export default blogsSlice.reducer;
