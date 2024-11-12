import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareerEvaluationPage = () => (
  <>
    <Helmet>
      <title>Career Evaluation - Valor Career Website</title>
      <meta name="description" content="Take our career evaluation to discover which programs at Valor best suit your goals." />
      <meta property="og:title" content="Career Evaluation - Valor Career Website" />
      <meta property="og:description" content="Use our career evaluation tool to find the best program for your career goals." />
      <meta property="og:image" content="URL_TO_CAREER_EVALUATION_PAGE_IMAGE" />
      <link rel="canonical" href="https://jdm297.github.io/valor-career-website/career-evaluation" />
    </Helmet>

    <main id="content" className="p-8" role="main">
      <div className="page-content">
        <section className="text-center mb-8" role="region" aria-labelledby="career-evaluation-section">
          <h1 id="career-evaluation-section" className="text-4xl font-bold mb-4">Free Career Evaluation</h1>
          <p className="text-lg mb-6">
            Take our free career evaluation to see how Valor Career can help you achieve your IT career goals.
          </p>
          <p>Details about the career evaluation process...</p>
        </section>
      </div>
    </main>
  </>
);

export default CareerEvaluationPage;
