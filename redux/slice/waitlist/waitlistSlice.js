import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import waitlist from './waitlistService';

const initialState = {
  waitlist: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isMessage: '',
};

export const submitWaitlist = createAsyncThunk('waitlist/submit', async (waitlistData, thunkAPI) => {
  try {
    // Make the API request using formData
    // Replace the following line with your actual API request
    // Example: await axios.post('/api/waitlist', formData);

    // Simulating API request delay
    //await new Promise(resolve => setTimeout(resolve, 1000));
    //  console.log(waitlistData)
    // Return any data received from the API response (if needed)
    return await waitlist(waitlistData)
  } catch (error) {
    console.error(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});



export const waitlistSlice = createSlice({
  name: 'waitlist',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(submitWaitlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitWaitlist.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(submitWaitlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      });
  },
});

export default waitlistSlice.reducer;
