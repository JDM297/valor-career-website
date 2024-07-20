import React from 'react';

const ProgramsPage = () => (
  <main id="content" className="p-8" role="main">
    <div className="page-content">
      <section className="text-center mb-8" role="region" aria-labelledby="programs-section">
        <h1 id="programs-section" className="text-4xl font-bold mb-4">Our Programs</h1>
        <p className="text-lg mb-6">
          Explore our comprehensive IT training programs designed to help you succeed in your tech career.
        </p>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
            <h3 className="text-xl font-bold mb-2">ITSA Program</h3>
            <p>Learn the essentials of IT security and administration.</p>
            <a href="/programs/itsa" className="text-blue-500 hover:underline" role="button">Learn More</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
            <h3 className="text-xl font-bold mb-2">Cyber Warrior Program</h3>
            <p>Gain in-demand cybersecurity skills and certifications.</p>
            <a href="/programs/cwp" className="text-blue-500 hover:underline" role="button">Learn More</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
            <h3 className="text-xl font-bold mb-2">Cyber Security Specialist</h3>
            <p>Protect networks and data with advanced security training.</p>
            <a href="/programs/css" className="text-blue-500 hover:underline" role="button">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default ProgramsPage;
