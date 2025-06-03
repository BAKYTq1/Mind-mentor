// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./FormTechnology.css";

// const BASE_URL = "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api";

// const FormTechnology = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [audience, setAudience] = useState([]); 
//   const [audienceInput, setAudienceInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleAudienceKeyDown = (e) => {
//     if (e.key === "Enter" && audienceInput.trim()) {
//       e.preventDefault();
//       if (!audience.includes(audienceInput.trim())) {
//         setAudience([...audience, audienceInput.trim()])
//       }
//       setAudienceInput("");
//     }
//   };

//   const handleRemoveTag = (tag) => {
//     setAudience(audience.filter((t) => t !== tag))
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !title.trim() ||
//       !price.trim() ||
//       !description.trim() ||
//       audience.length === 0
//     ) {
//       alert("Заполните все поля!");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     try {
//       setLoading(true);

//       const payload = {
//         nameTechnologies: title,
//         technologyPrice: Number(price),
//         descriptionTechnologies: description,
//         audienceTechnologies: audience.join(", "), 
//         language: "English", 
//       };

//       console.log("📦 Payload:", payload);

//       const response = await axios.post(
//         `${BASE_URL}/technologies/create`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("✅ Ответ от сервера:", response.data);
//       setMessage("✅ Технология успешно создана!");

//       setTitle("");
//       setPrice("");
//       setDescription("");
//       setAudience([]);
//       setAudienceInput("");

//       setTimeout(() => setMessage(""), 3000);
//     } catch (error) {
//       console.error(
//         "❌ Ошибка при создании технологии:",
//         error.response?.data || error.message
//       );
//       setMessage("❌ Ошибка при создании технологии.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="header-row">
//         <div className="header-left">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="40"
//             height="28"
//             viewBox="0 0 20 14"
//             style={{ cursor: "pointer" }}
//             onClick={handleBack}
//           >
//             <g
//               stroke="rgba(128,128,128,0.3)"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               transform="translate(2, 0)"
//               fill="none"
//             >
//               <line x1="15" y1="7" x2="1" y2="7" />
//               <line x1="1" y1="7" x2="7" y2="3" />
//               <line x1="1" y1="7" x2="7" y2="11" />
//             </g>
//             <g
//               stroke="rgba(0, 0, 0, 1)"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               fill="none"
//             >
//               <line x1="15" y1="7" x2="1" y2="7" />
//               <line x1="1" y1="7" x2="7" y2="3" />
//               <line x1="1" y1="7" x2="7" y2="11" />
//             </g>
//           </svg>
//           <span className="title-text">Технология</span>
//         </div>

//         <button className="btn-post" onClick={handleSubmit} disabled={loading}>
//           {loading ? (
//             "Отправка..."
//           ) : (
//             <span className="btn-content">
//               <span className="btn-text">Опубликовать</span>
//               <span className="btn-icon">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="black"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polygon points="5 3 19 12 5 21 5 3" />
//                 </svg>
//               </span>
//             </span>
//           )}
//         </button>
//       </div>

//       <form className="form-group" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="input-block half-width">
//             <div className="input-label-row">
//               <label htmlFor="tech-title" className="input-label">
//                 Название технологии
//               </label>
//               <span className="input-counter">{title.length}/28 символов</span>
//             </div>
//             <input
//               id="tech-title"
//               className="name-tech"
//               type="text"
//               placeholder="Например, Курс по UX/UI"
//               value={title}
//               maxLength={28}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div className="input-block half-width">
//             <div className="input-label-row">
//               <label htmlFor="tech-price" className="input-label">
//                 Стоимость
//               </label>
//               <span className="input-counter">&nbsp;</span>
//             </div>
//             <input
//               id="tech-price"
//               className="name-tech"
//               type="number"
//               placeholder="0 С"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="input-block">
//           <div className="input-label-row">
//             <label htmlFor="tech-description" className="input-label">
//               Описание
//             </label>
//             <span className="input-counter">
//               {description.length}/573 символов
//             </span>
//           </div>
//           <textarea
//             id="tech-description"
//             className="description-textarea"
//             placeholder="Опишите подробности"
//             value={description}
//             maxLength={573}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>

