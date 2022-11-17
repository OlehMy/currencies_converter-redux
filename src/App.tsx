import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { AllCurrenciesPage } from './pages/AllCurrenciesPage';
import { MyCurrenciesPage } from './pages/MyCurrenciesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Routes>
          <Route path="/" element={<AllCurrenciesPage />} />
          <Route path="my-currencies" element={<MyCurrenciesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="all-currencies" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};
