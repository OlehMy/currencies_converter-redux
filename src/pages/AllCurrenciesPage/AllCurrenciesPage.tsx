import React from 'react';
import { CurrensyItem } from '../../components/CurrensyItem';
import classes from './AllCurrenciesPage.module.scss';

export const AllCurrenciesPage: React.FC = () => (
  <section className={classes.allCurrencies}>
    <div className={classes.allCurrencies__wrapper}>
      <div className={classes.allCurrencies__header}>
        <h1 className={classes.allCurrencies__title}>All currencies</h1>
        <div className={classes.allCurrencies__inputGroup}>
          <input
            className={classes.allCurrencies__inputBody}
            type="text"
            name=""
            id="dynamic-label-input"
            placeholder="Search by name"
          />
          <label
            className={classes.allCurrencies__inputLabel}
            htmlFor="dynamic-label-input"
          >
            Search by name
          </label>
        </div>
      </div>
      <CurrensyItem />
      <CurrensyItem />
      <CurrensyItem />
      <CurrensyItem />
    </div>
  </section>
);
