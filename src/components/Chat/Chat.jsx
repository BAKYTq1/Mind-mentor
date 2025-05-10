import React, { useState } from 'react';
import './style.scss';
import { RiSendPlane2Line } from 'react-icons/ri';
import avatar from '../../assets/img/Rectangle 34 (2).svg'; // Фото по умолчанию

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'mentor', text: 'Здравствуйте! Можем ли мы чем-то помочь?', time: '11:45' },
    { sender: 'user', text: 'Да, у меня есть вопрос', time: '11:46' },
    { sender: 'mentor', text: 'Задавайте! Мы всегда готовы помочь вам.', time: '11:47' },
  ]);
  const [input, setInput] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); // состояние для выбранного пользователя
  const [stats, setStats] = useState({
    requests: 123,
    complaints: 10,
    reviews: 220,
  });

  const chatList = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Пользователь ${index + 1}`,
    time: `${11 + index % 12}:${index * 5}`,
    specialization: 'Разработчик', // Специальность
    experience: '2 года', // Опыт
    avatar: avatar, // Фото пользователя
  }));

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMessages([
      { sender: 'mentor', text: `Привет, ${user.name}! Чем могу помочь?`, time: '12:05' },
    ]);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input, time: '11:48' }]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-wrapper">
      {/* Левая часть: чат */}
      <div className="chat-left">
        {/* Заголовок чата */}
        <div className="chat-header">
          <h2>Чат</h2>
          {selectedUser && (
            <div className="user-info">
              <img src={selectedUser.avatar} alt="avatar" className="user-avatar" />
              <div>
                <h2>{selectedUser.name}</h2>
                <p>{selectedUser.specialization}, {selectedUser.experience}</p>
              </div>
            </div>
          )}
        </div>
   
        <div className="messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${msg.sender} fade-in`} // Класс для анимации появления сообщений
            >
              <img src={avatar} alt="avatar" />
              <div className="text">
                <p>{msg.text}</p>
                <span>{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="input-bar">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress} // Обработчик для Enter
            placeholder="Напишите сообщение..."
          />
          <button onClick={handleSend}><RiSendPlane2Line size={24} /></button>
        </div>
      </div>

      <div className="chat-right">
        <div className="stats">
        <h1>Данные</h1>
          <div>
            <h3>Запросы</h3>
            <p>{stats.requests}<span> раз</span></p>
          </div>
          <div>
            <h3>Жалобы</h3>
            <p>{stats.complaints}<span>раз</span></p>
          </div>
          <div>
            <h3>Отзывы</h3>
            <p>{stats.reviews}<span> раз</span></p>
          </div>
        </div>
        <div className="chat-list">
          <h2>Запросы ({chatList.length} пользователей)</h2>
          <div className="chat-entries">
            {chatList.map((item) => (
              <div
                key={item.id}
                className={`chat-item ${selectedUser?.id === item.id ? 'selected' : ''}`}
                onClick={() => handleUserClick(item)}
              >
                <p>{item.name}</p>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
