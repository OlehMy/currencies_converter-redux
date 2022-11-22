import { all, spawn, StrictEffect } from 'redux-saga/effects';
import {
  currenciesSaga,
  currencyExchangeSaga,
  filterCurrenciesSaga,
} from './currencies';

export default function* rootSaga(): Generator<StrictEffect> {
  const sagas = [currenciesSaga, currencyExchangeSaga, filterCurrenciesSaga];

  yield all(sagas.map((saga) => spawn(saga)));
}
