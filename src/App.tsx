import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
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
          <Route
            path="currencies_converter-redux/my-currencies/:path"
            element={<CurrencyExchangePage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
