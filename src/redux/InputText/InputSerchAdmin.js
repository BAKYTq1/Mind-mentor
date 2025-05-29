import { createSlice } from "@reduxjs/toolkit";

const inputSearchAdminSlice = createSlice({
    name: "inputSearchAdmin",
    initialState: {
        value: "",
    },
    reducers: {
        setInputSearchAdmin: (state, action) => {
            state.value = action.payload;
        },
    },
});
export const { setInputSearchAdmin } = inputSearchAdminSlice.actions;
export default inputSearchAdminSlice.reducer;