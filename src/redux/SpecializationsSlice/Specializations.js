import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Асинхронный экшен для получения специализаций
export const fetchSpecializations = createAsyncThunk(
  "specializations/fetchSpecializations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/mentors/admin/specializations");
      return response.data;
    } catch (error) {
      console.error("Ошибка получения специализаций:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Слайс
const specializationsSlice = createSlice({
  name: "specializations",
  initialState: {
    items: [],        
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecializations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpecializations.fulfilled, (state, action) => {
        state.items = action.payload;  // <-- сохраняем в items
        state.loading = false;
      })
      .addCase(fetchSpecializations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("SPECIALIZATION ERROR:", action.payload);
      });
  },
});

export default specializationsSlice.reducer;
