import React, {useState} from 'react';
import Avatar from '../../assets/mentor2.svg';

const ProjectDetails = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="bg-black px-4 py-6">
            <div className="max-w-[360px] rounded-[24px] p-5 sm:p-10 sm:max-w-[540px] bg-white mx-auto">
                <h3 className="text-[18px] sm:text-[20px] font-[700] mb-5 sm:mb-[30px]">
                    Платформа для курс и менторов
                </h3>

                <p
                    className={`mb-5 sm:mb-[30px] overflow-hidden transition-all duration-300 ${
                        showAll ? '' : 'line-clamp-5'
                    }`}
                >
                    Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter
                    Effect.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с
                    нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом
                    курсы,как создавать сайты с нуля. сайты с нуля.
                </p>

                <h3
                    onClick={() => setShowAll(!showAll)}
                    className="text-[16px] sm:text-[18px] font-[600] text-[#23AFCE] underline cursor-pointer"
                >
                    {showAll ? 'Показать меньше' : 'Показать все'}
                </h3>

                <h3 className="mt-6 sm:mt-[40px] text-[18px] sm:text-[20px] font-[700] mb-6 sm:mb-[40px]">
                    Наша команда
                </h3>

                <div>
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="flex sm:flex-row items-start sm:items-center gap-3 px-4 py-3 bg-[#FAFAFA] rounded-[16px] mb-5"
                        >
                            <img src={Avatar} alt="" className="w-[48px] h-[48px] order-2 sm:order-1"/>
                            <div className="sm:flex items-center justify-between w-full order-1 sm:order-2">
                                <div>
                                    <p className="text-[16px] font-[600]">Марина Сополова</p>
                                    <p className="text-gray-500">2 года опыта</p>
                                </div>
                                <p className="font-[600] text-gray-500 mt-[16px] sm:mt-0">Проект менеджер</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sm:flex items-center justify-between mt-[15px]">
                    <button
                        className="order-1 sm:order-2 h-[64px] w-full sm:w-[256px] flex items-center justify-center bg-[#2D2D2D] rounded-[24px] text-white text-[20px] font-[700]"
                    >
                        Написать менеджеру
                    </button>
                    <div
                        className="order-2 sm:order-1 h-[64px] sm:w-[185px] flex items-center justify-center rounded-[24px] text-[20px] font-[700]"
                    >
                        <p className="cursor-pointer">Оставить отзыв</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
