import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProject() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    cover: null,
    name: "",
    description: "",
    requirements: "",
    specialists: [""],
    price: "",
    language: "Русский",
  });

  const [coverPreview, setCoverPreview] = useState(null);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, cover: file });
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
  try {
    const token = localStorage.getItem("token"); // Токенди ал
    const res = await fetch(`/api/projects/admin/search/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Авторизация кош
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Ошибка при загрузке проекта");

    const data = await res.json();

    setFormData({
      cover: null,
      name: data.projectName || "",
      description: data.projectDescription || "",
      requirements: data.requirements || "",
      specialists: data.requiredSpecialists
        ? data.requiredSpecialists.split(", ")
        : [""],
      price: data.projectPrice || "",
      language: data.language || "Русский",
    });

    if (data.projectImageUrl) {
      setCoverPreview(data.projectImageUrl);
    }
  } catch (error) {
    console.error("Проектти жүктөөдө ката:", error);
  }
};    if (id) fetchProject();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecialistChange = (index, value) => {
    const newSpecialists = [...formData.specialists];
    newSpecialists[index] = value;
    setFormData((prev) => ({
      ...prev,
      specialists: newSpecialists,
    }));
  };

  const addSpecialist = () => {
    setFormData((prev) => ({
      ...prev,
      specialists: [...prev.specialists, ""],
    }));
  };

const handleNext = async () => {
  const token = localStorage.getItem("token");

  const updatedData = {
    projectName: formData.name,
    projectDescription: formData.description,
    projectImageUrl: coverPreview || "",
    requiredSpecialists: formData.specialists.join(", "),
    projectPrice: parseFloat(formData.price),
    language: formData.language,
    requirements: formData.requirements,
  };

  try {
    const response = await fetch(`/api/projects/admin/requests/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Мына бул токен өтө маанилүү
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      alert("Проект ийгиликтүү жаңыртылды!");
      navigate("/ProjectsAdminka");
    } else {
      alert("Жаңыртууда ката кетти");
    }
  } catch (err) {
    console.error("PUT ката:", err);
    alert("Сервер менен байланышта ката кетти");
  }
};
  return (
    <div className="min-h-screen w-[1440px] h-[1174px] m-[auto] bg-[#0F0F10] text-white font-sans p-10">
      <div className="ml-[80px]">
        <h1 className="text-[64px] font-bold mb-[50px]">Новый проект</h1>
        <div className="flex flex-col lg:flex-row gap-[150px]">
          {/* Обложка */}
          <div className="w-full max-w-sm">
            <p className="mb-2">Обложка</p>

            <div className="h-[140px] bg-[#D9D9D9] rounded-lg border-2 border-dashed border-cyan-400 flex items-center justify-center mb-4 overflow-hidden">
              {coverPreview ? (
                <img
                  src={coverPreview}
                  alt="Preview"
                  className="h-full object-cover"
                />
              ) : (
                <img src="/upload-icon.svg" alt="Upload" className="w-8 h-8" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverChange}
              id="cover-upload"
              className="hidden"
            />
            <label
              htmlFor="cover-upload"
              className="w-full bg-[#00BFD8] text-white py-2 rounded-md text-center cursor-pointer block"
            >
              Изменить
            </label>

            <div className="bg-[#1A1A1A] rounded-lg p-2 flex items-center gap-3">
              <div className="bg-[#00BFD8] p-2 rounded-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="M..." stroke="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm">Cover.img</p>
                <div className="w-full h-2 bg-gray-600 rounded">
                  <div
                    className="h-2 bg-[#00BFD8] rounded"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <button className="text-white text-xl ml-2">×</button>
            </div>
          </div>

          {/* Inputs */}
          <div className="flex-1 space-y-4">
            <div>
              <p className="mb-1">Название проекта</p>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-[703px] h-[46px] bg-[white] rounded-[16px] px-4 py-2 text-black border border-gray-600"
              />
            </div>

            <div>
              <p className="mb-1">Описание проекта</p>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                className="w-[703px] h-[180px] text-black rounded-[16px] px-4 py-2 bg-[white] border border-gray-600"
              />
            </div>

            <div>
              <p className="mb-1">Требование к специалистам</p>
              <textarea
                name="requirements"
                rows="4"
                value={formData.requirements}
                onChange={handleInputChange}
                className="w-[703px] h-[104px] bg-[white] text-black rounded-[16px] px-4 py-2 border border-gray-600"
              />
            </div>

            <div className="w-[703px]">
              <p className="mb-1">Специалист</p>
              <div className="space-y-2 grid grid-cols-3">
                {formData.specialists.map((spec, i) => (
                  <input
                    key={i}
                    type="text"
                    value={spec}
                    onChange={(e) => handleSpecialistChange(i, e.target.value)}
                    className="w-[229px] h-[46px] bg-[white] text-black rounded-[16px] px-4 py-2 border border-gray-600"
                  />
                ))}
              </div>
              <button
                onClick={addSpecialist}
                className="text-[white] ml-[470px] mt-2 hover:underline"
              >
                Добавить еще специалистов
              </button>
            </div>

            <div className="flex mt-[80px] w-[703px]">
              <div className="flex-1">
                <p className="mb-1">Цена</p>
                <input
                  name="price"
                  type="text"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-[340px] h-[46px] rounded-[16px] px-4 py-2 bg-[white] text-black border border-gray-600"
                />
              </div>
              <div className="flex-1">
                <p className="mb-1">Язык</p>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-[340px] h-[46px] rounded-[16px] px-4 py-2 bg-[white] text-black border border-gray-600"
                >
                  <option>Русский</option>
                  <option>Кыргызча</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>

            <div className="flex w-[703px] justify-between pt-4">
              <button
                onClick={() => navigate("/ProjectsAdminka")} // Отмена кнопкасы кайтып кетет
                className="bg-white w-[340px] h-[46px] text-black py-2 px-8 rounded-[16px]"
              >
                Отмена
              </button>

              <button
                onClick={handleNext}
                className="bg-[#00BFD8] w-[340px] h-[46px] text-white py-2 px-8 rounded-[16px] hover:bg-cyan-600"
              >
                Дальше
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
