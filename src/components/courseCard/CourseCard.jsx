import React from 'react'
import './CourseCard.scss'
import { card } from "./index.js"

function CourseCard() {
    return (
        <div className='сourseCard'>
            {
                card.map((item) => (
                    <div className='card' key={item.id}>
                        <img src={item.img} alt="" />
                        <h2>{item.title}</h2>
                        <div className='list'>
                            <div className='coverage'>
                                <img src={item.svg} alt="" />
                                <p>{item.p2}</p>
                            </div>
                            <div className='coverage'>
                                <img src={item.svg2} alt="" />
                                <p>{item.p3}</p>
                            </div>
                            <div className='coverage'>
                                <img src={item.svg3} alt="" />
                                <p>{item.p4}</p>
                            </div>
                        </div>
                        <div className='price'>
                            <p>{item.p}</p>
                            <h4>{item.price}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CourseCard
