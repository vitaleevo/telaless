
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import Multimedia from './pages/Multimedia';
import AdminDashboard from './pages/AdminDashboard';
import Editor from './pages/Editor';
import Header from './components/Header';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/editor" element={<Editor />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
