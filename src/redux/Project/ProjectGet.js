import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Проекттерди алуу
export const getProject = createAsyncThunk(
  "project/getProject",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/projects/admin/filter");
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Server error");
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    loading: false,
    error: null,
    projects: [],
  },
  reducers: {
    resetProjects: (state) => {
      state.projects = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProjects } = projectSlice.actions;
export default projectSlice.reducer;
