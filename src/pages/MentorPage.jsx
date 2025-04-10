import { useState } from "react";
import Modal from "../pages/mentor-modal/Modal.jsx";

const MentorPage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
                Открыть форму
            </button>

            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default MentorPage;
