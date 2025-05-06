import React from 'react';
import CourseDetail from "../../components/courseDetail/CourseDetail.jsx";
import CourseReviews from "../../components/courseDetail/CourseReviews.jsx";

const CourseDetailPage = () => {
    return (
        <div>
            <CourseDetail/>
            <CourseReviews/>
        </div>
    );
};

export default CourseDetailPage;