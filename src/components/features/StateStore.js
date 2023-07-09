import { configureStore } from '@reduxjs/toolkit';
import displayModeReducer from './displayModeSlice';

export const displayModeStore = configureStore({
  reducer: {
    displayMode: displayModeReducer,
    // add other reducers here if needed
  },
});

