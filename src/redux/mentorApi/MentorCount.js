import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Получение общего количества менторов
export const GetMentorCount = createAsyncThunk(
  "mentor/GetMentorCount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/mentors/admin/count-total");
      return response.data;
    } catch (error) {
      console.error("Ошибка получения количества менторов:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Получение количества активных менторов
export const GetActiveMentorCount = createAsyncThunk(
  "mentor/GetActiveMentorCount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/mentors/admin/statistics");
      return response.data;
    } catch (error) {
      console.error("Ошибка получения количества активных менторов:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const mentorCountSlice = createSlice({
  name: "mentorCount",
  initialState: {
    count: [],
    activeCount: [],
    loading: false,
    error: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка общего количества менторов
      .addCase(GetMentorCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetMentorCount.fulfilled, (state, action) => {
        state.count = action.payload;
        state.loading = false;
      })
      .addCase(GetMentorCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("MENTOR COUNT ERROR:", action.payload);
      })

      // Обработка количества активных менторов
      .addCase(GetActiveMentorCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetActiveMentorCount.fulfilled, (state, action) => {
        state.activeCount = action.payload;
        state.loading = false;
      })
      .addCase(GetActiveMentorCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("ACTIVE MENTOR COUNT ERROR:", action.payload);
      });
  },
});

export default mentorCountSlice.reducer;
