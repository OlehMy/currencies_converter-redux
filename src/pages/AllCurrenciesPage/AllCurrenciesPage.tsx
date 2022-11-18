import React from 'react';
import { CurrensyItem } from '../../components/CurrensyItem';
import { SearchInput } from '../../components/SearchInput';
import classes from './AllCurrenciesPage.module.scss';

export const AllCurrenciesPage: React.FC = () => (
  <section className={classes.allCurrencies}>
    <div className={classes.allCurrencies__wrapper}>
      <div className={classes.allCurrencies__header}>
        <h1 className={classes.allCurrencies__title}>All currencies</h1>
        <div className={classes.allCurrencies__inputGroup}>
          <SearchInput />
        </div>
      </div>
      <CurrensyItem />
      <CurrensyItem />
      <CurrensyItem />
      <CurrensyItem />
    </div>
  </section>
);
