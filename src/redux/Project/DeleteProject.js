import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";



export const deleteProject = createAsyncThunk(
    "project/deleteProject",
    async (projectId, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.delete(`/api/projects/admin/${projectId}/delete`);
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
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteProject.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(deleteProject.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(deleteProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            ;
    },
});

export default projectSlice.reducer;