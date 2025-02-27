// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     title: "Empowering Communities for a Prosperous Future",
//     description:
//       "Building sustainable development through capacity building, health, education, peace, and economic empowerment.",
//   },
//   {
//     title: "Promoting Health & Nutrition",
//     description:
//       "Ensuring access to quality healthcare, nutrition programs, and medical outreach for better well-being.",
//   },
//   {
//     title: "Enhancing Education Opportunities",
//     description:
//       "Providing scholarships, learning materials, and quality education to empower future generations.",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[80vh] flex justify-center items-center bg-gray-100">
//       <div className="container text-center px-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl mx-auto"
//           >
//             <h1 className="text-4xl font-bold text-gray-800">{slides[currentSlide].title}</h1>
//             <p className="text-lg mt-4 text-gray-600">{slides[currentSlide].description}</p>
//             <button className="mt-6 px-6 py-2 bg-[#6BB23B] text-white rounded-full shadow-lg hover:bg-blue-700 transition">
//               Join Our Mission
//             </button>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Manual Navigation Dots */}
//       <div className="absolute bottom-6 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`h-3 w-3 rounded-full transition ${
//               currentSlide === index ? "bg-[#6BB23B]" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   {
//     title: "Empowering Communities for a Prosperous Future",
//     description:
//       "Building sustainable development through capacity building, health, education, peace, and economic empowerment.",
//     image: "/spd.jpg", // Add image path
//   },
//   {
//     title: "Promoting Health & Nutrition",
//     description:
//       "Ensuring access to quality healthcare, nutrition programs, and medical outreach for better well-being.",
//     image: "/spd1.jpg", // Add image path
//   },
//   {
//     title: "Enhancing Education Opportunities",
//     description:
//       "Providing scholarships, learning materials, and quality education to empower future generations.",
//     image: "/spd2.jpg", // Add image path
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 8000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[80vh] flex justify-center items-center bg-gray-100 overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={slides[currentSlide].image}
//           alt={slides[currentSlide].title}
//           layout="fill"
//           objectFit="cover"
//           className="opacity-80"
//         />
//       </div>

//       <div className="relative container text-center px-6">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl mx-auto bg-white/70 p-6 rounded-lg shadow-lg"
//           >
//             <h1 className="text-4xl font-bold text-gray-800">{slides[currentSlide].title}</h1>
//             <p className="text-lg mt-4 text-gray-600">{slides[currentSlide].description}</p>
//             <button className="mt-6 px-6 py-2 bg-[#6BB23B] text-white rounded-full shadow-lg hover:bg-[#4f8a2e] transition">
//               Join Our Mission
//             </button>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Manual Navigation Dots */}
//       <div className="absolute bottom-6 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`h-3 w-3 rounded-full transition ${
//               currentSlide === index ? "bg-[#6BB23B]" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Empowering Communities for a Prosperous Future",
    description:
      "Building sustainable development through capacity building, health, education, peace, and economic empowerment.",
    image: "/spd.jpg",
  },
  {
    title: "Promoting Health & Nutrition",
    description:
      "Ensuring access to quality healthcare, nutrition programs, and medical outreach for better well-being.",
    image: "/spd1.jpg",
  },
  {
    title: "Enhancing Education Opportunities",
    description:
      "Providing scholarships, learning materials, and quality education to empower future generations.",
    image: "/spd2.jpg",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] flex justify-center items-center bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill  // ✅ Replaces layout="fill"
          style={{ objectFit: "cover" }}  // ✅ Replaces objectFit="cover"
          className="opacity-80"
        />
      </div>

      <div className="relative container text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-white/70 p-6 rounded-lg shadow-lg"
          >
            <h1 className="text-4xl font-bold text-gray-800">{slides[currentSlide].title}</h1>
            <p className="text-lg mt-4 text-gray-600">{slides[currentSlide].description}</p>
            <button className="mt-6 px-6 py-2 bg-[#6BB23B] text-white rounded-full shadow-lg hover:bg-[#4f8a2e] transition">
              Join Our Mission
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Navigation Dots */}
      <div className="absolute bottom-6 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              currentSlide === index ? "bg-[#6BB23B]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
