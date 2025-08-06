import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CareerTracksPage from './pages/CareerTracksPage';
import EnrollmentPage from './pages/EnrollmentPage';
import MentorshipPage from './pages/MentorshipPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/career-tracks" element={<CareerTracksPage />} />
          <Route path="/enroll-now" element={<EnrollmentPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;