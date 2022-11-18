import React from 'react';
// import { CurrensyItem } from '../../components/CurrensyItem';
import { Loader } from '../../components/Loader';
import { SearchInput } from '../../components/SearchInput';
import classes from './MyCurrenciesPage.module.scss';

export const MyCurrenciesPage: React.FC = () => (
  <section className={classes.myCurrencies}>
    <div className={classes.myCurrencies__wrapper}>
      <div className={classes.myCurrencies__header}>
        <h1 className={classes.myCurrencies__title}>My currencies</h1>
        <div className={classes.myCurrencies__inputGroup}>
          <SearchInput />
        </div>
      </div>
      <Loader />
    </div>
  </section>
);
