// redux/slices/userDetailsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchUserById = createAsyncThunk(
  'userDetails/fetchUserById',
  async (userId, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/api/users/admin/${userId}`);
      return res.data.userBasicProfileDto;
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки данных пользователя');
    }
  }
);

export const fetchUserTehById = createAsyncThunk(
  'userDetails/fetchUserTehById', // ← Уникальное имя
  async (userId, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/api/users/admin/${userId}/technologies`);
      console.log(res.data);
      return res.data; // Предположительно массив технологий
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки технологий');
    }
  }
);

export const fetchUserProById = createAsyncThunk(
  'userDetails/fetchUserProById', // ← Уникальное имя
  async (userId, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/api/users/admin/${userId}/projects`);
      console.log(res.data);
      
      return res.data; // Предположительно массив проектов
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки проектов');
    }
  }
);


const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    data: null,
    technologies: [],
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Основные данные
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Технологии
      .addCase(fetchUserTehById.fulfilled, (state, action) => {
        state.technologies = action.payload || [];
      })
      .addCase(fetchUserTehById.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Проекты
      .addCase(fetchUserProById.fulfilled, (state, action) => {
        state.projects = action.payload || [];
      })
      .addCase(fetchUserProById.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userDetailsSlice.reducer;
