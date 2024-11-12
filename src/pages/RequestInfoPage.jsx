import React from 'react';
import { Helmet } from 'react-helmet-async';

const RequestInfoPage = () => (
  <>
    <Helmet>
      <title>Request Information - Valor Career Website</title>
      <meta name="description" content="Request more information about our career programs and admissions process." />
      <meta property="og:title" content="Request Information - Valor Career Website" />
      <meta property="og:description" content="Request more information about our career programs and admissions process." />
      <meta property="og:image" content="URL_TO_REQUEST_INFO_PAGE_IMAGE" />
      <link rel="canonical" href="https://jdm297.github.io/valor-career-website/request-info" />
    </Helmet>

    <main id="content" className="p-8" role="main">
      <div className="page-content">
        <section className="text-center mb-8" role="region" aria-labelledby="request-info-section">
          <h1 id="request-info-section" className="text-4xl font-bold mb-4">Request Information</h1>
          <p className="text-lg mb-6">
            Request more information about our programs, admissions, financial aid, and more.
          </p>
          <p>Details about how to request more information...</p>
        </section>
      </div>
    </main>
  </>
);

export default RequestInfoPage;
