import React from 'react';
import { useSelector } from 'react-redux';
import { CurrensyItem } from '../../components/CurrensyItem';
import { SearchInput } from '../../components/SearchInput';
import { Currencies, Store } from '../../types';
import classes from './MyCurrenciesPage.module.scss';

export const MyCurrenciesPage: React.FC = () => {
  const store = useSelector<Store, Currencies>((store) => store.currencies);

  const myCurrencies = store.filteredRates.filter((rate) => rate.checked);

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
