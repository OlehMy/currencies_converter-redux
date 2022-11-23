import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrensyItem } from '../../components/CurrensyItem';
import { Loader } from '../../components/Loader';
import { SearchInput } from '../../components/SearchInput';
import { loadCurrencies } from '../../redux/reducers/currencies/actions';
import { Currencies, Store } from '../../types';
import classes from './AllCurrenciesPage.module.scss';

export const AllCurrenciesPage: React.FC = () => {
  const dispath = useDispatch();
  const store = useSelector<Store, Currencies>((store) => store.currencies);
  let filteredRates = store.filteredRates;

  useEffect(() => {
    dispath(loadCurrencies());
  }, []);

  if (localStorage.myCurrencies) {
    const myCurrencies = JSON.parse(localStorage.myCurrencies);

    filteredRates = store.filteredRates.map((rate) => {
      myCurrencies.includes(rate.currencyName) ? (rate.checked = true) : rate;

      return rate;
    });
  }

  return (
    <section className={classes.allCurrencies}>
      <div className={classes.allCurrencies__wrapper}>
        <div className={classes.allCurrencies__header}>
          <h1 className={classes.allCurrencies__title}>All currencies</h1>
          <div className={classes.allCurrencies__inputGroup}>
            <SearchInput />
          </div>
        </div>
        {store.loading ? (
          <Loader />
        ) : (
          filteredRates.map(({ currencyName, checked }) => (
            <CurrensyItem
              key={currencyName}
              name={currencyName}
              checked={checked}
            />
          ))
        )}
      </div>
    </section>
  );
};
