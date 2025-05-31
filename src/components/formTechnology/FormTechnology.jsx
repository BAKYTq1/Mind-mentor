import React, { useState } from "react";
import "./FormTechnology.css";

const FormTechnology = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="form-container">
      <div className="cont-tech">
        <div className="post">
          <div className="left">
            <i className="bi bi-arrow-left"></i>
            <span className="title-text">Технология</span>
          </div>
          <button className="btn-post">Опубликовать</button>
        </div>
      </div>

      <div className="form-group">
        <label>
          Название технологии
          <input
            className="name-tech"
            type="text"
            placeholder="Например, Курс по UX/UI"
            value={title}
            maxLength={28}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Стоимость
          <input
            className="name-tech"
            type="text"
            placeholder="0 С"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Описание
          <textarea
            className="description-textarea"
            placeholder="Опишите подробности"
            value={description}
            maxLength={573}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Для кого это технология
          <input
            className="audience-input"
            type="text"
            placeholder="Напишите пример через запятую, например дизайнеры, и enter"
          />
        </label>
      </div>
    </div>
  );
};

export default FormTechnology;
