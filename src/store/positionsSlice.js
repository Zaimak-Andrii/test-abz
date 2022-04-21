import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertErrorToString } from '../Tools';

const SLICE_NAME = 'positions';

const initialState = {
  positionsList: [],
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: null,
};

export const fetchPositions = createAsyncThunk(`${SLICE_NAME}/fetchPositions`, async (_, thunkApi) => {
  try {
    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');

    const data = await response.json();

    if (data.success) {
      return data.positions;
    } else {
      throw data;
    }
  } catch (error) {
    return thunkApi.rejectWithValue(convertErrorToString(error));
  }
});

const setError = (state, action) => {
  state.status = 'failed';
  state.error = JSON.parse(action.payload);
};

export const positionsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: {
    [fetchPositions.pending.type]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchPositions.fulfilled.type]: (state, action) => {
      state.status = 'succeeded';
      state.positionsList = action.payload;
    },
    [fetchPositions.rejected.type]: setError,
  },
});

//export const {} = positionsSlice.actions;

export default positionsSlice.reducer;
