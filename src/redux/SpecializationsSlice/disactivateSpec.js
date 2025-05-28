import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const deactivateSpecialization = createAsyncThunk(
  "specializations/deactivateSpecialization",
  async (item, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `/mentors/admin/specializations/deactivate`,
        null,
        {
          params: {
            specializationName: item,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("DEACTIVATE ERROR:", error.response?.status, error.response?.data)
      return rejectWithValue({
        message: error.response?.data?.message || error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    }
  }
);


const initialState = {
  loading: false,
  success: false,
  error: null,
};

const deactivateSpecializationSlice = createSlice({
  name: "specializations/deactivateStatus",
  initialState,
  reducers: {
    resetDeactivateStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deactivateSpecialization.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deactivateSpecialization.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(deactivateSpecialization.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetDeactivateStatus } = deactivateSpecializationSlice.actions;
export default deactivateSpecializationSlice.reducer;
