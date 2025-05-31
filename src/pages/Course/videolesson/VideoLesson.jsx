import React from 'react'
import "./VideoLesson.scss"
import { Link } from 'react-router-dom'
import icon14 from "../../../assets/svg/icon14.svg"
import icon18 from "../../../assets/svg/icon18.svg"
import icon19plus from "../../../assets/svg/icon19plus.svg"
import icon12White from "../../../assets/svg/icon12white.svg"

function VideoLesson() {
    return (
        <div className='videolesson'>
            <div className='new'>
                <div className='h'>
                    <Link to="/course">
                        <img src={icon14} alt="" /></Link>
                    <p>Курс</p>
                </div>


                <div className='hBtn'>
                    <button className='i'>
                        <Link to="/datacourse">
                            <img src={icon12White} alt="" />
                        </Link>

                    </button>
                    <button className='b'>Далее
                        <img src={icon18} alt="" />
                    </button>



                </div>
            </div>

            <div className='newdata'>
                <div className='category'>
                    <button>Данные курса</button>
                    <button>Знания</button>
                    <button>Видео уроки</button>
                </div>

                <div className='frame'>
                    <div>
                        <h4>Обложка</h4>
                        <div>
                            <p>Обложка курса</p>
                        </div>
                    </div>

                    <div>
                        <h4>Видео превью курса</h4>
                        <div>
                            <p>Превью курса</p>
                        </div>
                    </div>
                </div>

                <div className='video-cource'>
                    <div className='file'>
                        <h3>Название раздела</h3>
                        <input type="text" placeholder='Например, подготовка' />
                    </div>

                    <h2>Видеоуроки</h2>

                    <div className='info1'>
                        <div>
                            <p>Название урока</p>
                            <input type="text" placeholder='Курс по UX/UI' />
                        </div>
                    </div>

                    <div className='info1'>
                        <div>
                            <p>Название урока</p>
                            <input type="text" placeholder='Курс по UX/UI' />
                        </div>
                    </div>

                    <div className='info2'>
                        <div className='div2'>
                            <button>
                                <img src={icon19plus} alt="" />
                            </button>
                            <p>Добавить видеоурок</p>
                        </div>

                        <div className='div3'>
                            <p>Название урока</p>
                            <input type="text" placeholder='Например, Курс по UX/UI' />
                        </div>
                    </div>

                    <div className='info2'>
                        <div className='div2'>
                            <button>
                                <img src={icon19plus} alt="" />
                            </button>
                            <p>Добавить видеоурок</p>
                        </div>

                        <div className='div3'>
                            <p>Название урока</p>
                            <input type="text" placeholder='Например, Курс по UX/UI' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoLesson
