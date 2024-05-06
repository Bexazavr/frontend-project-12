import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessages: messagesAdapter.addMany,
    addMessage: messagesAdapter.addOne,
    updateMessage: messagesAdapter.updateOne,
  },
});

const messagesActions = slice.actions;
const messagesSelectors = messagesAdapter.getSelectors(
  (state) => state.channels
);
const messagesReducer = slice.reducer;

export { messagesSelectors, messagesActions };
export default messagesReducer;
