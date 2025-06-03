import React from 'react'
import './CourseCard.scss'
import { card } from "./index.js"
import image from "../../assets/photos/image1.png"
import icon20 from "../../assets/svg/icon20.svg"
import { useNavigate } from 'react-router-dom';

function CourseCard({ courses }) {
    const navigate = useNavigate();
    return (
        <div className='сourseCard'>
            {
                courses.map((item) => (
                    <div className='card' key={item.id} onClick={() => navigate('/detail', { state: item })}>
                     

                        <div className='texts'>
                            <img src={item.courseImageUrl} alt="" />
                            <div className='rating'>
                                <p>{item.courseRating}</p>
                                <img style={{ width: "48px", height: "48px" }} src={icon20} alt="rating icon" />
                            </div>
                        </div>
                        <h2>{item.courseName}</h2>
                        <div className='list'>
                            <div className='coverage'>
                                <img src={item.mentorAvatarUrl} alt="" />
                                <p>{item.studentCount}</p>
                            </div>
                            <div className='coverage'>
                                <img src={item.mentorAvatarUrl} alt="" />
                                <p>{item.mentorRating}</p>
                            </div>
                            <div className='coverage'>
                                <img src={item.mentorAvatarUrl} alt="" />
                                <p>{item.courseRating}</p>
                            </div>
                        </div>
                        <div className='price'>
                            <p>Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect</p>
                            <h4>{item.coursePrice}c</h4>
                        </div>

                
                    </div>
                ))
            }
        </div>
    )
}

export default CourseCard



// import React from 'react';
// import './CourseCard.scss';
// import icon20 from "../../assets/svg/icon20.svg";
// import { useNavigate } from 'react-router-dom';

// function CourseCard({ courses }) {
//     const navigate = useNavigate();

//     return (
//         <div className='courseCard'>
//             {
//                 courses.map((item) => (
//                     <div
//                         className='card'
//                         key={item.id}
//                         onClick={() => navigate('/detail', { state: item })}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <img src={item.courseImageUrl} alt="course preview" />
//                         <h2>{item.courseName}</h2>
//                         <div className='list'>
//                             <div className='coverage'>
//                                 <img src={item.mentorAvatarUrl} alt="avatar" />
//                                 <p>{item.studentCount}</p>
//                             </div>
//                             <div className='coverage'>
//                                 <img src={item.mentorAvatarUrl} alt="avatar" />
//                                 <p>{item.mentorRating}</p>
//                             </div>
//                             <div className='coverage'>
//                                 <img src={item.mentorAvatarUrl} alt="avatar" />
//                                 <p>{item.courseRating}</p>
//                             </div>
//                         </div>
//                         <div className='price'>
//                             <p>Вы узнаете в этом курсы, как создавать сайты с нуля. Научитесь работать программами как Figma, After Effect</p>
//                             <h4>{item.coursePrice}c</h4>
//                         </div>

//                         <div className='rating'>
//                             <p>{item.courseRating}</p>
//                             <img style={{ width: "48px", height: "48px" }} src={icon20} alt="rating icon" />
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }

// export default CourseCard;


