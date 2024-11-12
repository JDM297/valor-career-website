import React from 'react';
import { Helmet } from 'react-helmet-async';

const FinancialAidPage = () => (
  <>
    <Helmet>
      <title>Financial Aid - Valor Career Website</title>
      <meta name="description" content="Learn about financial aid options available for Valor Career students to help fund your education." />
      <meta property="og:title" content="Financial Aid - Valor Career Website" />
      <meta property="og:description" content="Discover financial aid options available to Valor students to support your education journey." />
      <meta property="og:image" content="URL_TO_FINANCIAL_AID_PAGE_IMAGE" />
      <link rel="canonical" href="https://jdm297.github.io/valor-career-website/financial-aid" />
    </Helmet>

    <main id="content" className="p-8" role="main">
      <div className="page-content">
        <section className="text-center mb-8" role="region" aria-labelledby="financial-aid-section">
          <h1 id="financial-aid-section" className="text-4xl font-bold mb-4">Financial Aid</h1>
          <p className="text-lg mb-6">
            Discover the financial aid options available to help you fund your education at Valor Career.
          </p>
          <p>Details about financial aid...</p>
        </section>
      </div>
    </main>
  </>
);

export default FinancialAidPage;
