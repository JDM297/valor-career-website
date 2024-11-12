import React from 'react';
import { Helmet } from "react-helmet-async";

const AdmissionsPage = () => (
  <>
    <Helmet>
      <title>Admissions - Valor Career Website</title>
      <meta name="description" content="Find out how to apply to Valor Career programs and start your journey to a successful career." />
      <meta property="og:title" content="Admissions - Valor Career Website" />
      <meta property="og:description" content="Discover how to apply to Valor Career programs and take the first step in your career journey." />
      <meta property="og:image" content="URL_TO_ADMISSIONS_PAGE_IMAGE" />
      <link rel="canonical" href="https://jdm297.github.io/valor-career-website/admissions" />
    </Helmet>

    <main id="content" className="p-8" role="main">
      <div className="page-content">
        <section className="text-center mb-8" role="region" aria-labelledby="admissions-section">
          <h1 id="admissions-section" className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-lg mb-6">
            Begin your journey with Valor Career by learning more about our admissions process and requirements.
          </p>
          <p>Details about the admissions process...</p>
        </section>
      </div>
    </main>
  </>
);

export default AdmissionsPage;
