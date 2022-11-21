import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrensyItem } from '../../components/CurrensyItem';
import { Loader } from '../../components/Loader';
import { SearchInput } from '../../components/SearchInput';
import { loadCurrencies } from '../../redux/reducers/currencies/actions';
import { Currencies, Store } from '../../redux/types';
import classes from './AllCurrenciesPage.module.scss';

export const AllCurrenciesPage: React.FC = () => {
  const dispath = useDispatch();
  const store = useSelector<Store, Currencies>((store) => store.currencies);
  console.log('store: ', store);

  useEffect(() => {
    dispath(loadCurrencies());
  }, []);

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
          store.filteredRates.map(({ currencyName, currencyRate }) => (
            <CurrensyItem
              key={currencyName}
              name={currencyName}
              rate={currencyRate}
            />
          ))
        )}
      </div>
    </section>
  );
};
