import { configureStore } from "@reduxjs/toolkit";
import mentorApiReducer from "./mentorApi/mentorApiSlice"
import mentorDetailReducer from "./mentorApi/mentorDetailSlice";
import mentorCreateReducer from "./mentorApi/mentorCreateSlice";
import projectReducer from './Project/Project'
import authReducer from "./Registerapi/RegisterAdmin";
import usersReducer from './Users/Users'
import activeUsersReducer from './Users/Active'
import statisticsReducer from './Users/Statistic'
import userdetailReducer from './Users/Datauser'
export const myStore = configureStore({
    reducer: {
            mentor: mentorApiReducer,
            mentorDetail: mentorDetailReducer,
            mentorCreate: mentorCreateReducer,
            project: projectReducer
            auth: authReducer,
            users: usersReducer,
            activeUsers: activeUsersReducer,
            statistics: statisticsReducer,
            userdetail: userdetailReducer
    },
});