// src/features/projects/projectSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../api/axiosInstance';

// Async thunk: POST запрос жөнөтүү
export const createProject = createAsyncThunk(
  'projects/createProject',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        '/api/projects/admin/create',
        formData,
      );
      return response.data;
    } catch (err) {
      // Ката болсо rejectWithValue менен өткөрүп бер
      return rejectWithValue(err.response.data || err.message);
    }
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    project: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Ошибка создания проекта';
      });
  },
});

export default projectSlice.reducer;
