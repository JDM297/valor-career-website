import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProgramsPage = () => (
  <>
    <Helmet>
      <title>Programs - Valor Career Website</title>
      <meta name="description" content="Explore a variety of career-focused programs offered by Valor." />
      <meta property="og:title" content="Programs - Valor Career Website" />
      <meta property="og:description" content="Explore a variety of career-focused programs offered by Valor." />
      <meta property="og:image" content="URL_TO_PROGRAMS_PAGE_IMAGE" />
      <link rel="canonical" href="https://jdm297.github.io/valor-career-website/programs" />
    </Helmet>
    
    <main id="content" className="p-8" role="main">
      <div className="page-content">
        <section className="text-center mb-8" role="region" aria-labelledby="programs-section">
          <h1 id="programs-section" className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg mb-6">
            Explore our comprehensive IT training programs designed to help you succeed in your tech career.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
              <h3 className="text-xl font-bold mb-2">Program 1</h3>
              <p>Insert Description here</p>
              <a href="/programs/itsa" className="text-blue-500 hover:underline" role="button">Learn More</a>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
              <h3 className="text-xl font-bold mb-2">Program 2</h3>
              <p>Insert description here</p>
              <a href="/programs/cwp" className="text-blue-500 hover:underline" role="button">Learn More</a>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg max-w-xs mb-4">
              <h3 className="text-xl font-bold mb-2">Program 3</h3>
              <p>Insert description here</p>
              <a href="/programs/css" className="text-blue-500 hover:underline" role="button">Learn More</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  </>
);

export default ProgramsPage;
