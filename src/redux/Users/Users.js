import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Получение пользователей
export const fetchUserProfile = createAsyncThunk(
  "users/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axiosInstance.get(`/api/users/search/admin/filter?all=true`);
      return resp.data.users || resp.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Блокировка
export const blockUser = createAsyncThunk(
  "users/blockUser",
  async (userId, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`/api/users/admin/${userId}/block`);
      return userId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Разблокировка — исправляем type!
export const UnblockUser = createAsyncThunk(
  "users/unblockUser", 
  async (userId, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`/api/users/admin/${userId}/unlock`);
      return userId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Слайс
const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Загрузка пользователей
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Блокировка
      .addCase(blockUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(blockUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Можно обновить статус пользователя напрямую:
        const user = state.data.find((u) => u.id === action.payload);
        if (user) user.status = "blocked";
      })
      .addCase(blockUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Разблокировка
      .addCase(UnblockUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UnblockUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const user = state.data.find((u) => u.id === action.payload);
        if (user) user.status = "active"; // или другой статус, который возвращается после разблокировки
      })
      .addCase(UnblockUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
