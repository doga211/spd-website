import React from "react";

const Volunteer = () => {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Volunteer with Us</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Make a lasting impact in communities by volunteering your time and skills.
      </p>
      <a href="/apply-volunteer" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
        Apply to Volunteer
      </a>
    </section>
  );
};

export default Volunteer;
