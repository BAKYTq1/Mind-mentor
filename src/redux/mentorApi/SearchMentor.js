import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const searchMentor = createAsyncThunk(
  "mentor/searchMentor",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/mentors/admin/search?query=${searchTerm}`, );
      return response.data;
    } catch (error) {
      console.error("Ошибка поиска наставника:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const searchMentorSlice = createSlice({
  name: "searchMentor",
  initialState: {
    searchmentors: [],
    loading: false,
    error: null,
    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMentor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMentor.fulfilled, (state, action) => {
        state.searchmentors = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchMentor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("SEARCH MENTOR ERROR:", action.payload);
        }
        );
    }
});

export default searchMentorSlice.reducer;