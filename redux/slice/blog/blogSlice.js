import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllblogPosts from './blogService';

const initialState = {
  blogs: [], // Initialize the 'blogs' property as an empty array
  isError: false,
  isLoading: false,
  isSuccess: false,
  isMessage: '',
};

export const getblogPosts = createAsyncThunk('blogs/get', async (thunkAPI) => {
  try {
    return await getAllblogPosts();
  } catch (error) {
    console.error(error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getblogPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getblogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload; // Update the 'blogs' property with the fetched data
      })
      .addCase(getblogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
        state.blogs = [];
      });
  },
});

export default blogSlice.reducer;
