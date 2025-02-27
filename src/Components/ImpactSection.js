import React from 'react';

const ImpactSection = () => {
  return (
    <section className="impact-section py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="impact-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700">9+ Years of Service</h3>
            <p className="text-gray-600">Years of community development</p>
          </div>
          <div className="impact-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700">50,000+ Beneficiaries</h3>
            <p className="text-gray-600">People impacted by our initiatives</p>
          </div>
          <div className="impact-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700">100+ Projects</h3>
            <p className="text-gray-600">Successfully completed initiatives</p>
          </div>
          <div className="impact-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700">20+ Partnerships</h3>
            <p className="text-gray-600">Active collaborations with organizations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
