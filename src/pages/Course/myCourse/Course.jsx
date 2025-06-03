import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Course.scss";
import { Link } from 'react-router-dom';
import CourseCard from '../../../components/courseCard/CourseCard.jsx';
import icon7 from "../../../assets/svg/icon7.svg";
import icon8 from "../../../assets/svg/icon8.svg";
import search from "../../../assets/svg/search.svg";
import icon12 from "../../../assets/svg/icon12.svg";
import icon13 from "../../../assets/svg/icon13.svg";

function Course() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const token = localStorage.getItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXJvbEBnbWFpbC5jb20iLCJpYXQiOjE3NDg5NDU4MzAsImV4cCI6MTc0ODk2MDIzMH0.z_wD4oc6ECjmEYy4_TEQFHAs1UqGarKMoXmUrJXOXHU');

        axios.get('http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api/mentors/mentor/panel/courses', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log('API response:', res.data);
                setCourses(res.data);
            })
            .catch(err => console.error('Error fetching courses:', err));
    }, []);

    const filteredCourses = courses.filter(course =>
        course.courseName && course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='myPanel'>
            <div className="myCoursesPanel">
                <div className='search'>
                    <input
                        type="text"
                        placeholder="Поиск курса"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <img src={search} alt="search icon" />
                </div>

                <div className='total'>
                    <button className='btn'>
                        <p>{filteredCourses.length} всего</p>
                        <Link to="/newcourse">
                            <img src={icon7} alt="add new course" />
                        </Link>
                    </button>

                    <div className='img'>
                        <img src={icon8} alt="icon" />
                    </div>
                </div>
            </div>

            <CourseCard courses={filteredCourses} />

            <div className='box'>
                <div className='btn-box'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>...</button>
                    <button>12</button>
                </div>

                <div className='icon-box'>
                    <button><img src={icon12} alt="prev" /></button>
                    <button><img src={icon13} alt="next" /></button>
                </div>
            </div>
        </div>
    );
}

export default Course;
