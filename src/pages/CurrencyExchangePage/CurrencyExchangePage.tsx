import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrencyExchange } from '../../redux/reducers/currencies/actions';
import { Currencies, Store } from '../../types';
import classes from './CurrencyExchangePage.module.scss';

export const CurrencyExchangePage: React.FC = () => {
  const dispath = useDispatch();
  const store = useSelector<Store, Currencies>((store) => store.currencies);
  const params = useParams();
  const [amount, setAmount] = useState(store.amount);

  useEffect(() => {
    const payload = {
      from: store.base,
      to: params.path,
      amount,
    };

    dispath(loadCurrencyExchange(payload));
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);

    const payload = {
      from: store.base,
      to: params.path,
      amount: event.target.value,
    };

    dispath(loadCurrencyExchange(payload));
  };

  return (
    <section className={classes.currencyExchange}>
      <div className={classes.currencyExchange__wrapper}>
        <div className={classes.currencyExchange__header}>
          <h1 className={classes.currencyExchange__title}>{store.base}</h1>
        </div>
        <form className={classes.currencyExchange__form}>
          <div className={classes.currencyExchange__input}>
            <input
              className={classes.currencyExchange__inputBody}
              type="number"
              id="dynamic-label-input"
              placeholder={store.base}
              value={amount}
              onChange={handleChange}
            />
            <label
              className={classes.currencyExchange__label}
              htmlFor="dynamic-label-input"
            >
              {store.base}
            </label>
          </div>
          <div className={classes.currencyExchange__input}>
            <input
              className={classes.currencyExchange__inputBody}
              type="text"
              id="dynamic-label-input"
              placeholder={params.path}
              value={store.exchangeResalt.toFixed(2)}
              onChange={() => null}
            />
            <label
              className={classes.currencyExchange__label}
              htmlFor="dynamic-label-input"
            >
              {params.path}
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};
