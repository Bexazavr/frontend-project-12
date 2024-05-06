import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState();

const slice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addChannels: channelsAdapter.addMany,
    addChannel: channelsAdapter.addOne,
    updateChannel: channelsAdapter.updateOne,
  },
});

const channelsActions = slice.actions;
const channelsSelectors = channelsAdapter.getSelectors(
  (state) => state.channels
);
const channelsReducer = slice.reducer;

export { channelsSelectors, channelsActions };
export default channelsReducer;
