import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: null,
};

export const messagingSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = messagingSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectMessages = (state) => state.messages.messages;

export default messagingSlice.reducer;
