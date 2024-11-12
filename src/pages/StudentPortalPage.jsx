import React from 'react';
import { Helmet } from 'react-helmet-async';

const StudentPortalPage = () => (
  <>
  <Helmet>
    <title>Student Portal - Valor Career Website</title>
    <meta name="description" content="Access the Valor student portal to manage your courses and personal information." />
    <meta property="og:title" content="Student Portal - Valor Career Website" />
    <meta property="og:description" content="Access the Valor student portal to manage your courses and personal information." />
    <meta property="og:image" content="URL_TO_STUDENT_PORTAL_IMAGE" />
    <link rel="canonical" href="https://jdm297.github.io/valor-career-website/student-portal" />
  </Helmet>
  
  <main id="content" className="p-8" role="main">
    <div className="page-content">
      <section className="text-center mb-8" role="region" aria-labelledby="student-portal-section">
        <h1 id="student-portal-section" className="text-4xl font-bold mb-4">Student Portal</h1>
        <p className="text-lg mb-6">
          Access your courses, grades, and more through the Valor Career Student Portal.
        </p>
        <p>Details about the student portal...</p>
      </section>
    </div>
  </main>
  </>
);

export default StudentPortalPage;
