// src/components/SpecializationList/SpecializationList.jsx
import React from "react";
import img1 from "../../assets/img1.svg";
import icon1 from "../../assets/icon1.svg";
import Loading from "../../shared/Loading/Loading";

const SpecializationList = ({
  spec,
  loading,
  activeMenuIndex,
  toggleMenu,
  handleFilterChange,
  handleAction,
  handleDeactivate,
  deactivateLoading,
  setSpecCreateModal
}) => {
  return (


    <div className="">


      {loading ? (
        <Loading />
      ) : (
        [spec[0], ...spec.slice(1).reverse()].map((item, index) => (
  <div key={index} className="relative flex items-center justify-between mb-3 rounded-lg p-2">
    <div
      onClick={() => handleFilterChange(item)}
      className="flex items-center gap-3 cursor-pointer"
    >
      <img src={img1} alt="icon" className="w-[40px] h-[40px]" />
      <h3 className="text-[16px] ml-[12px] font-semibold">{item}</h3>
    </div>

    <div className="flex items-center gap-2">
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu(index);
          }}
          className="text-xl px-2 hover:bg-gray-100 rounded"
        >
          <img src={icon1} alt="меню" />
        </button>

        {activeMenuIndex === index && (
          <div className="absolute right-0 top-6 shadow-md rounded-[12px] z-10 bg-black w-[128px] h-[84px]">
            <button
              onClick={() => handleAction("Редактировать")}
              className="block px-4 py-2 text-sm w-full text-left text-white"
            >
              Изменить
            </button>
            <button
              onClick={() => handleDeactivate(item)}
              disabled={deactivateLoading}
              className={`block px-4 py-2 text-sm w-full text-left ${
                deactivateLoading ? "text-gray-400 cursor-not-allowed" : "text-red-500"
              }`}
            >
              Удалить
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
))

      )}
    </div>

  );
};

export default SpecializationList;
