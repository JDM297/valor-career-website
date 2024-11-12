import React from 'react';
import { Helmet } from 'react-helmet-async';

const ScheduleTourPage = () => (
  <>
    <Helmet>
      <title>Schedule a Tour - Valor Career Website</title>
      <meta name="description" content="Schedule a visit to one of our Valor campuses to explore our facilities and meet our team." />
      <meta property="og:title" content="Schedule a Tour - Valor Career Website" />
      <meta property="og:description" content="Schedule a visit to one of our Valor campuses to explore our facilities and meet our team." />
      <meta property="og:image" content="URL_TO_SCHEDULE_TOUR_PAGE_IMAGE" />
      <link rel="canonical" href="https://jdm297.github.io/valor-career-website/schedule-tour" />
    </Helmet>
    
    <main id="content" className="p-8" role="main">
      <div className="page-content">
        <section className="text-center mb-8" role="region" aria-labelledby="schedule-tour-section">
          <h1 id="schedule-tour-section" className="text-4xl font-bold mb-4">Schedule a Tour</h1>
          <p className="text-lg mb-6">
            Schedule a tour of our campus to see our facilities and learn more about our programs.
          </p>
          <p>Details about how to schedule a tour...</p>
        </section>
      </div>
    </main>
  </>
);

export default ScheduleTourPage;
