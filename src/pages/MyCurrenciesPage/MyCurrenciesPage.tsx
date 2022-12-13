import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrensyItem } from '../../components/CurrensyItem';
import { SearchInput } from '../../components/SearchInput';
import { loadCurrencies } from '../../redux/reducers/currencies/actions';
import { Currencies, Store } from '../../types';
import classes from './MyCurrenciesPage.module.scss';

export const MyCurrenciesPage: React.FC = () => {
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

  const myCurrencies = filteredRates.filter((rate) => rate.checked);

  return (
    <section className={classes.myCurrencies}>
      <div className={classes.myCurrencies__wrapper}>
        <div className={classes.myCurrencies__header}>
          <h1 className={classes.myCurrencies__title}>My currencies</h1>
          <div className={classes.myCurrencies__inputGroup}>
            <SearchInput />
          </div>
        </div>
        {myCurrencies.map(({ currencyName, checked }) => (
          <CurrensyItem
            key={currencyName}
            name={currencyName}
            checked={checked}
          />
        ))}
      </div>
    </section>
  );
};
