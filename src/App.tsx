import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { AllCurrenciesPage } from './pages/AllCurrenciesPage';
import { CurrencyExchangePage } from './pages/CurrencyExchangePage';
import { MyCurrenciesPage } from './pages/MyCurrenciesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Store } from './types';
import classNames from 'classnames';

export const App: React.FC = () => {
  const { themeChecked } = useSelector((store: Store) => store.currencies);

  return (
    <div className={classNames('App', { App__nightTheme: themeChecked })}>
      <Header />
      <main className="App__main">
        <Routes>
          <Route path="/" element={<AllCurrenciesPage />} />
          <Route path="/my-currencies" element={<MyCurrenciesPage />} />
          <Route path="/:path" element={<CurrencyExchangePage />} />
          <Route
            path="/my-currencies/:path"
            element={<CurrencyExchangePage />}
          />
          <Route path="/all-currencies" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
