import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import CareerEvaluationPage from './pages/CareerEvaluationPage';
import FinancialAidPage from './pages/FinancialAidPage';
import StudentPortalPage from './pages/StudentPortalPage';
import LocationsPage from './pages/LocationsPage';
import NewsPage from './pages/NewsPage';
import ProgramsPage from './pages/ProgramsPage';
import RequestInfoPage from './pages/RequestInfoPage';
import ScheduleTourPage from './pages/ScheduleTourPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/career-evaluation" element={<CareerEvaluationPage />} />
        <Route path="/financial-aid" element={<FinancialAidPage />} />
        <Route path="/student-portal" element={<StudentPortalPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/request-info" element={<RequestInfoPage />} />
        <Route path="/schedule-tour" element={<ScheduleTourPage />} />
        {/* Add any additional routes here */}
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
