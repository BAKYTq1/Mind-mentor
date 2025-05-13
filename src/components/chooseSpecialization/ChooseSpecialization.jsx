
const specializations = [
    "Дизайнеры",
    "Frontend Разработчики",
    "Frontend Разработчики",
    "Владельцы интернет проектов",
    "Frontend Разработчики",
    "Владельцы интернет проектов",
    "Frontend Разработчики",
];

const bgColors = ["#E1F3FF", "#D5F6ED", "#E2DBFA", "#FFE0CB"];

const ChooseSpecialization = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-[50px]">
            <div className="bg-white mx-auto  sm:w-[450px] w-[360px] rounded-[24px] sm:p-[30px] p-[15px]">
                <h1 className="sm:text-[24px] text-[18px] sm:mt-0 mt-[20px] font-[700] text-center mb-[30px]">Выберите вашу специальность</h1>

                <div className="text-[16px] font-[600] flex justify-center flex-col">
                    {specializations.map((title, index) => {
                        const bgColor = bgColors[index % bgColors.length];
                        return (
                            <button
                                key={index}
                                className="px-[30px] py-[16px] mx-auto rounded-[16px] mb-[20px]"
                                style={{ backgroundColor: bgColor }}
                            >
                                {title}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center justify-between mt-[15px]">
                    <div className="h-[56px] w-[148px] flex items-center justify-center rounded-[24px] text-[20px] font-[700]">
                        <p className="cursor-pointer">Отмена</p>
                    </div>
                    <button className="h-[56px] w-[212px] flex items-center justify-center bg-[#2D2D2D] rounded-[24px] text-white text-[20px] font-[700]">
                        Подвердить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChooseSpecialization;
