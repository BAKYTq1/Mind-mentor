import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchMentorsByBlocked = createAsyncThunk(
    "mentor/fetchMentorsByBlocked",
    async (filter, { rejectWithValue }) => {
        try {
            let url = `/api/mentors/admin/filter?blocked=true&sortAsc=true`;
            if (filter === "") {
                url = "/api/mentors/admin/filter?blocked=true&sortAsc=true";
            }

            const response = await axiosInstance.get(url);
            if (response.data?.error) {
                return rejectWithValue(response.data.error);
            }

            return response.data;
        } catch (err) {
            console.error("Ошибка получения менторов:", err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const mentorByBlockedSlice = createSlice({
    name: "mentorByBlocked",
    initialState: {
        mentorsBlocked: [],
        loading: false,
        error: [],
    },
    reducers: {
        resetMentorByBlocked: (state) => {
            state.mentors = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMentorsByBlocked.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMentorsByBlocked.fulfilled, (state, action) => {
                state.mentorsBlocked = action.payload;
                state.loading = false;
            })
            .addCase(fetchMentorsByBlocked.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.error("MENTOR ERROR:", action.payload);
            });
    },
});
export const { resetMentorByBlocked } = mentorByBlockedSlice.actions;
export default mentorByBlockedSlice.reducer;