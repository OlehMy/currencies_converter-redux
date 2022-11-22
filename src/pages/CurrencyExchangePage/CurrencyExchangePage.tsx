import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrencyExchange } from '../../redux/reducers/currencies/actions';
import { Currencies, Store } from '../../redux/types';
import classes from './CurrencyExchangePage.module.scss';

export const CurrencyExchangePage: React.FC = () => {
  const [amount, setAmount] = useState('100');
  const dispath = useDispatch();
  const store = useSelector<Store, Currencies>((store) => store.currencies);
  const params = useParams();

  console.log('store.base1: ', store.base);
  useEffect(() => {
    const payload = {
      from: params.path,
      to: store.base,
      amount,
    };

    dispath(loadCurrencyExchange(payload));
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);

    console.log('store.base2: ', store.base);
    const payload = {
      from: params.path,
      to: store.base,
      amount,
    };

    dispath(loadCurrencyExchange(payload));

    // dispath({
    //   type: Actions.LOAD_CURRENCY_EXCHANGE,
    //   payload: {
    //     from: params.path,
    //     to: store.base,
    //     amount: event.target.value,
    //   },
    // });
  };

  console.log('er', store.exchangeResalt);

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
              value={store.exchangeResalt}
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
