import { configureStore } from "@reduxjs/toolkit";
import mentorApiReducer from "./mentorApi/mentorApiSlice"
import mentorDetailReducer from "./mentorApi/mentorDetailSlice";
import mentorCreateReducer from "./mentorApi/mentorCreateSlice";
import projectReducer from './Project/Project'
export const myStore = configureStore({
    reducer: {
            mentor: mentorApiReducer,
            mentorDetail: mentorDetailReducer,
            mentorCreate: mentorCreateReducer,
            project: projectReducer
    },
});