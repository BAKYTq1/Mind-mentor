import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const createSpecializations = createAsyncThunk(
  "specializations/createSpecializations",
  async (name, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/mentors/admin/specializations/create`,
        null,
        {
          params: {
            specializationName: name
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error("Ошибка создания специализации:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);



const initialState = {
    loading: false,
    success: false,
    error: null,
};

const createSpecializationsSlice = createSlice({
    name: "createSpecializations",
    initialState: initialState,
    reducers: {
        resetStatus: (state) => {
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(createSpecializations.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(createSpecializations.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(createSpecializations.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { resetStatus } = createSpecializationsSlice.actions;
export default createSpecializationsSlice.reducer;