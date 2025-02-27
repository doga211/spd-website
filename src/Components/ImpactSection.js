import React from 'react';

const ImpactSection = () => {
  return (
    <section className="impact-section py-12 bg-gray-100">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="impact-item">
            <h3 className="text-2xl font-semibold">9+ Years of Service</h3>
            <p>Years of community development</p>
          </div>
          <div className="impact-item">
            <h3 className="text-2xl font-semibold">50,000+ Beneficiaries</h3>
            <p>People impacted by our initiatives</p>
          </div>
          <div className="impact-item">
            <h3 className="text-2xl font-semibold">100+ Projects</h3>
            <p>Successfully completed initiatives</p>
          </div>
          <div className="impact-item">
            <h3 className="text-2xl font-semibold">20+ Partnerships</h3>
            <p>Active collaborations with organizations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
