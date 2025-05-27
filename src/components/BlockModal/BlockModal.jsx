// components/BlockModal.jsx
import React from 'react';
import ava1 from '../../assets/ava1.svg';
import star1 from '../../assets/star1.svg';
import star2 from '../../assets/star2.svg';

const BlockModal = ({ user, action, onConfirm, onCancel }) => {
  const isBlock = action === 'block';

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="bg-gray-200 rounded-[24px] p-5 max-w-[360px] w-full"
      >
        <h1 className="text-center mb-4 font-bold text-[23px]">
          Вы точно хотите <br /> {isBlock ? 'заблокировать' : 'разблокировать'}
        </h1>

        <div className="flex items-start mb-4 mt-4">
          <img src={ava1} alt="Аватар" className="w-10 h-10 rounded-full" />
          <div className="ml-4 flex flex-col">
            <div className="flex items-center">
              <h2 className="font-semibold text-base">{user.name}</h2>
              <img src={star1} alt="star1" className="h-5 w-[45px] ml-[35px]" />
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <p>{user.role} · {user.experience || '—'} лет</p>
              <img src={star2} alt="star2" className="w-[45px] h-5 ml-2" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col gap-2">
          <button
            onClick={onCancel}
            style={{ backgroundColor: 'rgba(35, 175, 206, 1)' }}
            className="p-2 px-30 rounded-[10px] text-white mb-2"
          >
            Отмена
          </button>
          <button
            onClick={onConfirm}
            className="bg-black p-2 px-23 rounded-[10px] text-white"
          >
            {isBlock ? 'Заблокировать' : 'Разблокировать'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockModal;
