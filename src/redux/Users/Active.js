import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
export const fetchActiveUsers = createAsyncThunk(
  'activeUsers/fetchActiveUsers',
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get('/api/users/search/admin/active');
      return res.data; 
    } catch (error) {
      console.error('Ошибка при загрузке активных пользователей:', error);
      return thunkAPI.rejectWithValue('Ошибка загрузки активных пользователей');
    }
  }
);

const activeUsersSlice = createSlice({
  name: 'activeUsers',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchActiveUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default activeUsersSlice.reducer;
