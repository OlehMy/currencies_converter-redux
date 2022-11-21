import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { currenciesSearch } from '../../redux/reducers/currencies/actions';
import { Currencies, Store } from '../../redux/types';
import classes from './SearchInput.module.scss';

export const SearchInput: React.FC = () => {
  const dispath = useDispatch();
  const store = useSelector<Store, Currencies>((store) => store.currencies);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    const filteredRates = store.rates.filter(({ currencyName }) =>
      currencyName.toLowerCase().includes(search.toLowerCase())
    );

    dispath(currenciesSearch(filteredRates, search));
  };

  return (
    <div className={classes.input}>
      <input
        className={classes.input__body}
        type="text"
        id="dynamic-label-input"
        placeholder="Search by name"
        value={store.search}
        onChange={handleChange}
      />
      <label className={classes.input__label} htmlFor="dynamic-label-input">
        Search by name
      </label>
    </div>
  );
};
