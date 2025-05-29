import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MentorModal = ({ mentor, onClose }) => {
  const [page, setPage] = useState(1);
  const perPage = 4;

  if (!mentor) return null;

  const courses = mentor.courses || [];
  const pageCount = Math.ceil(courses.length / perPage);
  const currentCourses = courses.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="fixed inset-0 z-50 bg-[#00000080] bg-opacity-40 flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="bg-white shadow-xl shadow-[#00000080] border border-[#CFCFCF] h-[645px] rounded-2xl w-full max-w-[520px] p-6 relative flex flex-col justify-between"
      >
        <div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#6F6D73] text-2xl hover:text-[#23AFCE] transition"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-black mb-4">Данные ментора</h2>

          <div className="flex items-center gap-3 mb-6">
            <img src={mentor.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-black text-sm font-semibold">{mentor.firstName} {mentor.secondName}</p>
              <p className="text-[#6F6D73] text-sm">
                {courses.length} курса · {mentor.specializationName}
              </p>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            <button className="flex-1 py-2 rounded-full bg-[#23AFCE] text-white font-medium hover:opacity-90 transition">Курсы</button>
            <button className="flex-1 py-2 rounded-full border border-[#CFCFCF] text-black font-medium hover:bg-[#f5f5f5] transition">Технологии</button>
          </div>

          <div className="text-[#6F6D73] text-sm mb-4">Всего продано {courses.length} курса</div>

          <div className="space-y-3 min-h-[180px] mb-4">
            <AnimatePresence mode="wait">
              {currentCourses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 border border-[#e5e7eb] rounded-xl flex justify-between items-start bg-[#FAFAFA]"
                >
                  <div className="w-3/4 pr-2">
                    <p className="text-black text-sm font-medium truncate">{course.title}</p>
                    <p className="text-[#6F6D73] text-xs mt-1">{course.type}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-black">{course.price} C</p>
                    <p className="text-[#6F6D73] text-xs">{course.date}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination pinned at bottom */}
        <div className="flex justify-center items-center gap-2 mt-auto text-sm text-[#6F6D73] select-none pt-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 flex items-center justify-center rounded-full font-bold transition ${
                page === i + 1
                  ? 'bg-[#23AFCE] text-white'
                  : 'hover:bg-[#e5e5e5] text-[#6F6D73]'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MentorModal;
