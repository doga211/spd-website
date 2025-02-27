// import React from 'react';

// const GetInvolved = () => {
//   return (
//     <section id="get-involved" className="get-involved py-12 text-center">
//       <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
//       <div className="flex justify-center gap-6">
//         <a href="/volunteer" className="btn-primary">
//           Volunteer
//         </a>
//         <a href="/donate" className="btn-primary">
//           Donate
//         </a>
//         <a href="/partner" className="btn-primary">
//           Partner with Us
//         </a>
//       </div>
//     </section>
//   );
// };

// export default GetInvolved;

"use client";import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-16 text-center bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get Involved</h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Join us in making a difference! Whether through volunteering, donating, or partnering, 
        you can help create positive change in communities.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <motion.a
          href="/volunteer"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          variants={buttonVariants}
          whileHover="hover"
        >
          Volunteer
        </motion.a>
        <motion.a
          href="/donate"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          variants={buttonVariants}
          whileHover="hover"
        >
          Donate
        </motion.a>
        <motion.a
          href="/partner"
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
          variants={buttonVariants}
          whileHover="hover"
        >
          Partner with Us
        </motion.a>
      </div>
    </section>
  );
};

export default GetInvolved;
