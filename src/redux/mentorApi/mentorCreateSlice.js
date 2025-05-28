import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const createMentor = createAsyncThunk(
  'mentor/createMentor',
  async (mentorData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/mentors/admin/mentor/create', mentorData);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Ошибка при создании ментора';
      return rejectWithValue(message);
    }
  }
);

const mentorSlice = createSlice({
  name: 'mentor',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMentor.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createMentor.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createMentor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { resetStatus } = mentorSlice.actions;
export default mentorSlice.reducer;
