import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSpecializations, resetStatus } from '../../redux/SpecializationsSlice/CreateSpecializations';
import './SpecCreate.scss';
import { toast } from 'react-toastify';

function SpecCreate({ onClose, onSuccess }) {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.createSpec);
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createSpecializations(name));
  };

  useEffect(() => {
    if (success) {
      toast.success('Специализация успешно создана!');
      onSuccess();
      dispatch(resetStatus());
      setName('');
      onClose();
    }
  }, [success, dispatch, onClose, onSuccess]);

  return (
    <div className="modal">
      <h2>Создание специализации</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="button" onClick={() => {
          dispatch(resetStatus());
          setName('');
          onClose();
        }}>
          Отмена
        </button>
        <button type="submit" disabled={loading}>
          {loading ? 'Создание...' : 'Создать'}
        </button>
      </form>

      {error && <p className="error">Ошибка: {error.message === "Specialization already exists" ? "Такая специализация уже существует" : error.message}</p>}
    </div>
  );
}

export default SpecCreate;
