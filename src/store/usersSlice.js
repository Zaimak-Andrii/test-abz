import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertErrorToString } from '../Tools';

const SLICE_NAME = 'users';

const initialState = {
  usersList: [],
  totalUsers: 0,
  isCreatedSuccess: false,
  status: 'idle' | 'pending' | 'succeeded' | 'failed' | 'created',
  error: null,
};

//Получение списка пользователей
export const fetchUsers = createAsyncThunk(
  `${SLICE_NAME}/fetchUsers`,
  async ({ page = 1, offset = 0, count = 5 }, thunkApi) => {
    try {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}&offset=${offset}`
      );

      const data = await response.json();

      if (data.success) {
        return data;
      } else {
        throw data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(convertErrorToString(error));
    }
  }
);
//Получение следующей пачки пользователей
export const showMoreUsers = createAsyncThunk(`${SLICE_NAME}/showMoreUsers`, async (_, thunkApi) => {
  try {
    const { usersList, totalUsers } = thunkApi.getState().users;
    const newCount = usersList.length + 6;
    const count = newCount > totalUsers ? totalUsers : newCount;
    const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`);

    const data = await response.json();

    if (data.success) {
      return data;
    } else {
      throw data;
    }
  } catch (error) {
    return thunkApi.rejectWithValue(convertErrorToString(error));
  }
});
//Создание пользователя
export const createUser = createAsyncThunk(`${SLICE_NAME}/createUser`, async (user, thunkApi) => {
  try {
    let response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');

    const { token } = await response.json();

    response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: user,
      headers: { Token: token },
    });

    const userData = await response.json();

    if (userData.success) {
      thunkApi.dispatch(fetchUsers({ page: 1, count: 6 }));
      return;
    } else {
      throw userData;
    }
  } catch (error) {
    return thunkApi.rejectWithValue(convertErrorToString(error));
  }
});

// Начало запроса на сервер
const setPending = (state) => {
  state.status = 'pending';
  state.error = null;
};
//Ошибка при выполнении запроса
const setError = (state, action) => {
  state.status = 'failed';
  state.error = JSON.parse(action.payload);
};
// Получение пользователей с сервера
const setUsers = (state, action) => {
  const data = action.payload;
  state.status = 'succeeded';
  state.usersList = data.users;
  state.totalUsers = data.total_users;
};

export const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addErrors: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
  extraReducers: {
    [showMoreUsers.pending.type]: setPending,
    [fetchUsers.pending.type]: setPending,
    [createUser.pending.type]: (state, action) => {
      setPending(state, action);
      state.isCreatedSuccess = false;
    },

    [showMoreUsers.fulfilled.type]: setUsers,
    [fetchUsers.fulfilled.type]: setUsers,
    [createUser.fulfilled.type]: (state) => {
      state.status = 'created';
      state.isCreatedSuccess = true;
    },

    [fetchUsers.rejected.type]: setError,
    [showMoreUsers.rejected.type]: setError,
    [createUser.rejected.type]: setError,
  },
});

export const { addErrors } = usersSlice.actions;

export default usersSlice.reducer;
