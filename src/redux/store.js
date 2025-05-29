import { configureStore } from "@reduxjs/toolkit";
import mentorApiReducer from "./mentorApi/mentorApiSlice"
import mentorDetailReducer from "./mentorApi/mentorDetailSlice";
import mentorCreateReducer from "./mentorApi/mentorCreateSlice";
import specializationsReducer from "./SpecializationsSlice/Specializations";
import createSpecializationsReducer from "./SpecializationsSlice/CreateSpecializations";
import deactivateSpecializationReducer from './SpecializationsSlice/disactivateSpec';
import mentorCountReducer from "./mentorApi/MentorCount";
import mentorBlockedReducer from "./mentorApi/MentorByBlocked";
import PatchBlockReducer from "./mentorApi/mentorBlock"
import MentorAdminSearchReducer from "./InputText/InputSerchAdmin";
import searchMentorReducer from "./mentorApi/SearchMentor";
import UnlockMentorReducer from "./mentorApi/MentorUnblock";
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
        spec: specializationsReducer,
        createSpec: createSpecializationsReducer,
        deactivateSpec: deactivateSpecializationReducer,
        mentorCount: mentorCountReducer,
        mentorBlocked: mentorBlockedReducer,
        BlockMentor: PatchBlockReducer,
        inputSearchAdmin: MentorAdminSearchReducer,
        searchMentor: searchMentorReducer,
        UnlockMentor: UnlockMentorReducer,
        mentor: mentorApiReducer,
        mentorDetail: mentorDetailReducer,
        mentorCreate: mentorCreateReducer,
        project: projectReducer,
        auth: authReducer,
        users: usersReducer,
        activeUsers: activeUsersReducer,
        statistics: statisticsReducer,
        userdetail: userdetailReducer

    }
})
