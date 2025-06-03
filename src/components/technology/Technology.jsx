


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Technology.css";


const BASE_URL = "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const location = useLocation();
  const newTech = location.state;

  const token = localStorage.getItem("token");

  const fetchTechnologies = async (query = "") => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get(`/api/technologies/mentor/search`, {
        params: { query },
        headers: { Authorization: `Bearer ${token}` },
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
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <circle cx="20" cy="20" r="18" fill="black" />
              <line
                x1="28"
                y1="28"
                x2="38"
                y2="38"
                stroke="#b0b0b0"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {newTech && (
        <div className="new-technology-info">
          <h3>🆕 Новая технология добавлена:</h3>
          <p>Название: {newTech.nameTechnologies}</p>
          <p>Описание: {newTech.descriptionTechnologies}</p>
          <p>Цена: {newTech.technologyPrice} С</p>
          <p>Аудитория: {newTech.audienceTechnologies}</p>
        </div>
      )}

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
              </div>
            ))
          : !loading && <p>Технологии не найдены.</p>}
      </div>

      <div className="pagination">
        <div className="page-buttons">
          {[1, 2, 3, 4].map((pageNum) => (
            <button
              key={pageNum}
              className={`page ${currentPage === pageNum ? "active" : ""}`}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}
          <span className="dots">...</span>
          <button
            className={`page ${currentPage === 12 ? "active" : ""}`}
            onClick={() => setCurrentPage(12)}
          >
            12
          </button>
        </div>
        <div className="divider">
          <button
            className="pagination-arrow"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <polygon points="8,2 4,6 8,10" fill="white" />
            </svg>
          </button>

          <button
            className="pagination-arrow"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 12))}
            disabled={currentPage === 12}
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <polygon points="4,2 8,6 4,10" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technology;
