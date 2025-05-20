import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

const API = "/admin/mentors/filter"

export const fetchMentors = createAsyncThunk(
  'mentor/fetchMentor',
  async (filter, { rejectWithValue }) => {
    try {
      let url = "/admin/mentors/filter";

      if (filter === "#FRONTEND") {
        url += "?specializations=Frontend Development&sortAsc=true";
      } else if (filter === "#BACKEND") {
        url += "?specializations=Backend Development&sortAsc=true";
      } else if (filter === "#АНАЛИЗЫ") {
        url += "?specializations=Data Science&sortAsc=true";
      } else if (filter === "#DEVOPS") {
        url += "?specializations=DevOps&sortAsc=true";
      } else if (filter === "#UIUX" || filter === "#UI/UX") {
        url += "?specializations=UI/UX Design&sortAsc=true";
      }

      const response = await axiosInstance.get(url);

      if (response.data?.error) {
        return rejectWithValue(response.data.error);
      }

      return response.data;
    } catch (err) {
      console.error('Ошибка получения менторов:', err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);




const mentorSlice = createSlice({
  name: 'mentor',
  initialState: {
    mentors: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetMentor: (state) => {
      state.mentors = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMentors.fulfilled, (state, action) => {
        state.mentors = action.payload;
        state.loading = false;
      })
      .addCase(fetchMentors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error('MENTOR ERROR:', action.payload);
      });
  },
});

export const { resetMentor } = mentorSlice.actions;
export default mentorSlice.reducer;
