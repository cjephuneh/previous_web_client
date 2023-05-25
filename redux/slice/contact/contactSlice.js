import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contactUs from './contactService';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  isMessage: '',
};

export const submitContactForm = createAsyncThunk('contact/post', async (contactData, thunkAPI) => {
  try {
    // Make the API request using formData
    // Replace the following line with your actual API request
    // Example: await axios.post('/api/contact', formData);

    // Simulating API request delay
    // await new Promise(resolve => setTimeout(resolve, 1000));

    // Return any data received from the API response (if needed)
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
