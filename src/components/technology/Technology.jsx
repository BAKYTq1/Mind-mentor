// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Technology.css";
// import axiosInstance from "../../api/axiosInstance";

// const BASE_URL = "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api";

// const Technology = () => {
//   const [technologies, setTechnologies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 12;

//   const token = localStorage.getItem("token");

//   const fetchTechnologies = async (query = "") => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axiosInstance.get(`/api/technologies/mentor/search`, {
//         params: { query },
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setTechnologies(res.data);
//     } catch (err) {
//       console.error("Ката чыкты:", err);
//       setError("Ошибка при загрузке данных.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTechnologies("");
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     fetchTechnologies(value);
//   };

//   const handleView = async (id) => {
//     try {
//       const res = await axios.get(`${BASE_URL}/technologies/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMessage(`👁️ Просмотр: ${res.data.technologyName}`);
//     } catch (err) {
//       console.error("Ошибкa", err);
//       setMessage("Ошибка при просмотре.");
//     }
//   };

//   const handleEdit = async (id) => {
//     const newName = prompt("Введите новое название технологии:");
//     const newDescription = prompt("Введите новое описание:");
//     const newPrice = prompt("Введите новую цену:");

//     if (newName && newDescription && newPrice) {
//       try {
//         const res = await axios.put(
//           `${BASE_URL}/technologies/${id}`,
//           {
//             technologyName: newName,
//             description: newDescription,
//             technologyPrice: newPrice,
//             language: "English",
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setMessage(`✏️ Обновлено: ${res.data.technologyName}`);
//         fetchTechnologies(searchTerm);
//       } catch (err) {
//         console.error("Ката редактированиеде:", err);
//         setMessage("Ошибка при редактировании.");
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Вы уверены, что хотите удалить?")) {
//       try {
//         await axios.delete(`${BASE_URL}/technologies/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMessage(`🗑️ Успешно удалено (ID: ${id})`);
//         fetchTechnologies(searchTerm);
//       } catch (err) {
//         console.error("Ката өчүрүүдө:", err);
//         setMessage("Ошибка при удалении.");
//       }
//     }
//   };

//   const renderPagination = () => {
//     const pages = [];

//     for (let i = 1; i <= 4; i++) {
//       pages.push(
//         <button
//           key={i}
//           className={`page ${currentPage === i ? "active" : ""}`}
//           onClick={() => setCurrentPage(i)}
//         >
//           {i}
//         </button>
//       );
//     }

//     pages.push(
//       <span key="dots" className="dots">
//         ...
//       </span>
//     );

//     pages.push(
//       <button
//         key={totalPages}
//         className={`page ${currentPage === totalPages ? "active" : ""}`}
//         onClick={() => setCurrentPage(totalPages)}
//       >
//         {totalPages}
//       </button>
//     );

//     return pages;
//   };

//   return (
//     <div className="technology-app">
//       <div className="header-bar">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Поиск технологии"
//             className="search-input"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <span className="search-icon">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="40"
//               viewBox="0 0 40 40"
//             >
//               <circle cx="20" cy="20" r="18" fill="black" />
//               <line
//                 x1="28"
//                 y1="28"
//                 x2="38"
//                 y2="38"
//                 stroke="#b0b0b0"
//                 strokeWidth="5"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </span>
//         </div>

//         <div className="header-stats">
//           <div className="total-count">
//             {technologies.length} всего
//             <div className="bttn">
//               <button className="plus-btn">+</button>
//             </div>
//           </div>
//           <div className="notification-btn">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="white"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.104-14.002c1.58.122 3.012 1.428 3.412 3.154C11.91 5.262 12 6.355 12 8v2l1 1v1H3v-1l1-1V8c0-1.645.09-2.738.484-3.848.4-1.726 1.833-3.032 3.412-3.154z" />
//             </svg>
//             <span className="notification-badge">+99</span>
//           </div>
//         </div>
//       </div>

//       {message && <div className="message">{message}</div>}
//       {loading && <p>Загрузка...</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="technology-list">
//         {technologies.length > 0
//           ? technologies.map((tech) => (
//               <div className="technology-card" key={tech.id}>
//                 <div className="tech-info">
//                   <h3 className="tech-title">{tech.technologyName}</h3>
//                   <p className="tech-description">{tech.description}</p>
//                   <p className="tech-price">
//                     Стоимость: <strong>{tech.technologyPrice} С</strong>
//                   </p>
//                 </div>
//                 <div className="card-buttons">
//                   <button
//                     className="icon-btn black"
//                     onClick={() => handleView(tech.technologyId)}
//                   >
//                     <i className="bi bi-book-half"></i>
//                   </button>
//                   <button
//                     className="icon-btn blue"
//                     onClick={() => handleEdit(tech.technologyId)}
//                   >
//                     <i className="bi bi-pencil"></i>
//                   </button>
//                   <button
//                     className="icon-btn red"
//                     onClick={() => handleDelete(tech.technologyId)}
//                   >
//                     <i className="bi bi-trash"></i>
//                   </button>
//                 </div>
//               </div>
//             ))
//           : !loading && <p>Технологии не найдены.</p>}
//       </div>

//       <div className="pagination">
//         <div className="page-buttons">
//           {[1, 2, 3, 4].map((pageNum) => (
//             <button
//               key={pageNum}
//               className={`page ${currentPage === pageNum ? "active" : ""}`}
//               onClick={() => setCurrentPage(pageNum)}
//             >
//               {pageNum}
//             </button>
//           ))}

//           <span className="dots">...</span>

//           <button
//             className={`page ${currentPage === 12 ? "active" : ""}`}
//             onClick={() => setCurrentPage(12)}
//           >
//             12
//           </button>
//         </div>

//         <div className="divider">
//           <button
//             className="pagination-arrow"
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12">
//               <polygon points="8,2 4,6 8,10" fill="white" />
//             </svg>
//           </button>

//           <button
//             className="pagination-arrow"
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 12))}
//             disabled={currentPage === 12}
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12">
//               <polygon points="4,2 8,6 4,10" fill="white" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technology;


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Technology.css";
import axiosInstance from "../../api/axiosInstance";

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
