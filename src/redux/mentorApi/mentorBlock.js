import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const PatchBlockMentor = createAsyncThunk(
  "mentor/PatchBlockMentor",
  async (id, { rejectWithValue }) => {
    try {
      if (!id) {
        throw new Error("Не указан ID ментора");
      }

      const response = await axiosInstance.patch(
        `/api/mentors/admin/${id}/block`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const initialState = {
  loading: false,
  blockSuccess: false,
  error: null,
  lastActionId: null
};

const mentorBlockSlice = createSlice({
  name: "mentorBlock",
  initialState,
  reducers: {
    resetBlockState: (state) => {
      Object.assign(state, initialState);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(PatchBlockMentor.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.blockSuccess = false;
        state.lastActionId = action.meta.arg;
      })
      .addCase(PatchBlockMentor.fulfilled, (state) => {
        state.loading = false;
        state.blockSuccess = true;
      })
      .addCase(PatchBlockMentor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.blockSuccess = false;
      });
  }
});

export const { resetBlockState } = mentorBlockSlice.actions;
export default mentorBlockSlice.reducer;