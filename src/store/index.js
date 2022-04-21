import { configureStore } from '@reduxjs/toolkit';
import positionsSlice from './positionsSlice';
import usersSlice from './usersSlice';

export const store = configureStore({
  reducer: {
    positions: positionsSlice,
    users: usersSlice,
  },
});
