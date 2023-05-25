import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getstarted from '../../slice/getstarted/getstartedService';

const initialState = {
  getStarted: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isMessage: '',
};

export const submitGetStarted = createAsyncThunk('getstarted/submit', async (getStartedData, thunkAPI) => {
  try {
    // Make the API request using formData
    // Replace the following line with your actual API request
    // Example: await axios.post('/api/waitlist', formData);

    // Simulating API request delay
    //await new Promise(resolve => setTimeout(resolve, 1000));

    // Return any data received from the API response (if needed)
    return await getstarted(getStartedData)
  } catch (error) {
    console.error(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getstartedSlice = createSlice({
  name: 'getstarted',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(submitGetStarted.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitGetStarted.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(submitGetStarted.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      });
  },
});

export default getstartedSlice.reducer;
