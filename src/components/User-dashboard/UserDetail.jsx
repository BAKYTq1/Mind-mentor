import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.scss';
import {
  fetchUserById,
  fetchUserTehById,
  fetchUserProById,
} from '../../redux/Users/Datauser';

const UserDetailModal = ({ userId, setShowModal }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('main');

  const { data, technologies, projects, loading, error } = useSelector(
    (state) => state.userdetail || {}
  );

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (activeTab === 'technologies') {
      dispatch(fetchUserTehById(userId));
    } else if (activeTab === 'projects') {
      dispatch(fetchUserProById(userId));
    }
  }, [activeTab, userId, dispatch]);

  if (!userId) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          ×
        </button>

        <div className="tabs">
          <button onClick={() => setActiveTab('main')}>Основное</button>
          <button onClick={() => setActiveTab('courses')}>Курсы</button>
          <button onClick={() => setActiveTab('technologies')}>Технологии</button>
          <button onClick={() => setActiveTab('projects')}>Проекты</button>
        </div>

        {loading && <p className="status-text">Загрузка...</p>}
        {error && <p className="status-text error">{error}</p>}

        {activeTab === 'main' && data && (
          <div>
            <h2>Данные пользователя</h2>
            <div className="flex flex-wrap">
              <div className="flex w-full">
                <div>
                  <img
                    src={data.avatarUrl}
                    alt="avatar"
                    className="w-50px rounded-50px"
                  />
                </div>
                <div className="w-full">
                  <strong>Имя:</strong> {data.firstName} {data.secondName}
                </div>
              </div>
              <div>
                <p><strong>Курсы:</strong> {data.countCourse}</p>
              </div>
            </div>
            <div><strong>Email:</strong> {data.email}</div>
            <div><strong>Телефон:</strong> {data.phoneNumber}</div>
            <div><strong>ID:</strong> {data.userId}</div>
            <div><strong>Дата регистрации:</strong> {new Date(data.createdAt).toLocaleDateString()}</div>
            <div><strong>Заблокирован:</strong> {data.isBlocked ? 'Да' : 'Нет'}</div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div>
            <h3>Курсы пользователя</h3>
            <p><strong>Количество:</strong> {data?.countCourse || 0}</p>
            {/* Здесь можно отрисовать список курсов, если они есть в API */}
          </div>
        )}

        {activeTab === 'technologies' && (
          <div>
            <h3>Технологии</h3>
            {technologies && technologies.length > 0 ? (
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech.name}</li>
                ))}
              </ul>
            ) : (
              <p>Нет данных о технологиях.</p>
            )}
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <h3>Проекты</h3>
            {projects && projects.length > 0 ? (
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>
                    {project.projectName}
                {project.projectDescription}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Нет данных о проектах.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailModal;