//         <div className="input-block">
//           <div className="input-label-row">
//             <label htmlFor="tech-audience" className="input-label">
//               Для кого это технология
//             </label>
//             <span className="input-counter">
//               {audience.length} 0/34 символов для каждого
//             </span>
//           </div>

         
//           <input
//             id="tech-audience"
//             className="tag-input"
//             type="text"
//             placeholder="Напишите примеры через запитой, например дизайнеры, и enter"
//             value={audienceInput}
//             onChange={(e) => setAudienceInput(e.target.value)}
//             onKeyDown={handleAudienceKeyDown}
//           />

//           <div className="tag-list">
//             {audience.map((tag, index) => (
//               <span key={index} className="tag">
//                 {tag}
//                 <button type="button" onClick={() => handleRemoveTag(tag)} />
//               </span>
//             ))}
//           </div>
//         </div>
//       </form>

//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default FormTechnology;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FormTechnology.css";

const BASE_URL = "http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api";

const FormTechnology = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [audience, setAudience] = useState([]);
  const [audienceInput, setAudienceInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleAudienceKeyDown = (e) => {
    if (e.key === "Enter" && audienceInput.trim()) {
      e.preventDefault();
      if (!audience.includes(audienceInput.trim())) {
        setAudience([...audience, audienceInput.trim()]);
      }
      setAudienceInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setAudience(audience.filter((t) => t !== tag));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !price.trim() ||
      !description.trim() ||
      audience.length === 0
    ) {
      alert("Заполните все поля!");
      return;
    }

    const payload = {
      nameTechnologies: title,
      technologyPrice: Number(price),
      descriptionTechnologies: description,
      audienceTechnologies: audience.join(", "),
      language: "English",
    };

    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/technologies/create`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      navigate("/technology", { state: payload });
    } catch (error) {
      console.error("Ошибка:", error);
      setMessage("Ошибка при создании технологии.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="header-row">
        <div className="header-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="28"
            viewBox="0 0 20 14"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            <g
              stroke="rgba(128,128,128,0.3)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2, 0)"
              fill="none"
            >
              <line x1="15" y1="7" x2="1" y2="7" />
              <line x1="1" y1="7" x2="7" y2="3" />
              <line x1="1" y1="7" x2="7" y2="11" />
            </g>
            <g
              stroke="rgba(0, 0, 0, 1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <line x1="15" y1="7" x2="1" y2="7" />
              <line x1="1" y1="7" x2="7" y2="3" />
              <line x1="1" y1="7" x2="7" y2="11" />
            </g>
          </svg>
          <span className="title-text">Технология</span>
        </div>

        <button className="btn-post" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            "Отправка..."
          ) : (
            <span className="btn-content">
              <span className="btn-text">Опубликовать</span>
              <span className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
            </span>
          )}
        </button>
      </div>

      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-block half-width">
            <div className="input-label-row">
              <label htmlFor="tech-title" className="input-label">
                Название технологии
              </label>
              <span className="input-counter">{title.length}/28 символов</span>
            </div>
            <input
              id="tech-title"
              className="name-tech"
              type="text"
              placeholder="Например, Курс по UX/UI"
              value={title}
              maxLength={28}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block half-width">
            <div className="input-label-row">
              <label htmlFor="tech-price" className="input-label">
                Стоимость
              </label>
              <span className="input-counter">&nbsp;</span>
            </div>
            <input
              id="tech-price"
              className="name-tech"
              type="number"
              placeholder="0 С"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="input-block">
          <div className="input-label-row">
            <label htmlFor="tech-description" className="input-label">
              Описание
            </label>
            <span className="input-counter">
              {description.length}/573 символов
            </span>
          </div>
          <textarea
            id="tech-description"
            className="description-textarea"
            placeholder="Опишите подробности"
            value={description}
            maxLength={573}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="input-block">
          <div className="input-label-row">
            <label htmlFor="tech-audience" className="input-label">
              Для кого это технология
            </label>
            <span className="input-counter">
              {audience.length} 0/34 символов для каждого
            </span>
          </div>

          <input
            id="tech-audience"
            className="tag-input"
            type="text"
            placeholder="Напишите примеры через запитой, например дизайнеры, и enter"
            value={audienceInput}
            onChange={(e) => setAudienceInput(e.target.value)}
            onKeyDown={handleAudienceKeyDown}
          />

          <div className="tag-list">
            {audience.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
                <button type="button" onClick={() => handleRemoveTag(tag)} />
              </span>
            ))}
          </div>
        </div>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default FormTechnology;

