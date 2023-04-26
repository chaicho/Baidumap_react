import { createSlice } from '@reduxjs/toolkit';

const displayModeSlice = createSlice({
  name: 'displayMode',
  initialState: {
    mode: 'normal',
  },
  reducers: {
    setDisplayMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setDisplayMode } = displayModeSlice.actions;

export default displayModeSlice.reducer;
