import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contactUs from './contactService';

const initialState = {
  contact: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isMessage: '',
};

export const submitContactForm = createAsyncThunk('contact/post', async (contactData, thunkAPI) => {
  try {
  
    return await contactUs(contactData)
  } catch (error) {
    console.error(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      });
  },
});

export default contactSlice.reducer;


