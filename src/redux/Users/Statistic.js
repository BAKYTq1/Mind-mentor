// src/redux/slices/statisticsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get('/api/users/search/admin/statistics');
      return res.data;
    } catch (error) {
      console.error('Ошибка при загрузке статистики:', error);
      return thunkAPI.rejectWithValue('Ошибка загрузки статистики');
    }
  }
);

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default statisticsSlice.reducer;
