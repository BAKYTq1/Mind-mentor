// redux/mentorApi/unlockMentor.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const UnlockMentor = createAsyncThunk(
  "mentor/UnlockMentor",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/api/mentors/admin/${id}/unlock`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  lastActionId: null,
};

const unlockMentorSlice = createSlice({
  name: "unlockMentor",
  initialState,
  reducers: {
    resetUnlockState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UnlockMentor.pending, (state, action) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.lastActionId = action.meta.arg;
      })
      .addCase(UnlockMentor.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(UnlockMentor.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetUnlockState } = unlockMentorSlice.actions;
export default unlockMentorSlice.reducer;
