import React from 'react';

const HomePage = () => (
  <main id="content" className="p-8" role="main">
    <div className="page-content">

      {/* Welcome Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="welcome-section">
        <h1 id="welcome-section" className="text-4xl font-bold mb-4">Welcome to Valor Career</h1>
        <p className="text-lg mb-6">
          Kickstart your IT career with our comprehensive training and unwavering support. Your success is our priority.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/get-started/free-career-evaluation" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" role="button">Free Career Evaluation</a>
          <a href="/get-started/request-information" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600" role="button">Request Information</a>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="why-us-section">
        <h2 id="why-us-section" className="text-3xl font-bold mb-4">Why Choose Valor Career?</h2>
        <p className="text-lg mb-4">We're more than just a school; we're your lifelong partner in IT career development.</p>
        <ul className="list-disc list-inside text-left mx-auto max-w-xl">
          <li className="mb-2">Industry-Recognized Certifications</li>
          <li className="mb-2">Personalized Career Services</li>
          <li className="mb-2">Flexible Learning Options</li>
          <li className="mb-2">No Prior IT Experience Needed</li>
        </ul>
        <a href="/why-us" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" role="button">Learn More</a>
      </section>

      {/* Programs Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="programs-section">
        <h2 id="programs-section" className="text-3xl font-bold mb-4">Our Programs</h2>
        <div className="flex justify-center space-x-4">
          <a href="/programs/itsa" className="bg-gray-100 p-4 rounded shadow hover:shadow-lg" role="button">
            <h3 className="text-xl font-bold mb-2">ITSA Program</h3>
            <p>Learn the essentials of IT security and administration.</p>
          </a>
          <a href="/programs/cwp" className="bg-gray-100 p-4 rounded shadow hover:shadow-lg" role="button">
            <h3 className="text-xl font-bold mb-2">Cyber Warrior Program</h3>
            <p>Gain in-demand cybersecurity skills and certifications.</p>
          </a>
          <a href="/programs/css" className="bg-gray-100 p-4 rounded shadow hover:shadow-lg" role="button">
            <h3 className="text-xl font-bold mb-2">Cyber Security Specialist</h3>
            <p>Protect networks and data with advanced security training.</p>
          </a>
        </div>
      </section>

      {/* Flexibility and Support Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="flexibility-support-section">
        <h2 id="flexibility-support-section" className="text-3xl font-bold mb-4">Flexibility and Support</h2>
        <p className="text-lg mb-4">Learn on your schedule with our day and night classes. Benefit from lifelong career support.</p>
        <div className="flex justify-center space-x-4">
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Flexible Schedules</h3>
            <p>Balance your studies with your personal commitments.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Lifetime Support</h3>
            <p>Access job placement and career counseling services whenever you need them.</p>
          </div>
        </div>
      </section>

    </div>
  </main>
);

export default HomePage;
