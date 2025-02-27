"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    img: "/Success.jpg",
    text: "“SPD helped me build a sustainable livelihood.” – John Doe",
  },
  {
    img: "/Success.jpg",
    text: "“Through SPD's education programs, I gained valuable skills.” – Jane Doe",
  },
  {
    img: "/Success.jpg",
    text: "“With SPD’s support, my community has access to clean water.” – Mark Smith",
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-50 flex justify-center items-center">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#6BB23B]">Success Stories</h2>
        <div className="relative max-w-lg mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <img
                src={stories[currentIndex].img}
                alt="Success Story"
                className="rounded-lg shadow-lg mx-auto w-full h-64 object-cover"
              />
              <p className="mb-6 p-4 text-lg text-gray-700 italic">{stories[currentIndex].text}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform mt-4 -translate-x-1/2 flex space-x-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentIndex === index ? "bg-" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

