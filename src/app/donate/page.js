import React from "react";

const Donate = () => {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Support Our Mission</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Your donation helps us empower communities and drive sustainable change.
      </p>
      <a href="/donation-form" className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
        Donate Now
      </a>
    </section>
  );
};

export default Donate;
