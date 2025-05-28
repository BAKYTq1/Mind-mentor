import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";



export const fetchMentorById = createAsyncThunk(
  'mentor/fetchMentorById',
  async (mentorId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/mentors/admin/${mentorId}/profile`);

      // Проверка на наличие ошибки в ответе
      if (response.data?.error) {
        return rejectWithValue(response.data.error);
      }

      return response.data;
    } catch (err) {
      console.error('Ошибка получения ментора по ID:', err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


const mentorDetailSlice = createSlice({
  name: 'mentorDetail',
  initialState: {
    mentordetail: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentorById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMentorById.fulfilled, (state, action) => {
        state.mentordetail = action.payload;
        state.loading = false;
      })
        .addCase(fetchMentorById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.error('MENTOR ERROR:', action.payload);
        });
  },
});

export default mentorDetailSlice.reducer;