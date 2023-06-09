import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: messagesAdapter.addMany,
    addMessage: messagesAdapter.addOne,
    deleteMessagesByChannel: messagesAdapter.removeMany,
  },
});

export default messagesSlice.reducer;
export const { actions } = messagesSlice;
export const msgSelectors = messagesAdapter.getSelectors((state) => state.messages);
