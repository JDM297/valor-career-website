import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import LocationsPage from './pages/LocationsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FinancialAidPage from './pages/FinancialAidPage';
import CareerEvaluationPage from './pages/CareerEvaluationPage';
import RequestInfoPage from './pages/RequestInfoPage';
import ScheduleTourPage from './pages/ScheduleTourPage';
import StudentPortalPage from './pages/StudentPortalPage';
import NewsPage from './pages/NewsPage';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/financial-aid" element={<FinancialAidPage />} />
      <Route path="/career-evaluation" element={<CareerEvaluationPage />} />
      <Route path="/request-info" element={<RequestInfoPage />} />
      <Route path="/schedule-tour" element={<ScheduleTourPage />} />
      <Route path="/student-portal" element={<StudentPortalPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
