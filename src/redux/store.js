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
import  searchMentorReducer  from "./mentorApi/SearchMentor";
import UnlockMentorReducer  from "./mentorApi/MentorUnblock";


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



    },
});
