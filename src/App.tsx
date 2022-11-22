import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { AllCurrenciesPage } from './pages/AllCurrenciesPage';
import { CurrencyExchangePage } from './pages/CurrencyExchangePage';
import { MyCurrenciesPage } from './pages/MyCurrenciesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Routes>
          <Route
            path="currencies_converter-redux/"
            element={<AllCurrenciesPage />}
          />
          <Route
            path="currencies_converter-redux/my-currencies"
            element={<MyCurrenciesPage />}
          />
          <Route
            path="currencies_converter-redux/:path"
            element={<CurrencyExchangePage />}
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="currencies_converter-redux/all-currencies"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>
    </div>
  );
};
