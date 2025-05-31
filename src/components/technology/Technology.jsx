import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Technology.css";
import axiosInstance from "../../api/axiosInstance";
const BASE_URL = "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const token = localStorage.getItem("token");

  const fetchTechnologies = async (query = "") => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get(`/api/technologies/mentor/search`, {
        params: { query },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechnologies(res.data);
    } catch (err) {
      console.error("Ката чыкты:", err);
      setError("Ошибка при загрузке данных.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnologies("");
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchTechnologies(value);
  };

  const handleView = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/technologies/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(`👁️ Просмотр: ${res.data.technologyName}`);
    } catch (err) {
      console.error("Ошиибка", err);
      setMessage("Ошибка при просмотре.");
    }
  };

  const handleEdit = async (id) => {
    const newName = prompt("Введите новое название технологии:");
    const newDescription = prompt("Введите новое описание:");
    const newPrice = prompt("Введите новую цену:");

    if (newName && newDescription && newPrice) {
      try {
        const res = await axios.put(
          `${BASE_URL}/technologies/${id}`,
          {
            technologyName: newName,
            description: newDescription,
            technologyPrice: newPrice,
            language: "English"
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessage(`✏️ Обновлено: ${res.data.technologyName}`);
        fetchTechnologies(searchTerm);
      } catch (err) {
        console.error("Ката редактированиеде:", err);
        setMessage("Ошибка при редактировании.");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить?")) {
      try {
        await axios.delete(`${BASE_URL}/technologies/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(`🗑️ Успешно удалено (ID: ${id})`);
        fetchTechnologies(searchTerm); 
      } catch (err) {
        console.error("Ката өчүрүүдө:", err);
        setMessage("Ошибка при удалении.");
      }
    }
  };

  return (
    <div className="technology-app">
      <div className="header-bar">
        <div className="search-container">
          <input
            type="text"
            placeholder="Поиск технологии"
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {message && <div className="message">{message}</div>}
      {loading && <p>Загрузка...</p>}
      {error && <p className="error">{error}</p>}

      <div className="technology-list">
        {technologies.length > 0
          ? technologies.map((tech) => (
              <div className="technology-card" key={tech.id}>
                <div className="tech-info">
                  <h3 className="tech-title">{tech.technologyName}</h3>
                  <p className="tech-description">{tech.description}</p>
                  <p className="tech-price">
                    Стоимость: <strong>{tech.technologyPrice} С</strong>
                  </p>
                </div>
                <div className="card-buttons">
                  <button
                    className="icon-btn black"
                    onClick={() => handleView(tech.technologyId)}
                  >
                    <i className="bi bi-book-half"></i>
                  </button>
                  <button
                    className="icon-btn blue"
                    onClick={() => handleEdit(tech.technologyId)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="icon-btn red"
                    onClick={() => handleDelete(tech.technologyId)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))
          : !loading && <p>Технологии не найдены.</p>}
      </div>

      <div className="pagination">
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">4</button>
        <span className="dots">...</span>
        <button className="page">12</button>
      </div>
    </div>
  );
};

export default Technology;