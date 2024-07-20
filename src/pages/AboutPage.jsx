import React from 'react';

const AboutPage = () => (
  <main id="content" className="p-8" role="main">
    <div className="page-content">

      {/* Introduction Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="about-intro-section">
        <h1 id="about-intro-section" className="text-4xl font-bold mb-4">Why Choose Valor Career?</h1>
        <p className="text-lg mb-6">
          At Valor Career, we are dedicated to providing comprehensive IT education and lifelong career support to help you succeed in the tech industry.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/get-started/free-career-evaluation" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" role="button">Free Career Evaluation</a>
          <a href="/get-started/request-information" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600" role="button">Request Information</a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="why-us-section">
        <h2 id="why-us-section" className="text-3xl font-bold mb-4">Why We Stand Out</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">In-Demand Certifications</h3>
            <p>Earn certifications from top organizations like Microsoft, CompTIA, Cisco, and more.</p>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Career Services</h3>
            <p>Get lifelong career support and job placement assistance to achieve your goals.</p>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">No Experience Needed</h3>
            <p>We start from the basics and provide comprehensive training for all levels.</p>
          </div>
        </div>
      </section>

      {/* Programs and Flexibility Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="programs-flexibility-section">
        <h2 id="programs-flexibility-section" className="text-3xl font-bold mb-4">Programs and Flexibility</h2>
        <p className="text-lg mb-4">
          Choose from a range of IT programs that fit your schedule, available both online and on-campus.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/programs" className="bg-gray-100 p-4 rounded shadow hover:shadow-lg" role="button">
            <h3 className="text-xl font-bold mb-2">Explore Programs</h3>
            <p>Find the right IT program for you.</p>
          </a>
          <a href="/get-started" className="bg-gray-100 p-4 rounded shadow hover:shadow-lg" role="button">
            <h3 className="text-xl font-bold mb-2">Flexible Schedules</h3>
            <p>Learn on your terms with our flexible options.</p>
          </a>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="success-stories-section">
        <h2 id="success-stories-section" className="text-3xl font-bold mb-4">Success Stories</h2>
        <p className="text-lg mb-4">
          Hear from our graduates who have successfully transitioned into rewarding IT careers.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
            <p>"Thanks to Valor Career, I landed my dream job in cybersecurity!" - Alex P.</p>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
            <p>"The career services team was instrumental in helping me secure a position in IT." - Jamie L.</p>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-md">
            <p>"I had no prior IT experience, but the training provided set me up for success." - Taylor W.</p>
          </div>
        </div>
      </section>

      {/* Military Support Section */}
      <section className="text-center mb-8" role="region" aria-labelledby="military-support-section">
        <h2 id="military-support-section" className="text-3xl font-bold mb-4">Support for Veterans</h2>
        <p className="text-lg mb-4">
          As a top Military Friendly School, we offer specialized programs to help veterans transition into IT careers.
        </p>
        <a href="/why-us/military-friendly" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" role="button">Learn More</a>
      </section>

    </div>
  </main>
);

export default AboutPage;
